/**
 * MVA (Merverdiavgift, Norwegian VAT number).
 *
 * The VAT number is the standard Norwegian organisation number
 * (Organisasjonsnummer) with 'MVA' as suffix.
 *
 * Source
 *		https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Norway-TIN.pdf
 *
 * PERSON/ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { weightedSum } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' ', 'NO');
}

const validator: StandardNumberUtils = {
	name: 'Norwegian VAT Number',
	localName: 'Merverdiavgift',
	abbreviation: 'MVA',

	
	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		return value;
	},

	format(input: string, includeCountryPrefix: boolean): string {
		const [value] = clean(input);

		return `NO ${strings.splitAt(value, 3, 6, 9).join(' ')}`;
	},

	validate(input: string): ValidateReturn {
		const [value, error] = clean(input);

		if (error) {
			return { isValid: false, error };
		}
		if (value.length !== 12) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!strings.isDigits(value.substring(0, 9))) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		const [front, end] = strings.splitAt(value, 9);
		if (end !== 'MVA') {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		const sum = weightedSum(front, {
			weights: [3, 2, 7, 6, 5, 4, 3, 2, 1],
			modulus: 11,
		});

		if (sum !== 0) {
			return { isValid: false, error: new exceptions.InvalidChecksum() };
		}

		return {
			isValid: true,
			compact: value,
			isIndividual: false,
			isCompany: true,
		};
	},
};

export default validator;

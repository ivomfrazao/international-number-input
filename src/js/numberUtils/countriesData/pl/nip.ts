/**
 * NIP (Numer Identyfikacji Podatkowej, Polish VAT number).
 *
 * The NIP (Numer Identyfikacji Podatkowej) number consists of 10 digit with
 * a straightforward weighted checksum.
 *
 * Source
 *	 https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Poland-TIN.pdf
 *
 * ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { weightedSum } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -', 'PL');
}

const validator: StandardNumberUtils = {
	name: 'Polish VAT Number',
	localName: 'Numer Identyfikacji Podatkowej',
	abbreviation: 'NIP',
	
	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		return value;
	},

	format(input: string, includeCountryPrefix: boolean): string {
		const [value] = clean(input);

		return value;
	},

	validate(input: string): ValidateReturn {
		const [value, error] = clean(input);

		if (error) {
			return { isValid: false, error };
		}
		if (value.length !== 10) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!strings.isDigits(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		const sum = weightedSum(value, {
			weights: [6, 5, 7, 2, 3, 4, 5, 6, 7, -1],
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

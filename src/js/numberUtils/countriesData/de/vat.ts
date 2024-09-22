/**
 * Ust ID Nr. (Umsatzsteuer Identifikationsnummer, German VAT number).
 *
 * The number is 10 digits long and uses the ISO 7064 Mod 11, 10 check digit
 * algorithm.
 *
 * ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { iso7064mod10x11validate } from '../../libraries/iso7064';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	const [value, err] = strings.cleanUnicode(input, ' -./,');
	if (err !== null) {
		return [value, err];
	}
	if (value.startsWith('DE')) {
		return [value.substring(2), null];
	}

	return [value, null];
}

const validator: StandardNumberUtils = {
	name: 'German VAT Number',
	localName: 'Umsatzsteuer Identifikationsnummer',
	abbreviation: 'USt ID Nr.',
	
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
		if (value.length !== 9) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!strings.isDigits(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		if (!iso7064mod10x11validate(value)) {
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

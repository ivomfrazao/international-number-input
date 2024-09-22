/**
 * NIFp (Numéro d'Identification Fiscale Permanent, Guinea tax number).
 * 
 * This number consists of 9 digits, usually separated into three groups using
 * hyphens to make it easier to read. The first eight digits are assigned in a
 * pseudorandom manner. The last digit is the check digit.
 * 
 * Source
 *	 https://dgi.gov.gn/wp-content/uploads/2022/09/N%C2%B0-12-Cahier-de-Charges-NIF-p.pdf

 * ENTITY/PERSON
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { luhnChecksumValidate } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
	name: "Numéro d'Identification Fiscale Permanent",
	localName: '',
	abbreviation: 'NIFP',

	
	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		return value;
	},

	format(input: string, includeCountryPrefix: boolean): string {
		const [value] = clean(input);

		return strings.splitAt(value, 3, 6).join('-');
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

		if (!luhnChecksumValidate(value)) {
			return { isValid: false, error: new exceptions.InvalidChecksum() };
		}

		return {
			isValid: true,
			compact: value,
			isIndividual: false,
			isCompany: false,
		};
	},
};

export default validator;

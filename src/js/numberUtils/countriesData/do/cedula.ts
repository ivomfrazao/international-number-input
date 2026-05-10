/**
 * Cedula (Dominican Republic national identification number).
 *
 * A cedula is is an 11-digit number issues by the Dominican Republic government
 * to citizens or residents for identification purposes.
 *
 * Source
 *
 * VAT PERSON
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { luhnChecksumValidate } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
	type: NumberType.NationalIdentificationNumber,
	name: 'Dominican Republic National Identification Number',
	localName: 'Cedula',
	
	maxLength: 11,
	minLength: 11,
	countryPrefix: 'DO',
	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		return value;
	},

	format(input: string, includeCountryPrefix: boolean): string {
		const [value] = clean(input);

		return strings.splitAt(value, 3, 10).join('-');
	},

	validate(input: string): ValidateReturn {
		const [value, error] = clean(input);

		if (error) {
			return { isValid: false, error };
		}
		if (value.length !== 11) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!strings.isDigits(value.substring(1))) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		if (!luhnChecksumValidate(value)) {
			return { isValid: false, error: new exceptions.InvalidChecksum() };
		}

		return {
			isValid: true,
			compact: value,
			isIndividual: true,
			isCompany: false,
		};
	},
};

export default validator;

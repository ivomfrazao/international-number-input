/**
 * PIB (Poreski Identifikacioni Broj, Serbian tax identification number).
 *
 * The Serbian tax identification number consists of 9 digits where the last
 * digit is a check digit.
 *
 * Source
 *		https://en.wikipedia.org/wiki/VAT_identification_number
 *
 * ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { mod11mod10Validate } from '../util/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -.', 'RS');
}

const validator: StandardNumberUtils = {
	name: 'Serbian Tax Identification Number',
	localName: 'Poreski Identifikacioni Broj',
	abbreviation: 'PIB',
	
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

		if (!mod11mod10Validate(value)) {
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

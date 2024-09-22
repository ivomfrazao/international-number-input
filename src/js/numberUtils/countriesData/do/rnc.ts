/**
 * RNC (Registro Nacional del Contribuyente, Dominican Republic tax number).
 *
 * The RNC is the Dominican Republic taxpayer registration number for
 * institutions. The number consists of 9 digits.
 *
 * Source
 *
 * TAX ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings, weightedSum } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
	name: 'Dominican Republic Tax Number',
	localName: 'Registro Nacional del Contribuyente',
	abbreviation: 'RNC',
	
	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		return value;
	},

	format(input: string, includeCountryPrefix: boolean): string {
		const [value] = clean(input);

		return strings.splitAt(value, 1, 3, -1).join('-');
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

		const [front, check] = strings.splitAt(value, 8);

		const sum = weightedSum(front, {
			weights: [7, 9, 8, 6, 5, 4, 3, 2],
			modulus: 11,
		});

		if (String(((10 - sum) % 9) + 1) !== check) {
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

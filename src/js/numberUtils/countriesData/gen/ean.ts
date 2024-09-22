/**
 * EAN (International Article Number).
 *
 * This handles numbers EAN-13, EAN-8, UPC (12-digit)
 * and GTIN (EAN-14) format.
 */

import * as exceptions from '../../../exceptions';
import * as strings from '../util/strings';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { weightedSum } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
	name: 'International Article Number',
	localName: 'International Article Number',
	abbreviation: 'EAN',
	
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
		if (![8, 12, 13, 14].includes(value.length)) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!strings.isDigits(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		const [front, check] = strings.splitAt(value, -1);
		const sum = weightedSum(front, {
			modulus: 10,
			weights: [3, 1],
			reverse: true,
		});

		if (String((10 - sum) % 10) !== check) {
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

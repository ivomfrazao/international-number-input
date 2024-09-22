/**
 * ALV nro (Arvonlisäveronumero, Finnish VAT number).
 *
 * The number is an 8-digit code with a weighted checksum.
 *
 * ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { weightedSum } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	const [value, err] = strings.cleanUnicode(input, ' ');
	if (err !== null) {
		return [value, err];
	}
	if (value.startsWith('FI')) {
		return [value.substring(2), null];
	}
	return [value, null];
}

const validator: StandardNumberUtils = {
	name: 'Finnish VAT Number',
	localName: 'Arvonlisäveronumero Mervärdesskattenummer',
	abbreviation: 'ALV nro',
	
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
		if (value.length !== 8) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!strings.isDigits(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		const sum = weightedSum(value, {
			modulus: 11,
			weights: [7, 9, 10, 5, 8, 4, 2, 1],
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

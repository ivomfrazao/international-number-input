/**
 * MOA (Thailand Memorandum of Association Number).
 *
 * Memorandum of Association Number (aka Company's Taxpayer Identification
 * Number) are numbers issued by the Department of Business Development.
 * The number consists of 13 digits of which the last is a check digit following
 * the same algorithm as in the Personal Identity Number (PIN). It uses a
 * different grouping format and always starts with zero to indicate that the
 * number issued by DBD.
 *
 * Source
 *	 https://www.dbd.go.th/download/pdf_kc/s09/busin_2542-48.pdf
 *
 * ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { weightedSum } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
	name: 'Thailand Memorandum of Association Number',
	localName: '',
	abbreviation: 'MOA',
	
	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		return value;
	},

	format(input: string, includeCountryPrefix: boolean): string {
		const [value] = clean(input);

		return strings.splitAt(value, 1, 3, 4, 7, 12).join('-');
	},

	validate(input: string): ValidateReturn {
		const [value, error] = clean(input);

		if (error) {
			return { isValid: false, error };
		}
		if (value.length !== 13) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!strings.isDigits(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		if (value[0] !== '0') {
			return { isValid: false, error: new exceptions.InvalidComponent() };
		}

		const [front, check] = strings.splitAt(value, 12);

		// same sum as IDNR
		const sum = weightedSum(front, {
			weights: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
			modulus: 11,
		});

		if (String((11 - sum) % 10) !== check) {
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

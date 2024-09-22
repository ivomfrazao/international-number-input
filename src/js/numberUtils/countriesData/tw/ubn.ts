/**
 * UBN (Unified Business Number, 統一編號, Taiwanese tax number).
 *
 * The Unified Business Number (UBN, 統一編號) is the number assigned to businesses
 * within Taiwan for tax (VAT) purposes. The number consists of 8 digits, the
 * last being a check digit.
 *
 * Source
 *		https://zh.wikipedia.org/wiki/統一編號
 *		https://findbiz.nat.gov.tw/fts/query/QueryBar/queryInit.do?request_locale=en
 *
 * ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
	name: 'Taiwanese Business Administration Number',
	localName: '',
	abbreviation: 'UBN',

	
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

		const weights = [1, 2, 1, 2, 1, 2, 4, 1];

		const digits = weights
			.map((w, idx) => String(parseInt(value[idx], 10) * w))
			.join('');
		const sum = digits
			.split('')
			.reduce((acc, d) => (acc + parseInt(d, 10)) % 10, 0);

		if (!(sum === 0 || (sum === 9 && value[6] === '7'))) {
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

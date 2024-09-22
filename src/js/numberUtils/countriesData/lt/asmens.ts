/**
 * Asmens kodas (Lithuanian, personal numbers).
 *
 * The Asmens kodas consists of 11 digits. The first digits denotes the gender
 * and birth century, the second through seventh denotes the birth date,
 * followed by a three-digit serial and a check digit.
 *
 * Source:
 *	 https://lt.wikipedia.org/wiki/Asmens_kodas
 *	 https://en.wikipedia.org/wiki/National_identification_number#Lithuania
 *
 * PERSON
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { ikCheck, ikCheckDate } from '../ee/ik';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -/');
}

const validator: StandardNumberUtils = {
	name: 'Lithuanian Personal Code',
	localName: 'Asmens Kodas',
	
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
		if (value.length !== 11) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!strings.isDigits(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		if (value[0] !== '9' && !ikCheckDate(value)) {
			return { isValid: false, error: new exceptions.InvalidComponent() };
		}
		if (!ikCheck(value)) {
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

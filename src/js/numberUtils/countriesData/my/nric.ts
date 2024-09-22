/**
 * NRIC No. (Malaysian National Registration Identity Card Number).
 *
 * The NRIC No. is the unique identifier for issued to Malaysian citizens and
 * permanent residents.
 *
 * The number consist of 12 digits in three sections. The first 6 digits
 * represent the birth date, followed by two digits represeting the birth
 * place and finally four digits. The gender of a person can be derived from
 * the last digit: odd numbers for males and even numbers for females.
 *
 * PERSON
 */

import * as exceptions from '../../../exceptions';
import { isValidDateCompactYYMMDD, strings } from '../util';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -*');
}

const UNASSIGNED = [
	'00',
	'17',
	'18',
	'19',
	'20',
	'69',
	'73',
	'80',
	'81',
	'94',
	'95',
	'96',
	'97',
];

const validator: StandardNumberUtils = {
	name: 'Malaysian National Registration Identity Card Number',
	localName: 'National Registration Identity Card Number',
	abbreviation: 'NRIC No.',
	
	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		return value;
	},

	format(input: string, includeCountryPrefix: boolean): string {
		const [value] = clean(input);

		return strings.splitAt(value, 6, 8).join('-');
	},

	validate(input: string): ValidateReturn {
		const [value, error] = clean(input);

		if (error) {
			return { isValid: false, error };
		}
		if (value.length !== 12) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!strings.isDigits(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		const [bdate, place] = strings.splitAt(value, 6, 8);

		if (!isValidDateCompactYYMMDD(bdate, true)) {
			return { isValid: false, error: new exceptions.InvalidComponent() };
		}
		if (UNASSIGNED.includes(place)) {
			return { isValid: false, error: new exceptions.InvalidComponent() };
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

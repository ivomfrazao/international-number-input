/**
 * Personnummer (Swedish personal identity number).
 *
 * The Swedish Personnummer is assigned at birth to all Swedish nationals and to
 * immigrants for tax and identification purposes. The number consists of 10 or
 * 12 digits and starts with the birth date, followed by a serial and a check
 * digit.
 *
 * Source:
 *		https://en.wikipedia.org/wiki/Personal_identity_number_(Sweden)
 *
 * PERSON
 */

import * as exceptions from '../../../exceptions';
import { isValidDateCompactYYYYMMDD, buildDate, strings } from '../util';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { luhnChecksumValidate } from '../../libraries/checksum';

const ONE_HUNDRED_YEARS_IN_MS = 100 * 365 * 24 * 60 * 60 * 1_000;

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	const [value, err] = strings.cleanUnicode(input, ' :');

	if (err) {
		return [value, err];
	}

	const [a, b, c] = strings.splitAt(value, -5, -4);

	return [`${a.replace(/[-+]/g, '')}${b}${c}`, null];
}

function formatImpl(input: string): string {
	const [value] = clean(input);

	let front,
		back,
		sep = '-';

	if (value.length === 12 || value.length === 13) {
		const [yyyy, mm, dd] = strings.splitAt(value, 0, 4, 6, 8);

		const d = buildDate(yyyy, mm, dd);
		if (d === null) {
			// bad date :(
			return value;
		}

		if (new Date().getTime() - d.getTime() > ONE_HUNDRED_YEARS_IN_MS) {
			sep = '+';
		}

		front = `${yyyy.substring(2)}${mm}${dd}`;

		back = value.substring(value.length - 4);
	} else if (value.length === 10) {
		front = value.substring(0, 6);
		back = value.substring(6);
	} else if (value.length === 11) {
		front = value.substring(0, 6);
		sep = value[6];
		back = value.substring(7);
	} else {
		return value;
	}

	return `${front}${sep}${back}`;
}

const validator: StandardNumberUtils = {
	name: 'Swedish Personal Identity Number',
	localName: 'Personnummer',
	
	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		return value;
	},

	format: formatImpl,

	validate(input: string): ValidateReturn {
		const [value, error] = clean(input);

		if (error) {
			return { isValid: false, error };
		}
		let a, b, c;
		if (value.length === 11) {
			[a, b, c] = strings.splitAt(value, -5, -4);
		} else if (value.length === 13) {
			[, a, b, c] = strings.splitAt(value, -11, -5, -4);
		} else {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!'-+'.includes(b)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}
		const digits = `${a}${c}`;
		if (!strings.isDigits(digits)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		let yyyymmdd;
		if (value.length === 13) {
			yyyymmdd = value.substring(0, 8);
		} else {
			const yymmdd = value.substring(0, 6);
			const year = new Date().getFullYear();
			let century = Math.floor(year / 100);

			if (parseInt(yymmdd.substring(0, 2), 10) > year % 100) {
				century -= 1;
			}
			if (b === '+') {
				century -= 1;
			}

			yyyymmdd = `${century}${yymmdd}`;
		}
		if (!isValidDateCompactYYYYMMDD(yyyymmdd, true)) {
			return { isValid: false, error: new exceptions.InvalidComponent() };
		}

		if (!luhnChecksumValidate(digits)) {
			return { isValid: false, error: new exceptions.InvalidChecksum() };
		}

		return {
			isValid: true,
			compact: formatImpl(input),
			isIndividual: true,
			isCompany: false,
		};
	},
};

export default validator;

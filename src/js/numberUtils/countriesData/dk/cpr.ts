/**
 * CPR (personnummer, the Danish citizen number).
 *
 * The CPR is the national number to identify Danish citizens and is stored in
 * the Det Centrale Personregister (Civil Registration System). The number
 * consists of 10 digits in the format DDMMYY-SSSS where the first part
 * represents the birth date and the second a sequence number. The first digit
 * of the sequence number indicates the century.
 *
 * The numbers used to validate using a checksum but since the sequence numbers
 * ran out this was abandoned in 2007. It is also not possible to use the
 * checksum only for numbers that have a birth date before that because the
 * numbers are also assigned to immigrants.
 *
 * More information:
 *
 * https://en.wikipedia.org/wiki/Personal_identification_number_(Denmark)
 * https://da.wikipedia.org/wiki/CPR-nummer
 * https://cpr.dk/
 */

import * as exceptions from '../../../exceptions';
import { isValidDate, buildDate, validBirthdate, strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';

export function getBirthDate(value: string): Date {
	const [dob] = strings.splitAt(value, 6);
	const [day, month, yearStr] = strings.splitAt(dob, 2, 4);

	let year = parseInt(yearStr);

	if ('5678'.includes(value[6]) && year >= 58) {
		year += 1800;
	} else if (
		'0123'.includes(value[6]) ||
		('49'.includes(value[6]) && year >= 37)
	) {
		year += 1900;
	} else {
		year += 2000;
	}

	const d = buildDate(String(year), month, day);

	if (d === null || !isValidDate(String(year), month, day)) {
		throw new exceptions.InvalidComponent(
			'The number does not contain valid birth date information.',
		);
	}

	return d;
}

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	const [value, err] = strings.cleanUnicode(input, ' -');
	if (err !== null) {
		return [value, err];
	}

	return [value, null];
}

const validator: StandardNumberUtils = {
	name: 'Danish Citizen Number',
	localName: 'Personnummer',
	abbreviation: 'CPR',
	
	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		return value;
	},

	format(input: string, includeCountryPrefix: boolean): string {
		const [value] = clean(input);

		return strings.splitAt(value, 6).join('-');
	},

	validate(input: string): ValidateReturn {
		const [value, error] = clean(input);

		if (error) {
			return { isValid: false, error };
		}
		if (!strings.isDigits(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}
		if (value.length !== 10) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}

		try {
			const date = getBirthDate(value);
			if (!validBirthdate(date)) {
				return {
					isValid: false,
					error: new exceptions.InvalidComponent(
						'The birth date information is valid, but this person has not been born yet.',
					),
				};
			}
		} catch (err) {
			if (err instanceof exceptions.ValidationError) {
				return {
					isValid: false,
					error: err,
				};
			}
			return {
				isValid: false,
				error: new exceptions.InvalidComponent(String(err)),
			};
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

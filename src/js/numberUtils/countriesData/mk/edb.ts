/**
 * ЕДБ (Едниствен Даночен Број, North Macedonia tax number).
 *
 * This number consists of 13 digits, sometimes with an additional "MK" prefix.
 *
 * Source
 *	 http://www.ujp.gov.mk/en
 *
 * ENTITY/PERSON
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { weightedSum } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	// ASCII and Cyrillic prefixes
	return strings.cleanUnicode(input, ' -', ['MK', 'МК']);
}

// const validRe = /^[PCGQV]{1}00[A-Z0-9]{8}$/;

// const ALPHABET = '0123456789X';

const validator: StandardNumberUtils = {
	name: 'NAME',
	localName: 'NAME',
	abbreviation: 'EDB',

	
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
		if (value.length !== 13) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}

		if (!strings.isDigits(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}
		// if (!validRe.test(value)) {
		//	 return { isValid: false, error: new exceptions.InvalidFormat() };
		// }

		const [front, check] = strings.splitAt(value, 12);

		const sum =
			(11 -
				weightedSum(front, {
					weights: [7, 6, 5, 4, 3, 2],
					modulus: 11,
				})) %
			11;

		if (String(sum % 10) !== check) {
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

/**
 * FPA, ΦΠΑ, ΑΦΜ (Αριθμός Φορολογικού Μητρώου, the Greek VAT number).
 *
 * The FPA is a 9-digit number with a simple checksum.
 *
 * ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	const [value, err] = strings.cleanUnicode(input, ' ');
	if (err !== null) {
		return [value, err];
	}
	let num = value;
	if (value.startsWith('GR') || value.startsWith('EL')) {
		num = value.substring(2);
	}

	// Old format was 8 digits
	if (num.length === 8) {
		return [`0${num}`, null];
	}
	return [num, null];
}

const validator: StandardNumberUtils = {
	name: 'Greek VAT Number',
	localName: 'Αριθμός Φορολογικού Μητρώου',
	abbreviation: 'ΑΦΜ',
	
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
		if (value.length !== 9) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!strings.isDigits(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		const [front, check] = strings.splitAt(value, -1);

		const sum = front
			.split('')
			.map(v => parseInt(v, 10))
			.reduce((acc, v) => acc * 2 + v, 0);

		if (String(((sum * 2) % 11) % 10) !== check) {
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

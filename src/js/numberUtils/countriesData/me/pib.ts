/**
 * PIB (Poreski Identifikacioni Broj, Montenegro tax number).
 *
 * This number consists of 8 digits.
 *
 * Source
 *	 http://www.pretraga.crps.me:8083/
 *	 https://www.vatify.eu/montenegro-vat-number.html
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
	name: 'Montenegro tax number',
	localName: 'Poreski Identifikacioni Broj',
	abbreviation: 'PIB',

	
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

		const [front, check] = strings.splitAt(value, 7);

		const sum = weightedSum(front, {
			weights: [8, 7, 6, 5, 4, 3, 2],
			modulus: 11,
		});

		if (String(((11 - sum) % 11) % 10) !== check) {
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

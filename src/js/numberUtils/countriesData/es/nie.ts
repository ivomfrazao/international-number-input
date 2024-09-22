/**
 * NIE (Número de Identificación de Extranjero, Spanish foreigner number).
 *
 * The NIE is an identification number for foreigners. It is a 9 digit number
 * where the first digit is either X, Y or Z and last digit is a checksum
 * letter.
 *
 * Sources:
 *		https://es.wikipedia.org/wiki/N%C3%BAmero_de_identidad_de_extranjero
 *
 * PERSON
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import * as dni from './dni';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';

const checkDigits = 'XYZ';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
	type: NumberType.NationalIdentificationNumber,
	name: 'Spanish Foreign Number',
	localName: 'Número de Identificación de Extranjero',
	abbreviation: 'NIE',
	placeholder: 'X-2482300-W',
	maxLength: 9,
	minLength: 9,
	countryPrefix: 'ES',

	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		if (includeCountryPrefix) {
			return this.countryPrefix + value;
		}
		else {
			return value;
		}
	},

	format(input: string, includeCountryPrefix: boolean): string {
		const [cleanValue] = clean(input);
		const value = strings.splitAt(cleanValue, 1, 8).join('-');

		if (includeCountryPrefix) {
			return this.countryPrefix + value;
		}
		else {
			return value;
		}
	},

	validate(input: string): ValidateReturn {
		const [value, error] = clean(input);

		if (error) {
			return { isValid: false, error };
		}
		if (value.length !== this.minLength) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}

		const [first, body, check] = strings.splitAt(value, 1, 8);

		if (
			!strings.isDigits(body) ||
			!checkDigits.includes(first) ||
			strings.isDigits(check)
		) {
			return { isValid: false, error: new exceptions.InvalidComponent() };
		}

		if (dni.calcCheckDigit(`${checkDigits.indexOf(first)}${body}`) !== check) {
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

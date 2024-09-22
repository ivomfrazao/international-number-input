/**
 * CIF (Código de Identificación Fiscal, Spanish company tax number).
 *
 * The CIF is a tax identification number for legal entities. It has 9 digits
 * where the first digit is a letter (denoting the type of entity) and the
 * last is a check digit (which may also be a letter).
 *
 * Sources:
 *   https://es.wikipedia.org/wiki/Código_de_identificación_fiscal
 *
 * TAX/ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { luhnChecksumDigit } from '../../libraries/checksum';

const entityTypes = 'ABCDEFGHJNPQRSUVW';
const letterCheckDigits = 'JABCDEFGHI';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
	type: NumberType.TaxpayerIdentificationNumber,
	name: 'Spanish Company Tax Number',
	localName: 'Código de Identificación Fiscal',
	abbreviation: 'CIF',
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
		if (value.length !== 9) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}

		const [first, body, check] = strings.splitAt(value, 1, 8);

		if (
			!strings.isDigits(body) ||
			!entityTypes.includes(first) ||
			!(strings.isDigits(check) || letterCheckDigits.includes(check))
		) {
			return { isValid: false, error: new exceptions.InvalidComponent() };
		}

		const cs = parseInt(luhnChecksumDigit(body), 10);
		// Two systems of check digits
		const possibleCheckDigits = letterCheckDigits[cs] + String(cs);

		if (!possibleCheckDigits.includes(check)) {
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

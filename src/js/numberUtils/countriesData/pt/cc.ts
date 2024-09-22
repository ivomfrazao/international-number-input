/**
 * CC (Número de Cartão de Cidadão, Portuguese Identity number).
 *
 * The Portuguese Identity Number is alphanumeric and consists of the numeric
 * Número de Identificação Civil, a two-letter version and a check digit.
 *
 * Source
 *	 https://pt.wikipedia.org/wiki/Cartão_de_cidadão
 *	 https://www.autenticacao.gov.pt/documents/20126/115760/Validação+de+Número+de+Documento+do+Cartão+de+Cidadão.pdf
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { luhnChecksumValidate } from '../../libraries/checksum';

const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const validRe = /^\d{9}[A-Z0-9]{2}\d$/i;

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' ');
}

const validator: StandardNumberUtils = {
	type: NumberType.NationalIdentificationNumber,
	name: 'Portuguese National Identification Number',
	localName: 'Número de Cartão de Cidadão',
	abbreviation: 'CC',
	placeholder: '12345678 9 ZZ0',
	maxLength: 12,
	minLength: 12,
	countryPrefix: 'PT',

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
		const value = strings.splitAt(cleanValue, 8, 9).join(' ');

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
		if (!validRe.test(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		if (!luhnChecksumValidate(value, ALPHABET)) {
			return { isValid: false, error: new exceptions.InvalidChecksum() };
		}

		return {
			isValid: true,
			compact: value,
			isIndividual: '1234'.includes(value[0]),
			isCompany: !'1234'.includes(value[0]),
		};
	},
};

export default validator;
/**
 * TVA (taxe sur la valeur ajoutée, Luxembourgian VAT number).
 *
 * The n° TVA (Numéro d'identification à la taxe sur la valeur ajoutée) is
 * used for tax purposes in Luxembourg. The number consists of 8 digits of
 * which the last two are check digits.
 *
 * Source
 *
 * ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' :-.', 'LU');
}

const validator: StandardNumberUtils = {
	name: 'Luxembourgian VAT Number',
	localName: "Numéro d'Identification à la Taxe sur la Valeur Ajoutée",
	abbreviation: 'n° TVA',
	
	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		return value;
	},

	format(input: string, includeCountryPrefix: boolean): string {
		const [value] = clean(input);

		return strings.splitAt(value, 3, 6).join(' ');
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

		const [front, check] = strings.splitAt(value, -2);

		if (parseInt(front, 10) % 89 !== parseInt(check, 10)) {
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

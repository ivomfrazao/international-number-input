/**
 *
 * Paraguay Identity Card numbers
 *
 * CI number (Cedula de la Identidad Civil).
 *
 * The Cedula de la Identidad (CI) is issued by the National Police and is compulsory for all citizens
 *
 * The CI number is 5-7 digits.
 *
 * Sources:
 *		 https://es.wikipedia.org/wiki/C%C3%A9dula_de_Identidad_(Paraguay)
 *
 * PERSON
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' .-');
}

const validator: StandardNumberUtils = {
	name: 'Paraguay CI Number',
	localName: 'Cedula de la Identidad civil',
	abbreviation: 'CI',
	
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

	/**
	 * Check if the number is a valid CI.
	 * This checks the length, formatting and other contraints.
	 *
	 */
	validate(input: string): ValidateReturn {
		const [value, error] = clean(input);

		if (error) {
			return { isValid: false, error };
		}
		if (value.length < 5 || value.length > 7) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!strings.isDigits(value)) {
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

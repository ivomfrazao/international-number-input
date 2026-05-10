/**
 * Y-tunnus (Finnish business identifier).
 *
 *	The number is an 8-digit code with a weighted checksum.
 *
 * ENTITY
 */

import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import alv from './alv';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
	type: NumberType.TaxpayerIdentificationNumber,
	name: 'Finnish Business Identifier',
	localName: 'Yritys- ja yhteisötunnus',
	abbreviation: 'Y-tunnus',
	
	maxLength: 9,
	minLength: 8,
	countryPrefix: 'FI',
	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		return value;
	},

	format(input: string, includeCountryPrefix: boolean): string {
		const [value] = clean(input);

		return strings.splitAt(value, -1).join('-');
	},

	validate(input: string): ValidateReturn {
		const [value, error] = clean(input);

		if (error) {
			return { isValid: false, error };
		}

		return alv.validate(value);
	},
};

export default validator;

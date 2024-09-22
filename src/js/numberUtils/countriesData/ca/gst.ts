/**
 * GST (Canadian Sales Tax Number)
 *
 * It is the BN in a extensive form.
 *	 9 digits - Business number to identify the business. It is the Bussines Number.
 *	 2 alpha - A reference number to identify each account a business may have within a program type.
 *	 4 digits - A reference number to identify each account a business may have within a program type.
 *
 * Source
 *	 https://wiki.scn.sap.com/wiki/display/CRM/Canada
 *	 https://www.canada.ca/en/revenue-agency/cra-canada.html
 *
 * ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { validate as bnValidate } from './bn';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -');
}

const validRe = /^\d{9}[A-Z]{2}\d{4}$/i;

// const ALPHABET = '0123456789X';

const validator: StandardNumberUtils = {
	name: 'Goods and service Tax Number',
	localName: 'Goods and service Tax Number',
	abbreviation: 'GST',

	
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
		if (value.length !== 15) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}

		if (!validRe.test(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		// The BN15 is the same as a GST
		return bnValidate(value);
	},
};

export default validator;

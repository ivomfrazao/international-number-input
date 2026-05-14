/**
 * TIN (Thailand Taxpayer Identification Number).
 *
 * The Taxpayer Identification Number is used for tax purposes in the Thailand.
 * This number consists of 13 digits which the last is a check digit.
 * Personal income taxpayers use Personal Identification Number (IDNR) while
 * companies use Memorandum of Association (MOA).
 *
 * Source
 *
 * ENTITY/PERSON
 */

import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import idnr from './idnr';
import moa from './moa';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
	type: NumberType.TaxpayerIdentificationNumber,
	name: 'Thailand Taxpayer Identification Number',
	localName: '',
	abbreviation: 'TIN',

	
	maxLength: 13,
	minLength: 13,
	countryPrefix: 'TH',
	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		return value;
	},

	format(input: string, includeCountryPrefix: boolean): string {
		if (idnr.validate(input).isValid) {
			return idnr.format(input, false);
		}
		return moa.format(input, false);
	},

	validate(input: string): ValidateReturn {
		const v1 = idnr.validate(input);
		if (v1.isValid) {
			return v1;
		}

		return moa.validate(input);
	},
};

export default validator;

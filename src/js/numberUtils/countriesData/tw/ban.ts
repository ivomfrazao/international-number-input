/**
 * BAN
 *
 * The BAN of a business entity is shown on the company registration certificate or
 * business registration certificate. For non-profit organizations, the BAN is shown
 * on the BAN-issuance notification.
 *
 * Sources:
 *	 https://www.mof.gov.tw/Eng/download/16968
 *
 * ENTITY
 */

import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';

function clean(input: string) {
	return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
	abbreviation: 'BAN',
	name: 'Taiwanese Unified Business Number',
	localName: '統一編號',

	
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

		return {
			isValid: true,
			compact: value,
			isIndividual: false,
			isCompany: true,
		};
	},
};

export default validator;

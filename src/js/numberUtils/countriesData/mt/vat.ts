/**
 * Maltese VAT Number
 *
 * https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Malta-TIN.pdf
 * https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/395616/ESL-Foreign-Language-Letter-Malta.pdf
 *
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { weightedSum } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -', 'MT');
}

const validator: StandardNumberUtils = {
	name: 'Maltese VAT Number',
	localName: 'Vat Reg. No.',
	abbreviation: 'Vat No.',
	
	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		return value;
	},

	format(input: string, includeCountryPrefix: boolean): string {
		const [value] = clean(input);

		return strings.splitAt(value, 4).join('-');
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

		const sum = weightedSum(value, {
			weights: [3, 4, 6, 7, 8, 9, 10, 1],
			modulus: 37,
		});
		if (sum !== 0) {
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

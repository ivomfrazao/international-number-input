/**
 * Company Number (מספר חברה, or short ח.פ. Israeli company number).
 *
 * It consists of nine digits and includes a check digit. For companies
 * the first digit is a 5. The first two digits identify the type of
 * company.
 *
 * Source
 *	 https://he.wikipedia.org/wiki/תאגיד#מספר_רישום_התאגיד
 *	 https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Israel-TIN.pdf
 *	 https://wiki.scn.sap.com/wiki/display/CRM/Israel
 *
 * Entity
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { luhnChecksumValidate } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
	name: 'Israeli Company Number',
	localName: 'מספר חברה',
	abbreviation: 'ח.פ.',
	
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
		if (value.length !== 9) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!strings.isDigits(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}
		if (value[0] !== '5') {
			return { isValid: false, error: new exceptions.InvalidComponent() };
		}

		if (!luhnChecksumValidate(value)) {
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

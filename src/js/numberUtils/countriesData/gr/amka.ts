/**
 * AMKA (Αριθμός Μητρώου Κοινωνικής Ασφάλισης, Greek social security number).
 *
 * The Αριθμός Μητρώου Κοινωνικής Ασφάλισης (AMKA or Arithmos Mitroou Koinonikis
 * Asfalisis) is the personal identifier that is used for social security
 * purposes in Greece. The number consists of 11 digits and includes the
 * person's date of birth and gender.
 *
 * Source
 *		https://www.amka.gr/tieinai_en.html
 *
 * PERSON
 */

import * as exceptions from '../../../exceptions';
import { isValidDate, strings } from '../util';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { luhnChecksumValidate } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
	name: 'Greek Social Security Number',
	localName: 'Αριθμός Μητρώου Κοινωνικής Ασφάλισης',
	abbreviation: 'AMKA',
	
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
		if (value.length !== 11) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!strings.isDigits(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		const [dd, mm, yy] = strings.splitAt(value, 2, 4, 6);

		if (!isValidDate(yy, mm, dd)) {
			return { isValid: false, error: new exceptions.InvalidComponent() };
		}
		if (!luhnChecksumValidate(value)) {
			return { isValid: false, error: new exceptions.InvalidChecksum() };
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

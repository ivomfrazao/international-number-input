/**
 * VAT (Moms, Mervärdesskatt, Swedish VAT number).
 *
 * The Momsregistreringsnummer is used for VAT (Moms, Mervärdesskatt) purposes
 * and consists of 12 digits of which the last two should be 01. The first 10
 * digits should have a valid Luhn checksum.
 *
 * ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';
import { luhnChecksumValidate } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -.', 'SE');
}

const validator: StandardNumberUtils = {
	name: 'Swedish VAT Number',
	localName: 'Momsregistreringsnummer',
	abbreviation: 'Momsnr.',
	
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
		if (value.length !== 12) {
			return { isValid: false, error: new exceptions.InvalidLength() };
		}
		if (!strings.isDigits(value)) {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		const [front, end] = strings.splitAt(value, -2);

		if (end !== '01') {
			return { isValid: false, error: new exceptions.InvalidFormat() };
		}

		if (!luhnChecksumValidate(front)) {
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

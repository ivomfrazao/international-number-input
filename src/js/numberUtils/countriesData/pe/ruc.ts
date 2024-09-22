/**
 * RUC (Registro Único de Contribuyentes, Peruvian company tax number).
 *
 * The RUC (Registro Único de Contribuyentes) is the tax number of Peru assigned
 * to legal and natural persons. The number consists of 11 digits, the first two
 * indicate the kind of number, for personal numbers it is followed by the DNI
 * and a check digit.
 *
 * Source
 *		http://www.sunat.gob.pe/legislacion/ruc/
 *		https://consultarelruc.pe/
 *
 * ENTITY TAX
 */

import * as exceptions from '../../../exceptions';
import { strings, weightedSum } from '../../libraries';
import { StandardNumberUtils, ValidateReturn, NumberType } from '../../../types';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
	return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
	name: 'Peruvian Company Tax Number',
	localName: 'Registro Único de Contribuyentes',
	abbreviation: 'RUC',

	
	compact(input: string, includeCountryPrefix: boolean): string {
		const [value, err] = clean(input);

		if (err) {
			throw err;
		}

		return value;
	},

	format(input: string, includeCountryPrefix: boolean): string {
		const [value] = clean(input);

		if (value.length === 9) {
			return strings.splitAt(value, 8).join('-');
		}
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
		if (!['10', '15', '16', '17', '20'].includes(value.substring(0, 2))) {
			return { isValid: false, error: new exceptions.InvalidComponent() };
		}

		const [front, check] = strings.splitAt(value, 10);
		const sum = weightedSum(front, {
			weights: [5, 4, 3, 2, 7, 6, 5, 4, 3, 2],
			modulus: 11,
		});

		if (String((11 - sum) % 10) !== check) {
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

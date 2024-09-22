/**
 *
 * UID (Umsatzsteuer-Identifikationsnummer, Austrian VAT number).
 *
 * The Austrian UID is a 9-digit number that starts with a U (optionally
 * preceded with AT). The last digit is a check digit.
 *
 * Sources:
 *	 https://www.ruc.com.py/
 *
 * ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import {
    StandardNumberUtils,
    ValidateReturn,
    NumberType,
} from '../../../types';
import { luhnChecksumValue } from '../util/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
    const [value, err] = strings.cleanUnicode(input, ' -./');

    if (err) {
        return [value, err];
    }
    if (value.startsWith('AT')) {
        return [value.substring(2), null];
    }

    return [value, null];
}

const validator: StandardNumberUtils = {
    name: 'Austrian VAT Number',
    localName: 'Umsatzsteuer-Identifikationsnummer',
    abbreviation: 'UID',

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
        if (!value.startsWith('U') || !strings.isDigits(value.substring(1))) {
            return { isValid: false, error: new exceptions.InvalidComponent() };
        }

        const [, front, check] = strings.splitAt(value, 1, 8);

        const digit = String((16 - luhnChecksumValue(front)) % 10);

        if (check !== digit) {
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

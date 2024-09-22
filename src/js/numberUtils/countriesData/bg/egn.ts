/**
 * EGN (ЕГН, Единен граждански номер, Bulgarian personal identity codes).
 *
 * It is a 10-digit number of which the first 6 digits denote the person's
 * birth date, the next three digits represent a birth order number from
 * which the person's gender can be determined and the last digit is a check
 * digit.
 *
 * PERSON
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import {
    StandardNumberUtils,
    ValidateReturn,
    NumberType,
} from '../../../types';
import { weightedSum } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
    return strings.cleanUnicode(input, ' -.');
}

const validator: StandardNumberUtils = {
    name: 'Bulgarian Personal Identity Codes',
    localName: 'Единен граждански номер',
    abbreviation: 'ЕГН (EGN)',

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
        if (value.length !== 10) {
            return { isValid: false, error: new exceptions.InvalidLength() };
        }
        if (!strings.isDigits(value)) {
            return { isValid: false, error: new exceptions.InvalidFormat() };
        }

        const [front, check] = strings.splitAt(value, -1);

        const sum = weightedSum(front, {
            modulus: 11,
            weights: [2, 4, 8, 5, 10, 9, 7, 3, 6],
        });

        if (String(sum % 10) !== check) {
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

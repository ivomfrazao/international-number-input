/**
 * PNF (ЛНЧ, Личен номер на чужденец, Bulgarian number of a foreigner).
 *
 * The personal number of a foreigner is a 10-digit number where the last digit
 * is the result of a weighted checksum.
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
    name: 'Bulgarian Number of a Foreigner',
    localName: 'Личен номер на чужденец',
    abbreviation: 'PNF (ЛНЧ)',

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
            weights: [21, 19, 17, 13, 11, 9, 7, 3, 1],
            modulus: 10,
        });

        if (String(sum) !== check) {
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

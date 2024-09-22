/**
 * ABN (Australian Business Number).
 *
 * The Australian Business Number (ABN) is an identifier issued to entities
 * registered in the Australian Business Register (ABR). The number consists of
 * 11 digits of which the first two are check digits.
 *
 * Source
 *	 https://en.wikipedia.org/wiki/Australian_Business_Number
 *	 https://abr.business.gov.au/
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
import { weightedSum } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
    return strings.cleanUnicode(input, ' ');
}

const validator: StandardNumberUtils = {
    name: 'Australian Business Number',
    localName: 'Business Number',
    abbreviation: 'ABN',

    compact(input: string, includeCountryPrefix: boolean): string {
        const [value, err] = clean(input);

        if (err) {
            throw err;
        }

        return value;
    },

    format(input: string, includeCountryPrefix: boolean): string {
        const [value] = clean(input);

        return strings.splitAt(value, 2, 5, 8).join(' ');
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

        const [check, rest] = strings.splitAt(value, 2);

        const sum = weightedSum(rest, {
            weights: [3, 5, 7, 9, 11, 13, 15, 17, 19],
            modulus: 89,
        });

        if (check !== String(11 + ((177 - sum) % 89))) {
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

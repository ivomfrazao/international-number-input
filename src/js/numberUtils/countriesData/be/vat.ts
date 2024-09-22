/**
 * BTW, TVA, NWSt, ondernemingsnummer (Belgian enterprise number).
 *
 * The enterprise number (ondernemingsnummer) is a unique identifier of
 * companies within the Belgian administrative services. It was previously
 * the VAT ID number. The number consists of 10 digits.
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

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
    // eslint-disable-next-line prefer-const
    let [value, err] = strings.cleanUnicode(input, ' -.');

    if (err !== null) {
        return [value, err];
    }
    if (value.startsWith('BE')) {
        value = value.substring(2);
    }
    if (value.startsWith('(0)')) {
        value = `0${value.substring(3)}`;
    }
    if (value.length === 9) {
        value = `0${value}`;
    }

    return [value, null];
}

const validator: StandardNumberUtils = {
    name: 'Belgian VAT Number',
    localName: 'Ondernemingsnummer',
    abbreviation: 'BTW, NWSt',

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

        const [front, sum] = strings.splitAt(value, -2);

        if (97 - (parseInt(front, 10) % 97) !== parseInt(sum, 10)) {
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

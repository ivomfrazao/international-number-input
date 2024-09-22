/**
 * TIN (Belize Tax ID)
 *
 * Source
 *		https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Belize-TIN.pdf
 *
 * PERSON/ENTITY
 */

import * as exceptions from '../../../exceptions';
import { strings } from '../../libraries';
import {
    StandardNumberUtils,
    ValidateReturn,
    NumberType,
} from '../../../types';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
    return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
    name: 'Belize Tax Identification Number',
    localName: 'Tax Identification Number',
    abbreviation: 'TIN',

    compact(input: string, includeCountryPrefix: boolean): string {
        const [value, err] = clean(input);

        if (err) {
            throw err;
        }

        return value;
    },

    format(input: string, includeCountryPrefix: boolean): string {
        const [value] = clean(input);

        return strings.splitAt(value, 6).join('-');
    },

    validate(input: string): ValidateReturn {
        const [value, error] = clean(input);

        if (error) {
            return { isValid: false, error };
        }
        if (value.length !== 6 && value.length !== 8) {
            return { isValid: false, error: new exceptions.InvalidLength() };
        }
        if (!strings.isDigits(value)) {
            return { isValid: false, error: new exceptions.InvalidFormat() };
        }
        const [, code] = strings.splitAt(value, 6);

        if (code && !['10', '13', '66'].includes(code)) {
            return { isValid: false, error: new exceptions.InvalidComponent() };
        }

        return {
            isValid: true,
            compact: value,
            isIndividual: code === '10',
            isCompany: code === '13' || code === '66',
        };
    },
};

export default validator;

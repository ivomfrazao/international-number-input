/**
 * JMBG (Bosnia and Herzegovina Unique Master Citizen Number).
 *
 * Source
 *		https://en.wikipedia.org/wiki/Unique_Master_Citizen_Number#
 *
 * PERSON
 */

import * as exceptions from '../../../exceptions';
import { isValidDate, strings } from '../util';
import {
    StandardNumberUtils,
    ValidateReturn,
    NumberType,
} from '../../../types';
import { weightedSum } from '../../libraries/checksum';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
    return strings.cleanUnicode(input, ' -');
}

const validator: StandardNumberUtils = {
    name: 'Bosnia Unique Master Citizen Number',
    localName: 'Jedinstveni matični broj građana',
    abbreviation: 'JMBG',

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
        if (value.length !== 13) {
            return { isValid: false, error: new exceptions.InvalidLength() };
        }
        if (!strings.isDigits(value)) {
            return { isValid: false, error: new exceptions.InvalidFormat() };
        }

        // Question the format starts with this according to SI/EMSO
        //	-- DDMMYYY (year < 800 ? year+=2000 : year+=1000)
        // Is this universal?
        const [dd, mm, yyy] = strings.splitAt(value, 2, 4, 7);
        const yyyy = `${parseInt(yyy, 10) < 800 ? '2' : '1'}${yyy}`;

        if (!isValidDate(yyyy, mm, dd, true)) {
            return { isValid: false, error: new exceptions.InvalidComponent() };
        }

        const [front, check] = strings.splitAt(value, 12);

        const sum =
            11 -
            weightedSum(front, {
                modulus: 11,
                weights: [7, 6, 5, 4, 3, 2, 7, 6, 5, 4, 3, 2],
            });

        if (String((sum % 11) % 10) !== check) {
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

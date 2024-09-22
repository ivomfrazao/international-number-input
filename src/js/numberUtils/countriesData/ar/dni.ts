/**
 *
 * DNI (Documento Nacional de Identidad, Argentinian national identity nr.).
 *
 * The DNI number is the number that appears on the Argentinian national
 * identity document and is used to identify citizen and foreigners residing in
 * the country.
 *
 * Sources:
 *	 https://en.wikipedia.org/wiki/Documento_Nacional_de_Identidad_(Argentina)
 *
 *	PERSON
 */

import * as exceptions from '../../../exceptions';
import {
    StandardNumberUtils,
    ValidateReturn,
    NumberType,
} from '../../../types';
import { strings } from '../../libraries';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
    return strings.cleanUnicode(input, ' .');
}

const validator: StandardNumberUtils = {
    name: 'Argentinian National Identity Document',
    localName: 'Documento Nacional de Identidad',
    abbreviation: 'DNI',

    compact(input: string, includeCountryPrefix: boolean): string {
        const [value, err] = clean(input);

        if (err) {
            throw err;
        }

        return value;
    },

    format(input: string, includeCountryPrefix: boolean): string {
        const [value] = clean(input);

        return strings
            .splitAt(value, value.length - 6, value.length - 3)
            .join('.');
    },

    /**
     * Check if the number is a valid DNI number.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input: string): ValidateReturn {
        const [value, error] = clean(input);

        if (error) {
            return { isValid: false, error };
        }
        if (value.length !== 7 && value.length !== 8) {
            return { isValid: false, error: new exceptions.InvalidLength() };
        }
        if (!strings.isDigits(value)) {
            return { isValid: false, error: new exceptions.InvalidComponent() };
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

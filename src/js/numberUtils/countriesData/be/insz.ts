/**
 * The Belgian Social Security Identification Number is an 11 digit number.
 * It can be either a National Register Number (NN, NISS) or BIS.
 *
 * Sources
 *	https://fr.wikipedia.org/wiki/Numéro_de_registre_national
 *	https://www2.deloitte.com/content/dam/Deloitte/be/Documents/tax/TaxAlerts/IndividualTaxAlerts/Social%20Security%20alert%20-%20BelgianIDpro%20-%2026%20Nov%202020.pdf
 *
 * PERSON
 */

import { strings } from '../../libraries';
import nn from './nn';
import bis from './bis';
import {
    StandardNumberUtils,
    ValidateReturn,
    NumberType,
} from '../../../types';

function clean(input: string): ReturnType<typeof strings.cleanUnicode> {
    return strings.cleanUnicode(input, ' -.');
}

const validator: StandardNumberUtils = {
    type: NumberType.SocialSecurityIdentificationNumber,
    name: 'Belgian Social Security Identification Number',
    localName: 'Identificatienummer van de Sociale Zekerheid',
    abbreviation: 'INSZ, NISS',

    maxLength: 11,
    minLength: 11,
    countryPrefix: 'BE',
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
        const results = [nn.validate(input), bis.validate(input)];
        const validResult = results.find(r => r.isValid);
        if (validResult) return validResult;

        // The only case with two different error types is an invalid checksum and an
        // invalid format. The identifier with the checksum error had correct
        // formatting, so invalid checksum seems like the more descriptive error.

        const checksumErrorResult = results.find(
            r => r.error && r.error.name === 'InvalidChecksum',
        );
        return checksumErrorResult || results[0];
    },
};

export default validator;

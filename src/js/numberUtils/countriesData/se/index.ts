import { CountryStandardNumberUtils } from '../../../types';
import orgnr from './orgnr';
import personnummer from './personnummer';
import vat from './vat';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "SE",
	numberUtils: [
		orgnr,
		personnummer,
		vat
	]
}

export default countryNumberUtils;

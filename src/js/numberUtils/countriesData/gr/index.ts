import { CountryStandardNumberUtils } from '../../../types';
import amka from './amka';
import vat from './vat';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "GR",
	numberUtils: [
		amka,
		vat
	]
}

export default countryNumberUtils;

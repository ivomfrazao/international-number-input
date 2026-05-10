import { CountryStandardNumberUtils } from '../../../types';
import pps from './pps';
import vat from './vat';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "IE",
	numberUtils: [
		pps,
		vat
	]
}

export default countryNumberUtils;

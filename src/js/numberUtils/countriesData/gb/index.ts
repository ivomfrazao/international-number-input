import { CountryStandardNumberUtils } from '../../../types';
import nino from './nino';
import utr from './utr';
import vat from './vat';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "GB",
	numberUtils: [
		nino,
		utr,
		vat
	]
}

export default countryNumberUtils;

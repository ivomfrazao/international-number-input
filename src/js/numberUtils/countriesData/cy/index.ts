import { CountryStandardNumberUtils } from '../../../types';
import vat from './vat';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "CY",
	numberUtils: [
		vat
	]
}

export default countryNumberUtils;

import { CountryStandardNumberUtils } from '../../../types';
import vat from './vat';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "MT",
	numberUtils: [
		vat
	]
}

export default countryNumberUtils;

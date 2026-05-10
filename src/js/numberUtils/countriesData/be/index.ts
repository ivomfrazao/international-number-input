import { CountryStandardNumberUtils } from '../../../types';
import bis from './bis';
import insz from './insz';
import nn from './nn';
import vat from './vat';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "BE",
	numberUtils: [
		bis,
		insz,
		nn,
		vat
	]
}

export default countryNumberUtils;

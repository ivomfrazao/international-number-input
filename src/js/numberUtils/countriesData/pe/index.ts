import { CountryStandardNumberUtils } from '../../../types';
import ce from './ce';
import cui from './cui';
import ruc from './ruc';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "PE",
	numberUtils: [
		ce,
		cui,
		ruc
	]
}

export default countryNumberUtils;

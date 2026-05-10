import { CountryStandardNumberUtils } from '../../../types';
import cui from './cui';
import nit from './nit';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "GT",
	numberUtils: [
		cui,
		nit
	]
}

export default countryNumberUtils;

import { CountryStandardNumberUtils } from '../../../types';
import hp from './hp';
import idnr from './idnr';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "IL",
	numberUtils: [
		hp,
		idnr
	]
}

export default countryNumberUtils;

import { CountryStandardNumberUtils } from '../../../types';
import clabe from './clabe';
import curp from './curp';
import rfc from './rfc';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "MX",
	numberUtils: [
		clabe,
		curp,
		rfc
	]
}

export default countryNumberUtils;

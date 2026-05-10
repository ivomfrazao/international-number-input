import { CountryStandardNumberUtils } from '../../../types';
import idnr from './idnr';
import tin from './tin';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "ZA",
	numberUtils: [
		idnr,
		tin
	]
}

export default countryNumberUtils;

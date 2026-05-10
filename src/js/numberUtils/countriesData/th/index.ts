import { CountryStandardNumberUtils } from '../../../types';
import idnr from './idnr';
import moa from './moa';
import tin from './tin';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "TH",
	numberUtils: [
		idnr,
		moa,
		tin
	]
}

export default countryNumberUtils;

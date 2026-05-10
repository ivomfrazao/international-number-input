import { CountryStandardNumberUtils } from '../../../types';
import brn from './brn';
import rrn from './rrn';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "KR",
	numberUtils: [
		brn,
		rrn
	]
}

export default countryNumberUtils;

import { CountryStandardNumberUtils } from '../../../types';
import ric from './ric';
import uscc from './uscc';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "CN",
	numberUtils: [
		ric,
		uscc
	]
}

export default countryNumberUtils;

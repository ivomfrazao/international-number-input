import { CountryStandardNumberUtils } from '../../../types';
import ci from './ci';
import ruc from './ruc';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "EC",
	numberUtils: [
		ci,
		ruc
	]
}

export default countryNumberUtils;

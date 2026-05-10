import { CountryStandardNumberUtils } from '../../../types';
import dic from './dic';
import rc from './rc';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "CZ",
	numberUtils: [
		dic,
		rc
	]
}

export default countryNumberUtils;

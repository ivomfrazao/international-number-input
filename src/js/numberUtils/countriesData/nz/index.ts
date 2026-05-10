import { CountryStandardNumberUtils } from '../../../types';
import bank from './bank';
import ird from './ird';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "NZ",
	numberUtils: [
		bank,
		ird
	]
}

export default countryNumberUtils;

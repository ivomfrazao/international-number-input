import { CountryStandardNumberUtils } from '../../../types';
import ik from './ik';
import kmkr from './kmkr';
import registrikood from './registrikood';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "EE",
	numberUtils: [
		ik,
		kmkr,
		registrikood
	]
}

export default countryNumberUtils;

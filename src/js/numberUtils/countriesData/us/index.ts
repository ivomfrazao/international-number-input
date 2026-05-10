import { CountryStandardNumberUtils } from '../../../types';
import ein from './ein';
import ssn from './ssn';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "US",
	numberUtils: [
		ein,
		ssn
	]
}

export default countryNumberUtils;

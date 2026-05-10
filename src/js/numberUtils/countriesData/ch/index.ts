import { CountryStandardNumberUtils } from '../../../types';
import ssn from './ssn';
import uid from './uid';
import vat from './vat';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "CH",
	numberUtils: [
		ssn,
		uid,
		vat
	]
}

export default countryNumberUtils;

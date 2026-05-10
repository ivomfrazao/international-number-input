import { CountryStandardNumberUtils } from '../../../types';
import cnic from './cnic';
import ntn from './ntn';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "PK",
	numberUtils: [
		cnic,
		ntn
	]
}

export default countryNumberUtils;

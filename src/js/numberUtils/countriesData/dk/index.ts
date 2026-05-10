import { CountryStandardNumberUtils } from '../../../types';
import cpr from './cpr';
import cvr from './cvr';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "DK",
	numberUtils: [
		cpr,
		cvr
	]
}

export default countryNumberUtils;

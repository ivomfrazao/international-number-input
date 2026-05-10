import { CountryStandardNumberUtils } from '../../../types';
import dph from './dph';
import rc from './rc';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "SK",
	numberUtils: [
		dph,
		rc
	]
}

export default countryNumberUtils;

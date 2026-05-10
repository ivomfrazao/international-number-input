import { CountryStandardNumberUtils } from '../../../types';
import ice from './ice';
import ice9 from './ice9';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "MA",
	numberUtils: [
		ice,
		ice9
	]
}

export default countryNumberUtils;

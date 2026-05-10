import { CountryStandardNumberUtils } from '../../../types';
import pin from './pin';
import tin from './tin';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "AZ",
	numberUtils: [
		pin,
		tin
	]
}

export default countryNumberUtils;

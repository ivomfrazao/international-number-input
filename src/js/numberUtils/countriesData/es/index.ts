import { CountryStandardNumberUtils } from '../../../types';
import nin from './dni'
import tin from './nif'

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "ES",
	numberUtils: [
		nin,
		tin
	]
}

export default countryNumberUtils;
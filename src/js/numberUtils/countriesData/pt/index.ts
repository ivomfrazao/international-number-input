import { CountryStandardNumberUtils } from '../../../types';
import nin from './cc'
import tin from './nif'

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "PT",
	numberUtils: [
		nin,
		tin
	]
}

export default countryNumberUtils;
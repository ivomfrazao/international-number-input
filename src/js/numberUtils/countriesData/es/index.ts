import { CountryStandardNumberUtils } from '../../../types';
import nin from './dni'
import tin from './nif'

const validator: CountryStandardNumberUtils = {
	iso2: "ES",
	numberUtils: [
		nin,
		tin
	]
}

export default validator;
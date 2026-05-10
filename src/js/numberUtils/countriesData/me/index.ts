import { CountryStandardNumberUtils } from '../../../types';
import jmbg from './jmbg';
import pib from './pib';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "ME",
	numberUtils: [
		jmbg,
		pib
	]
}

export default countryNumberUtils;

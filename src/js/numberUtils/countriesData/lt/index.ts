import { CountryStandardNumberUtils } from '../../../types';
import asmens from './asmens';
import pvm from './pvm';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "LT",
	numberUtils: [
		asmens,
		pvm
	]
}

export default countryNumberUtils;

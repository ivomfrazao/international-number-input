import { CountryStandardNumberUtils } from '../../../types';
import cbu from './cbu';
import cuit from './cuit';
import dni from './dni';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "AR",
	numberUtils: [
		cbu,
		cuit,
		dni
	]
}

export default countryNumberUtils;

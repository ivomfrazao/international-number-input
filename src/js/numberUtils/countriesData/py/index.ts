import { CountryStandardNumberUtils } from '../../../types';
import cedula from './cedula';
import ruc from './ruc';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "PY",
	numberUtils: [
		cedula,
		ruc
	]
}

export default countryNumberUtils;

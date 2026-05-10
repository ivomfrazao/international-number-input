import { CountryStandardNumberUtils } from '../../../types';
import ddv from './ddv';
import emso from './emso';
import jmbg from './jmbg';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "SI",
	numberUtils: [
		ddv,
		emso,
		jmbg
	]
}

export default countryNumberUtils;

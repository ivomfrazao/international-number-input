import { CountryStandardNumberUtils } from '../../../types';
import edb from './edb';
import jmbg from './jmbg';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "MK",
	numberUtils: [
		edb,
		jmbg
	]
}

export default countryNumberUtils;

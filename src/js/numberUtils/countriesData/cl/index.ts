import { CountryStandardNumberUtils } from '../../../types';
import run from './run';
import rut from './rut';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "CL",
	numberUtils: [
		run,
		rut
	]
}

export default countryNumberUtils;

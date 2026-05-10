import { CountryStandardNumberUtils } from '../../../types';
import cedula from './cedula';
import nie from './nie';
import rut from './rut';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "UY",
	numberUtils: [
		cedula,
		nie,
		rut
	]
}

export default countryNumberUtils;

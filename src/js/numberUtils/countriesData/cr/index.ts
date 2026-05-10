import { CountryStandardNumberUtils } from '../../../types';
import cpf from './cpf';
import cpj from './cpj';
import cr from './cr';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "CR",
	numberUtils: [
		cpf,
		cpj,
		cr
	]
}

export default countryNumberUtils;

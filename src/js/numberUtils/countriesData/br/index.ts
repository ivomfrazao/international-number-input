import { CountryStandardNumberUtils } from '../../../types';
import cnpj from './cnpj';
import cpf from './cpf';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "BR",
	numberUtils: [
		cnpj,
		cpf
	]
}

export default countryNumberUtils;

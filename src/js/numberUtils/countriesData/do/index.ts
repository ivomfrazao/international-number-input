import { CountryStandardNumberUtils } from '../../../types';
import cedula from './cedula';
import ncf from './ncf';
import rnc from './rnc';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "DO",
	numberUtils: [
		cedula,
		ncf,
		rnc
	]
}

export default countryNumberUtils;

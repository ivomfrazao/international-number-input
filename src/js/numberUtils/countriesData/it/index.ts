import { CountryStandardNumberUtils } from '../../../types';
import aic from './aic';
import codicefiscale from './codicefiscale';
import iva from './iva';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "IT",
	numberUtils: [
		aic,
		codicefiscale,
		iva
	]
}

export default countryNumberUtils;

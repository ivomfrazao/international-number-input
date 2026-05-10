import { CountryStandardNumberUtils } from '../../../types';
import egn from './egn';
import pnf from './pnf';
import vat from './vat';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "BG",
	numberUtils: [
		egn,
		pnf,
		vat
	]
}

export default countryNumberUtils;

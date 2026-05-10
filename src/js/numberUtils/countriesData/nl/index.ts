import { CountryStandardNumberUtils } from '../../../types';
import bsn from './bsn';
import btw from './btw';
import onderwijsnummer from './onderwijsnummer';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "NL",
	numberUtils: [
		bsn,
		btw,
		onderwijsnummer
	]
}

export default countryNumberUtils;

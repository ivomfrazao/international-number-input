import { CountryStandardNumberUtils } from '../../../types';
import idnr from './idnr';
import passport from './passport';
import pwnr from './pwnr';
import stnr from './stnr';
import svnr from './svnr';
import vat from './vat';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "DE",
	numberUtils: [
		idnr,
		passport,
		pwnr,
		stnr,
		svnr,
		vat
	]
}

export default countryNumberUtils;

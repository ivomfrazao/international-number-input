import { CountryStandardNumberUtils } from '../../../types';
import nip from './nip';
import pesel from './pesel';
import regon from './regon';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "PL",
	numberUtils: [
		nip,
		pesel,
		regon
	]
}

export default countryNumberUtils;

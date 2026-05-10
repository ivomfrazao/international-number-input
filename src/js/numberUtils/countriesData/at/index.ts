import { CountryStandardNumberUtils } from '../../../types';
import businessid from './businessid';
import tin from './tin';
import uid from './uid';
import vnr from './vnr';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "AT",
	numberUtils: [
		businessid,
		tin,
		uid,
		vnr
	]
}

export default countryNumberUtils;

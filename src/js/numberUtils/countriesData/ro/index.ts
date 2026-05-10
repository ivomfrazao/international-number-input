import { CountryStandardNumberUtils } from '../../../types';
import cif from './cif';
import cnp from './cnp';
import cui from './cui';
import onrc from './onrc';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "RO",
	numberUtils: [
		cif,
		cnp,
		cui,
		onrc
	]
}

export default countryNumberUtils;

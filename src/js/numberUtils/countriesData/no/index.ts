import { CountryStandardNumberUtils } from '../../../types';
import fodselsnummer from './fodselsnummer';
import kontonr from './kontonr';
import mva from './mva';
import orgnr from './orgnr';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "NO",
	numberUtils: [
		fodselsnummer,
		kontonr,
		mva,
		orgnr
	]
}

export default countryNumberUtils;

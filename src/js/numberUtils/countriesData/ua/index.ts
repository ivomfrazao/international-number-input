import { CountryStandardNumberUtils } from '../../../types';
import edrpou from './edrpou';
import rntrc from './rntrc';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "UA",
	numberUtils: [
		edrpou,
		rntrc
	]
}

export default countryNumberUtils;

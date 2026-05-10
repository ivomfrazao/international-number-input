import { CountryStandardNumberUtils } from '../../../types';
import alv from './alv';
import hetu from './hetu';
import ytunnus from './ytunnus';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "FI",
	numberUtils: [
		alv,
		hetu,
		ytunnus
	]
}

export default countryNumberUtils;

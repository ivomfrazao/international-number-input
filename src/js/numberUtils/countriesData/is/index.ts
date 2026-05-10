import { CountryStandardNumberUtils } from '../../../types';
import kennitala from './kennitala';
import vsk from './vsk';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "IS",
	numberUtils: [
		kennitala,
		vsk
	]
}

export default countryNumberUtils;

import { CountryStandardNumberUtils } from '../../../types';
import tckimlik from './tckimlik';
import vkn from './vkn';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "TR",
	numberUtils: [
		tckimlik,
		vkn
	]
}

export default countryNumberUtils;

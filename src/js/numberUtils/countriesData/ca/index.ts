import { CountryStandardNumberUtils } from '../../../types';
import bn from './bn';
import gst from './gst';
import pst from './pst';
import qst from './qst';
import sin from './sin';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "CA",
	numberUtils: [
		bn,
		gst,
		pst,
		qst,
		sin
	]
}

export default countryNumberUtils;

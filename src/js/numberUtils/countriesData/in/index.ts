import { CountryStandardNumberUtils } from '../../../types';
import aadhaar from './aadhaar';
import epic from './epic';
import gstin from './gstin';
import pan from './pan';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "IN",
	numberUtils: [
		aadhaar,
		epic,
		gstin,
		pan
	]
}

export default countryNumberUtils;

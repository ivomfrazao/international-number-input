import { CountryStandardNumberUtils } from '../../../types';
import abn from './abn';
import acn from './acn';
import tfn from './tfn';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "AU",
	numberUtils: [
		abn,
		acn,
		tfn
	]
}

export default countryNumberUtils;

import { CountryStandardNumberUtils } from '../../../types';
import ban from './ban';
import natid from './natid';
import tax_code from './tax_code';
import ubn from './ubn';
import ui from './ui';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "TW",
	numberUtils: [
		ban,
		natid,
		tax_code,
		ubn,
		ui
	]
}

export default countryNumberUtils;

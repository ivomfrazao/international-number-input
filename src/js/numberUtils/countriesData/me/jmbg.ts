/**
 * Montenegrin JMBG
 * https://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
 */

import { StandardNumberUtils } from '../../../types';
import jmbg from '../ba/jmbg';

const validator: StandardNumberUtils = {
	...jmbg,
	name: 'Montenegrin Unique Master Citizen Number',
	localName: 'Јединствени матични број грађана',
	abbreviation: 'ЈМБГ',
	countryPrefix: 'ME',
};

export default validator;

/**
 * Macedonian JMBG
 * https://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
 */

import { StandardNumberUtils } from '../../../types';
import jmbg from '../ba/jmbg';

const validator: StandardNumberUtils = {
	...jmbg,
	name: 'Macedonian Unique Master Citizen Number',
	localName: 'Единствен матичен број на граѓанинот',
	abbreviation: 'ЕМБГ',
	countryPrefix: 'MK',
};

export default validator;

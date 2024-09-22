/**
 * Macedonian JMBG
 * https://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
 */

import { Validator } from '../types';
import * as jmbg from '../ba/jmbg';

const validator: StandardNumberUtils = {
	...jmbg,
	name: 'Macedonian Unique Master Citizen Number',
	localName: 'Единствен матичен број на граѓанинот',
	abbreviation: 'ЕМБГ',
};

export default validator;

/**
 * Slovene JMBG
 *
 * https://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
 *
 * This is really the EMSO -- here for legacy support
 */

import { StandardNumberUtils } from '../../../types';
import jmbg from '../ba/jmbg';

const validator: StandardNumberUtils = {
	...jmbg,
	name: 'Slovene Unique Master Citizen Number',
	localName: 'Enotna Matična Številka Občana',
	abbreviation: 'EMŠO',
	countryPrefix: 'SI',
};

export default validator;

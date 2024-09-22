import { Validator } from '../types';
import * as rc from '../cz/rc';

const validator: StandardNumberUtils = {
	...rc,
	name: 'Slovak Birth Number',
	localName: 'Rodné číslo',
	abbreviation: 'RC',
};

export default validator;

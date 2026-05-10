import { StandardNumberUtils } from '../../../types';
import rc from '../cz/rc';

const validator: StandardNumberUtils = {
	...rc,
	name: 'Slovak Birth Number',
	localName: 'Rodné číslo',
	abbreviation: 'RC',
	countryPrefix: 'SK',
};

export default validator;

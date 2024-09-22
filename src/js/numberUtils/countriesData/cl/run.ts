import * as rut from './rut';

import { Validator } from '../types';

const validator: StandardNumberUtils = {
    ...rut,
    name: 'Chilean National Identification Number',
    localName: 'Rol Único Nacional ',
    abbreviation: 'RUN',
};

export default validator;

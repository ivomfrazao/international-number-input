import { StandardNumberUtils } from '../../../types';
import rut from './rut';

const validator: StandardNumberUtils = {
    ...rut,
    name: 'Chilean National Identification Number',
    localName: 'Rol Único Nacional',
    abbreviation: 'RUN',
    countryPrefix: 'CL',
};

export default validator;

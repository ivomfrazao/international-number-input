import { CountryStandardNumberUtils } from '../../../types';
import nif from './nif';
import nir from './nir';
import siren from './siren';
import siret from './siret';
import tva from './tva';

const countryNumberUtils: CountryStandardNumberUtils = {
	iso2: "FR",
	numberUtils: [
		nif,
		nir,
		siren,
		siret,
		tva
	]
}

export default countryNumberUtils;

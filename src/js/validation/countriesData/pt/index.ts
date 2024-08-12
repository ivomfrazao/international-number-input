import { CountryValidator } from '../../../types';
import nin from './nin'
import tin from './tin'

const validator: CountryValidator = {
	iso2: "PT",
	validators: [
		nin,
		tin
	]
}
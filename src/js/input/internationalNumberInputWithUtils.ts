import { NumberType } from "../types";
import { IniUtils, internationalNumberInput} from "./InternationalNumberInput";
import * as utils from "./utils";

const utilsTmp: IniUtils = {
	formatNumber: utils.formatNumber,
	formatNumberAsYouType: utils.formatNumberAsYouType,
	getCoreNumber: utils.getCoreNumber,
	getExampleNumber: utils.getExampleNumber,
	getValidationError: utils.getValidationError,
	isPossibleNumber: utils.isPossibleNumber,
	isValidNumber: utils.isValidNumber,
	getMaxLength: utils.getMaxLength,

	numberType: NumberType.NationalIdentificationNumber,
}

internationalNumberInput.utils = utilsTmp;

export default internationalNumberInput;
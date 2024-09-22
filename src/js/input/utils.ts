import numberUtils from '../numberUtils';
import { CountryStandardNumberUtils, NumberType, StandardNumberUtils, ValidateReturn } from '../types';
import * as exceptions from '../exceptions';

function getNumberUtils(countryCode: string, numberType: NumberType): StandardNumberUtils {
	const countryNumberUtils: CountryStandardNumberUtils | undefined = numberUtils
		.find(({ iso2 }) => iso2.toLowerCase() === countryCode.toLowerCase());

	if (!countryNumberUtils) {
		throw new exceptions.InvalidCountry();
	}

	const countryNumberTypeUtils = countryNumberUtils
		.numberUtils.find(({type}) => type === numberType);
	
	if (!countryNumberTypeUtils) {
		throw new exceptions.InvalidNumberType();
	}

	return countryNumberTypeUtils;
}

//* Format the number as the user types.
export function formatNumberAsYouType(number: string, countryISO2: string, numberType: NumberType): string {
	try {
		const numberUtils = getNumberUtils(countryISO2, numberType);
		return numberUtils.format(number);
	}
	catch (e) {
		return number;
	}
};

//* Format the given number to the given format.
export function formatNumber(number: string, countryISO2: string, numberType: NumberType): string {
	try {
		const numberUtils = getNumberUtils(countryISO2, numberType);
		return numberUtils.format(number);
	}
	catch (e) {
		return number;
	}
};

//* Get an example number for the given country code.
export function getExampleNumber(countryISO2: string, numberType: NumberType): string {
	try {
		const numberUtils = getNumberUtils(countryISO2, numberType);
		return numberUtils.placeholder || "";
	}
	catch (e) {
		return "";
	}
};

//* Get the core number, without any international dial code, or national prefix.
export const getCoreNumber = (number, countryCode) => {
	return countryCode ? number : number;
	// TODO 
	// try {
	// 	const phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
	// 	const numberObj = phoneUtil.parseAndKeepRawInput(number, countryCode);
	// 	return numberObj.getNationalNumber().toString();
	// } catch (e) {
	// 	return "";
	// }
};

//* Get the extension from the given number
export const getExtension = (number, countryCode) => {
	return countryCode ? number : number;
	// TODO 
	// try {
	// 	const phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
	// 	const numberObj = phoneUtil.parseAndKeepRawInput(number, countryCode);
	// 	return numberObj.getExtension();
	// } catch (e) {
	// 	return "";
	// }
};

//* Get the type of the given number e.g. fixed-line/mobile.
export const getNumberType = (number, countryCode) => {
	return countryCode ? number : number;
	// TODO 
	// try {
	// 	const phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
	// 	const numberObj = phoneUtil.parseAndKeepRawInput(number, countryCode);
	// 	return phoneUtil.getNumberType(numberObj);
	// } catch (e) {
	// 	//* Broken
	// 	return -99;
	// }
};

//* Get more info if the validation has failed e.g. too long/too short.
//* NOTE that isPossibleNumberWithReason returns a i18n.phonenumbers.PhoneNumberUtil.ValidationResult.
export const getValidationError = (number, countryCode) => {
	return countryCode ? number : number;
	// TODO 
	// try {
	// 	const phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
	// 	const numberObj = phoneUtil.parseAndKeepRawInput(number, countryCode);
	// 	return phoneUtil.isPossibleNumberWithReason(numberObj);
	// } catch (e) {
	// 	//* Here I convert thrown errors into ValidationResult enums (if possible).
	// 	//* errors are from i18n.phonenumbers.Error in the file https://github.com/googlei18n/libphonenumber/blob/master/javascript/i18n/phonenumbers/phonenumberutil.js.
	// 	if (e.message === i18n.phonenumbers.Error.INVALID_COUNTRY_CODE) {
	// 		return i18n.phonenumbers.PhoneNumberUtil.ValidationResult
	// 			.INVALID_COUNTRY_CODE;
	// 	}

	// 	if (
	// 		//* Hack to solve issue where parseAndKeepRawInput throws weird error for zero or 1-digit (national) numbers e.g. "3" or "+13" s
	// 		number.length <= 3 ||
	// 		e.message === i18n.phonenumbers.Error.TOO_SHORT_AFTER_IDD ||
	// 		e.message === i18n.phonenumbers.Error.TOO_SHORT_NSN
	// 	) {
	// 		return i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT;
	// 	}

	// 	if (e.message === i18n.phonenumbers.Error.TOO_LONG) {
	// 		return i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_LONG;
	// 	}

	// 	//* Broken
	// 	return -99;
	// }
};

//* Check if given number is valid.
export function isValidNumber (number: string, countryISO2: string, numberType: NumberType): ValidateReturn {
	try {
		const numberUtils = getNumberUtils(countryISO2, numberType);
		return numberUtils.validate(number);
	}
	catch (e) {
		const error: exceptions.ValidationError = e instanceof exceptions.ValidationError ? e : new exceptions.ValidationError(e);

		const validateReturn: ValidateReturn = {
			isValid: false,
			error: error
		}

		return validateReturn;
	}
};

export const getMaxLength = (countryCode) => {
	return 10;
}

/**
 * NOTE: for following sections, keys must be in quotes to force closure compiler to preserve them
 */

/**
 * The possible validation errors.
 */
export const validationError = {
	"IS_POSSIBLE": 0,
	"INVALID_COUNTRY_CODE": 1,
	"TOO_SHORT": 2,
	"TOO_LONG": 3,
	"IS_POSSIBLE_LOCAL_ONLY": 4,
	"INVALID_LENGTH": 5,
};
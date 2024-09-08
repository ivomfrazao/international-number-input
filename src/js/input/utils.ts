// goog.provide("i18n.phonenumbers.demo");
// // includes
// goog.require("i18n.phonenumbers.PhoneNumberFormat");
// goog.require("i18n.phonenumbers.PhoneNumberUtil");
// goog.require("i18n.phonenumbers.Error");
// goog.require("i18n.phonenumbers.AsYouTypeFormatter");

//* Format the number as the user types.
export const formatNumberAsYouType = (number, countryCode) => {
	return countryCode ? number : number;
	// TODO 
	// try {
	// 	//* Have to clean it first, as AYTF stops formatting as soon as it hits any formatting char (even it's own)
	// 	//* (it's designed to be fed one char at a time, as opposed to every char every time).
	// 	const clean = number.replace(/[^+0-9]/g, "");
	// 	const formatter = new i18n.phonenumbers.AsYouTypeFormatter(countryCode);
	// 	let result = "";
	// 	for (let i = 0; i < clean.length; i++) {
	// 		result = formatter.inputDigit(clean.charAt(i));
	// 	}
	// 	return result;
	// } catch (e) {
	// 	return number;
	// }
};

//* Format the given number to the given format.
export const formatNumber = (number, countryCode, formatArg) => {
	let arg = countryCode ? countryCode : formatArg;
	return arg ? number : number;
	// TODO
	// try {
	// 	const phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
	// 	const numberObj = phoneUtil.parseAndKeepRawInput(number, countryCode);
	// 	if (phoneUtil.isPossibleNumber(numberObj)) {
	// 		const format =
	// 			typeof formatArg === "undefined"
	// 			? i18n.phonenumbers.PhoneNumberFormat.E164
	// 			: formatArg;
	// 		return phoneUtil.format(numberObj, format);
	// 	}
	// 	return number;
	// } catch (e) {
	// 	return number;
	// }
};

//* Get an example number for the given country code.
export const getExampleNumber = (countryCode, numberType) => {
	return countryCode ? numberType : "";
	// TODO 
	// try {
	// 	const phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
	// 	const numberObj = phoneUtil.getExampleNumberForType(
	// 	countryCode,
	// 	numberType,
	// 	);
	// 	let format;
	// 	if (useE164) {
	// 	format = i18n.phonenumbers.PhoneNumberFormat.E164;
	// 	} else {
	// 	format = national
	// 		? i18n.phonenumbers.PhoneNumberFormat.NATIONAL
	// 		: i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL;
	// 	}
	// 	return phoneUtil.format(numberObj, format);
	// } catch (e) {
	// 	return "";
	// }
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
export const isValidNumber = (number, countryCode) => {
	return countryCode ? number : number;
	// TODO 
	// try {
	// 	const phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
	// 	const numberObj = phoneUtil.parseAndKeepRawInput(number, countryCode);
	// 	return phoneUtil.isValidNumber(numberObj);
	// } catch (e) {
	// 	return false;
	// }
};

//* For internal use only - see isPossibleNumber.
export const isPossibleNumberForType = (phoneUtil, numberObj, numberTypeName) => {
	return "";
	// TODO 
	// const resultForType = phoneUtil.isPossibleNumberForTypeWithReason(numberObj, numberType[numberTypeName]);
	// const isPossibleForType = resultForType === i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE;
	// return isPossibleForType;
};

//* Check if given number is possible.
export const isPossibleNumber = (number, countryCode, numberTypeName) => {
	return countryCode ? number : number;
	// TODO 
	// try {
	// 	const phoneUtil = i18n.phonenumbers.PhoneNumberUtil.getInstance();
	// 	const numberObj = phoneUtil.parseAndKeepRawInput(number, countryCode);

	// 	if (numberTypeName) {
	// 		const isPossible = isPossibleNumberForType(phoneUtil, numberObj, numberTypeName);
	// 		//* FIXED_LINE_OR_MOBILE does not behave how you would expect - it is its own category that is different to either MOBILE or FIXED_LINE (e.g. for US numbers which could be used for either purpose - it should really be called something like FIXED_LINE_SLASH_MOBILE). So here we make it more user friendly by checking if it's a possible number for any of those three categories. NOTE: this is actually in-line with how it behaves in other situations e.g. if you call isPossibleNumberForType with type="MOBILE" and the number set to a US number, it returns VALID even though it's type is technically FIXED_LINE_OR_MOBILE.
	// 		if (numberTypeName === "FIXED_LINE_OR_MOBILE") {
	// 			const isMobile = isPossibleNumberForType(phoneUtil, numberObj, "MOBILE");
	// 			const isFixedLine = isPossibleNumberForType(phoneUtil, numberObj, "FIXED_LINE");
	// 			return isMobile || isFixedLine || isPossible;
	// 		}
	// 		return isPossible;
	// 	}

	// 	//* Can't use phoneUtil.isPossibleNumber directly as it accepts IS_POSSIBLE_LOCAL_ONLY numbers e.g. local numbers that are much shorter.
	// 	const result = phoneUtil.isPossibleNumberWithReason(numberObj);
	// 	const isPossible = result === i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE;
	// 	return isPossible;
	// } catch (e) {
	// 	return false;
	// }
};

export const getMaxLength = (countryCode) => {
	return 10;
}

/********************
 * NOTE: for following sections, keys must be in quotes to force closure compiler to preserve them
 ********************/

//* copied this from i18n.phonenumbers.PhoneNumberFormat in the file https://github.com/googlei18n/libphonenumber/blob/master/javascript/i18n/phonenumbers/phonenumberutil.js.
export const numberFormat = {
	"E164": 0,
	"INTERNATIONAL": 1,
	"NATIONAL": 2,
	"RFC3966": 3,
};

//* copied this from i18n.phonenumbers.PhoneNumberUtil.ValidationResult in https://github.com/googlei18n/libphonenumber/blob/master/javascript/i18n/phonenumbers/phonenumberutil.js and again put the keys in quotes.
export const validationError = {
	"IS_POSSIBLE": 0,
	"INVALID_COUNTRY_CODE": 1,
	"TOO_SHORT": 2,
	"TOO_LONG": 3,
	"IS_POSSIBLE_LOCAL_ONLY": 4,
	"INVALID_LENGTH": 5,
};

//* Exports
//* Note: the below code defines window.intlTelInputUtilsTemp, which is so-called because it will be exported (as an ES Module) and then deleted at the end of this file (see output_wrapper in grunt/closure-compiler.js).
// goog.exportSymbol("intlTelInputUtilsTemp", {});
// goog.exportSymbol("intlTelInputUtilsTemp.formatNumberAsYouType", formatNumberAsYouType);
// goog.exportSymbol("intlTelInputUtilsTemp.formatNumber", formatNumber);
// goog.exportSymbol("intlTelInputUtilsTemp.getExampleNumber", getExampleNumber);
// goog.exportSymbol("intlTelInputUtilsTemp.getExtension", getExtension);
// goog.exportSymbol("intlTelInputUtilsTemp.getNumberType", getNumberType);
// goog.exportSymbol("intlTelInputUtilsTemp.getValidationError", getValidationError);
// goog.exportSymbol("intlTelInputUtilsTemp.isValidNumber", isValidNumber);
// goog.exportSymbol("intlTelInputUtilsTemp.isPossibleNumber", isPossibleNumber);
// goog.exportSymbol("intlTelInputUtilsTemp.getCoreNumber", getCoreNumber);
// //* Enums
// goog.exportSymbol("intlTelInputUtilsTemp.numberFormat", numberFormat);
// goog.exportSymbol("intlTelInputUtilsTemp.numberType", numberType);
// goog.exportSymbol("intlTelInputUtilsTemp.validationError", validationError);

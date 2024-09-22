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
		return numberUtils.format(number, false);
	}
	catch (e) {
		return number;
	}
};

//* Format the given number to the given format.
export function formatNumber(number: string, countryISO2: string, numberType: NumberType): string {
	try {
		const numberUtils = getNumberUtils(countryISO2, numberType);
		return numberUtils.format(number, false);
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

//* Get the core number, without formatting or any country specific information
export function getCoreNumber(number: string, countryISO2: string, numberType: NumberType): string {
	try {
		const numberUtils = getNumberUtils(countryISO2, numberType);
		return numberUtils.compact(number, false);
	}
	catch (e) {
		return number;
	}
};

//* Get the core number, without formatting or any country specific information
export function getFullNumber(number: string, countryISO2: string, numberType: NumberType, includeFormatting: boolean): string {
	try {
		const numberUtils = getNumberUtils(countryISO2, numberType);
		return includeFormatting ? numberUtils.format(number, true) : numberUtils.compact(number, true);
	}
	catch (e) {
		return number;
	}
};

//* Check if given number is valid.
export function isValidNumber(number: string, countryISO2: string, numberType: NumberType): ValidateReturn {
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

export function getMaxLength(countryISO2: string, numberType: NumberType): number {
	try {
		const numberUtils = getNumberUtils(countryISO2, numberType);
		return numberUtils.maxLength;
	}
	catch (e) {
		return 0;
	}
}

export function getMinLength(countryISO2: string, numberType: NumberType): number {
	try {
		const numberUtils = getNumberUtils(countryISO2, numberType);
		return numberUtils.minLength;
	}
	catch (e) {
		return 0;
	}
}

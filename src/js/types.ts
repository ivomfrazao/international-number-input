import { ValidationError } from './exceptions';

interface ValidateSuccess {
	/**
	 * Identification is valid
	 */
	isValid: true;

	/**
	 * Compact version of the Identification
	 */
	compact: string;

	/**
	 * This ID identifies an individual
	 *
	 * Note: An ID may not positivily identify an individual or entity
	 */
	isIndividual: boolean;

	/**
	 * This ID identifies an entity
	 *
	 * Note: An ID may not positivily identify an individual or entity
	 */
	isCompany: boolean;
}

interface ValidateFail {
	/**
	 * Identification is not valid
	 */
	isValid: false;

	/**
	 * The validation error
	 */
	error: ValidationError;
}

export type ValidateReturn = { error?: ValidationError } & (
	| ValidateSuccess
	| ValidateFail
);

export enum NumberType {
	NationalIdentificationNumber = "NIN",
	TaxpayerIdentificationNumber = "TIN",
	SocialSecurityIdentificationNumber = "SSN",
};

export interface StandardNumberUtils {
	/**
	 * The type of number being validated
	 */
	type: NumberType;

	/**
	 * The validator name, or ID's expansion name in English
	 */
	name: string;

	/**
	 * The validator name, or ID's expansion name its local name
	 */
	localName: string;

	/**
	 * The short/acronym or abbreviation of the validator
	 */
	abbreviation?: string;

	/**
	 * The placeholder for the number type.
	 */
	placeholder?: string;

	/**
	 * The maximum length for the number type, without any formatting applied
	 */
	maxLength: number;

	/**
	 * The minimum length for the number type, without any formatting applied
	 */
	minLength: number;

	/**
	 * The country's prefix for the number type.
	 */
	countryPrefix: string;

	/**
	 * Convert the number to the minimal representation.
	 * This strips the number of any valid separators and removes surrounding
	 * whitespace.
	 */
	compact(value: string, includeCountryPrefix: boolean): string;

	/**
	 * Reformat the number to the standard presentation format.
	 */
	format(value: string, includeCountryPrefix: boolean): string;

	/**
	 * Validate with error throws subclass of ValidationError
	 */
	validate(value: string): ValidateReturn;
}

export interface CountryStandardNumberUtils {
	/**
	 * The ISO2 code of the country
	 */
	iso2: string;

	/**
	 * The list of number utilities possible for the country
	 */
	numberUtils: StandardNumberUtils[];
}
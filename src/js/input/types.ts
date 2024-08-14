import { CountryValidator, NumberType } from "../types";
import { AllOptions, SomeOptions } from "./InternationalNumberInputOptions";

interface InternationalNumberInputInterface {
	(input: HTMLInputElement, options?: SomeOptions): Ini;
	defaults: AllOptions;
	documentReady: () => boolean;
	getCountryData: () => CountryValidator[];
	getInstance: (input: HTMLInputElement) => Ini | null;
	instances: { [key: string]: Ini };
	loadUtils: (path: string) => Promise<unknown> | null;
	startedLoadingAutoCountry?: boolean;
	startedLoadingUtilsScript?: boolean;
	version: string | undefined;
	utils?: IniUtils;
}
type IniUtils = {
	formatNumber(number: string, countryISO2: string | undefined, format?: number): string;
	formatNumberAsYouType(number: string, countryISO2: string | undefined): string;
	getCoreNumber(number: string, countryISO2: string | undefined): string;
	getExampleNumber(countryISO2: string | undefined, numberType: NumberType): string;
	getValidationError(number: string, countryISO2: string | undefined): number;
	isPossibleNumber(number: string, countryISO2: string | undefined, numberType?: string): boolean;
	isValidNumber: (number: string, countryISO2: string | undefined) => boolean;
};
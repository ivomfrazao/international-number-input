import { NumberType } from "../types";
import { AllOptions, SomeOptions } from "./InternationalNumberInputOptions";
import { defaults } from "./InternationalNumberInputOptions.default";
import allCountries, { Country } from "./international-number-input/data";
import { Ini } from "./InternationalNumberInput.class";

interface InternationalNumberInputInterface {
	(input: HTMLInputElement, options?: SomeOptions): Ini;
	defaults: AllOptions;
	documentReady: () => boolean;
	getCountryData: () => Country[];
	getInstance: (input: HTMLInputElement) => Ini | null;
	instances: { [key: string]: Ini };
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

//* Convenience wrapper.
const internationalNumberInput: InternationalNumberInputInterface = Object.assign(
	(input: HTMLInputElement, options?: SomeOptions): Ini => {
		const iti = new Ini(input, options);
		iti._init();
		input.setAttribute("data-international-number-input-id", iti.id.toString());
		internationalNumberInput.instances[iti.id] = iti;
		return iti;
	},
	{
		defaults,
		//* Using a static var like this allows us to mock it in the tests.
		documentReady: (): boolean => document.readyState === "complete",
		//* Get the country data object.
		getCountryData: (): Country[] => allCountries,
		//* A getter for the plugin instance.
		getInstance: (input: HTMLInputElement): Ini | null => {
			const id = input.getAttribute("data-international-number-input-id");
			return id ? internationalNumberInput.instances[id] : null;
		},
		//* A map from instance ID to instance object.
		instances: {},
		version: process.env.VERSION,
	},
);
  
export default internationalNumberInput;
  
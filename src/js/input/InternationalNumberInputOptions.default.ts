import { NumberType } from "../types";
import { AllOptions } from "./InternationalNumberInputOptions";

const defaults: AllOptions = {
	//* Whether or not to allow the dropdown.
	allowDropdown: true,
	//* Add a placeholder in the input with an example number for the selected country.
	autoPlaceholder: "polite",
	//* Modify the parentClass.
	containerClass: "",
	//* The order of the countries in the dropdown. Defaults to alphabetical.
	countryOrder: null,
	//* Add a country search input at the top of the dropdown.
	countrySearch: true,
	//* Modify the auto placeholder.
	customPlaceholder: null,
	//* Append menu to specified element.
	dropdownContainer: null,
	//* Don't display these countries.
	excludeCountries: [],
	//* Fix the dropdown width to the input width (rather than being as wide as the longest country name).
	fixDropdownWidth: true,
	//* Format the number as the user types
	formatAsYouType: true,
	//* Format the input value during initialisation and on setNumber.
	formatOnDisplay: true,
	//* geoIp lookup function.
	geoIpLookup: null,
	//* Inject a hidden input with the name returned from this function, and on submit, populate it with the result of getNumber.
	hiddenInput: null,
	//* Internationalise the plugin text e.g. search input placeholder, country names.
	i18n: {},
	//* Initial country.
	initialCountry: "",
	//* National vs international formatting for numbers e.g. placeholders and displaying existing numbers.
	nationalMode: true,
	//* Display only these countries.
	onlyCountries: [],
	//* Number type to use for placeholders.
	placeholderNumberType: NumberType.NationalIdentificationNumber,
	//* Show flags - for both the selected country, and in the country dropdown
	showFlags: true,
	//* Only allow certain chars e.g. a plus followed by numeric digits, and cap at max valid length.
	strictMode: false,
	//* Use full screen popup instead of dropdown for country list.
	useFullscreenPopup:
		typeof navigator !== "undefined" && typeof window !== "undefined"
			? //* We cannot just test screen size as some smartphones/website meta tags will report desktop resolutions.
			//* Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
			/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent,
			) || window.innerWidth <= 500
			: false,
	//* Specify the path to the libphonenumber script to enable validation/formatting.
	utilsScript: "",
	//* The number type to enforce during validation.
	validationNumberType: NumberType.NationalIdentificationNumber,
};

export default defaults;
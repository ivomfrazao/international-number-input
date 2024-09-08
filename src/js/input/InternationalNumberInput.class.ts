import { Guid } from "guid-typescript";
import defaultEnglishStrings from "./i18n/en";
import { NumberType, ValidateReturn } from "../types";
import { SomeOptions, AllOptions } from "./InternationalNumberInputOptions";
import defaults from "./InternationalNumberInputOptions.default";
import { KeyboardKey } from "./libraries/KeyboardKey.enum";
import { normaliseString } from "./libraries/StringUtils";
import { createDOMElement } from "./libraries/DOMUtils";
import { buildElementClass, StyleAttribute, StyleElement } from "./libraries/StyleUtils";
import { forEachInstance } from "./libraries/InstancesUtils";
import * as exceptions from "../exceptions";
import { DataAttributes } from "./libraries/DataAttributes.enum";

// TODO Remove next import and type
import allCountries, { Country } from "./international-number-input/data";
import internationalNumberInput from "./InternationalNumberInput";
import { AutoPlaceholderType } from "./libraries/AutoPlaceholderType.enum";
type SelectedCountryData = Country | { name?: string, iso2?: string, dialCode?: string };

// TODO Check if translateCursorPosition is really necessary. If yes, move to utilities
const translateCursorPosition = (
	relevantChars: number,
	formattedValue: string,
	prevCaretPos: number,
	isDeleteForwards: boolean,
): number => {
	//* If the first char is a formatting char, and they backspace delete it:
	//* Cursor should stay at the start (pos 0), rather than stick to the first digit (pos 1).
	if (prevCaretPos === 0 && !isDeleteForwards) {
		return 0;
	}
	let count = 0;
	for (let i = 0; i < formattedValue.length; i++) {
		if (/[+0-9]/.test(formattedValue[i])) {
			count++;
		}

		//* Normal case: stop when you hit the right number of relevant chars
		//* (cursor will be just after the final relevant char).
		if (count === relevantChars && !isDeleteForwards) {
			return i + 1;
		}
		//* Spacial case: delete forwards (fn + delete on a mac):
		//* Wait until hit one extra relevant char, and put the cursor just before it (after any formatting chars).
		if (isDeleteForwards && count === relevantChars + 1) {
			return i;
		}
	}
	return formattedValue.length;
};

//* This is our plugin class that we will create an instance of
// eslint-disable-next-line no-unused-vars
export class Ini {
	//* Can't be private as it's called from internationalNumberInput convenience wrapper.
	id: string;
	//* NOT Private
	promise: Promise<[unknown, unknown]>;
	//* Private
	private numberInput: HTMLInputElement;
	private highlightedItem: HTMLElement | null;
	private options: AllOptions;
	private hadInitialPlaceholder: boolean;
	private isRTL: boolean;
	private isAndroid: boolean;
	private selectedCountryData: SelectedCountryData;
	private countries: Country[];
	private countryContainer: HTMLElement;
	private selectedCountry: HTMLElement;
	private selectedCountryInner: HTMLElement;
	private selectedCountryA11yText: HTMLElement;
	private dropdownArrow: HTMLElement;
	private dropdownContent: HTMLElement;
	private searchInput: HTMLInputElement;
	private searchResultsA11yText: HTMLElement;
	private countryList: HTMLElement;
	private dropdown: HTMLElement;
	private hiddenInput: HTMLInputElement;
	private hiddenInputCountry: HTMLInputElement;
	private maxCoreNumberLength: number | null;
	private defaultCountry: string | null;
	private originalPaddingRight: string;
	private originalPaddingLeft: string;
  
	private _handleHiddenInputSubmit: () => void;
	private _handleLabelClick: (e: Event) => void;
	private _handleClickSelectedCountry: () => void;
	private _handleCountryContainerKeydown: (e: KeyboardEvent) => void;
	private _handleInputEvent: (e: InputEvent) => void;
	private _handleKeydownEvent: (e: KeyboardEvent) => void;
	private _handleWindowScroll: () => void;
	private _handleMouseoverCountryList: (e: MouseEvent) => void;
	private _handleClickCountryList: (e: Event) => void;
	private _handleClickOffToClose: () => void;
	private _handleKeydownOnDropdown: (e: KeyboardEvent) => void;
	private _handleSearchChange: () => void;
  
	private resolveAutoCountryPromise: (value?: unknown) => void;
	private rejectAutoCountryPromise: (reason?: unknown) => void;
	private resolveUtilsScriptPromise: (value?: unknown) => void;
	private rejectUtilsScriptPromise: (reason?: unknown) => void;
  
	constructor(input: HTMLInputElement, customOptions: SomeOptions = {}) {
		this.id = Guid.create().toString();
		this.numberInput = input;
	
		this.highlightedItem = null;
	
		//* Process specified options / defaults.
		this.options = Object.assign({}, defaults, customOptions);
		this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
	}
  
	//* Can't be private as it's called from internationalNumberInput convenience wrapper.
	_init(): void {
		//* If showing fullscreen popup, do not fix the width.
		if (this.options.useFullscreenPopup) {
			this.options.fixDropdownWidth = false;
		}
	
		//* On mobile, we want a full screen dropdown, so we must append it to the body.
		if (this.options.useFullscreenPopup && !this.options.dropdownContainer) {
			this.options.dropdownContainer = document.body;
		}
	
		this.isAndroid = typeof navigator !== "undefined" ? /Android/i.test(navigator.userAgent) : false;
	
		//* Check if input has one parent with RTL.
		this.isRTL = !!this.numberInput.closest("[dir=rtl]");
	
		//* Allow overriding the default interface strings.
		this.options.i18n = { ...defaultEnglishStrings, ...this.options.i18n };
	
		//* these promises get resolved when their individual requests complete
		//* this way the dev can do something like ini.promise.then(...) to know when all requests are complete.
		const autoCountryPromise = new Promise((resolve, reject) => {
			this.resolveAutoCountryPromise = resolve;
			this.rejectAutoCountryPromise = reject;
		});
		const utilsScriptPromise = new Promise((resolve, reject) => {
			this.resolveUtilsScriptPromise = resolve;
			this.rejectUtilsScriptPromise = reject;
		});
		this.promise = Promise.all([autoCountryPromise, utilsScriptPromise]);
	
		//* In various situations there could be no country selected initially, but we need to be able
		//* to assume this variable exists.
		this.selectedCountryData = {};
	
		//* Process all the data: onlyCountries, excludeCountries, countryOrder etc.
		this._processCountryData();
	
		//* generate the markup.
		this._generateMarkup();
	
		//* Set the initial state of the input value and the selected country.
		this._setInitialState();
	
		//* Start all of the event listeners: input keydown, selectedCountry click.
		this._initListeners();
	
		//* Utils script, and auto country.
		this._initRequests();
	}
	
	//********************
	//*  PRIVATE METHODS
	//********************

	//* Prepare all of the country data, including onlyCountries, excludeCountries, countryOrder options.
	private _processCountryData(): void {
		//* Process onlyCountries or excludeCountries array if present.
		this._processAllCountries();
	
		//* Translate country names according to i18n option.
		this._translateCountryNames();
	
		//* Sort countries by countryOrder option (if present), then name.
		this._sortCountries();
	}
		
	//* Sort countries by countryOrder option (if present), then name.
	private _sortCountries() {
		if (this.options.countryOrder) {
			this.options.countryOrder = this.options.countryOrder.map((country) => country.toLowerCase());
		}
		this.countries.sort((a: Country, b: Country): number => {
			//* Primary sort: countryOrder option.
			const { countryOrder } = this.options;
			if (countryOrder) {
				const aIndex = countryOrder.indexOf(a.iso2);
				const bIndex = countryOrder.indexOf(b.iso2);
				const aIndexExists = aIndex > -1;
				const bIndexExists = bIndex > -1;
				if (aIndexExists || bIndexExists) {
					if (aIndexExists && bIndexExists) {
						return aIndex - bIndex;
					}
					return aIndexExists ? -1 : 1;
				}
			}
			
			//* Secondary sort: country name.
			return a.name.localeCompare(b.name);
		});
	}
  
	//* Process onlyCountries or excludeCountries array if present.
	private _processAllCountries(): void {
		const { onlyCountries, excludeCountries } = this.options;
		if (onlyCountries.length) {
			const lowerCaseOnlyCountries = onlyCountries.map((country) =>
				country.toLowerCase(),
			);
			this.countries = allCountries.filter(
				(country) => lowerCaseOnlyCountries.indexOf(country.iso2) > -1,
			);
		} else if (excludeCountries.length) {
			const lowerCaseExcludeCountries = excludeCountries.map(
				(country) => country.toLowerCase(),
			);
			this.countries = allCountries.filter(
				(country) => lowerCaseExcludeCountries.indexOf(country.iso2) === -1,
			);
		} else {
			this.countries = allCountries;
		}
	}

	/**
	 * Translate countries according to the configurations provided.
	 */
	private _translateCountryNames(): void {
		this.countries.forEach((country) => {
			const iso2 = country.iso2.toLowerCase();
			if (this.options.i18n.hasOwnProperty(iso2)) {
				country.name = this.options.i18n[iso2];
			}
		});
	}
  
	//* Generate all of the markup for the plugin: the selected country overlay, and the dropdown.
	private _generateMarkup(): void {
		this.numberInput.classList.add(buildElementClass(this.options.styles, StyleElement.NumberInput));
	
		//* If autocomplete does not exist on the element and its form, then
		//* prevent autocomplete as there's no safe, cross-browser event we can react to, so it can
		//* easily put the plugin in an inconsistent state e.g. the wrong flag selected for the
		//* autocompleted number, which on submit could mean wrong number is saved.
		const autocompleteAttribute = "autocomplete";
		if (
			!this.numberInput.hasAttribute(autocompleteAttribute) &&
			!(this.numberInput.form && this.numberInput.form.hasAttribute(autocompleteAttribute))
		) {
			this.numberInput.setAttribute(autocompleteAttribute, "off");
		}
	
		const {
			allowDropdown,
			showFlags,
			styles,
			hiddenInput,
			dropdownContainer,
			fixDropdownWidth,
			useFullscreenPopup,
			countrySearch,
			i18n,
		} = this.options;
	
		//* Containers (mostly for positioning).
		let parentClass = styles.elementParentClass;
		if (allowDropdown) {
			parentClass += ` ${buildElementClass(styles, undefined, StyleAttribute.AllowDropdown)}`;
		}
		if (showFlags) {
			parentClass += ` ${buildElementClass(styles, undefined, StyleAttribute.ShowFlags)}`;
		}
		if (styles.elementContainerClass) {
			parentClass += ` ${styles.elementContainerClass}`;
		}
		if (!useFullscreenPopup) {
			parentClass += ` ${buildElementClass(styles, undefined, StyleAttribute.InlineDropdown)}`;
		}
	
		const wrapper = createDOMElement(
			"div",
			{
				class: parentClass,
			},
		);
		this.numberInput.parentNode?.insertBefore(wrapper, this.numberInput);
	
		//* Even if allowDropdown is disabled, we still want to show the flag for the currently typed number.
		if (allowDropdown || showFlags) {
			this.countryContainer = createDOMElement(
				"div",
				{
					class: buildElementClass(this.options.styles, StyleElement.CountryContainer),
				},
				wrapper,
			);
	
			//* Selected country (displayed on left of input while allowDropdown is enabled, otherwise to right)
			//* https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only
			if (allowDropdown) {
				this.selectedCountry = createDOMElement(
					"button",
					{
						type: "button",
						class: buildElementClass(this.options.styles, StyleElement.SelectedCountry),
						"aria-expanded": "false",
						"aria-label": this.options.i18n.selectedCountryAriaLabel,
						"aria-haspopup": "true",
						"aria-controls": `${buildElementClass(this.options.styles, StyleElement.DropdownContent)}-${this.id}`,
						"role": "combobox",
					},
					this.countryContainer,
				);
		
				if (this.numberInput.disabled) {
					this.selectedCountry.setAttribute("disabled", "true");
				}
			} else {
				this.selectedCountry = createDOMElement(
					"div",
					{
						class: buildElementClass(styles, StyleElement.SelectedCountry),
					},
					this.countryContainer,
				);
			}
	
			// The element that gets a grey background on hover (if allowDropdown enabled)
			const selectedCountryPrimary = createDOMElement(
				"div", 
				{
					class: buildElementClass(this.options.styles, StyleElement.SelectedCountryPrimary),
				},
				this.selectedCountry,
			);
	
			//* This is where we will add the selected flag (or globe) class later
			this.selectedCountryInner = createDOMElement(
				"div",
				null,
				selectedCountryPrimary
			);
			this.selectedCountryA11yText = createDOMElement(
				"span",
				{
					class: buildElementClass(this.options.styles, StyleElement.AccessibilityText),
				},
				this.selectedCountryInner,
			);
	
			if (allowDropdown) {
				this.dropdownArrow = createDOMElement(
					"div",
					{
						class: buildElementClass(this.options.styles, StyleElement.Arrow),
						"aria-hidden": "true",
					},
					selectedCountryPrimary,
				);

				const extraClasses = fixDropdownWidth ? "" : buildElementClass(styles, undefined, StyleAttribute.FlexibleDropdownWidth);
				this.dropdownContent = createDOMElement("div", {
					id: `${buildElementClass(this.options.styles, StyleElement.DropdownContent)}-${this.id}`,
					class: `${buildElementClass(this.options.styles, StyleElement.DropdownContent)} ${buildElementClass(this.options.styles, StyleElement.Hide)} ${extraClasses}`,
				});
		
				if (countrySearch) {
					this.searchInput = createDOMElement(
						"input",
						{
							type: "text",
							class: buildElementClass(styles, StyleElement.SearchInput),
							placeholder: i18n.searchPlaceholder,
							role: "combobox",
							"aria-expanded": "true",
							"aria-label": i18n.searchPlaceholder,
							"aria-controls": `${buildElementClass(this.options.styles, StyleElement.CountryListbox)}-${this.id}`,
							"aria-autocomplete": "list",
							"autocomplete": "off",
						},
						this.dropdownContent,
					) as HTMLInputElement;
					this.searchResultsA11yText = createDOMElement(
						"span",
						{
							class: buildElementClass(this.options.styles, StyleElement.AccessibilityText)
						},
						this.dropdownContent,
					);
				}
			
				this.countryList = createDOMElement(
					"ul",
					{
						class: buildElementClass(this.options.styles, StyleElement.CountryListbox),
						id: `${buildElementClass(this.options.styles, StyleElement.CountryListbox)}-${this.id}`,
						role: "listbox",
						"aria-label": i18n.countryListAriaLabel,
					},
					this.dropdownContent,
				);
				this._appendListItems();

				if (countrySearch) {
					this._updateSearchResultsText();
				}
			
				//* Create dropdownContainer markup.
				if (dropdownContainer) {
					let dropdownClasses = buildElementClass(this.options.styles);
					if (useFullscreenPopup) {
						dropdownClasses += ` ${buildElementClass(this.options.styles, undefined, StyleAttribute.FullscreenPopup)}`;
					} else {
						dropdownClasses += ` ${buildElementClass(this.options.styles, undefined, StyleAttribute.InlineDropdown)}`;
					}
					this.dropdown = createDOMElement(
						"div",
						{
							class: dropdownClasses
						},
					);
					this.dropdown.appendChild(this.dropdownContent);
				} else {
					this.countryContainer.appendChild(this.dropdownContent);
				}
			}
		}
	
		wrapper.appendChild(this.numberInput);
	
		if (hiddenInput) {
			const numberInputName = this.numberInput.getAttribute("name") || "";
			const names = hiddenInput(numberInputName);
	
			if (names.phone) {
				//* Create hidden input for the full international number.
				this.hiddenInput = createDOMElement(
					"input",
					{
						type: "hidden",
						name: names.phone,
					},
				) as HTMLInputElement;
				wrapper.appendChild(this.hiddenInput);
			}
	
			if (names.country) {
				//* Create hidden input for the selected country iso2 code.
				this.hiddenInputCountry = createDOMElement(
					"input",
					{
						type: "hidden",
						name: names.country,
					},
				) as HTMLInputElement;
				wrapper.appendChild(this.hiddenInputCountry);
			}
		}
	}
  
	//* For each country: add a country list item <li> to the countryList <ul> container.
	private _appendListItems(): void {
		this.countries.forEach((country, index) => {
			//* Start by highlighting the first item (useful when countrySearch disabled).
			const extraClass = index === 0 ? buildElementClass(this.options.styles, StyleElement.Highlight) : "";
	
			const listItem = createDOMElement(
				"li",
				{
					id: `${buildElementClass(this.options.styles, StyleElement.Item)}-${this.id}-${country.iso2}`,
					class: `${buildElementClass(this.options.styles, StyleElement.Country)} ${extraClass}`,
					tabindex: "-1",
					role: "option",
					[DataAttributes.CountryCode]: country.iso2,
					"aria-selected": "false",
				},
				this.countryList,
			);
			//* Store this for later use e.g. country search filtering.
			country.nodeById[this.id] = listItem;
	
			//* Add the flag.
			if (this.options.showFlags) {
				const flagBoxElement = createDOMElement(
					"div",
					{
						class: buildElementClass(this.options.styles, StyleElement.FlagBox),
					},
				);
				createDOMElement(
					"div",
					{
						class: `${buildElementClass(this.options.styles, StyleElement.Flag)} ${buildElementClass(this.options.styles, country.iso2)}`,
					},
					flagBoxElement,
				);
				listItem.insertAdjacentElement(
					"beforeend",
					flagBoxElement,
				);
			}

			const content = createDOMElement(
				"span",
				{
					class: buildElementClass(this.options.styles, StyleElement.CountryName),
				},
			);
			content.insertAdjacentText(
				"beforeend",
				`${country.name}`,
			);
			listItem.insertAdjacentElement(
				"beforeend",
				content,
			);
		});
	}
  
	//* Set the initial state of the input value and the selected country by:
	//* 1. Using explicit initialCountry
	private _setInitialState(overrideAutoCountry: boolean = false): void {
		const attributeValue = this.numberInput.getAttribute("value");
		const inputValue = this.numberInput.value;
		const useAttribute =
			attributeValue &&
			attributeValue.charAt(0) === "+" &&
			(!inputValue || inputValue.charAt(0) !== "+");
		const val = useAttribute ? attributeValue : inputValue;
		const { initialCountry, geoIpLookup } = this.options;
		const isAutoCountry = initialCountry === "auto" && geoIpLookup;

		if (!isAutoCountry || overrideAutoCountry) {
			const lowerInitialCountry = initialCountry ? initialCountry.toLowerCase() : "";
			const isValidInitialCountry = lowerInitialCountry && this._getCountryData(lowerInitialCountry, true);
			//* See if we should select a country.
			if (isValidInitialCountry) {
				this._setCountry(lowerInitialCountry);
			} else {
				//* Display the empty state (globe icon).
				this._setCountry();
			}
		}

		if (val) {
			this._updateValFromNumber(val);
		}
	}
  
	//* Initialise the main event listeners: input keyup, and click selected country.
	private _initListeners(): void {
		this._initNumberInputListeners();
		if (this.options.allowDropdown) {
			this._initDropdownListeners();
		}
		if ((this.hiddenInput || this.hiddenInputCountry) && this.numberInput.form) {
			this._initHiddenInputListener();
		}
	}
  
	//* Update hidden input on form submit.
	private _initHiddenInputListener(): void {
		this._handleHiddenInputSubmit = (): void => {
			if (this.hiddenInput) {
				this.hiddenInput.value = this.getNumber();
			}
			if (this.hiddenInputCountry) {
				this.hiddenInputCountry.value = this.getSelectedCountryData().iso2 || "";
			}
		};
		this.numberInput.form?.addEventListener(
			"submit",
			this._handleHiddenInputSubmit,
		);
	}
  
	//* initialise the dropdown listeners.
	private _initDropdownListeners(): void {
		const elementHideClass = buildElementClass(this.options.styles, StyleElement.Hide)
		//* Hack for input nested inside label (which is valid markup): clicking the selected country to
		//* open the dropdown would then automatically trigger a 2nd click on the input which would
		//* close it again.
		this._handleLabelClick = (e: Event): void => {
			//* If the dropdown is closed, then focus the input, else ignore the click.
			if (this.dropdownContent.classList.contains(elementHideClass)) {
				this.numberInput.focus();
			} else {
				e.preventDefault();
			}
		};
		const label = this.numberInput.closest("label");
		if (label) {
			label.addEventListener("click", this._handleLabelClick);
		}
	
		//* Toggle country dropdown on click.
		this._handleClickSelectedCountry = (): void => {
			//* Only intercept this event if we're opening the dropdown
			//* else let it bubble up to the top ("click-off-to-close" listener)
			//* we cannot just stopPropagation as it may be needed to close another instance.
			if (
				this.dropdownContent.classList.contains(elementHideClass) &&
				!this.numberInput.disabled &&
				!this.numberInput.readOnly
			) {
				this._openDropdown();
			}
		};
		this.selectedCountry.addEventListener("click", this._handleClickSelectedCountry);
	
		//* Open dropdown if selected country is focused and they press up/down/space/enter.
		this._handleCountryContainerKeydown = (e: KeyboardEvent): void => {
			const isDropdownHidden = this.dropdownContent.classList.contains(elementHideClass);
	
			if (
				isDropdownHidden &&
				[KeyboardKey.ArrowUp, KeyboardKey.ArrowDown, KeyboardKey.Space, KeyboardKey.Enter].map<string>((key) => key.toString()).includes(e.key)
			) {
				//* Prevent form from being submitted if "ENTER" was pressed.
				e.preventDefault();
				//* Prevent event from being handled again by document.
				e.stopPropagation();
				this._openDropdown();
			}
	
			//* Allow navigation from dropdown to input on TAB.
			if (e.key === KeyboardKey.Tab) {
				this._closeDropdown();
			}
		};
		this.countryContainer.addEventListener(
			"keydown",
			this._handleCountryContainerKeydown,
		);
	}
  
	//* Init many requests: utils script / geo ip lookup.
	private _initRequests(): void {
		const { utilsScriptPath, initialCountry, geoIpLookup } = this.options;
		//* If the user has specified the path to the utils script, fetch it on window.load, else resolve.
		if (utilsScriptPath && !internationalNumberInput.utils) {
			//* If the plugin is being initialised after the window.load event has already been fired.
			if (internationalNumberInput.documentReady()) {
				internationalNumberInput.loadUtils(utilsScriptPath);
			} else {
			//* Wait until the load event so we don't block any other requests e.g. the flags image.
			window.addEventListener("load", () => {
				internationalNumberInput.loadUtils(utilsScriptPath);
			});
			}
		} else {
			this.resolveUtilsScriptPromise();
		}
	
		//* Don't bother with IP lookup if we already have a selected country.
		const isAutoCountry = initialCountry === "auto" && geoIpLookup;
		if (isAutoCountry && !this.selectedCountryData.iso2) {
			this._loadAutoCountry();
		} else {
			this.resolveAutoCountryPromise();
		}
	}
  
	//* Perform the geo ip lookup.
	private _loadAutoCountry(): void {
		//* 3 options:
		//* 1) Already loaded (we're done)
		//* 2) Not already started loading (start)
		//* 3) Already started loading (do nothing - just wait for loading callback to fire)
		if (internationalNumberInput.autoCountry) {
			this.handleAutoCountry();
		} else if (!internationalNumberInput.startedLoadingAutoCountry) {
			//* Don't do this twice!
			internationalNumberInput.startedLoadingAutoCountry = true;
	
			if (typeof this.options.geoIpLookup === "function") {
				this.options.geoIpLookup(
					(iso2 = "") => {
					const iso2Lower = iso2.toLowerCase();
					const isValidIso2 = iso2Lower && this._getCountryData(iso2Lower, true);
					if (isValidIso2) {
						internationalNumberInput.autoCountry = iso2Lower;
						//* Tell all instances the auto country is ready.
						//TODO: this should just be the current instances
						//* UPDATE: use setTimeout in case their geoIpLookup function calls this callback straight
						//* away (e.g. if they have already done the geo ip lookup somewhere else). Using
						//* setTimeout means that the current thread of execution will finish before executing
						// * this, which allows the plugin to finish initialising.
						setTimeout(() => forEachInstance("handleAutoCountry"));
					} else {
						// this._setInitialState(true);
						this._setInitialState();
						forEachInstance("rejectAutoCountryPromise");
					}
					},
					() => {
						// this._setInitialState(true);
						this._setInitialState();
						forEachInstance("rejectAutoCountryPromise");
					},
				);
			}
		}
	}
  
	//* Initialize the number input listeners.
	private _initNumberInputListeners(): void {
		const { strictMode, formatAsYouType, formatOnDisplay } = this.options;
		let userOverrideFormatting = false;
	
		// const openDropdownWithPlus = () => {
		//   this._openDropdown();
		//   this.searchInput.value = "+";
		//   this._filterCountries("", true);
		// };
	
		//* On input event: (1) Update selected country, (2) Format-as-you-type.
		//* Note that this fires AFTER the input is updated.
		this._handleInputEvent = (e: InputEvent): void => {
			//* Update selected country.
			if (this._updateCountryFromNumber(this.numberInput.value)) {
				this._triggerCountryChange();
			}
	
			//* If user types their own formatting char (not a plus or a numeric), or they paste something, then set the override.
			const isFormattingChar = e?.data && /[^+0-9]/.test(e.data);
			const isPaste = e?.inputType === "insertFromPaste" && this.numberInput.value;
			if (isFormattingChar || (isPaste && !strictMode)) {
				userOverrideFormatting = true;
			}
			//* If user removes all formatting chars, then reset the override.
			else if (!/[^+0-9]/.test(this.numberInput.value)) {
				userOverrideFormatting = false;
			}
	
			const disableFormatOnSetNumber = e?.detail && e.detail["isSetNumber"] && !formatOnDisplay;
			//* Handle format-as-you-type, unless userOverrideFormatting, or disableFormatOnSetNumber.
			if (formatAsYouType && !userOverrideFormatting && !disableFormatOnSetNumber) {
				//* Maintain caret position after reformatting.
				const currentCaretPos = this.numberInput.selectionStart || 0;
				const valueBeforeCaret = this.numberInput.value.substring(0, currentCaretPos);
				const relevantCharsBeforeCaret = valueBeforeCaret.replace(/[^+0-9]/g, "").length;
				const isDeleteForwards = e?.inputType === "deleteContentForward";
				const formattedValue = this._formatNumberAsYouType();
				const newCaretPos = translateCursorPosition(relevantCharsBeforeCaret, formattedValue, currentCaretPos, isDeleteForwards);
				this.numberInput.value = formattedValue;
				this.numberInput.setSelectionRange(newCaretPos, newCaretPos);
			}
		};
		//* This handles individual key presses as well as cut/paste events
		//* the advantage of the "input" event over "keyup" etc is that "input" only fires when the value changes,
		//* whereas "keyup" fires even for shift key, arrow key presses etc.
		this.numberInput.addEventListener("input", this._handleInputEvent as EventListener);
	
		if (strictMode) {
			//* On keydown event: (1) if strictMode then prevent invalid characters, (2) if separateDialCode then handle plus key
			//* Note that this fires BEFORE the input is updated.
			this._handleKeydownEvent = (e: KeyboardEvent): void => {
			//* Only interested in actual character presses, rather than ctrl, alt, command, arrow keys, delete/backspace, cut/copy/paste etc.
			if (e.key && e.key.length === 1 && !e.altKey && !e.ctrlKey && !e.metaKey) {
				//* If strictMode, prevent invalid characters.
				if (strictMode) {
					const isInitialPlus = this.numberInput.selectionStart === 0 && e.key === "+";
					const isNumeric = /^[0-9]$/.test(e.key);
					const isAllowedChar = isInitialPlus || isNumeric;
					// const fullNumber = this._getFullNumber();
					// TODO Set coreNumber
					// const coreNumber = internationalNumberInput.utils.getCoreNumber(fullNumber, this.selectedCountryData.iso2);
					const coreNumber = "123";
					const hasReachedMaxLength = this.maxCoreNumberLength && coreNumber.length >= this.maxCoreNumberLength;
					const selectedText = this.numberInput.value.substring(this.numberInput.selectionStart, this.numberInput.selectionEnd);
					const hasSelectedDigit = /\d/.test(selectedText);
					// ignore the char if (1) it's not an allowed char, or (2) the input has reached max length and no digit is selected (which will be replaced by the new char)
					if (!isAllowedChar || (hasReachedMaxLength && !hasSelectedDigit)) {
						e.preventDefault();
					}
				}
			}
			};
			this.numberInput.addEventListener("keydown", this._handleKeydownEvent);
		}
	}
  
	//* Adhere to the input's maxlength attr.
	private _cap(number: string): string {
		const max = parseInt(this.numberInput.getAttribute("maxlength") || "", 10);
		return (max && number.length > max) ? number.substring(0, max) : number;
	}
  
	//* Trigger a custom event on the input.
	private _trigger(name: string, detailProps: object = {}): void {
		const e = new CustomEvent(name, {
			bubbles: true,
			cancelable: true,
			detail: detailProps,
		});
		this.numberInput.dispatchEvent(e);
	}
  
	//* Open the dropdown.
	private _openDropdown(): void {
		const { fixDropdownWidth, countrySearch } = this.options;
		if (fixDropdownWidth) {
			this.dropdownContent.style.width = `${this.numberInput.offsetWidth}px`;
		}
		this.dropdownContent.classList.remove(buildElementClass(this.options.styles, StyleElement.Hide));
		this.selectedCountry.setAttribute("aria-expanded", "true");
	
		this._setDropdownPosition();
	
		if (countrySearch) {
			//* When countrySearch enabled, every time the dropdown is opened we reset by highlighting the first item and scrolling to top.
			const firstCountryItem = this.countryList.firstElementChild as HTMLElement;
			if (firstCountryItem) {
				this._highlightListItem(firstCountryItem, false);
				this.countryList.scrollTop = 0;
			}
			this.searchInput.focus();
		}
	
		//* Bind all the dropdown-related listeners: mouseover, click, click-off, keydown.
		this._bindDropdownListeners();
	
		//* Update the arrow.
		this.dropdownArrow.classList.add(buildElementClass(this.options.styles, StyleElement.Arrow, StyleAttribute.Up));
		this.dropdownArrow.classList.add(buildElementClass(this.options.styles, StyleElement.Arrow, StyleAttribute.Down));
	
		this._trigger("open:countrydropdown");
	}
  
	//* Set the dropdown position
	private _setDropdownPosition(): void {
		if (this.options.dropdownContainer) {
			this.options.dropdownContainer.appendChild(this.dropdown);
		}
	
		if (!this.options.useFullscreenPopup) {
			// getBoundingClientRect is relative to the viewport, so when you scroll down, pos.top goes down, hence needing to add on scrollTop below
			const inputPosRelativeToVP = this.numberInput.getBoundingClientRect();
			const inputHeight = this.numberInput.offsetHeight;
	
			//* If dropdownContainer is enabled, calculate postion.
			if (this.options.dropdownContainer) {
				//* Calculate position.
				this.dropdown.style.top = `${inputPosRelativeToVP.top + inputHeight}px`;
				this.dropdown.style.left = `${inputPosRelativeToVP.left}px`;
		
				//* Close menu on window scroll.
				this._handleWindowScroll = (): void => this._closeDropdown();
				window.addEventListener("scroll", this._handleWindowScroll);
			}
		}
	}
  
	//* We only bind dropdown listeners when the dropdown is open.
	private _bindDropdownListeners(): void {
		//* When mouse over a list item, just highlight that one
		//* we add the class "highlight", so if they hit "enter" we know which one to select.
		const countryClass = buildElementClass(this.options.styles, StyleElement.Country);
		this._handleMouseoverCountryList = (e): void => {
			//* Handle event delegation, as we're listening for this event on the countryList.
			const listItem: HTMLElement | null = (e.target as HTMLElement)?.closest(`.${countryClass}`);
			if (listItem) {
			this._highlightListItem(listItem, false);
			}
		};
		this.countryList.addEventListener(
			"mouseover",
			this._handleMouseoverCountryList,
		);
	
		//* Listen for country selection.
		this._handleClickCountryList = (e): void => {
		const listItem: HTMLElement | null = (e.target as HTMLElement)?.closest(`.${countryClass}`);
			if (listItem) {
			this._selectListItem(listItem);
			}
		};
		this.countryList.addEventListener("click", this._handleClickCountryList);
	
		//* Click off to close (except when this initial opening click is bubbling up).
		//* We cannot just stopPropagation as it may be needed to close another instance.
		let isOpening = true;
		this._handleClickOffToClose = (): void => {
			if (!isOpening) {
			this._closeDropdown();
			}
			isOpening = false;
		};
		document.documentElement.addEventListener(
			"click",
			this._handleClickOffToClose,
		);
	
		//* Listen for up/down scrolling, enter to select, or escape to close.
		//* Use keydown as keypress doesn't fire for non-char keys and we want to catch if they
		//* just hit down and hold it to scroll down (no keyup event).
		//* Listen on the document because that's where key events are triggered if no input has focus.
		let query = "";
		let queryTimer: NodeJS.Timeout | null = null;
		this._handleKeydownOnDropdown = (e: KeyboardEvent): void => {
			//* prevent down key from scrolling the whole page, and enter key from submitting a form etc.
			if ([KeyboardKey.ArrowUp, KeyboardKey.ArrowDown, KeyboardKey.Enter, KeyboardKey.Escape].map<string>((key) => key.toString()).includes(e.key)) {
			e.preventDefault();
			e.stopPropagation();
	
			//* Up and down to navigate.
			if (e.key === KeyboardKey.ArrowUp || e.key === KeyboardKey.ArrowDown) {
				this._handleUpDownKey(e.key);
			}
			//* Enter to select.
			else if (e.key === KeyboardKey.Enter) {
				this._handleEnterKey();
			}
			//* Esc to close
			else if (e.key === KeyboardKey.Escape) {
				this._closeDropdown();
			}
			}
	
			//* When countrySearch disabled: Listen for alpha chars to perform hidden search.
			//* Regex allows one latin alpha char or space, based on https://stackoverflow.com/a/26900132/217866.
			if (!this.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
			e.stopPropagation();
			//* Jump to countries that start with the query string.
			if (queryTimer) {
				clearTimeout(queryTimer);
			}
			query += e.key.toLowerCase();
			this._searchForCountry(query);
			//* If the timer hits 1 second, reset the query.
			queryTimer = setTimeout(() => {
				query = "";
			}, 1000);
			}
		};
		document.addEventListener("keydown", this._handleKeydownOnDropdown);
	
		if (this.options.countrySearch) {
			const doFilter = (): void => {
			const inputQuery = this.searchInput.value.trim();
			if (inputQuery) {
				this._filterCountries(inputQuery);
			} else {
				this._filterCountries("", true);
			}
			};
		
			let keyupTimer: NodeJS.Timeout | null = null;
			this._handleSearchChange = (): void => {
			//* Filtering country nodes is expensive (lots of DOM manipulation), so rate limit it.
			if (keyupTimer) {
				clearTimeout(keyupTimer);
			}
			keyupTimer = setTimeout(() => {
				doFilter();
				keyupTimer = null;
			}, 100);
			};
			this.searchInput.addEventListener("input", this._handleSearchChange);
		
			//* Stop propagation on search input click, so doesn't trigger click-off-to-close listener.
			this.searchInput.addEventListener("click", (e) => e.stopPropagation());
		}
	}
  
	//* Hidden search (countrySearch disabled): Find the first list item whose name starts with the query string.
	private _searchForCountry(query: string): void {
		for (let i = 0; i < this.countries.length; i++) {
			const c = this.countries[i];
			const startsWith = c.name.substr(0, query.length).toLowerCase() === query;
			if (startsWith) {
				const listItem = c.nodeById[this.id];
				//* Update highlighting and scroll.
				this._highlightListItem(listItem, false);
				this._scrollTo(listItem);
				break;
			}
		}
	}
  
	//* Country search enabled: Filter the countries according to the search query.
	private _filterCountries(query: string, isReset: boolean = false): void {
		let noCountriesAddedYet = true;
		this.countryList.innerHTML = "";
		const normalisedQuery = normaliseString(query);
		for (let i = 0; i < this.countries.length; i++) {
			const c = this.countries[i];
			const normalisedCountryName = normaliseString(c.name);
			if (
				isReset ||
				normalisedCountryName.includes(normalisedQuery) ||
				c.iso2.includes(normalisedQuery)
			) {
			const listItem = c.nodeById[this.id];
			if (listItem) {
				this.countryList.appendChild(listItem);
			}
			//* Highlight the first item.
			if (noCountriesAddedYet) {
				this._highlightListItem(listItem, false);
				noCountriesAddedYet = false;
			}
			}
		}
		//* If no countries are shown, unhighlight the previously highlighted item.
		if (noCountriesAddedYet) {
			this._highlightListItem(null, false);
		}
		//* Scroll to top (useful if user had previously scrolled down).
		this.countryList.scrollTop = 0;
		this._updateSearchResultsText();
	}
  
	//* Update search results text (for a11y).
	private _updateSearchResultsText(): void {
		const { i18n } = this.options;
		const count = this.countryList.childElementCount;
		let searchText;
		if (count === 0) {
			searchText = i18n.zeroSearchResults;
		} else if (count === 1) {
			searchText = i18n.oneSearchResult;
		} else {
			// eslint-disable-next-line no-template-curly-in-string
			searchText = i18n.multipleSearchResults.replace("${count}", count.toString());
		}
		this.searchResultsA11yText.textContent = searchText;
	}
  
	//* Highlight the next/prev item in the list (and ensure it is visible).
	private _handleUpDownKey(key: string): void {
		let next =
			key === KeyboardKey.ArrowUp
			? this.highlightedItem?.previousElementSibling as HTMLElement
			: this.highlightedItem?.nextElementSibling as HTMLElement;
		if (!next && this.countryList.childElementCount > 1) {
			//* Otherwise, we must be at the end, so loop round again.
			next =
				key === KeyboardKey.ArrowUp
					? this.countryList.lastElementChild as HTMLElement
					: this.countryList.firstElementChild as HTMLElement;
		}
		if (next) {
			//* Make sure the next item is visible
			//* (before calling focus(), which can cause the next item to scroll to the middle of the dropdown, which is jarring).
			this._scrollTo(next);
			//* If country search enabled, don't lose focus from the search input on up/down
			this._highlightListItem(next, false);
		}
	}
  
	//* Select the currently highlighted item.
	private _handleEnterKey(): void {
		if (this.highlightedItem) {
			this._selectListItem(this.highlightedItem);
		}
	}
  
	//* Update the input's value to the given val (format first if possible)
	//* NOTE: this is called from _setInitialState, handleUtils and setNumber.
	private _updateValFromNumber(fullNumber: string): void {
		let number = fullNumber;
		// if (
		// 	this.options.formatOnDisplay &&
		// 	this.selectedCountryData
		// ) {
		// 	const useNational =
		// 	this.options.nationalMode;
		// 	const { NATIONAL, INTERNATIONAL } = internationalNumberInput.utils.numberFormat;
		// 	const format = useNational ? NATIONAL : INTERNATIONAL;
		// 	number = internationalNumberInput.utils.formatNumber(
		// 		number,
		// 		this.selectedCountryData.iso2,
		// 		format,
		// 	);
		// }
	
		number = this._beforeSetNumber(number);
		this.numberInput.value = number;
	}
  
	//* Check if need to select a new country based on the given number
	//* Note: called from _setInitialState, keyup handler, setNumber.
	private _updateCountryFromNumber(fullNumber: string): boolean {
		const plusIndex = fullNumber.indexOf("+");
		//* If it contains a plus, discard any chars before it e.g. accidental space char.
		//* This keeps the selected country auto-updating correctly, which we want as
		//* libphonenumber's validation/getNumber methods will ignore these chars anyway.
		let number = plusIndex ? fullNumber.substring(plusIndex) : fullNumber;
		let iso2: string | null = null;

		if (!this.selectedCountryData.iso2) {
			//* If no selected country, then show default.
			iso2 = this.defaultCountry;
		}

		if (iso2 !== null) {
			return this._setCountry(iso2);
		}

		return false;
	}
  
	//* Remove highlighting from other list items and highlight the given item.
	private _highlightListItem(listItem: HTMLElement | null, shouldFocus: boolean): void {
		const elementHighlightClass = buildElementClass(this.options.styles, StyleElement.Highlight);
		const prevItem = this.highlightedItem;
		if (prevItem) {
			prevItem.classList.remove(elementHighlightClass);
			prevItem.setAttribute("aria-selected", "false");
		}
		//* Set this, even if it's null, as it will clear the highlight.
		this.highlightedItem = listItem;
		if (this.highlightedItem) {
			this.highlightedItem.classList.add(elementHighlightClass);
			this.highlightedItem.setAttribute("aria-selected", "true");
			const activeDescendant = this.highlightedItem.getAttribute("id") || "";
			this.selectedCountry.setAttribute("aria-activedescendant", activeDescendant);
			if (this.options.countrySearch) {
				this.searchInput.setAttribute("aria-activedescendant", activeDescendant);
			}
		}
	
		if (shouldFocus) {
			this.highlightedItem.focus();
		}
	}
  
	//* Find the country data for the given iso2 code
	//* the ignoreOnlyCountriesOption is only used during init() while parsing the onlyCountries array
	private _getCountryData(iso2: string, allowFail: boolean): Country | null {
		for (let i = 0; i < this.countries.length; i++) {
			if (this.countries[i].iso2 === iso2) {
				return this.countries[i];
			}
		}
		if (allowFail) {
			return null;
		}
		throw new Error(`No country data for '${iso2}'`);
	}
  
	//* Update the selected country, dial code (if separateDialCode), placeholder, title, and active list item.
	//* Note: called from _setInitialState, _updateCountryFromNumber, _selectListItem, setCountry.
	private _setCountry(iso2?: string | null): boolean {
		const { showFlags, i18n } = this.options;
	
		const prevCountry = this.selectedCountryData.iso2
			? this.selectedCountryData
			: {};
	
		//* Do this first as it will throw an error and stop if iso2 is invalid.
		this.selectedCountryData = iso2
			? this._getCountryData(iso2, false) || {}
			: {};
		//* Update the defaultCountry - we only need the iso2 from now on, so just store that.
		if (this.selectedCountryData.iso2) {
			this.defaultCountry = this.selectedCountryData.iso2;
		}
	
		//* Update the flag class and the a11y text.
		if (this.selectedCountryInner) {
			let flagClass = "";
			let a11yText = "";
			if (iso2 && showFlags) {
				flagClass = `${buildElementClass(this.options.styles, StyleElement.Flag)} ${buildElementClass(this.options.styles, iso2)}`;
				a11yText = this.selectedCountryData.name;
			} else {
				flagClass = `${buildElementClass(this.options.styles, StyleElement.Flag)} ${buildElementClass(this.options.styles, StyleElement.Globe)}`;
				a11yText = i18n.noCountrySelected;
			}
			this.selectedCountryInner.className = flagClass;
			this.selectedCountryA11yText.textContent = a11yText;
		}
	
		//* And the input's placeholder.
		this._updatePlaceholder();
	
		//* Update the maximum valid number length.
		this._updateMaxLength();
	
		//* Return if the country has changed or not.
		return prevCountry.iso2 !== iso2;
	}
  
	//* Update the maximum valid number length for the currently selected country.
	private _updateMaxLength(): void {
		const { strictMode, placeholderNumberType, validationNumberType } = this.options;
		if (strictMode && internationalNumberInput.utils) {
			if (this.selectedCountryData.iso2) {
				const numberType = internationalNumberInput.utils.numberType[placeholderNumberType];
				let exampleNumber = internationalNumberInput.utils.getExampleNumber(
					this.selectedCountryData.iso2,
					numberType,
				);
				//* See if adding more digits is still valid to get the true maximum valid length.
				let validNumber = exampleNumber;
				while (internationalNumberInput.utils.isPossibleNumber(exampleNumber, this.selectedCountryData.iso2, validationNumberType)) {
					validNumber = exampleNumber;
					exampleNumber += "0";
				}
				const coreNumber = internationalNumberInput.utils.getCoreNumber(validNumber, this.selectedCountryData.iso2);
				this.maxCoreNumberLength = coreNumber.length;
			} else {
				this.maxCoreNumberLength = null;
			}
		}
	}
  
	private _setSelectedCountryTitleAttribute(iso2: string | null = null): void {
		if (!this.selectedCountry) {
			return;
		}
	
		let title;
		if (iso2) {
			title = this.selectedCountryData.name;
		} else {
			title = "Unknown";
		}
	
		this.selectedCountry.setAttribute("title", title);
	}
  
	//* When the input is in a hidden container during initialisation, we must inject some markup
	//* into the end of the DOM to calculate the correct offsetWidth.
	//* NOTE: this is only used when separateDialCode is enabled, so countryContainer and selectedCountry
	//* will definitely exist.
	private _getHiddenSelectedCountryWidth(): number {
		//* To get the right styling to apply, all we need is a shallow clone of the container,
		//* and then to inject a deep clone of the selectedCountry element.
		if (this.numberInput.parentNode) {
			const containerClone = this.numberInput.parentNode.cloneNode(false) as HTMLElement;
			containerClone.style.visibility = "hidden";
			document.body.appendChild(containerClone);
	
			const countryContainerClone = this.countryContainer.cloneNode() as HTMLElement;
			containerClone.appendChild(countryContainerClone);
	
			const selectedCountryClone = this.selectedCountry.cloneNode(true) as HTMLElement;
			countryContainerClone.appendChild(selectedCountryClone);
	
			const width = selectedCountryClone.offsetWidth;
			document.body.removeChild(containerClone);
			return width;
		}
		return 0;
	}
  
	//* Update the input placeholder to an example number from the currently selected country.
	private _updatePlaceholder(): void {
		const {
			autoPlaceholder,
			placeholderNumberType,
			customPlaceholder,
		} = this.options;
		const shouldSetPlaceholder =
			autoPlaceholder === AutoPlaceholderType.Aggressive ||
			(!this.hadInitialPlaceholder && autoPlaceholder === AutoPlaceholderType.Polite);
	
		if (internationalNumberInput.utils && shouldSetPlaceholder) {
			const numberType = internationalNumberInput.utils.numberType[placeholderNumberType];
			//* Note: Must set placeholder to empty string if no country selected (globe icon showing).
			let placeholder = this.selectedCountryData.iso2
				? internationalNumberInput.utils.getExampleNumber(
						this.selectedCountryData.iso2,
						numberType,
					)
				: "";
	
			placeholder = this._beforeSetNumber(placeholder);
			if (typeof customPlaceholder === "function") {
				placeholder = customPlaceholder(placeholder, this.selectedCountryData);
			}
			this.numberInput.setAttribute("placeholder", placeholder);
		}
	}
  
	//* Called when the user selects a list item from the dropdown.
	private _selectListItem(listItem: HTMLElement): void {
		//* Update selected country and active list item.
		const countryChanged = this._setCountry(
			listItem.getAttribute(DataAttributes.CountryCode),
		);
		this._closeDropdown();
	
		//* Focus the input.
		this.numberInput.focus();
	
		if (countryChanged) {
			this._triggerCountryChange();
		}
	}
  
	//* Close the dropdown and unbind any listeners.
	private _closeDropdown(): void {
		this.dropdownContent.classList.add(buildElementClass(this.options.styles, StyleElement.Hide));
		this.selectedCountry.setAttribute("aria-expanded", "false");
		this.selectedCountry.removeAttribute("aria-activedescendant");
		if (this.highlightedItem) {
			this.highlightedItem.setAttribute("aria-selected", "false");
		}
		if (this.options.countrySearch) {
			this.searchInput.removeAttribute("aria-activedescendant");
		}
	
		//* Update the arrow.
		this.dropdownArrow.classList.remove(buildElementClass(this.options.styles, StyleElement.Arrow, StyleAttribute.Up));
	
		//* Unbind key events.
		document.removeEventListener("keydown", this._handleKeydownOnDropdown);
		if (this.options.countrySearch) {
			this.searchInput.removeEventListener("input", this._handleSearchChange);
		}
		document.documentElement.removeEventListener(
			"click",
			this._handleClickOffToClose,
		);
		this.countryList.removeEventListener(
			"mouseover",
			this._handleMouseoverCountryList,
		);
		this.countryList.removeEventListener("click", this._handleClickCountryList);
	
		//* Remove menu from container.
		if (this.options.dropdownContainer) {
			if (!this.options.useFullscreenPopup) {
				window.removeEventListener("scroll", this._handleWindowScroll);
			}
			if (this.dropdown.parentNode) {
				this.dropdown.parentNode.removeChild(this.dropdown);
			}
		}
	
		this._trigger("close:countrydropdown");
	}
  
	//* Check if an element is visible within it's container, else scroll until it is.
	private _scrollTo(element: HTMLElement): void {
		const container = this.countryList;
		const scrollTop = document.documentElement.scrollTop;
		const containerHeight = container.offsetHeight;
		const containerTop = container.getBoundingClientRect().top + scrollTop;
		const containerBottom = containerTop + containerHeight;
		const elementHeight = element.offsetHeight;
		const elementTop = element.getBoundingClientRect().top + scrollTop;
		const elementBottom = elementTop + elementHeight;
		const newScrollTop = elementTop - containerTop + container.scrollTop;
	
		if (elementTop < containerTop) {
			//* Scroll up.
			container.scrollTop = newScrollTop;
		} else if (elementBottom > containerBottom) {
			//* Scroll down.
			const heightDifference = containerHeight - elementHeight;
			container.scrollTop = newScrollTop - heightDifference;
		}
	}
  
	//* Get the input val
	private _getFullNumber(): string {
		const val = this.numberInput.value.trim();
		return val;
	}
  
	private _beforeSetNumber(fullNumber: string): string {
		const number = fullNumber;
		return this._cap(number);
	}
  
	//* Trigger the 'countrychange' event.
	private _triggerCountryChange(): void {
		this._trigger("countrychange");
	}
  
	//* Format the number as the user types.
	private _formatNumberAsYouType(): string {
		const val = this._getFullNumber();
		const result = internationalNumberInput.utils
			? internationalNumberInput.utils.formatNumberAsYouType(val, this.selectedCountryData.iso2)
			: val;
		return result;
	}
  
	//**************************
	//*  SECRET PUBLIC METHODS
	//**************************
  
	//* This is called when the geoip call returns.
	handleAutoCountry(): void {
		if (this.options.initialCountry === "auto" && internationalNumberInput.autoCountry) {
			//* We must set this even if there is an initial val in the input: in case the initial val is
			//* invalid and they delete it - they should see their auto country.
			this.defaultCountry = internationalNumberInput.autoCountry;
			const hasSelectedCountryOrGlobe = this.selectedCountryData.iso2 || this.selectedCountryInner.classList.contains(buildElementClass(this.options.styles, StyleElement.Globe));
			//* If no country/globe currently selected, then update the country.
			if (!hasSelectedCountryOrGlobe) {
				this.setCountry(this.defaultCountry);
			}
			this.resolveAutoCountryPromise();
		}
	}
  
	//* This is called when the utils request completes.
	handleUtils(): void {
		//* If the request was successful
		if (internationalNumberInput.utils) {
			//* If there's an initial value in the input, then format it.
			if (this.numberInput.value) {
				this._updateValFromNumber(this.numberInput.value);
			}
			if (this.selectedCountryData.iso2) {
				this._updatePlaceholder();
				this._updateMaxLength();
			}
		}
		this.resolveUtilsScriptPromise();
	}
  
	//********************
	//*  PUBLIC METHODS
	//********************
  
	//* Remove plugin.
	destroy(): void {
		const { allowDropdown } = this.options;
		if (allowDropdown) {
			//* Make sure the dropdown is closed (and unbind listeners).
			this._closeDropdown();
			this.selectedCountry.removeEventListener(
				"click",
				this._handleClickSelectedCountry,
			);
			this.countryContainer.removeEventListener(
				"keydown",
				this._handleCountryContainerKeydown,
			);
			//* Label click hack.
			const label = this.numberInput.closest("label");
			if (label) {
				label.removeEventListener("click", this._handleLabelClick);
			}
		}
	
		//* Unbind hiddenInput listeners.
		const { form } = this.numberInput;
		if (this._handleHiddenInputSubmit && form) {
			form.removeEventListener("submit", this._handleHiddenInputSubmit);
		}
	
		//* Unbind key events, and cut/paste events.
		this.numberInput.removeEventListener("input", this._handleInputEvent as EventListener);
		if (this._handleKeydownEvent) {
			this.numberInput.removeEventListener("keydown", this._handleKeydownEvent);
		}
	
		//* Remove attribute of id instance
		this.numberInput.removeAttribute(DataAttributes.InputId);
	
		//* Remove markup (but leave the original input).
		const wrapper = this.numberInput.parentNode;
		wrapper?.parentNode?.insertBefore(this.numberInput, wrapper);
		wrapper?.parentNode?.removeChild(wrapper);
	
		delete internationalNumberInput.instances[this.id];
	}
  
	//* Format the number to the given format.
	getNumber(format?: number): string {
		if (internationalNumberInput.utils) {
			const { iso2 } = this.selectedCountryData;
			return internationalNumberInput.utils.formatNumber(
				this._getFullNumber(),
				iso2,
				format,
			);
		}
		return "";
	}
  
	//* Get the type of the entered number
	getNumberType(): NumberType {
		// TODO
		return NumberType.NationalIdentificationNumber;
	}
  
	//* Get the country data for the currently selected country.
	getSelectedCountryData(): SelectedCountryData {
		return this.selectedCountryData;
	}
  
	//* Get the validation error.
	getValidationError(): ValidateReturn {
		if (internationalNumberInput.utils) {
			const { iso2 } = this.selectedCountryData;
			return internationalNumberInput.utils.getValidationError(this._getFullNumber(), iso2);
		}
		return { isValid: false, error: new exceptions.ValidationError("An unknown error occurred") };;
	}
  
	//* Validate the input val
	isValidNumber(): boolean | null {
		const val = this._getFullNumber();
		//* Return false for any alpha chars.
		if (/\p{L}/u.test(val)) {
			return false;
		}
		return internationalNumberInput.utils
			? internationalNumberInput.utils.isPossibleNumber(val, this.selectedCountryData.iso2, this.options.validationNumberType)
			: null;
	}
  
	//* Validate the input val (precise)
	isValidNumberPrecise(): boolean | null {
		const val = this._getFullNumber();
		//* Return false for any alpha chars.
		if (/\p{L}/u.test(val)) {
			return false;
		}
		return internationalNumberInput.utils
			? internationalNumberInput.utils.isValidNumber(val, this.selectedCountryData.iso2)
			: null;
	}
  
	//* Update the selected country, and update the input val accordingly.
	setCountry(iso2: string): void {
		const iso2Lower = iso2?.toLowerCase();
		const currentCountry = this.selectedCountryData.iso2;
		/**
		 * There is a country change IF:
		 * - there is a new country and it's different to the current one
		 * - OR there is no new country (i.e. globe state) and there is a current country
		 */
		const isCountryChange = (iso2 && (iso2Lower !== currentCountry) || (!iso2 && currentCountry));
		if (isCountryChange) {
			this._setCountry(iso2Lower);
			this._triggerCountryChange();
		}
	}
  
	//* Set the input value and update the country.
	setNumber(number: string): void {
		//* We must update the country first, which updates this.selectedCountryData, which is used for
		//* formatting the number before displaying it.
		const countryChanged = this._updateCountryFromNumber(number);
		this._updateValFromNumber(number);
		if (countryChanged) {
			this._triggerCountryChange();
		}
		//* This is required for the React cmp to update its state correctly.
		this._trigger("input", { isSetNumber: true });
	}
  
	//* Set the placeholder number typ
	setPlaceholderNumberType(type: NumberType): void {
		this.options.placeholderNumberType = type;
		this._updatePlaceholder();
	}
  
	setDisabled(disabled: boolean): void {
		this.numberInput.disabled = disabled;
		if (disabled) {
			this.selectedCountry.setAttribute("disabled", "true");
		} else {
			this.selectedCountry.removeAttribute("disabled");
		}
	}
}
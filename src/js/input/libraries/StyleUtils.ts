import { AllStyleOptions } from "../InternationalNumberInputOptions";

export function buildElementClass(styles: AllStyleOptions, element?: StyleElement | string, attribute?: StyleAttribute): string {
	let builtClass = styles.elementParentClass;
	// Element
	if (element) {
		const elementSeparator = "__";
		builtClass += (typeof(element) === "string") ? `${elementSeparator}${element}` : `${elementSeparator}${styles[element]}`;
	}
	// Attribute
	if (attribute) {
		const attributeSeparator = "--";
		builtClass += (attribute ? `${attributeSeparator}${styles[attribute]}` : '');
	}
	return builtClass;
}

export enum StyleElement {
	AccessibilityText = 'elementAccessibilityTextClass',
	Arrow = 'elementDropdownArrowClass',
	Container = 'elementContainerClass',
	Country = 'elementCountryClass',
	CountryContainer = 'elementCountryContainerClass',
	CountryListbox = 'elementCountryListboxClass',
	CountryName = 'elementCountryNameClass',
	DropdownContent = 'elementDropdownContentClass',
	Flag = 'elementFlagClass',
	FlagBox = 'elementFlagBoxClass',
	Globe = 'elementGlobeClass',
	Hide = 'elementHideClass',
	Highlight = 'elementHighlightClass',
	Item = 'elementItemClass',
	NumberInput = 'elementNumberInputClass',
	SearchInput = 'elementSearchInputClass',
	SelectedCountry = 'elementSelectedCountryClass',
	SelectedCountryPrimary = 'elementSelectedCountryPrimaryClass',
}

export enum StyleAttribute {
	AllowDropdown = 'attributeAllowDropdownClass',
	Down = 'attributeDownClass',
	FlexibleDropdownWidth = 'attributeFlexibleDropdownWidthClass',
	FullscreenPopup = 'attributeFullscreenPopupClass',
	InlineDropdown = 'attributeInlineDropdownClass',
	ShowFlags = 'attributeShowFlagsClass',
	Up = 'attributeUpClass',
}
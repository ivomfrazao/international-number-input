import { AllStyleOptions } from "../InternationalNumberInputOptions";

export function buildElementClass(styles: AllStyleOptions, element: StyleElement): string {
	let builtClass = styles.elementParentClass;
	builtClass += (element ? `__${styles[element]}` : '');
	return builtClass;
}

export function buildAttributeClass(styles: AllStyleOptions, attribute: StyleAttribute): string {
	let builtClass = styles.elementParentClass;
	builtClass += (attribute ? `--${styles[attribute]}` : '');
	return builtClass;
}

export enum StyleElement {
	AccessibilityText = 'elementAccessibilityText',
	Container = 'elementContainerClass',
	CountryContainer = 'elementCountryContainerClass',
	DropdownArrow = 'elementDropdownArrow',
	NumberInput = 'elementNumberInputClass',
	SearchInput = 'elementSearchInputClass',
	SelectedCountry = 'elementSelectedCountryClass',
	SelectedCountryPrimary = 'elementSelectedCountryPrimary',
}

export enum StyleAttribute {
	AllowDropdown = 'attributeAllowDropdownClass',
	FlexibleDropdownWidth = 'attributeFlexibleDropdownWidthClass',
	InlineDropdown = 'attributeInlineDropdownClass',
	ShowFlags = 'attributeShowFlagsClass',
}
import { NumberType } from "../types";
import { AutoPlaceholderType } from "./libraries/AutoPlaceholderType.enum";

export type SomeOptions = Partial<AllOptions>;

export interface AllOptions {
	allowDropdown: boolean;
	autoPlaceholder: AutoPlaceholderType;
	styles: AllStyleOptions;
	/**
	 * List of countries specifying their order.
	 * Countries not provided in the list will be ordered alphabetically.
	 * If not set, the entire list will be ordered alphabetically.
	 */
	countryOrder: string[];
	countrySearch: boolean;
	customPlaceholder: ((selectedCountryPlaceholder: string, selectedCountryData: object) => string) | null;
	dropdownContainer: HTMLElement | null;
	/**
	 * List of countries to **not** be displayed.
	 * Ignored if {@link onlyCountries} is defined
	 */
	excludeCountries: string[];
	fixDropdownWidth: boolean;
	formatAsYouType: boolean;
	formatOnDisplay: boolean;
	geoIpLookup: ((success: (iso2: string) => void, failure: () => void) => void) | null;
	hiddenInput: ((numberInputName: string) => {phone: string, country?: string}) | null;
	i18n: {
		af?: string;
		al?: string;
		dz?: string;
		as?: string;
		ad?: string;
		ao?: string;
		ai?: string;
		ag?: string;
		ar?: string;
		am?: string;
		aw?: string;
		ac?: string;
		au?: string;
		at?: string;
		az?: string;
		bs?: string;
		bh?: string;
		bd?: string;
		bb?: string;
		by?: string;
		be?: string;
		bz?: string;
		bj?: string;
		bm?: string;
		bt?: string;
		bo?: string;
		ba?: string;
		bw?: string;
		br?: string;
		io?: string;
		vg?: string;
		bn?: string;
		bg?: string;
		bf?: string;
		bi?: string;
		kh?: string;
		cm?: string;
		ca?: string;
		cv?: string;
		bq?: string;
		ky?: string;
		cf?: string;
		td?: string;
		cl?: string;
		cn?: string;
		cx?: string;
		cc?: string;
		co?: string;
		km?: string;
		cg?: string;
		cd?: string;
		ck?: string;
		cr?: string;
		hr?: string;
		cu?: string;
		cw?: string;
		cy?: string;
		cz?: string;
		ci?: string;
		dk?: string;
		dj?: string;
		dm?: string;
		do?: string;
		ec?: string;
		eg?: string;
		sv?: string;
		gq?: string;
		er?: string;
		ee?: string;
		sz?: string;
		et?: string;
		fk?: string;
		fo?: string;
		fj?: string;
		fi?: string;
		fr?: string;
		gf?: string;
		pf?: string;
		ga?: string;
		gm?: string;
		ge?: string;
		de?: string;
		gh?: string;
		gi?: string;
		gr?: string;
		gl?: string;
		gd?: string;
		gp?: string;
		gu?: string;
		gt?: string;
		gg?: string;
		gn?: string;
		gw?: string;
		gy?: string;
		ht?: string;
		hn?: string;
		hk?: string;
		hu?: string;
		is?: string;
		in?: string;
		id?: string;
		ir?: string;
		iq?: string;
		ie?: string;
		im?: string;
		il?: string;
		it?: string;
		jm?: string;
		jp?: string;
		je?: string;
		jo?: string;
		kz?: string;
		ke?: string;
		ki?: string;
		xk?: string;
		kw?: string;
		kg?: string;
		la?: string;
		lv?: string;
		lb?: string;
		ls?: string;
		lr?: string;
		ly?: string;
		li?: string;
		lt?: string;
		lu?: string;
		mo?: string;
		mg?: string;
		mw?: string;
		my?: string;
		mv?: string;
		ml?: string;
		mt?: string;
		mh?: string;
		mq?: string;
		mr?: string;
		mu?: string;
		yt?: string;
		mx?: string;
		fm?: string;
		md?: string;
		mc?: string;
		mn?: string;
		me?: string;
		ms?: string;
		ma?: string;
		mz?: string;
		mm?: string;
		na?: string;
		nr?: string;
		np?: string;
		nl?: string;
		nc?: string;
		nz?: string;
		ni?: string;
		ne?: string;
		ng?: string;
		nu?: string;
		nf?: string;
		kp?: string;
		mk?: string;
		mp?: string;
		no?: string;
		om?: string;
		pk?: string;
		pw?: string;
		ps?: string;
		pa?: string;
		pg?: string;
		py?: string;
		pe?: string;
		ph?: string;
		pl?: string;
		pt?: string;
		pr?: string;
		qa?: string;
		ro?: string;
		ru?: string;
		rw?: string;
		re?: string;
		ws?: string;
		sm?: string;
		sa?: string;
		sn?: string;
		rs?: string;
		sc?: string;
		sl?: string;
		sg?: string;
		sx?: string;
		sk?: string;
		si?: string;
		sb?: string;
		so?: string;
		za?: string;
		kr?: string;
		ss?: string;
		es?: string;
		lk?: string;
		bl?: string;
		sh?: string;
		kn?: string;
		lc?: string;
		mf?: string;
		pm?: string;
		vc?: string;
		sd?: string;
		sr?: string;
		sj?: string;
		se?: string;
		ch?: string;
		sy?: string;
		st?: string;
		tw?: string;
		tj?: string;
		tz?: string;
		th?: string;
		tl?: string;
		tg?: string;
		tk?: string;
		to?: string;
		tt?: string;
		tn?: string;
		tr?: string;
		tm?: string;
		tc?: string;
		tv?: string;
		vi?: string;
		ug?: string;
		ua?: string;
		ae?: string;
		gb?: string;
		us?: string;
		uy?: string;
		uz?: string;
		vu?: string;
		va?: string;
		ve?: string;
		vn?: string;
		wf?: string;
		eh?: string;
		ye?: string;
		zm?: string;
		zw?: string;
		ax?: string;
		selectedCountryAriaLabel?: string;
		searchPlaceholder?: string;
		countryListAriaLabel?: string;
		oneSearchResult?: string;
		multipleSearchResults?: string;
		noCountrySelected?: string;
		zeroSearchResults?: string;
	};
	/**
	 * The ISO2 code of the initial country to be selected.
	 * It can also be set as `auto`, the component will try to automatically infer the value.
	 */
	initialCountry: string;
	numberType: NumberType | null;
	/**
	 * List of countries to exclusively be displayed, instead of using all countries.
	 * If set, it will supersede the {@link excludeCountries} parameter.
	 */
	onlyCountries: string[];
	showFlags: boolean;
	strictMode: boolean;
	useFullscreenPopup: boolean;
	utilsScriptPath: string;
}

export type SomeStyleOptions = Partial<AllStyleOptions>;

export interface AllStyleOptions {
	elementAccessibilityTextClass: string;
	elementArrowClass: string;
	elementContainerClass: string;
	elementCountryClass: string;
	elementCountryContainerClass: string;
	elementCountryListboxClass: string;
	elementCountryNameClass: string;
	elementDropdownContentClass: string;
	elementFlagClass: string;
	elementFlagBoxClass: string;
	elementGlobeClass: string;
	elementHideClass: string;
	elementHighlightClass: string;
	elementItemClass: string;
	elementNumberInputClass: string;
	elementParentClass: string;
	elementSearchInputClass: string;
	elementSelectedCountryClass: string;
	elementSelectedCountryPrimaryClass: string;

	attributeAllowDropdownClass: string;
	attributeDownClass: string;
	attributeFlexibleDropdownWidthClass: string;
	attributeFullscreenPopupClass: string;
	attributeInlineDropdownClass: string;
	attributeShowFlagsClass: string;
	attributeUpClass: string;
}
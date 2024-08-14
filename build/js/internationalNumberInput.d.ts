declare module "exceptions" {
    /**
     * Collection of exceptions.
     * The validation functions should raise one of the below exceptions
     * when validation of the number fails.
     */
    /**
     * Top-level error for validating numbers.
     *
     * This exception should normally not be raised, only subclasses of this
     * exception.
     */
    export class ValidationError extends Error {
        constructor(msg: string);
    }
    /**
     *  Something is wrong with the format of the number.
     *
     *  This generally means characters or delimiters that are not allowed are
     *  part of the number or required parts are missing.
     */
    export class InvalidFormat extends ValidationError {
        constructor(msg?: string);
    }
    /**
     * The number's internal checksum or check digit does not match.
     */
    export class InvalidChecksum extends ValidationError {
        constructor(msg?: string);
    }
    /**
     * The length of the number is wrong
     */
    export class InvalidLength extends ValidationError {
        constructor(msg?: string);
    }
    /**
     * One of the parts of the number has an invalid reference.
     *
     * Some part of the number refers to some external entity like a country
     * code, a date or a predefined collection of values. The number contains
     * some invalid reference.
     */
    export class InvalidComponent extends ValidationError {
        constructor(msg?: string);
    }
}
declare module "types" {
    import { ValidationError } from "exceptions";
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
    export type ValidateReturn = {
        error?: ValidationError;
    } & (ValidateSuccess | ValidateFail);
    export enum NumberType {
        NationalIdentificationNumber = "NIN",
        TaxpayerIdentificationNumber = "TIN"
    }
    export interface Validator {
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
         * Convert the number to the minimal representation.
         * This strips the number of any valid separators and removes surrounding
         * whitespace.
         */
        compact(value: string): string;
        /**
         * Reformat the number to the standard presentation format.
         */
        format(value: string): string;
        /**
         * Validate with error throws subclass of ValidationError
         */
        validate(value: string): ValidateReturn;
    }
    export interface CountryValidator {
        /**
         * The ISO2 code of the country
         */
        iso2: string;
        /**
         * The list of validations possible for the country
         */
        validators: Validator[];
    }
}
declare module "input/InternationalNumberInputOptions" {
    import { NumberType } from "types";
    export type SomeOptions = Partial<AllOptions>;
    export interface AllOptions {
        allowDropdown: boolean;
        autoPlaceholder: string;
        styles: AllStyleOptions;
        countryOrder: string[];
        countrySearch: boolean;
        customPlaceholder: ((selectedCountryPlaceholder: string, selectedCountryData: object) => string) | null;
        dropdownContainer: HTMLElement | null;
        excludeCountries: string[];
        fixDropdownWidth: boolean;
        formatAsYouType: boolean;
        formatOnDisplay: boolean;
        geoIpLookup: ((success: (iso2: string) => void, failure: () => void) => void) | null;
        hiddenInput: ((numberInputName: string) => {
            phone: string;
            country?: string;
        }) | null;
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
        initialCountry: string;
        nationalMode: boolean;
        onlyCountries: string[];
        placeholderNumberType: NumberType;
        showFlags: boolean;
        strictMode: boolean;
        useFullscreenPopup: boolean;
        utilsScript: string;
        validationNumberType: NumberType | null;
    }
    export type SomeStyleOptions = Partial<AllStyleOptions>;
    export interface AllStyleOptions {
        elementAccessibilityText: string;
        elementContainerClass: string;
        elementCountryContainerClass: string;
        elementDropdownArrow: string;
        elementNumberInputClass: string;
        elementParentClass: string;
        elementSearchInputClass: string;
        elementSelectedCountryClass: string;
        elementSelectedCountryPrimary: string;
        attributeAllowDropdownClass: string;
        attributeFlexibleDropdownWidthClass: string;
        attributeInlineDropdownClass: string;
        attributeShowFlagsClass: string;
    }
}
declare module "input/InternationalNumberInputOptions.default" {
    import { AllOptions } from "input/InternationalNumberInputOptions";
    export const defaults: AllOptions;
    export default defaults;
}
declare module "input/international-number-input/data" {
    export type Country = {
        name: string;
        iso2: string;
        dialCode: string;
        priority: number;
        areaCodes: string[] | null;
        nodeById: object;
    };
    const allCountries: Country[];
    export default allCountries;
}
declare module "input/i18n/en/countries" {
    const _default: {
        ad: string;
        ae: string;
        af: string;
        ag: string;
        ai: string;
        al: string;
        am: string;
        ao: string;
        aq: string;
        ar: string;
        as: string;
        at: string;
        au: string;
        aw: string;
        ax: string;
        az: string;
        ba: string;
        bb: string;
        bd: string;
        be: string;
        bf: string;
        bg: string;
        bh: string;
        bi: string;
        bj: string;
        bl: string;
        bm: string;
        bn: string;
        bo: string;
        bq: string;
        br: string;
        bs: string;
        bt: string;
        bv: string;
        bw: string;
        by: string;
        bz: string;
        ca: string;
        cc: string;
        cd: string;
        cf: string;
        cg: string;
        ch: string;
        ci: string;
        ck: string;
        cl: string;
        cm: string;
        cn: string;
        co: string;
        cr: string;
        cu: string;
        cv: string;
        cw: string;
        cx: string;
        cy: string;
        cz: string;
        de: string;
        dj: string;
        dk: string;
        dm: string;
        do: string;
        dz: string;
        ec: string;
        ee: string;
        eg: string;
        eh: string;
        er: string;
        es: string;
        et: string;
        fi: string;
        fj: string;
        fk: string;
        fm: string;
        fo: string;
        fr: string;
        ga: string;
        gb: string;
        gd: string;
        ge: string;
        gf: string;
        gg: string;
        gh: string;
        gi: string;
        gl: string;
        gm: string;
        gn: string;
        gp: string;
        gq: string;
        gr: string;
        gs: string;
        gt: string;
        gu: string;
        gw: string;
        gy: string;
        hk: string;
        hm: string;
        hn: string;
        hr: string;
        ht: string;
        hu: string;
        id: string;
        ie: string;
        il: string;
        im: string;
        in: string;
        io: string;
        iq: string;
        ir: string;
        is: string;
        it: string;
        je: string;
        jm: string;
        jo: string;
        jp: string;
        ke: string;
        kg: string;
        kh: string;
        ki: string;
        km: string;
        kn: string;
        kp: string;
        kr: string;
        kw: string;
        ky: string;
        kz: string;
        la: string;
        lb: string;
        lc: string;
        li: string;
        lk: string;
        lr: string;
        ls: string;
        lt: string;
        lu: string;
        lv: string;
        ly: string;
        ma: string;
        mc: string;
        md: string;
        me: string;
        mf: string;
        mg: string;
        mh: string;
        mk: string;
        ml: string;
        mm: string;
        mn: string;
        mo: string;
        mp: string;
        mq: string;
        mr: string;
        ms: string;
        mt: string;
        mu: string;
        mv: string;
        mw: string;
        mx: string;
        my: string;
        mz: string;
        na: string;
        nc: string;
        ne: string;
        nf: string;
        ng: string;
        ni: string;
        nl: string;
        no: string;
        np: string;
        nr: string;
        nu: string;
        nz: string;
        om: string;
        pa: string;
        pe: string;
        pf: string;
        pg: string;
        ph: string;
        pk: string;
        pl: string;
        pm: string;
        pn: string;
        pr: string;
        ps: string;
        pt: string;
        pw: string;
        py: string;
        qa: string;
        re: string;
        ro: string;
        rs: string;
        ru: string;
        rw: string;
        sa: string;
        sb: string;
        sc: string;
        sd: string;
        se: string;
        sg: string;
        sh: string;
        si: string;
        sj: string;
        sk: string;
        sl: string;
        sm: string;
        sn: string;
        so: string;
        sr: string;
        ss: string;
        st: string;
        sv: string;
        sx: string;
        sy: string;
        sz: string;
        tc: string;
        td: string;
        tf: string;
        tg: string;
        th: string;
        tj: string;
        tk: string;
        tl: string;
        tm: string;
        tn: string;
        to: string;
        tr: string;
        tt: string;
        tv: string;
        tw: string;
        tz: string;
        ua: string;
        ug: string;
        um: string;
        us: string;
        uy: string;
        uz: string;
        va: string;
        vc: string;
        ve: string;
        vg: string;
        vi: string;
        vn: string;
        vu: string;
        wf: string;
        ws: string;
        ye: string;
        yt: string;
        za: string;
        zm: string;
        zw: string;
    };
    export default _default;
}
declare module "input/i18n/en/interface" {
    const _default_1: {
        selectedCountryAriaLabel: string;
        noCountrySelected: string;
        countryListAriaLabel: string;
        searchPlaceholder: string;
        zeroSearchResults: string;
        oneSearchResult: string;
        multipleSearchResults: string;
        ac: string;
        xk: string;
    };
    export default _default_1;
}
declare module "input/i18n/en/index" {
    import countryTranslations from "input/i18n/en/countries";
    import interfaceTranslations from "input/i18n/en/interface";
    export { countryTranslations, interfaceTranslations };
    const _default_2: {
        selectedCountryAriaLabel: string;
        noCountrySelected: string;
        countryListAriaLabel: string;
        searchPlaceholder: string;
        zeroSearchResults: string;
        oneSearchResult: string;
        multipleSearchResults: string;
        ac: string;
        xk: string;
        ad: string;
        ae: string;
        af: string;
        ag: string;
        ai: string;
        al: string;
        am: string;
        ao: string;
        aq: string;
        ar: string;
        as: string;
        at: string;
        au: string;
        aw: string;
        ax: string;
        az: string;
        ba: string;
        bb: string;
        bd: string;
        be: string;
        bf: string;
        bg: string;
        bh: string;
        bi: string;
        bj: string;
        bl: string;
        bm: string;
        bn: string;
        bo: string;
        bq: string;
        br: string;
        bs: string;
        bt: string;
        bv: string;
        bw: string;
        by: string;
        bz: string;
        ca: string;
        cc: string;
        cd: string;
        cf: string;
        cg: string;
        ch: string;
        ci: string;
        ck: string;
        cl: string;
        cm: string;
        cn: string;
        co: string;
        cr: string;
        cu: string;
        cv: string;
        cw: string;
        cx: string;
        cy: string;
        cz: string;
        de: string;
        dj: string;
        dk: string;
        dm: string;
        do: string;
        dz: string;
        ec: string;
        ee: string;
        eg: string;
        eh: string;
        er: string;
        es: string;
        et: string;
        fi: string;
        fj: string;
        fk: string;
        fm: string;
        fo: string;
        fr: string;
        ga: string;
        gb: string;
        gd: string;
        ge: string;
        gf: string;
        gg: string;
        gh: string;
        gi: string;
        gl: string;
        gm: string;
        gn: string;
        gp: string;
        gq: string;
        gr: string;
        gs: string;
        gt: string;
        gu: string;
        gw: string;
        gy: string;
        hk: string;
        hm: string;
        hn: string;
        hr: string;
        ht: string;
        hu: string;
        id: string;
        ie: string;
        il: string;
        im: string;
        in: string;
        io: string;
        iq: string;
        ir: string;
        is: string;
        it: string;
        je: string;
        jm: string;
        jo: string;
        jp: string;
        ke: string;
        kg: string;
        kh: string;
        ki: string;
        km: string;
        kn: string;
        kp: string;
        kr: string;
        kw: string;
        ky: string;
        kz: string;
        la: string;
        lb: string;
        lc: string;
        li: string;
        lk: string;
        lr: string;
        ls: string;
        lt: string;
        lu: string;
        lv: string;
        ly: string;
        ma: string;
        mc: string;
        md: string;
        me: string;
        mf: string;
        mg: string;
        mh: string;
        mk: string;
        ml: string;
        mm: string;
        mn: string;
        mo: string;
        mp: string;
        mq: string;
        mr: string;
        ms: string;
        mt: string;
        mu: string;
        mv: string;
        mw: string;
        mx: string;
        my: string;
        mz: string;
        na: string;
        nc: string;
        ne: string;
        nf: string;
        ng: string;
        ni: string;
        nl: string;
        no: string;
        np: string;
        nr: string;
        nu: string;
        nz: string;
        om: string;
        pa: string;
        pe: string;
        pf: string;
        pg: string;
        ph: string;
        pk: string;
        pl: string;
        pm: string;
        pn: string;
        pr: string;
        ps: string;
        pt: string;
        pw: string;
        py: string;
        qa: string;
        re: string;
        ro: string;
        rs: string;
        ru: string;
        rw: string;
        sa: string;
        sb: string;
        sc: string;
        sd: string;
        se: string;
        sg: string;
        sh: string;
        si: string;
        sj: string;
        sk: string;
        sl: string;
        sm: string;
        sn: string;
        so: string;
        sr: string;
        ss: string;
        st: string;
        sv: string;
        sx: string;
        sy: string;
        sz: string;
        tc: string;
        td: string;
        tf: string;
        tg: string;
        th: string;
        tj: string;
        tk: string;
        tl: string;
        tm: string;
        tn: string;
        to: string;
        tr: string;
        tt: string;
        tv: string;
        tw: string;
        tz: string;
        ua: string;
        ug: string;
        um: string;
        us: string;
        uy: string;
        uz: string;
        va: string;
        vc: string;
        ve: string;
        vg: string;
        vi: string;
        vn: string;
        vu: string;
        wf: string;
        ws: string;
        ye: string;
        yt: string;
        za: string;
        zm: string;
        zw: string;
    };
    export default _default_2;
}
declare module "input/utils/KeyboardKey.enum" {
    /**
     * Enumeration of keys used in events
     */
    export enum KeyboardKey {
        Enter = "Enter",
        ArrowDown = "ArrowDown",
        ArrowUp = "ArrowUp",
        Space = " ",
        Tab = "Tab",
        Escape = "Escape"
    }
}
declare module "input/utils/StringUtils" {
    /**
     * Normalises string to ensure expected values when performing other operations.
     * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize for more details.
     * @param s The string to be normalized.
     * @returns The normalized string.
     */
    export function normaliseString(s?: string): string;
    /**
     * Return the only the numeric part of a string.
     * @param s The string from which the numeric part is wanted.
     * @returns A string containing only the numeric part of the provided input parameter.
     */
    export function getNumeric(s: string): string;
}
declare module "input/utils/DOMUtils" {
    /**
     * Creates a DOM element, sets its attributes and appends in a container element in a single atomic action.
     * @param tagName The name of an element.
     * @param attributes An object of key/value pairs of attributes to set to the element.
     * @param container The container where we want to place the element created.
     * @returns The new element.
     */
    export function createDOMElement(tagName: string, attributes: object | null, container?: HTMLElement): HTMLElement;
}
declare module "input/utils/StyleUtils" {
    import { AllStyleOptions } from "input/InternationalNumberInputOptions";
    export function buildElementClass(styles: AllStyleOptions, element: StyleElement): string;
    export function buildAttributeClass(styles: AllStyleOptions, attribute: StyleAttribute): string;
    export enum StyleElement {
        AccessibilityText = "elementAccessibilityText",
        Container = "elementContainerClass",
        CountryContainer = "elementCountryContainerClass",
        DropdownArrow = "elementDropdownArrow",
        NumberInput = "elementNumberInputClass",
        SearchInput = "elementSearchInputClass",
        SelectedCountry = "elementSelectedCountryClass",
        SelectedCountryPrimary = "elementSelectedCountryPrimary"
    }
    export enum StyleAttribute {
        AllowDropdown = "attributeAllowDropdownClass",
        FlexibleDropdownWidth = "attributeFlexibleDropdownWidthClass",
        InlineDropdown = "attributeInlineDropdownClass",
        ShowFlags = "attributeShowFlagsClass"
    }
}
declare module "input/InternationalNumberInput.class" {
    import { NumberType } from "types";
    import { SomeOptions } from "input/InternationalNumberInputOptions";
    import { Country } from "input/international-number-input/data";
    type SelectedCountryData = Country | {
        name?: string;
        iso2?: string;
        dialCode?: string;
    };
    export class Ini {
        id: string;
        promise: Promise<[unknown, unknown]>;
        private numberInput;
        private highlightedItem;
        private options;
        private hadInitialPlaceholder;
        private isRTL;
        private isAndroid;
        private selectedCountryData;
        private countries;
        private countryContainer;
        private selectedCountry;
        private selectedCountryInner;
        private selectedCountryA11yText;
        private dropdownArrow;
        private dropdownContent;
        private searchInput;
        private searchResultsA11yText;
        private countryList;
        private dropdown;
        private hiddenInput;
        private hiddenInputCountry;
        private maxCoreNumberLength;
        private defaultCountry;
        private originalPaddingRight;
        private originalPaddingLeft;
        private _handleHiddenInputSubmit;
        private _handleLabelClick;
        private _handleClickSelectedCountry;
        private _handleCountryContainerKeydown;
        private _handleInputEvent;
        private _handleKeydownEvent;
        private _handleWindowScroll;
        private _handleMouseoverCountryList;
        private _handleClickCountryList;
        private _handleClickOffToClose;
        private _handleKeydownOnDropdown;
        private _handleSearchChange;
        private resolveAutoCountryPromise;
        private rejectAutoCountryPromise;
        private resolveUtilsScriptPromise;
        private rejectUtilsScriptPromise;
        constructor(input: HTMLInputElement, customOptions?: SomeOptions);
        _init(): void;
        private _processCountryData;
        private _sortCountries;
        private _processAllCountries;
        /**
         * Translate countries according to the configurations provided.
         */
        private _translateCountryNames;
        private _generateMarkup;
        private _appendListItems;
        private _setInitialState;
        private _initListeners;
        private _initHiddenInputListener;
        private _initDropdownListeners;
        private _initRequests;
        private _loadAutoCountry;
        private _initNumberInputListeners;
        private _cap;
        private _trigger;
        private _openDropdown;
        private _setDropdownPosition;
        private _bindDropdownListeners;
        private _searchForCountry;
        private _filterCountries;
        private _updateSearchResultsText;
        private _handleUpDownKey;
        private _handleEnterKey;
        private _updateValFromNumber;
        private _updateCountryFromNumber;
        private _highlightListItem;
        private _getCountryData;
        private _setCountry;
        private _updateMaxLength;
        private _setSelectedCountryTitleAttribute;
        private _getHiddenSelectedCountryWidth;
        private _updatePlaceholder;
        private _selectListItem;
        private _closeDropdown;
        private _scrollTo;
        private _getFullNumber;
        private _beforeSetNumber;
        private _triggerCountryChange;
        private _formatNumberAsYouType;
        handleAutoCountry(): void;
        handleUtils(): void;
        destroy(): void;
        getNumber(format?: number): string;
        getNumberType(): number;
        getSelectedCountryData(): SelectedCountryData;
        getValidationError(): number;
        isValidNumber(): boolean | null;
        isValidNumberPrecise(): boolean | null;
        setCountry(iso2: string): void;
        setNumber(number: string): void;
        setPlaceholderNumberType(type: NumberType): void;
        setDisabled(disabled: boolean): void;
    }
}
declare module "input/InternationalNumberInput" {
    import { NumberType } from "types";
    import { AllOptions, SomeOptions } from "input/InternationalNumberInputOptions";
    import { Country } from "input/international-number-input/data";
    import { Ini } from "input/InternationalNumberInput.class";
    interface InternationalNumberInputInterface {
        (input: HTMLInputElement, options?: SomeOptions): Ini;
        defaults: AllOptions;
        documentReady: () => boolean;
        getCountryData: () => Country[];
        getInstance: (input: HTMLInputElement) => Ini | null;
        instances: {
            [key: string]: Ini;
        };
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
    const internationalNumberInput: InternationalNumberInputInterface;
    export default internationalNumberInput;
}

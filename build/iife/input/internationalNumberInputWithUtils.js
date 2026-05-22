/*
 * International Number Input v0.1.0
 * https://github.com/ivomfrazao/international-number-input.git
 * Licensed under the MIT license
 */

var internationalNumberInput = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/js/input/internationalNumberInputWithUtils.ts
  var internationalNumberInputWithUtils_exports = {};
  __export(internationalNumberInputWithUtils_exports, {
    default: () => internationalNumberInputWithUtils_default
  });

  // src/js/input/InternationalNumberInputOptions.default.ts
  var styleDefaults = {
    elementAccessibilityTextClass: "a11y-text",
    elementArrowClass: "arrow",
    elementContainerClass: "",
    elementCountryClass: "country",
    elementCountryContainerClass: "country-container",
    elementCountryListboxClass: "country-listbox",
    elementCountryNameClass: "country-name",
    elementDropdownContentClass: "dropdown-content",
    elementFlagClass: "flag",
    elementFlagBoxClass: "flag-box",
    elementGlobeClass: "globe",
    elementHideClass: "hide",
    elementHighlightClass: "highlight",
    elementItemClass: "item",
    elementNumberInputClass: "number-input",
    elementParentClass: "ini",
    elementSearchInputClass: "search-input",
    elementSelectedCountryClass: "selected-country",
    elementSelectedCountryPrimaryClass: "selected-country-primary",
    attributeAllowDropdownClass: "allow-dropdown",
    attributeDownClass: "down",
    attributeFlexibleDropdownWidthClass: "flexible-dropdown-width",
    attributeFullscreenPopupClass: "fullscreen-popup",
    attributeInlineDropdownClass: "inline-dropdown",
    attributeShowFlagsClass: "show-flags",
    attributeUpClass: "up"
  };
  var defaults = {
    //* Whether or not to allow the dropdown.
    allowDropdown: true,
    //* Add a placeholder in the input with an example number for the selected country.
    autoPlaceholder: "polite" /* Polite */,
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
    //* The number type to enforce during validation.
    numberType: "NIN" /* NationalIdentificationNumber */,
    //* Display only these countries.
    onlyCountries: [],
    //* Show flags - for both the selected country, and in the country dropdown
    showFlags: true,
    //* Only allow certain chars e.g. a plus followed by numeric digits, and cap at max valid length.
    strictMode: false,
    //* Modify the styles.
    styles: styleDefaults,
    //* Use full screen popup instead of dropdown for country list.
    useFullscreenPopup: typeof navigator !== "undefined" && typeof window !== "undefined" ? (
      //* We cannot just test screen size as some smartphones/website meta tags will report desktop resolutions.
      //* Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
      /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth <= 500
    ) : false,
    //* Specify the path to the libphonenumber script to enable validation/formatting.
    utilsScriptPath: ""
  };
  var InternationalNumberInputOptions_default_default = defaults;

  // src/js/input/international-number-input/data.ts
  var rawCountryData = [
    ["af", "93"],
    ["al", "355"],
    ["dz", "213"],
    ["as", "1", 5, ["684"]],
    ["ad", "376"],
    ["ao", "244"],
    ["ai", "1", 6, ["264"]],
    ["ag", "1", 7, ["268"]],
    ["ar", "54"],
    ["am", "374"],
    ["aw", "297"],
    ["ac", "247"],
    ["au", "61", 0],
    ["at", "43"],
    ["az", "994"],
    ["bs", "1", 8, ["242"]],
    ["bh", "973"],
    ["bd", "880"],
    ["bb", "1", 9, ["246"]],
    ["by", "375"],
    ["be", "32"],
    ["bz", "501"],
    ["bj", "229"],
    ["bm", "1", 10, ["441"]],
    ["bt", "975"],
    ["bo", "591"],
    ["ba", "387"],
    ["bw", "267"],
    ["br", "55"],
    ["io", "246"],
    ["vg", "1", 11, ["284"]],
    ["bn", "673"],
    ["bg", "359"],
    ["bf", "226"],
    ["bi", "257"],
    ["kh", "855"],
    ["cm", "237"],
    [
      "ca",
      "1",
      1,
      [
        "204",
        "226",
        "236",
        "249",
        "250",
        "263",
        "289",
        "306",
        "343",
        "354",
        "365",
        "367",
        "368",
        "382",
        "387",
        "403",
        "416",
        "418",
        "428",
        "431",
        "437",
        "438",
        "450",
        "584",
        "468",
        "474",
        "506",
        "514",
        "519",
        "548",
        "579",
        "581",
        "584",
        "587",
        "604",
        "613",
        "639",
        "647",
        "672",
        "683",
        "705",
        "709",
        "742",
        "753",
        "778",
        "780",
        "782",
        "807",
        "819",
        "825",
        "867",
        "873",
        "879",
        "902",
        "905"
      ]
    ],
    ["cv", "238"],
    ["bq", "599", 1, ["3", "4", "7"]],
    ["ky", "1", 12, ["345"]],
    ["cf", "236"],
    ["td", "235"],
    ["cl", "56"],
    ["cn", "86"],
    ["cx", "61", 2, ["89164"]],
    ["cc", "61", 1, ["89162"]],
    ["co", "57"],
    ["km", "269"],
    ["cg", "242"],
    ["cd", "243"],
    ["ck", "682"],
    ["cr", "506"],
    ["ci", "225"],
    ["hr", "385"],
    ["cu", "53"],
    ["cw", "599", 0],
    ["cy", "357"],
    ["cz", "420"],
    ["dk", "45"],
    ["dj", "253"],
    ["dm", "1", 13, ["767"]],
    ["do", "1", 2, ["809", "829", "849"]],
    ["ec", "593"],
    ["eg", "20"],
    ["sv", "503"],
    ["gq", "240"],
    ["er", "291"],
    ["ee", "372"],
    ["sz", "268"],
    ["et", "251"],
    ["fk", "500"],
    ["fo", "298"],
    ["fj", "679"],
    ["fi", "358", 0],
    ["fr", "33"],
    ["gf", "594"],
    ["pf", "689"],
    ["ga", "241"],
    ["gm", "220"],
    ["ge", "995"],
    ["de", "49"],
    ["gh", "233"],
    ["gi", "350"],
    ["gr", "30"],
    ["gl", "299"],
    ["gd", "1", 14, ["473"]],
    ["gp", "590", 0],
    ["gu", "1", 15, ["671"]],
    ["gt", "502"],
    ["gg", "44", 1, ["1481", "7781", "7839", "7911"]],
    ["gn", "224"],
    ["gw", "245"],
    ["gy", "592"],
    ["ht", "509"],
    ["hn", "504"],
    ["hk", "852"],
    ["hu", "36"],
    ["is", "354"],
    ["in", "91"],
    ["id", "62"],
    ["ir", "98"],
    ["iq", "964"],
    ["ie", "353"],
    ["im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
    ["il", "972"],
    ["it", "39", 0],
    ["jm", "1", 4, ["876", "658"]],
    ["jp", "81"],
    ["je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
    ["jo", "962"],
    ["kz", "7", 1, ["33", "7"]],
    ["ke", "254"],
    ["ki", "686"],
    ["xk", "383"],
    ["kw", "965"],
    ["kg", "996"],
    ["la", "856"],
    ["lv", "371"],
    ["lb", "961"],
    ["ls", "266"],
    ["lr", "231"],
    ["ly", "218"],
    ["li", "423"],
    ["lt", "370"],
    ["lu", "352"],
    ["mo", "853"],
    ["mg", "261"],
    ["mw", "265"],
    ["my", "60"],
    ["mv", "960"],
    ["ml", "223"],
    ["mt", "356"],
    ["mh", "692"],
    ["mq", "596"],
    ["mr", "222"],
    ["mu", "230"],
    ["yt", "262", 1, ["269", "639"]],
    ["mx", "52"],
    ["fm", "691"],
    ["md", "373"],
    ["mc", "377"],
    ["mn", "976"],
    ["me", "382"],
    ["ms", "1", 16, ["664"]],
    ["ma", "212", 0],
    ["mz", "258"],
    ["mm", "95"],
    ["na", "264"],
    ["nr", "674"],
    ["np", "977"],
    ["nl", "31"],
    ["nc", "687"],
    ["nz", "64"],
    ["ni", "505"],
    ["ne", "227"],
    ["ng", "234"],
    ["nu", "683"],
    ["nf", "672"],
    ["kp", "850"],
    ["mk", "389"],
    ["mp", "1", 17, ["670"]],
    ["no", "47", 0],
    ["om", "968"],
    ["pk", "92"],
    ["pw", "680"],
    ["ps", "970"],
    ["pa", "507"],
    ["pg", "675"],
    ["py", "595"],
    ["pe", "51"],
    ["ph", "63"],
    ["pl", "48"],
    ["pt", "351"],
    ["pr", "1", 3, ["787", "939"]],
    ["qa", "974"],
    ["re", "262", 0],
    ["ro", "40"],
    ["ru", "7", 0],
    ["rw", "250"],
    ["ws", "685"],
    ["sm", "378"],
    ["st", "239"],
    ["sa", "966"],
    ["sn", "221"],
    ["rs", "381"],
    ["sc", "248"],
    ["sl", "232"],
    ["sg", "65"],
    ["sx", "1", 21, ["721"]],
    ["sk", "421"],
    ["si", "386"],
    ["sb", "677"],
    ["so", "252"],
    ["za", "27"],
    ["kr", "82"],
    ["ss", "211"],
    ["es", "34"],
    ["lk", "94"],
    ["bl", "590", 1],
    ["sh", "290"],
    ["kn", "1", 18, ["869"]],
    ["lc", "1", 19, ["758"]],
    ["mf", "590", 2],
    ["pm", "508"],
    ["vc", "1", 20, ["784"]],
    ["sd", "249"],
    ["sr", "597"],
    ["sj", "47", 1, ["79"]],
    ["se", "46"],
    ["ch", "41"],
    ["sy", "963"],
    ["tw", "886"],
    ["tj", "992"],
    ["tz", "255"],
    ["th", "66"],
    ["tl", "670"],
    ["tg", "228"],
    ["tk", "690"],
    ["to", "676"],
    ["tt", "1", 22, ["868"]],
    ["tn", "216"],
    ["tr", "90"],
    ["tm", "993"],
    ["tc", "1", 23, ["649"]],
    ["tv", "688"],
    ["ug", "256"],
    ["ua", "380"],
    ["ae", "971"],
    ["gb", "44", 0],
    ["us", "1", 0],
    ["uy", "598"],
    ["vi", "1", 24, ["340"]],
    ["uz", "998"],
    ["vu", "678"],
    ["va", "39", 1, ["06698"]],
    ["ve", "58"],
    ["vn", "84"],
    ["wf", "681"],
    ["eh", "212", 1, ["5288", "5289"]],
    ["ye", "967"],
    ["zm", "260"],
    ["zw", "263"],
    ["ax", "358", 1, ["18"]]
  ];
  var allCountries = [];
  for (let i = 0; i < rawCountryData.length; i++) {
    const c = rawCountryData[i];
    allCountries[i] = {
      name: "",
      // this is now populated in the plugin
      iso2: c[0],
      dialCode: c[1],
      priority: c[2] || 0,
      areaCodes: c[3] || null,
      nodeById: {}
    };
  }
  var data_default = allCountries;

  // src/js/input/i18n/en/countries.ts
  var countries_default = {
    ad: "Andorra",
    ae: "United Arab Emirates",
    af: "Afghanistan",
    ag: "Antigua & Barbuda",
    ai: "Anguilla",
    al: "Albania",
    am: "Armenia",
    ao: "Angola",
    aq: "Antarctica",
    ar: "Argentina",
    as: "American Samoa",
    at: "Austria",
    au: "Australia",
    aw: "Aruba",
    ax: "\xC5land Islands",
    az: "Azerbaijan",
    ba: "Bosnia & Herzegovina",
    bb: "Barbados",
    bd: "Bangladesh",
    be: "Belgium",
    bf: "Burkina Faso",
    bg: "Bulgaria",
    bh: "Bahrain",
    bi: "Burundi",
    bj: "Benin",
    bl: "St. Barth\xE9lemy",
    bm: "Bermuda",
    bn: "Brunei",
    bo: "Bolivia",
    bq: "Caribbean Netherlands",
    br: "Brazil",
    bs: "Bahamas",
    bt: "Bhutan",
    bv: "Bouvet Island",
    bw: "Botswana",
    by: "Belarus",
    bz: "Belize",
    ca: "Canada",
    cc: "Cocos (Keeling) Islands",
    cd: "Congo - Kinshasa",
    cf: "Central African Republic",
    cg: "Congo - Brazzaville",
    ch: "Switzerland",
    ci: "C\xF4te d\u2019Ivoire",
    ck: "Cook Islands",
    cl: "Chile",
    cm: "Cameroon",
    cn: "China",
    co: "Colombia",
    cr: "Costa Rica",
    cu: "Cuba",
    cv: "Cape Verde",
    cw: "Cura\xE7ao",
    cx: "Christmas Island",
    cy: "Cyprus",
    cz: "Czechia",
    de: "Germany",
    dj: "Djibouti",
    dk: "Denmark",
    dm: "Dominica",
    do: "Dominican Republic",
    dz: "Algeria",
    ec: "Ecuador",
    ee: "Estonia",
    eg: "Egypt",
    eh: "Western Sahara",
    er: "Eritrea",
    es: "Spain",
    et: "Ethiopia",
    fi: "Finland",
    fj: "Fiji",
    fk: "Falkland Islands",
    fm: "Micronesia",
    fo: "Faroe Islands",
    fr: "France",
    ga: "Gabon",
    gb: "United Kingdom",
    gd: "Grenada",
    ge: "Georgia",
    gf: "French Guiana",
    gg: "Guernsey",
    gh: "Ghana",
    gi: "Gibraltar",
    gl: "Greenland",
    gm: "Gambia",
    gn: "Guinea",
    gp: "Guadeloupe",
    gq: "Equatorial Guinea",
    gr: "Greece",
    gs: "South Georgia & South Sandwich Islands",
    gt: "Guatemala",
    gu: "Guam",
    gw: "Guinea-Bissau",
    gy: "Guyana",
    hk: "Hong Kong SAR China",
    hm: "Heard & McDonald Islands",
    hn: "Honduras",
    hr: "Croatia",
    ht: "Haiti",
    hu: "Hungary",
    id: "Indonesia",
    ie: "Ireland",
    il: "Israel",
    im: "Isle of Man",
    in: "India",
    io: "British Indian Ocean Territory",
    iq: "Iraq",
    ir: "Iran",
    is: "Iceland",
    it: "Italy",
    je: "Jersey",
    jm: "Jamaica",
    jo: "Jordan",
    jp: "Japan",
    ke: "Kenya",
    kg: "Kyrgyzstan",
    kh: "Cambodia",
    ki: "Kiribati",
    km: "Comoros",
    kn: "St. Kitts & Nevis",
    kp: "North Korea",
    kr: "South Korea",
    kw: "Kuwait",
    ky: "Cayman Islands",
    kz: "Kazakhstan",
    la: "Laos",
    lb: "Lebanon",
    lc: "St. Lucia",
    li: "Liechtenstein",
    lk: "Sri Lanka",
    lr: "Liberia",
    ls: "Lesotho",
    lt: "Lithuania",
    lu: "Luxembourg",
    lv: "Latvia",
    ly: "Libya",
    ma: "Morocco",
    mc: "Monaco",
    md: "Moldova",
    me: "Montenegro",
    mf: "St. Martin",
    mg: "Madagascar",
    mh: "Marshall Islands",
    mk: "North Macedonia",
    ml: "Mali",
    mm: "Myanmar (Burma)",
    mn: "Mongolia",
    mo: "Macao SAR China",
    mp: "Northern Mariana Islands",
    mq: "Martinique",
    mr: "Mauritania",
    ms: "Montserrat",
    mt: "Malta",
    mu: "Mauritius",
    mv: "Maldives",
    mw: "Malawi",
    mx: "Mexico",
    my: "Malaysia",
    mz: "Mozambique",
    na: "Namibia",
    nc: "New Caledonia",
    ne: "Niger",
    nf: "Norfolk Island",
    ng: "Nigeria",
    ni: "Nicaragua",
    nl: "Netherlands",
    no: "Norway",
    np: "Nepal",
    nr: "Nauru",
    nu: "Niue",
    nz: "New Zealand",
    om: "Oman",
    pa: "Panama",
    pe: "Peru",
    pf: "French Polynesia",
    pg: "Papua New Guinea",
    ph: "Philippines",
    pk: "Pakistan",
    pl: "Poland",
    pm: "St. Pierre & Miquelon",
    pn: "Pitcairn Islands",
    pr: "Puerto Rico",
    ps: "Palestinian Territories",
    pt: "Portugal",
    pw: "Palau",
    py: "Paraguay",
    qa: "Qatar",
    re: "R\xE9union",
    ro: "Romania",
    rs: "Serbia",
    ru: "Russia",
    rw: "Rwanda",
    sa: "Saudi Arabia",
    sb: "Solomon Islands",
    sc: "Seychelles",
    sd: "Sudan",
    se: "Sweden",
    sg: "Singapore",
    sh: "St. Helena",
    si: "Slovenia",
    sj: "Svalbard & Jan Mayen",
    sk: "Slovakia",
    sl: "Sierra Leone",
    sm: "San Marino",
    sn: "Senegal",
    so: "Somalia",
    sr: "Suriname",
    ss: "South Sudan",
    st: "S\xE3o Tom\xE9 & Pr\xEDncipe",
    sv: "El Salvador",
    sx: "Sint Maarten",
    sy: "Syria",
    sz: "Eswatini",
    tc: "Turks & Caicos Islands",
    td: "Chad",
    tf: "French Southern Territories",
    tg: "Togo",
    th: "Thailand",
    tj: "Tajikistan",
    tk: "Tokelau",
    tl: "Timor-Leste",
    tm: "Turkmenistan",
    tn: "Tunisia",
    to: "Tonga",
    tr: "Turkey",
    tt: "Trinidad & Tobago",
    tv: "Tuvalu",
    tw: "Taiwan",
    tz: "Tanzania",
    ua: "Ukraine",
    ug: "Uganda",
    um: "U.S. Outlying Islands",
    us: "United States",
    uy: "Uruguay",
    uz: "Uzbekistan",
    va: "Vatican City",
    vc: "St. Vincent & Grenadines",
    ve: "Venezuela",
    vg: "British Virgin Islands",
    vi: "U.S. Virgin Islands",
    vn: "Vietnam",
    vu: "Vanuatu",
    wf: "Wallis & Futuna",
    ws: "Samoa",
    ye: "Yemen",
    yt: "Mayotte",
    za: "South Africa",
    zm: "Zambia",
    zw: "Zimbabwe"
  };

  // src/js/input/i18n/en/interface.ts
  var interface_default = {
    selectedCountryAriaLabel: "Selected country",
    noCountrySelected: "No country selected",
    countryListAriaLabel: "List of countries",
    searchPlaceholder: "Search",
    zeroSearchResults: "No results found",
    oneSearchResult: "1 result found",
    multipleSearchResults: "${count} results found",
    // additional countries (not supported by country-list library)
    ac: "Ascension Island",
    xk: "Kosovo"
  };

  // src/js/input/i18n/en/index.ts
  var en_default = { ...countries_default, ...interface_default };

  // src/js/input/libraries/StringUtils.ts
  function normaliseString(s = "") {
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  // src/js/input/libraries/DOMUtils.ts
  function createDOMElement(tagName, attributes, parentNode) {
    const el = document.createElement(tagName);
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value));
    }
    if (parentNode) {
      parentNode.appendChild(el);
    }
    return el;
  }

  // src/js/input/libraries/StyleUtils.ts
  function buildElementClass(styles, element, attribute) {
    let builtClass = styles.elementParentClass;
    if (element) {
      const elementSeparator = "__";
      const styleElement = styles[element];
      builtClass += elementSeparator + (styleElement ? styleElement : element);
    }
    if (attribute) {
      const attributeSeparator = "--";
      builtClass += attribute ? `${attributeSeparator}${styles[attribute]}` : "";
    }
    return builtClass;
  }

  // src/js/input/libraries/InstancesUtils.ts
  function forEachInstance(method) {
    const { instances } = InternationalNumberInput_default;
    Object.values(instances).forEach((instance) => instance[method]());
  }
  function loadUtils(path) {
    if (!InternationalNumberInput_default.utils && !InternationalNumberInput_default.startedLoadingUtilsScript) {
      InternationalNumberInput_default.startedLoadingUtilsScript = true;
      return new Promise((resolve, reject) => {
        import(path).then(({ default: utils }) => {
          InternationalNumberInput_default.utils = utils;
          forEachInstance("handleUtils");
          resolve(true);
        }).catch(() => {
          forEachInstance("rejectUtilsScriptPromise");
          reject();
        });
      });
    }
    return null;
  }

  // src/js/exceptions.ts
  var ValidationError = class extends Error {
    constructor(msg) {
      super(msg);
      this.name = "ValidationError";
    }
  };
  var InvalidFormat = class extends ValidationError {
    constructor(msg = "The number has an invalid format.") {
      super(msg);
      this.name = "InvalidFormat";
    }
  };
  var InvalidChecksum = class extends ValidationError {
    constructor(msg = "The number checksum or check digit is invalid.") {
      super(msg);
      this.name = "InvalidChecksum";
    }
  };
  var InvalidLength = class extends ValidationError {
    constructor(msg = "The number has an invalid length.") {
      super(msg);
      this.name = "InvalidLength";
    }
  };
  var InvalidComponent = class extends ValidationError {
    constructor(msg = "One of the parts of the number are invalid or unknown.") {
      super(msg);
      this.name = "InvalidComponent";
    }
  };
  var InvalidCountry = class extends ValidationError {
    constructor(msg = "The country is not supported.") {
      super(msg);
      this.name = "InvalidCountry";
    }
  };
  var InvalidNumberType = class extends ValidationError {
    constructor(msg = "The number type is not supported for the provided country.") {
      super(msg);
      this.name = "InvalidNumberType";
    }
  };

  // src/js/input/InternationalNumberInput.class.ts
  var Ini = class {
    constructor(input, customOptions = {}) {
      this.id = crypto.randomUUID();
      this.numberInput = input;
      this.highlightedItem = null;
      this.options = Object.assign({}, InternationalNumberInputOptions_default_default, customOptions);
      this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
    }
    /**
     * Initialization method.
     * Can't be private as it's called from internationalNumberInput convenience wrapper.
     */
    _init() {
      if (this.options.useFullscreenPopup) {
        this.options.fixDropdownWidth = false;
      }
      if (this.options.useFullscreenPopup && !this.options.dropdownContainer) {
        this.options.dropdownContainer = document.body;
      }
      this.options.i18n = { ...en_default, ...this.options.i18n };
      const autoCountryPromise = new Promise((resolve, reject) => {
        this.resolveAutoCountryPromise = resolve;
        this.rejectAutoCountryPromise = reject;
      });
      const utilsScriptPromise = new Promise((resolve, reject) => {
        this.resolveUtilsScriptPromise = resolve;
        this.rejectUtilsScriptPromise = reject;
      });
      this.promise = Promise.all([autoCountryPromise, utilsScriptPromise]);
      this.selectedCountryData = null;
      this._processCountryData();
      this._generateMarkup();
      this._setInitialState();
      this._initListeners();
      this._initRequests();
    }
    /**
     * PRIVATE METHODS
     */
    /**
     * Prepare all of the country data, including onlyCountries, excludeCountries, countryOrder options.
     */
    _processCountryData() {
      this._processAllCountries();
      this._translateCountryNames();
      this._sortCountries();
    }
    /**
     * Sort countries by countryOrder option (if present), then name.
     */
    _sortCountries() {
      if (this.options.countryOrder) {
        this.options.countryOrder = this.options.countryOrder.map(
          (country) => country.toLowerCase()
        );
      }
      this.countries.sort((a, b) => {
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
        return a.name.localeCompare(b.name);
      });
    }
    /**
     * Process onlyCountries or excludeCountries array if present.
     */
    _processAllCountries() {
      const { onlyCountries, excludeCountries } = this.options;
      if (onlyCountries.length) {
        const lowerCaseOnlyCountries = onlyCountries.map(
          (country) => country.toLowerCase()
        );
        this.countries = data_default.filter(
          (country) => lowerCaseOnlyCountries.indexOf(country.iso2) > -1
        );
      } else if (excludeCountries.length) {
        const lowerCaseExcludeCountries = excludeCountries.map(
          (country) => country.toLowerCase()
        );
        this.countries = data_default.filter(
          (country) => lowerCaseExcludeCountries.indexOf(country.iso2) === -1
        );
      } else {
        this.countries = data_default;
      }
    }
    /**
     * Translate countries according to the configurations provided.
     */
    _translateCountryNames() {
      this.countries.forEach((country) => {
        const iso2 = country.iso2.toLowerCase();
        if (this.options.i18n.hasOwnProperty(iso2)) {
          country.name = this.options.i18n[iso2];
        }
      });
    }
    /**
     * Generate all of the markup for the plugin: the selected country overlay, and the dropdown.
     */
    _generateMarkup() {
      this.numberInput.classList.add(
        buildElementClass(this.options.styles, "elementNumberInputClass" /* NumberInput */)
      );
      const autocompleteAttribute = "autocomplete";
      if (!this.numberInput.hasAttribute(autocompleteAttribute) && !(this.numberInput.form && this.numberInput.form.hasAttribute(autocompleteAttribute))) {
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
        i18n
      } = this.options;
      let parentClass = styles.elementParentClass;
      if (allowDropdown) {
        parentClass += ` ${buildElementClass(styles, void 0, "attributeAllowDropdownClass" /* AllowDropdown */)}`;
      }
      if (showFlags) {
        parentClass += ` ${buildElementClass(styles, void 0, "attributeShowFlagsClass" /* ShowFlags */)}`;
      }
      if (styles.elementContainerClass) {
        parentClass += ` ${styles.elementContainerClass}`;
      }
      if (!useFullscreenPopup) {
        parentClass += ` ${buildElementClass(styles, void 0, "attributeInlineDropdownClass" /* InlineDropdown */)}`;
      }
      const wrapper = createDOMElement("div", {
        class: parentClass
      });
      this.numberInput.parentNode?.insertBefore(wrapper, this.numberInput);
      if (allowDropdown || showFlags) {
        this.countryContainer = createDOMElement(
          "div",
          {
            class: buildElementClass(
              this.options.styles,
              "elementCountryContainerClass" /* CountryContainer */
            )
          },
          wrapper
        );
        if (allowDropdown) {
          this.selectedCountry = createDOMElement(
            "button",
            {
              type: "button",
              class: buildElementClass(
                this.options.styles,
                "elementSelectedCountryClass" /* SelectedCountry */
              ),
              "aria-expanded": "false",
              "aria-label": this.options.i18n.selectedCountryAriaLabel,
              "aria-haspopup": "true",
              "aria-controls": `${buildElementClass(this.options.styles, "elementDropdownContentClass" /* DropdownContent */)}-${this.id}`,
              role: "combobox"
            },
            this.countryContainer
          );
          if (this.numberInput.disabled) {
            this.selectedCountry.setAttribute("disabled", "true");
          }
        } else {
          this.selectedCountry = createDOMElement(
            "div",
            {
              class: buildElementClass(
                styles,
                "elementSelectedCountryClass" /* SelectedCountry */
              )
            },
            this.countryContainer
          );
        }
        const selectedCountryPrimary = createDOMElement(
          "div",
          {
            class: buildElementClass(
              this.options.styles,
              "elementSelectedCountryPrimaryClass" /* SelectedCountryPrimary */
            )
          },
          this.selectedCountry
        );
        this.selectedCountryInner = createDOMElement(
          "div",
          null,
          selectedCountryPrimary
        );
        this.selectedCountryA11yText = createDOMElement(
          "span",
          {
            class: buildElementClass(
              this.options.styles,
              "elementAccessibilityTextClass" /* AccessibilityText */
            )
          },
          this.selectedCountryInner
        );
        if (allowDropdown) {
          this.dropdownArrow = createDOMElement(
            "div",
            {
              class: buildElementClass(
                this.options.styles,
                "elementArrowClass" /* Arrow */
              ),
              "aria-hidden": "true"
            },
            selectedCountryPrimary
          );
          const extraClasses = fixDropdownWidth ? "" : buildElementClass(
            styles,
            void 0,
            "attributeFlexibleDropdownWidthClass" /* FlexibleDropdownWidth */
          );
          this.dropdownContent = createDOMElement("div", {
            id: `${buildElementClass(this.options.styles, "elementDropdownContentClass" /* DropdownContent */)}-${this.id}`,
            class: `${buildElementClass(this.options.styles, "elementDropdownContentClass" /* DropdownContent */)} ${buildElementClass(this.options.styles, "elementHideClass" /* Hide */)} ${extraClasses}`
          });
          if (countrySearch) {
            this.searchInput = createDOMElement(
              "input",
              {
                type: "text",
                class: buildElementClass(
                  styles,
                  "elementSearchInputClass" /* SearchInput */
                ),
                placeholder: i18n.searchPlaceholder,
                role: "combobox",
                "aria-expanded": "true",
                "aria-label": i18n.searchPlaceholder,
                "aria-controls": `${buildElementClass(this.options.styles, "elementCountryListboxClass" /* CountryListbox */)}-${this.id}`,
                "aria-autocomplete": "list",
                autocomplete: "off"
              },
              this.dropdownContent
            );
            this.searchResultsA11yText = createDOMElement(
              "span",
              {
                class: buildElementClass(
                  this.options.styles,
                  "elementAccessibilityTextClass" /* AccessibilityText */
                )
              },
              this.dropdownContent
            );
          }
          this.countryList = createDOMElement(
            "ul",
            {
              class: buildElementClass(
                this.options.styles,
                "elementCountryListboxClass" /* CountryListbox */
              ),
              id: `${buildElementClass(this.options.styles, "elementCountryListboxClass" /* CountryListbox */)}-${this.id}`,
              role: "listbox",
              "aria-label": i18n.countryListAriaLabel
            },
            this.dropdownContent
          );
          this._appendListItems();
          if (countrySearch) {
            this._updateSearchResultsText();
          }
          if (dropdownContainer) {
            let dropdownClasses = `${buildElementClass(this.options.styles)}`;
            if (useFullscreenPopup) {
              dropdownClasses += ` ${buildElementClass(this.options.styles, void 0, "attributeFullscreenPopupClass" /* FullscreenPopup */)}`;
            } else {
              dropdownClasses += ` ${buildElementClass(this.options.styles, void 0, "attributeInlineDropdownClass" /* InlineDropdown */)}`;
            }
            this.dropdown = createDOMElement("div", {
              class: dropdownClasses
            });
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
          this.hiddenInput = createDOMElement("input", {
            type: "hidden",
            name: names.phone
          });
          wrapper.appendChild(this.hiddenInput);
        }
        if (names.country) {
          this.hiddenInputCountry = createDOMElement("input", {
            type: "hidden",
            name: names.country
          });
          wrapper.appendChild(this.hiddenInputCountry);
        }
      }
    }
    /**
     * For each country: add a country list item <li> to the countryList <ul> container.
     */
    _appendListItems() {
      this.countries.forEach((country, index) => {
        const extraClass = index === 0 ? buildElementClass(
          this.options.styles,
          "elementHighlightClass" /* Highlight */
        ) : "";
        const listItem = createDOMElement(
          "li",
          {
            id: `${buildElementClass(this.options.styles, "elementItemClass" /* Item */)}-${this.id}-${country.iso2}`,
            class: `${buildElementClass(this.options.styles, "elementCountryClass" /* Country */)} ${extraClass}`,
            tabindex: "-1",
            role: "option",
            ["data-country-code" /* CountryCode */]: country.iso2,
            "aria-selected": "false"
          },
          this.countryList
        );
        country.nodeById[this.id] = listItem;
        if (this.options.showFlags) {
          const flagBoxElement = createDOMElement("div", {
            class: buildElementClass(
              this.options.styles,
              "elementFlagBoxClass" /* FlagBox */
            )
          });
          createDOMElement(
            "div",
            {
              class: `${buildElementClass(this.options.styles, "elementFlagClass" /* Flag */)} ${buildElementClass(this.options.styles, country.iso2)}`
            },
            flagBoxElement
          );
          listItem.insertAdjacentElement("beforeend", flagBoxElement);
        }
        const content = createDOMElement("span", {
          class: buildElementClass(
            this.options.styles,
            "elementCountryNameClass" /* CountryName */
          )
        });
        content.insertAdjacentText("beforeend", country.name);
        listItem.insertAdjacentElement("beforeend", content);
      });
    }
    /**
     * Set the initial state of the input value and the selected country by:
     * 1. Using explicit initialCountry
     * @param overrideAutoCountry
     */
    _setInitialState(overrideAutoCountry = false) {
      const attributeValue = this.numberInput.getAttribute("value");
      const inputValue = this.numberInput.value;
      const useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
      const val = useAttribute ? attributeValue : inputValue;
      const { initialCountry, geoIpLookup } = this.options;
      const isAutoCountry = initialCountry === "auto" && geoIpLookup;
      if (!isAutoCountry || overrideAutoCountry) {
        const lowerInitialCountry = initialCountry ? initialCountry.toLowerCase() : "";
        const isValidInitialCountry = lowerInitialCountry && this._getCountryData(lowerInitialCountry, true);
        if (isValidInitialCountry) {
          this._setCountry(lowerInitialCountry);
        } else {
          this._setCountry();
        }
      }
      if (val) {
        this._updateValFromNumber(val);
      }
    }
    /**
     * Initialise the main event listeners: input keyup, and click selected country.
     */
    _initListeners() {
      this._initNumberInputListeners();
      if (this.options.allowDropdown) {
        this._initDropdownListeners();
      }
      if ((this.hiddenInput || this.hiddenInputCountry) && this.numberInput.form) {
        this._initHiddenInputListener();
      }
    }
    /**
     * Update hidden input on form submit.
     */
    _initHiddenInputListener() {
      this._handleHiddenInputSubmit = () => {
        if (this.hiddenInput) {
          this.hiddenInput.value = this.getNumber();
        }
        if (this.hiddenInputCountry) {
          this.hiddenInputCountry.value = this.getSelectedCountryData().iso2 || "";
        }
      };
      this.numberInput.form?.addEventListener(
        "submit",
        this._handleHiddenInputSubmit
      );
    }
    /**
     * Initialise the dropdown listeners.
     */
    _initDropdownListeners() {
      const elementHideClass = buildElementClass(
        this.options.styles,
        "elementHideClass" /* Hide */
      );
      this._handleLabelClick = (e) => {
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
      this._handleClickSelectedCountry = () => {
        if (this.dropdownContent.classList.contains(elementHideClass) && !this.numberInput.disabled && !this.numberInput.readOnly) {
          this._openDropdown();
        }
      };
      this.selectedCountry.addEventListener(
        "click",
        this._handleClickSelectedCountry
      );
      this._handleCountryContainerKeydown = (e) => {
        const isDropdownHidden = this.dropdownContent.classList.contains(elementHideClass);
        if (isDropdownHidden && [
          "ArrowUp" /* ArrowUp */,
          "ArrowDown" /* ArrowDown */,
          " " /* Space */,
          "Enter" /* Enter */
        ].map((key) => key.toString()).includes(e.key)) {
          e.preventDefault();
          e.stopPropagation();
          this._openDropdown();
        }
        if (e.key === "Tab" /* Tab */) {
          this._closeDropdown();
        }
      };
      this.countryContainer.addEventListener(
        "keydown",
        this._handleCountryContainerKeydown
      );
    }
    /**
     * Init many requests: utils script / geo ip lookup.
     */
    _initRequests() {
      const { utilsScriptPath, initialCountry, geoIpLookup } = this.options;
      if (utilsScriptPath && !InternationalNumberInput_default.utils) {
        if (InternationalNumberInput_default.documentReady()) {
          InternationalNumberInput_default.loadUtils(utilsScriptPath);
        } else {
          window.addEventListener("load", () => {
            InternationalNumberInput_default.loadUtils(utilsScriptPath);
          });
        }
      } else {
        this.resolveUtilsScriptPromise();
      }
      const isAutoCountry = initialCountry === "auto" && geoIpLookup;
      if (isAutoCountry && !this.selectedCountryData?.iso2) {
        this._loadAutoCountry();
      } else {
        this.resolveAutoCountryPromise();
      }
    }
    /**
     * Perform the geo ip lookup.
     */
    _loadAutoCountry() {
      if (InternationalNumberInput_default.autoCountry) {
        this.handleAutoCountry();
      } else if (!InternationalNumberInput_default.startedLoadingAutoCountry) {
        InternationalNumberInput_default.startedLoadingAutoCountry = true;
        if (typeof this.options.geoIpLookup === "function") {
          this.options.geoIpLookup(
            (iso2 = "") => {
              const iso2Lower = iso2.toLowerCase();
              const isValidIso2 = iso2Lower && this._getCountryData(iso2Lower, true);
              if (isValidIso2) {
                InternationalNumberInput_default.autoCountry = iso2Lower;
                setTimeout(
                  () => forEachInstance("handleAutoCountry")
                );
              } else {
                this._setInitialState();
                forEachInstance("rejectAutoCountryPromise");
              }
            },
            () => {
              this._setInitialState();
              forEachInstance("rejectAutoCountryPromise");
            }
          );
        }
      }
    }
    /**
     * Initialize the number input listeners.
     */
    _initNumberInputListeners() {
      const { strictMode, formatAsYouType, formatOnDisplay } = this.options;
      let userOverrideFormatting = false;
      this._handleInputEvent = (e) => {
        if (this._updateCountryFromNumber(this.numberInput.value)) {
          this._triggerCountryChange();
        }
        const isFormattingChar = e?.data && /[^a-zA-Z0-9]/.test(e.data);
        const isPaste = e?.inputType === "insertFromPaste" && this.numberInput.value;
        if (isFormattingChar || isPaste && !strictMode) {
          userOverrideFormatting = true;
        }
        const disableFormatOnSetNumber = e?.detail?.isSetNumber && !formatOnDisplay;
        if (formatAsYouType && !userOverrideFormatting && !disableFormatOnSetNumber) {
          const currentCaretPos = this.numberInput.selectionStart || 0;
          const valueBeforeCaret = this.numberInput.value.substring(
            0,
            currentCaretPos
          );
          const formattedValue = this._formatNumberAsYouType();
          this.numberInput.value = formattedValue;
        }
      };
      this.numberInput.addEventListener(
        "input",
        this._handleInputEvent
      );
      if (strictMode) {
        this._handleKeydownEvent = (e) => {
          if (e.key && e.key.length === 1 && !e.altKey && !e.ctrlKey && !e.metaKey) {
            if (strictMode) {
              const isInitialPlus = this.numberInput.selectionStart === 0 && e.key === "+";
              const isNumeric = /^[0-9]$/.test(e.key);
              const isAllowedChar = isInitialPlus || isNumeric;
              const fullNumber = this._getFullNumber();
              const coreNumber = InternationalNumberInput_default.utils.getCoreNumber(
                fullNumber,
                this.selectedCountryData.iso2,
                this.options.numberType
              );
              const hasReachedMaxLength = this.maxCoreNumberLength && coreNumber.length >= this.maxCoreNumberLength;
              const selectedText = this.numberInput.value.substring(
                this.numberInput.selectionStart || 0,
                this.numberInput.selectionEnd || 0
              );
              const hasSelectedDigit = /\d/.test(selectedText);
              if (!isAllowedChar || hasReachedMaxLength && !hasSelectedDigit) {
                e.preventDefault();
              }
            }
          }
        };
        this.numberInput.addEventListener(
          "keydown",
          this._handleKeydownEvent
        );
      }
    }
    /**
     * Adhere to the input's maxlength attr.
     * @param number The number the user inputted.
     * @returns The number limited to the max length allowed
     */
    _cap(number) {
      const max = parseInt(
        this.numberInput.getAttribute("maxlength") || "",
        10
      );
      return max && number.length > max ? number.substring(0, max) : number;
    }
    /**
     * Trigger a custom event on the input.
     * @param name The name of the event to be triggered.
     * @param detailProps The details of the event to send to the catcher.
     */
    _trigger(name, detailProps = {}) {
      const e = new CustomEvent(name, {
        bubbles: true,
        cancelable: true,
        detail: detailProps
      });
      this.numberInput.dispatchEvent(e);
    }
    /**
     * Open the dropdown.
     */
    _openDropdown() {
      const { fixDropdownWidth, countrySearch } = this.options;
      if (fixDropdownWidth) {
        this.dropdownContent.style.width = `${this.numberInput.offsetWidth}px`;
      }
      this.dropdownContent.classList.remove(
        buildElementClass(this.options.styles, "elementHideClass" /* Hide */)
      );
      this.selectedCountry.setAttribute("aria-expanded", "true");
      this._setDropdownPosition();
      if (countrySearch) {
        const firstCountryItem = this.countryList.firstElementChild;
        if (firstCountryItem) {
          this._highlightListItem(firstCountryItem, false);
          this.countryList.scrollTop = 0;
        }
        this.searchInput.focus();
      }
      this._bindDropdownListeners();
      this.dropdownArrow.classList.add(
        buildElementClass(
          this.options.styles,
          "elementArrowClass" /* Arrow */,
          "attributeUpClass" /* Up */
        )
      );
      this.dropdownArrow.classList.add(
        buildElementClass(
          this.options.styles,
          "elementArrowClass" /* Arrow */,
          "attributeDownClass" /* Down */
        )
      );
      this._trigger("open:countrydropdown");
    }
    /**
     * Set the dropdown position
     */
    _setDropdownPosition() {
      if (this.options.dropdownContainer) {
        this.options.dropdownContainer.appendChild(this.dropdown);
      }
      if (!this.options.useFullscreenPopup) {
        const inputPosRelativeToVP = this.numberInput.getBoundingClientRect();
        const inputHeight = this.numberInput.offsetHeight;
        if (this.options.dropdownContainer) {
          this.dropdown.style.top = `${inputPosRelativeToVP.top + inputHeight}px`;
          this.dropdown.style.left = `${inputPosRelativeToVP.left}px`;
          this._handleWindowScroll = () => this._closeDropdown();
          window.addEventListener("scroll", this._handleWindowScroll);
        }
      }
    }
    /**
     * Binds listeners to the dropdown when it is opened.
     */
    _bindDropdownListeners() {
      const countryClass = buildElementClass(
        this.options.styles,
        "elementCountryClass" /* Country */
      );
      this._handleMouseoverCountryList = (e) => {
        const listItem = e.target?.closest(`.${countryClass}`);
        if (listItem) {
          this._highlightListItem(listItem, false);
        }
      };
      this.countryList.addEventListener(
        "mouseover",
        this._handleMouseoverCountryList
      );
      this._handleClickCountryList = (e) => {
        const listItem = e.target?.closest(`.${countryClass}`);
        if (listItem) {
          this._selectListItem(listItem);
        }
      };
      this.countryList.addEventListener(
        "click",
        this._handleClickCountryList
      );
      let isOpening = true;
      this._handleClickOffToClose = () => {
        if (!isOpening) {
          this._closeDropdown();
        }
        isOpening = false;
      };
      document.documentElement.addEventListener(
        "click",
        this._handleClickOffToClose
      );
      let query = "";
      let queryTimer = null;
      this._handleKeydownOnDropdown = (e) => {
        if ([
          "ArrowUp" /* ArrowUp */,
          "ArrowDown" /* ArrowDown */,
          "Enter" /* Enter */,
          "Escape" /* Escape */
        ].map((key) => key.toString()).includes(e.key)) {
          e.preventDefault();
          e.stopPropagation();
          if (e.key === "ArrowUp" /* ArrowUp */ || e.key === "ArrowDown" /* ArrowDown */) {
            this._handleUpDownKey(e.key);
          } else if (e.key === "Enter" /* Enter */) {
            this._handleEnterKey();
          } else if (e.key === "Escape" /* Escape */) {
            this._closeDropdown();
          }
        }
        if (!this.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
          e.stopPropagation();
          if (queryTimer) {
            clearTimeout(queryTimer);
          }
          query += e.key.toLowerCase();
          this._searchForCountry(query);
          queryTimer = setTimeout(() => {
            query = "";
          }, 1e3);
        }
      };
      document.addEventListener("keydown", this._handleKeydownOnDropdown);
      if (this.options.countrySearch) {
        const doFilter = () => {
          const inputQuery = this.searchInput.value.trim();
          if (inputQuery) {
            this._filterCountries(inputQuery);
          } else {
            this._filterCountries("", true);
          }
        };
        let keyupTimer = null;
        this._handleSearchChange = () => {
          if (keyupTimer) {
            clearTimeout(keyupTimer);
          }
          keyupTimer = setTimeout(() => {
            doFilter();
            keyupTimer = null;
          }, 100);
        };
        this.searchInput.addEventListener(
          "input",
          this._handleSearchChange
        );
        this.searchInput.addEventListener(
          "click",
          (e) => e.stopPropagation()
        );
      }
    }
    /**
     * Hidden search (countrySearch disabled): Finds the first list item whose name start with the query string.
     * @param query The string to be queried.
     */
    _searchForCountry(query) {
      for (let i = 0; i < this.countries.length; i++) {
        const c = this.countries[i];
        const startsWith = c.name.substring(0, query.length).toLowerCase() === query;
        if (startsWith) {
          const listItem = c.nodeById[this.id];
          this._highlightListItem(listItem, false);
          this._scrollTo(listItem);
          break;
        }
      }
    }
    /**
     * Country search enabled: Filter the countries according to the search query.
     * @param query The string to be queried.
     * @param isReset
     */
    _filterCountries(query, isReset = false) {
      let noCountriesAddedYet = true;
      this.countryList.innerHTML = "";
      const normalisedQuery = normaliseString(query);
      for (let i = 0; i < this.countries.length; i++) {
        const c = this.countries[i];
        const normalisedCountryName = normaliseString(c.name);
        if (isReset || normalisedCountryName.includes(normalisedQuery) || c.iso2.includes(normalisedQuery)) {
          const listItem = c.nodeById[this.id];
          if (listItem) {
            this.countryList.appendChild(listItem);
          }
          if (noCountriesAddedYet) {
            this._highlightListItem(listItem, false);
            noCountriesAddedYet = false;
          }
        }
      }
      if (noCountriesAddedYet) {
        this._highlightListItem(null, false);
      }
      this.countryList.scrollTop = 0;
      this._updateSearchResultsText();
    }
    /**
     * Updates the search results' text (for a11y).
     */
    _updateSearchResultsText() {
      const { i18n } = this.options;
      const count = this.countryList.childElementCount;
      let searchText;
      if (count === 0) {
        searchText = i18n.zeroSearchResults;
      } else if (count === 1) {
        searchText = i18n.oneSearchResult;
      } else {
        searchText = i18n.multipleSearchResults?.replace(
          "${count}",
          count.toString()
        );
      }
      this.searchResultsA11yText.textContent = searchText || "";
    }
    /**
     * Event that highlights the next/previous item in the list (and ensures it is visible).
     * @param key The key that was used.
     */
    _handleUpDownKey(key) {
      let next = key === "ArrowUp" /* ArrowUp */ ? this.highlightedItem?.previousElementSibling : this.highlightedItem?.nextElementSibling;
      if (!next && this.countryList.childElementCount > 1) {
        next = key === "ArrowUp" /* ArrowUp */ ? this.countryList.lastElementChild : this.countryList.firstElementChild;
      }
      if (next) {
        this._scrollTo(next);
        this._highlightListItem(next, false);
      }
    }
    /**
     * Selects the currently highlighted item.
     */
    _handleEnterKey() {
      if (this.highlightedItem) {
        this._selectListItem(this.highlightedItem);
      }
    }
    /**
     * Update the input's value to the given val (format first if possible)
     * NOTE: this is called from _setInitialState, handleUtils and setNumber.
     * @param fullNumber The number the user has inputted.
     */
    _updateValFromNumber(fullNumber) {
      let number = fullNumber;
      number = this._beforeSetNumber(number);
      this.numberInput.value = number;
    }
    /**
     * Checks if a new country needs to be selected based on the given number.
     * NOTE: called from _setInitialState, keyup handler, setNumber.
     * @param fullNumber The number the user has inputted.
     * @returns Flag that identifies if an update to the country is necessary.
     */
    _updateCountryFromNumber(fullNumber) {
      const plusIndex = fullNumber.indexOf("+");
      let number = plusIndex ? fullNumber.substring(plusIndex) : fullNumber;
      let iso2 = null;
      if (!this.selectedCountryData.iso2) {
        iso2 = this.defaultCountry;
      }
      if (iso2 !== null) {
        return this._setCountry(iso2);
      }
      return false;
    }
    /**
     * Remove highlighting from other list items and highlight the given item.
     * @param listItem The HTML list item to be modified.
     * @param shouldFocus Identifies if the item is to be focused.
     */
    _highlightListItem(listItem, shouldFocus) {
      const elementHighlightClass = buildElementClass(
        this.options.styles,
        "elementHighlightClass" /* Highlight */
      );
      const prevItem = this.highlightedItem;
      if (prevItem) {
        prevItem.classList.remove(elementHighlightClass);
        prevItem.setAttribute("aria-selected", "false");
      }
      this.highlightedItem = listItem;
      if (this.highlightedItem) {
        this.highlightedItem.classList.add(elementHighlightClass);
        this.highlightedItem.setAttribute("aria-selected", "true");
        const activeDescendant = this.highlightedItem.getAttribute("id") || "";
        this.selectedCountry.setAttribute(
          "aria-activedescendant",
          activeDescendant
        );
        if (this.options.countrySearch) {
          this.searchInput.setAttribute(
            "aria-activedescendant",
            activeDescendant
          );
        }
      }
      if (shouldFocus) {
        this.highlightedItem?.focus();
      }
    }
    /**
     * Find the country data for the given iso2 code
     * @param iso2 The country whose information is to be fetched.
     * @param allowFail Identifies if a gracious fail should be used, retuning null, or an exception should be thrown otherwise.
     * @returns
     */
    _getCountryData(iso2, allowFail) {
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
    /**
     * Updates the selected country, placeholder, title, active list item, and other metedata.
     * NOTE: called from _setInitialState, _updateCountryFromNumber, _selectListItem, setCountry.
     * @param iso2 The country to be set as selected.
     * @returns Identifies if a change to the selected country was made. If false, it means the country was already selected.
     */
    _setCountry(iso2) {
      const { showFlags, i18n } = this.options;
      const prevCountry = this.selectedCountryData?.iso2 ? this.selectedCountryData : null;
      this.selectedCountryData = iso2 ? this._getCountryData(iso2, false) || null : null;
      if (this.selectedCountryData?.iso2) {
        this.defaultCountry = this.selectedCountryData.iso2;
      }
      if (this.selectedCountryInner) {
        let flagClass = "";
        let a11yText = "";
        if (iso2 && showFlags) {
          flagClass = `${buildElementClass(this.options.styles, "elementFlagClass" /* Flag */)} ${buildElementClass(this.options.styles, iso2)}`;
          a11yText = this.selectedCountryData.name;
        } else {
          flagClass = `${buildElementClass(this.options.styles, "elementFlagClass" /* Flag */)} ${buildElementClass(this.options.styles, "elementGlobeClass" /* Globe */)}`;
          a11yText = i18n.noCountrySelected || "";
        }
        this.selectedCountryInner.className = flagClass;
        this.selectedCountryA11yText.textContent = a11yText;
      }
      this._updatePlaceholder();
      this._updateMaxLength();
      return prevCountry?.iso2 !== iso2;
    }
    /**
     * Updates the maximum valid number length for the currently selected country.
     */
    _updateMaxLength() {
      const { strictMode, numberType } = this.options;
      if (strictMode && InternationalNumberInput_default.utils) {
        if (this.selectedCountryData?.iso2) {
          this.maxCoreNumberLength = InternationalNumberInput_default.utils.getMaxLength(
            this.selectedCountryData?.iso2
          );
        } else {
          this.maxCoreNumberLength = null;
        }
      }
    }
    /**
     * Updates the input placeholder to an example number from the currently selected country.
     */
    _updatePlaceholder() {
      const { autoPlaceholder, numberType, customPlaceholder } = this.options;
      const shouldSetPlaceholder = autoPlaceholder === "agressive" /* Aggressive */ || !this.hadInitialPlaceholder && autoPlaceholder === "polite" /* Polite */;
      if (shouldSetPlaceholder && InternationalNumberInput_default.utils) {
        let placeholder = this.selectedCountryData?.iso2 ? InternationalNumberInput_default.utils.getExampleNumber(
          this.selectedCountryData?.iso2,
          numberType
        ) : "";
        placeholder = this._beforeSetNumber(placeholder);
        if (typeof customPlaceholder === "function") {
          placeholder = customPlaceholder(
            placeholder,
            this.selectedCountryData
          );
        }
        this.numberInput.setAttribute("placeholder", placeholder);
      }
    }
    /**
     * Called when the user selects a list item from the dropdown.
     * @param listItem The item HTMLElement that was selected.
     */
    _selectListItem(listItem) {
      const countryChanged = this._setCountry(
        listItem.getAttribute("data-country-code" /* CountryCode */)
      );
      this._closeDropdown();
      this.numberInput.focus();
      if (countryChanged) {
        this._triggerCountryChange();
      }
    }
    /**
     * Closes the dropdown and unbinds any listeners.
     */
    _closeDropdown() {
      this.dropdownContent.classList.add(
        buildElementClass(this.options.styles, "elementHideClass" /* Hide */)
      );
      this.selectedCountry.setAttribute("aria-expanded", "false");
      this.selectedCountry.removeAttribute("aria-activedescendant");
      if (this.highlightedItem) {
        this.highlightedItem.setAttribute("aria-selected", "false");
      }
      if (this.options.countrySearch) {
        this.searchInput.removeAttribute("aria-activedescendant");
      }
      this.dropdownArrow.classList.remove(
        buildElementClass(
          this.options.styles,
          "elementArrowClass" /* Arrow */,
          "attributeUpClass" /* Up */
        )
      );
      document.removeEventListener("keydown", this._handleKeydownOnDropdown);
      if (this.options.countrySearch) {
        this.searchInput.removeEventListener(
          "input",
          this._handleSearchChange
        );
      }
      document.documentElement.removeEventListener(
        "click",
        this._handleClickOffToClose
      );
      this.countryList.removeEventListener(
        "mouseover",
        this._handleMouseoverCountryList
      );
      this.countryList.removeEventListener(
        "click",
        this._handleClickCountryList
      );
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
    /**
     * Check if an element is visible within it's container, else scroll until it is.
     * @param element The element to scroll into for it to be visible.
     */
    _scrollTo(element) {
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
        container.scrollTop = newScrollTop;
      } else if (elementBottom > containerBottom) {
        const heightDifference = containerHeight - elementHeight;
        container.scrollTop = newScrollTop - heightDifference;
      }
    }
    /**
     * Gets the input's value trimmed.
     * @returns The full number trimmed.
     */
    _getFullNumber() {
      const val = this.numberInput.value.trim();
      return val;
    }
    /**
     * Processes the number before it's set in the input to be valid.
     * @param fullNumber The number inputted by the user.
     * @returns The number limitted to the maximum length the number is allowed to have.
     */
    _beforeSetNumber(fullNumber) {
      const number = fullNumber;
      return this._cap(number);
    }
    /**
     * Triggers a "countrychange" event.
     */
    _triggerCountryChange() {
      this._trigger("countrychange");
    }
    /**
     * Formats the number according to it's rules.
     * @returns The formatted number.
     */
    _formatNumberAsYouType() {
      const val = this._getFullNumber();
      const result = InternationalNumberInput_default.utils ? InternationalNumberInput_default.utils.formatNumberAsYouType(
        val,
        this.selectedCountryData?.iso2,
        this.options.numberType
      ) : val;
      return result;
    }
    //**************************
    //*	SECRET PUBLIC METHODS
    //**************************
    /**
     * Handles the geoip call return.
     */
    handleAutoCountry() {
      if (this.options.initialCountry === "auto" && InternationalNumberInput_default.autoCountry) {
        this.defaultCountry = InternationalNumberInput_default.autoCountry;
        const hasSelectedCountryOrGlobe = this.selectedCountryData?.iso2 || this.selectedCountryInner.classList.contains(
          buildElementClass(this.options.styles, "elementGlobeClass" /* Globe */)
        );
        if (!hasSelectedCountryOrGlobe) {
          this.setCountry(this.defaultCountry);
        }
        this.resolveAutoCountryPromise();
      }
    }
    /**
     * Handles the utils request completion.
     */
    handleUtils() {
      if (InternationalNumberInput_default.utils) {
        if (this.numberInput.value) {
          this._updateValFromNumber(this.numberInput.value);
        }
        if (this.selectedCountryData?.iso2) {
          this._updatePlaceholder();
          this._updateMaxLength();
        }
      }
      this.resolveUtilsScriptPromise();
    }
    //********************
    //*	PUBLIC METHODS
    //********************
    /**
     * Destroys the instance of the INI.
     */
    destroy() {
      const { allowDropdown } = this.options;
      if (allowDropdown) {
        this._closeDropdown();
        this.selectedCountry.removeEventListener(
          "click",
          this._handleClickSelectedCountry
        );
        this.countryContainer.removeEventListener(
          "keydown",
          this._handleCountryContainerKeydown
        );
        const label = this.numberInput.closest("label");
        if (label) {
          label.removeEventListener("click", this._handleLabelClick);
        }
      }
      const { form } = this.numberInput;
      if (this._handleHiddenInputSubmit && form) {
        form.removeEventListener("submit", this._handleHiddenInputSubmit);
      }
      this.numberInput.removeEventListener(
        "input",
        this._handleInputEvent
      );
      if (this._handleKeydownEvent) {
        this.numberInput.removeEventListener(
          "keydown",
          this._handleKeydownEvent
        );
      }
      this.numberInput.removeAttribute("data-ini-id" /* InputId */);
      const wrapper = this.numberInput.parentNode;
      wrapper?.parentNode?.insertBefore(this.numberInput, wrapper);
      wrapper?.parentNode?.removeChild(wrapper);
      delete InternationalNumberInput_default.instances[this.id];
    }
    /**
     * Format the number to the given format.
     * @param format The format to be used.
     * @returns The number formatted.
     */
    getNumber(format) {
      if (InternationalNumberInput_default.utils) {
        const { iso2 } = this.selectedCountryData;
        return InternationalNumberInput_default.utils.formatNumber(
          this._getFullNumber(),
          iso2,
          this.options.numberType
        );
      }
      return "";
    }
    getCompactNumber() {
      if (InternationalNumberInput_default.utils) {
        const { iso2 } = this.selectedCountryData;
        return InternationalNumberInput_default.utils.getCoreNumber(
          this._getFullNumber(),
          iso2,
          this.options.numberType
        );
      }
      return "";
    }
    /**
     * Gets the country data for the currently selected country.
     * @returns The data of the selected country.
     */
    getSelectedCountryData() {
      return this.selectedCountryData;
    }
    /**
     * Gets the result of the validation process.
     * @returns The validation result.
     */
    getValidationError() {
      if (InternationalNumberInput_default.utils) {
        const { iso2 } = this.selectedCountryData;
        return InternationalNumberInput_default.utils.isValidNumber(
          this._getFullNumber(),
          iso2,
          this.options.numberType
        );
      }
      return {
        isValid: false,
        error: new ValidationError("An unknown error occurred")
      };
    }
    /**
     * Validates the currently entered number.
     * @returns Identifies if the entered number is valid.
     */
    isValidNumber() {
      const val = this._getFullNumber();
      return InternationalNumberInput_default.utils ? InternationalNumberInput_default.utils.isValidNumber(
        val,
        this.selectedCountryData?.iso2,
        this.options.numberType
      ).isValid : false;
    }
    /**
     * Update the selected country, and update the input val accordingly.
     * @param iso2 The selected country's ISO2 code.
     */
    setCountry(iso2) {
      const iso2Lower = iso2?.toLowerCase();
      const currentCountry = this.selectedCountryData?.iso2;
      const isCountryChange = iso2 && iso2Lower !== currentCountry || !iso2 && currentCountry;
      if (isCountryChange) {
        this._setCountry(iso2Lower);
        this._triggerCountryChange();
      }
    }
    /**
     * Sets the input's value and updates the country.
     * @param number The number that was entered.
     */
    setNumber(number) {
      const countryChanged = this._updateCountryFromNumber(number);
      this._updateValFromNumber(number);
      if (countryChanged) {
        this._triggerCountryChange();
      }
      this._trigger("input", { isSetNumber: true });
    }
    /**
     * Sets the disabled status of the selected country.
     * @param disabled If it's to disable or not.
     */
    setDisabled(disabled) {
      this.numberInput.disabled = disabled;
      if (disabled) {
        this.selectedCountry.setAttribute("disabled", "true");
      } else {
        this.selectedCountry.removeAttribute("disabled");
      }
    }
  };

  // src/js/input/InternationalNumberInput.ts
  var internationalNumberInput = Object.assign(
    (input, options) => {
      const ini = new Ini(input, options);
      ini._init();
      input.setAttribute(
        "data-international-number-input-id",
        ini.id.toString()
      );
      internationalNumberInput.instances[ini.id] = ini;
      return ini;
    },
    {
      defaults,
      //* Using a static var like this allows us to mock it in the tests.
      documentReady: () => document.readyState === "complete",
      //* Get the country data object.
      getCountryData: () => data_default,
      //* A getter for the plugin instance.
      getInstance: (input) => {
        const id = input.getAttribute(
          "data-international-number-input-id"
        );
        return id ? internationalNumberInput.instances[id] : null;
      },
      //* A map from instance ID to instance object.
      instances: {},
      loadUtils,
      version: "0.1.0"
    }
  );
  var InternationalNumberInput_default = internationalNumberInput;

  // src/js/numberUtils/libraries/strings/index.ts
  var strings_exports = {};
  __export(strings_exports, {
    cleanUnicode: () => cleanUnicode,
    formatPattern: () => formatPattern,
    isAlpha: () => isAlpha,
    isAlphanumeric: () => isAlphanumeric,
    isDigits: () => isDigits,
    reverse: () => reverse,
    splitAt: () => splitAt
  });

  // src/js/numberUtils/libraries/strings/char.ts
  var alphanumericRE = /^[A-Za-z0-9]+$/;
  var digitRE = /^[0-9]+$/;
  var alphaRE = /^[A-Za-z]+$/;
  function isAlphanumeric(value) {
    return alphanumericRE.test(value);
  }
  function isDigits(value) {
    return digitRE.test(value);
  }
  function isAlpha(value) {
    return alphaRE.test(value);
  }

  // src/js/numberUtils/libraries/strings/clean.ts
  var mapped = {
    "-": "-",
    // HYPHEN-MINUS
    "\xAD": "-",
    // SOFT HYPHEN
    "\xAF": "-",
    // MACRON
    "\u02D7": "-",
    // MODIFIER LETTER MINUS SIGN
    "\u058A": "-",
    // ARMENIAN HYPHEN
    "\u05BE": "-",
    // HEBREW PUNCTUATION MAQAF
    "\u180A": "-",
    // MONGOLIAN NIRUGU
    "\u2010": "-",
    // HYPHEN
    "\u2011": "-",
    // NON-BREAKING HYPHEN
    "\u2012": "-",
    // FIGURE DASH
    "\u2013": "-",
    // EN DASH
    "\u2014": "-",
    // EM DASH
    "\u2015": "-",
    // HORIZONTAL BAR
    "\u203E": "-",
    // OVERLINE
    "\u2043": "-",
    // HYPHEN BULLET
    "\u207B": "-",
    // SUPERSCRIPT MINUS
    "\u208B": "-",
    // SUBSCRIPT MINUS
    "\u2212": "-",
    // MINUS SIGN
    "\u23AF": "-",
    // HORIZONTAL LINE EXTENSION
    "\u23BA": "-",
    // HORIZONTAL SCAN LINE-1
    "\u23BB": "-",
    // HORIZONTAL SCAN LINE-3
    "\u23BC": "-",
    // HORIZONTAL SCAN LINE-7
    "\u23BD": "-",
    // HORIZONTAL SCAN LINE-9
    "\u23E4": "-",
    // STRAIGHTNESS
    "\uFF0D": "-",
    // FULLWIDTH HYPHEN-MINUS
    "\uFE63": "-",
    // SMALL HYPHEN-MINUS
    "\uFFE3": "-",
    // FULLWIDTH MACRON
    "*": "*",
    "\u066D": "*",
    // ARABIC FIVE POINTED STAR
    "\u070D": "*",
    // SYRIAC HARKLEAN ASTERISCUS
    "\u2055": "*",
    // FLOWER PUNCTUATION MARK
    "\uA60E": "*",
    // VAI FULL STOP
    "\u2217": "*",
    // ASTERISK OPERATOR
    "\u22C6": "*",
    // STAR OPERATOR
    "\u204E": "*",
    // LOW ASTERISK
    "\u2731": "*",
    // HEAVY ASTERISK
    "\u2732": "*",
    // OPEN CENTRE ASTERISK
    "\u2733": "*",
    // EIGHT SPOKED ASTERISK
    "\u273A": "*",
    // SIXTEEN POINTED ASTERISK
    "\u273B": "*",
    // TEARDROP-SPOKED ASTERISK
    "\u273C": "*",
    // OPEN CENTRE TEARDROP-SPOKED ASTERISK
    "\u273D": "*",
    // HEAVY TEARDROP-SPOKED ASTERISK
    "\u2743": "*",
    // HEAVY TEARDROP-PINWHEEL ASTERISK
    "\u2749": "*",
    // BALLON-SPOKED ASTERISK
    "\u274A": "*",
    // EIGHT TEARDROP-SPOKED PROPELLER ASTERISK
    "\u274B": "*",
    // HEAVY EIGHT TEARDROP-SPOKED PROPELLER ASTERISK
    "\uFE61": "*",
    // SMALL ASTERISK
    "\uFF0A": "*",
    // FULLWIDTH ASTERISK
    ",": ",",
    "\xB8": ",",
    // CEDILLA
    "\u060C": ",",
    // ARABIC COMMA
    "\u066B": ",",
    // ARABIC DECIMAL SEPARATOR
    "\u066C": ",",
    // ARABIC THOUSANDS SEPARATOR
    "\u201A": ",",
    // SINGLE LOW-9 QUOTATION MARK
    "\u2032": ",",
    // PRIME
    "\u2E34": ",",
    // RAISED COMMA
    "\u3001": ",",
    // IDEOGRAPHIC COMMA
    "\uFF0C": ",",
    // FULLWIDTH COMMA
    "\uFE11": ",",
    // PRESENTATION FORM FOR VERTICAL COMMA
    "\uFE50": ",",
    // SMALL COMMA
    "\uFE51": ",",
    // SMALL IDEOGRAPHIC COMMA
    "\uFF64": ",",
    // HALFWIDTH IDEOGRAPHIC COMMA
    ".": ".",
    // FULL STOP
    "\xB7": ".",
    // MIDDLE DOT
    "\u02D9": ".",
    // DOT ABOVE
    "\u0387": ".",
    // GREEK ANO TELEIA
    "\u06D4": ".",
    // ARABIC FULL STOP
    "\u0701": ".",
    // SYRIAC SUPRALINEAR FULL STOP
    "\u0702": ".",
    // SYRIAC SUBLINEAR FULL STOP
    "\u0830": ".",
    // SAMARITAN PUNCTUATION NEQUDAA
    "\u0F0B": ".",
    // TIBETAN MARK INTERSYLLABIC TSHEG
    "\u0F0C": ".",
    // TIBETAN MARK DELIMITER TSHEG BSTAR
    // prettier-ignore
    "\u1427": ".",
    // CANADIAN SYLLABICS FINAL MIDDLE DOT
    "\u16EB": ".",
    // RUNIC SINGLE PUNCTUATION
    "\u2219": ".",
    // BULLET OPERATOR
    "\u2022": ".",
    // BULLET
    "\u2024": ".",
    // ONE DOT LEADER
    "\u2027": ".",
    // HYPHENATION POINT
    "\u22C5": ".",
    // DOT OPERATOR
    "\u2E31": ".",
    // WORD SEPARATOR MIDDLE DOT
    "\u2E33": ".",
    // RAISED DOT
    "\u3002": ".",
    // IDEOGRAPHIC FULL STOP
    "\u30FB": ".",
    // KATAKANA MIDDLE DOT
    "\uFE52": ".",
    // SMALL FULL STOP
    "\uFF0E": ".",
    // FULLWIDTH FULL STOP
    "\uFF65": ".",
    // HALFWIDTH KATAKANA MIDDLE DOT
    "\uFBB2": ".",
    // ARABIC SYMBOL DOT ABOVE
    "\uFBB3": ".",
    // ARABIC SYMBOL DOT BELOW
    "\u{10101}": ".",
    // AEGEAN WORD SEPARATOR DOT
    "\u{1091F}": ".",
    // PHOENICIAN WORD SEPARATOR
    "\u{10A50}": ".",
    // KHAROSHTHI PUNCTUATION DOT
    "/": "/",
    "\u2044": "/",
    // FRACTION SLASH
    "\u2215": "/",
    // DIVISION SLASH
    "\u29F8": "/",
    // BIG SOLIDUS
    "\uFF0F": "/",
    // FULLWIDTH SOLIDUS
    "\u083C": "/",
    // SAMARITAN PUNCTUATION ARKAANU
    "\u27CB": "/",
    // MATHEMATICAL RISING DIAGONAL
    ":": ":",
    "\u1361": ":",
    // ETHIOPIC WORDSPACE
    "\u16EC": ":",
    // RUNIC MULTIPLE PUNCTUATION
    "\u1804": ":",
    // MONGOLIAN COLON
    "\uFE13": ":",
    // PRESENTATION FORM FOR VERTICAL COLON
    "\uFE30": ":",
    // PRESENTATION FORM FOR VERTICAL TWO DOT LEADER
    "\uFF1A": ":",
    // FULLWIDTH COLON
    "\uFE55": ":",
    // SMALL COLON
    " ": " ",
    "	": " ",
    // TAB
    "\v": " ",
    // VERTICAL TAB
    "\f": " ",
    // FORM FEED
    "\xA0": " ",
    // NO-BREAK-SPACE
    "\u1680": " ",
    // Ogham Space Mark
    "\u2000": " ",
    // EN QUAD
    "\u2001": " ",
    // EM QUAD
    "\u2002": " ",
    // EN SPACE
    "\u2003": " ",
    // EM SPACE
    "\u2004": " ",
    // THREE-PER-EM SPACE
    "\u2005": " ",
    // FOUR-PER-EM SPACE
    "\u2006": " ",
    // SIX-PER-EM SPACE
    "\u2007": " ",
    // FIGURE SPACE
    "\u2008": " ",
    // PUNCTUATION SPACE
    "\u2009": " ",
    // THIN SPACE
    "\u200A": " ",
    // HAIR SPACE
    "\u2028": " ",
    // LINE SEPARATOR
    "\u2029": " ",
    // PARAGRAPH SEPARATOR
    "\u202F": " ",
    // NARROW NO-BREAK SPACE
    "\u205F": " ",
    // MEDIUM MATHEMATICAL SPACE
    "\u3000": " ",
    // IDEOGRAPHIC SPACE
    "'": "'",
    "`": "'",
    // GRAVE ACCENT
    "\xB4": "'",
    // ACUTE ACCENT
    // prettier-ignore
    "\u02BE": "'",
    // MODIFIER LETTER RIGHT HALF RING
    // prettier-ignore
    "\u02BF": "'",
    // MODIFIER LETTER LEFT HALF RING
    // prettier-ignore
    "\u02B9": "'",
    // MODIFIER LETTER PRIME
    // prettier-ignore
    "\u02BB": "'",
    // MODIFIER LETTER TURNED COMMA
    // prettier-ignore
    "\u02BC": "'",
    // MODIFIER LETTER APOSTROPHE
    // prettier-ignore
    "\u02C8": "'",
    // MODIFIER LETTER VERTICAL LINE
    // prettier-ignore
    "\u0300": "'",
    // COMBINING GRAVE ACCENT
    "\u0301": "'",
    // COMBINING ACUTE ACCENT
    "\u0312": "'",
    // COMBINING TURNED COMMA ABOVE
    "\u0313": "'",
    // COMBINING COMMA ABOVE
    "\u055A": "'",
    // ARMENIAN APOSTROPHE
    "\u201B": "'",
    // SINGLE HIGH-REVERSED-9 QUOTATION MARK
    "\u2018": "'",
    // LEFT SINGLE QUOTATION MARK
    "\u2019": "'",
    // RIGHT SINGLE QUOTATION MARK
    "0": "0",
    "\u0660": "0",
    // ARABIC-INDIC DIGIT ZERO
    "\u06F0": "0",
    // EASTERN-ARABIC DIGIT ZERO
    "\uFF10": "0",
    // FULLWIDTH DIGIT ZERO
    "\u{1D7CE}": "0",
    // MATHEMATICAL BOLD DIGIT ZERO
    "\u{1D7D8}": "0",
    // MATHEMATICAL DOUBLE-STRUCK DIGIT ZERO
    "\u{1D7E2}": "0",
    // MATHEMATICAL SANS-SERIF DIGIT ZERO
    "\u{1D7EC}": "0",
    // MATHEMATICAL SANS-SERIF BOLD DIGIT ZERO
    "\u{1D7F6}": "0",
    // MATHEMATICAL MONOSPACE DIGIT ZERO
    "1": "1",
    "\u0661": "1",
    // ARABIC-INDIC DIGIT ONE
    "\u06F1": "1",
    // EASTERN-ARABIC DIGIT ONE
    "\uFF11": "1",
    // FULLWIDTH DIGIT ONE
    "\u{1D7CF}": "1",
    // MATHEMATICAL BOLD DIGIT ONE
    "\u{1D7D9}": "1",
    // MATHEMATICAL DOUBLE-STRUCK DIGIT ONE
    "\u{1D7E3}": "1",
    // MATHEMATICAL SANS-SERIF DIGIT ONE
    "\u{1D7ED}": "1",
    // MATHEMATICAL SANS-SERIF BOLD DIGIT ONE
    "\u{1D7F7}": "1",
    // MATHEMATICAL MONOSPACE DIGIT ONE
    "2": "2",
    "\u06F2": "2",
    // EASTERN-ARABIC DIGIT TWO
    "\u0662": "2",
    // ARABIC-INDIC DIGIT TWO
    "\uFF12": "2",
    // FULLWIDTH DIGIT TWO
    "\u{1D7D0}": "2",
    // MATHEMATICAL BOLD DIGIT TWO
    "\u{1D7DA}": "2",
    // MATHEMATICAL DOUBLE-STRUCK DIGIT TWO
    "\u{1D7E4}": "2",
    // MATHEMATICAL SANS-SERIF DIGIT TWO
    "\u{1D7EE}": "2",
    // MATHEMATICAL SANS-SERIF BOLD DIGIT TWO
    "\u{1D7F8}": "2",
    // MATHEMATICAL MONOSPACE DIGIT TWO
    "3": "3",
    "\u06F3": "3",
    // EASTERN-ARABIC DIGIT THREE
    "\u0663": "3",
    // ARABIC-INDIC DIGIT THREE
    "\uFF13": "3",
    // FULLWIDTH DIGIT THREE
    "\u{1D7D1}": "3",
    // MATHEMATICAL BOLD DIGIT THREE
    "\u{1D7DB}": "3",
    // MATHEMATICAL DOUBLE-STRUCK DIGIT THREE
    "\u{1D7E5}": "3",
    // MATHEMATICAL SANS-SERIF DIGIT THREE
    "\u{1D7EF}": "3",
    // MATHEMATICAL SANS-SERIF BOLD DIGIT THREE
    "\u{1D7F9}": "3",
    // MATHEMATICAL MONOSPACE DIGIT THREE
    "4": "4",
    "\u06F4": "4",
    // EASTERN-ARABIC DIGIT FOUR
    "\u0664": "4",
    // ARABIC-INDIC DIGIT FOUR
    "\uFF14": "4",
    // FULLWIDTH DIGIT FOUR
    "\u{1D7D2}": "4",
    // MATHEMATICAL BOLD DIGIT FOUR
    "\u{1D7DC}": "4",
    // MATHEMATICAL DOUBLE-STRUCK DIGIT FOUR
    "\u{1D7E6}": "4",
    // MATHEMATICAL SANS-SERIF DIGIT FOUR
    "\u{1D7F0}": "4",
    // MATHEMATICAL SANS-SERIF BOLD DIGIT FOUR
    "\u{1D7FA}": "4",
    // MATHEMATICAL MONOSPACE DIGIT FOUR
    "5": "5",
    "\u06F5": "5",
    // EASTERN-ARABIC DIGIT FIVE
    "\u0665": "5",
    // ARABIC-INDIC DIGIT FIVE
    "\uFF15": "5",
    // FULLWIDTH DIGIT FIVE
    "\u{1D7D3}": "5",
    // MATHEMATICAL BOLD DIGIT FIVE
    "\u{1D7DD}": "5",
    // MATHEMATICAL DOUBLE-STRUCK DIGIT FIVE
    "\u{1D7E7}": "5",
    // MATHEMATICAL SANS-SERIF DIGIT FIVE
    "\u{1D7F1}": "5",
    // MATHEMATICAL SANS-SERIF BOLD DIGIT FIVE
    "\u{1D7FB}": "5",
    // MATHEMATICAL MONOSPACE DIGIT FIVE
    "6": "6",
    "\u06F6": "6",
    // EASTERN-ARABIC DIGIT SIX
    "\u0666": "6",
    // ARABIC-INDIC DIGIT SIX
    "\uFF16": "6",
    // FULLWIDTH DIGIT SIX
    "\u{1D7D4}": "6",
    // MATHEMATICAL BOLD DIGIT SIX
    "\u{1D7DE}": "6",
    // MATHEMATICAL DOUBLE-STRUCK DIGIT SIX
    "\u{1D7E8}": "6",
    // MATHEMATICAL SANS-SERIF DIGIT SIX
    "\u{1D7F2}": "6",
    // MATHEMATICAL SANS-SERIF BOLD DIGIT SIX
    "\u{1D7FC}": "6",
    // MATHEMATICAL MONOSPACE DIGIT SIX
    "7": "7",
    "\u06F7": "7",
    // EASTERN-ARABIC DIGIT SEVEN
    "\u0667": "7",
    // ARABIC-INDIC DIGIT SEVEN
    "\uFF17": "7",
    // FULLWIDTH DIGIT SEVEN
    "\u{1D7D5}": "7",
    // MATHEMATICAL BOLD DIGIT SEVEN
    "\u{1D7DF}": "7",
    // MATHEMATICAL DOUBLE-STRUCK DIGIT SEVEN
    "\u{1D7E9}": "7",
    // MATHEMATICAL SANS-SERIF DIGIT SEVEN
    "\u{1D7F3}": "7",
    // MATHEMATICAL SANS-SERIF BOLD DIGIT SEVEN
    "\u{1D7FD}": "7",
    // MATHEMATICAL MONOSPACE DIGIT SEVEN
    "8": "8",
    "\u06F8": "8",
    // EASTERN-ARABIC DIGIT EIGHT
    "\u0668": "8",
    // ARABIC-INDIC DIGIT EIGHT
    "\uFF18": "8",
    // FULLWIDTH DIGIT EIGHT
    "\u{1D7D6}": "8",
    // MATHEMATICAL BOLD DIGIT EIGHT
    "\u{1D7E0}": "8",
    // MATHEMATICAL DOUBLE-STRUCK DIGIT EIGHT
    "\u{1D7EA}": "8",
    // MATHEMATICAL SANS-SERIF DIGIT EIGHT
    "\u{1D7F4}": "8",
    // MATHEMATICAL SANS-SERIF BOLD DIGIT EIGHT
    "\u{1D7FE}": "8",
    // MATHEMATICAL MONOSPACE DIGIT EIGHT
    // 9
    "9": "9",
    "\u06F9": "9",
    // EASTERN-ARABIC DIGIT NINE
    "\u0669": "9",
    // ARABIC-INDIC DIGIT NINE
    "\uFF19": "9",
    // FULLWIDTH DIGIT NINE
    "\u{1D7D7}": "9",
    // MATHEMATICAL BOLD DIGIT NINE
    "\u{1D7E1}": "9",
    // MATHEMATICAL DOUBLE-STRUCK DIGIT NINE
    "\u{1D7EB}": "9",
    // MATHEMATICAL SANS-SERIF DIGIT NINE
    "\u{1D7F5}": "9",
    // MATHEMATICAL SANS-SERIF BOLD DIGIT NINE
    "\u{1D7FF}": "9"
    // MATHEMATICAL MONOSPACE DIGIT NINE
  };
  function cleanUnicode(value, deletechars = " ", stripPrefix) {
    if (typeof value !== "string") {
      return ["", new InvalidFormat()];
    }
    const cleaned = [...value].map((c) => mapped[c] ?? c).filter((c) => !deletechars.includes(c)).join("").toLocaleUpperCase();
    if (stripPrefix && stripPrefix.length !== 0) {
      let prefix;
      if (Array.isArray(stripPrefix)) {
        prefix = stripPrefix.find((p) => cleaned.startsWith(p));
      } else if (cleaned.startsWith(stripPrefix)) {
        prefix = stripPrefix;
      }
      if (prefix !== void 0) {
        return [cleaned.substring(prefix.length), null];
      }
    }
    return [cleaned, null];
  }

  // src/js/numberUtils/libraries/strings/reverseString.ts
  function reverse(str) {
    return str.split("").reverse().join("");
  }

  // src/js/numberUtils/libraries/strings/splitAt.ts
  function splitAt(value, ...points) {
    const parts = [0, ...points, value.length].map((p, idx, arr) => {
      const start = p < 0 ? value.length + p : p;
      const end = arr[idx + 1] < 0 ? value.length + arr[idx + 1] : arr[idx + 1];
      return value.substring(start, end);
    });
    return parts.filter((v) => v.length !== 0);
  }

  // src/js/numberUtils/libraries/strings/format.ts
  function formatPattern(pattern, input) {
    const values = input.split("");
    return pattern.split("").map((c) => {
      if (c === "?") {
        return values.shift();
      }
      return c;
    }).join("");
  }

  // src/js/numberUtils/libraries/checksum.ts
  function sumAllDigits(value) {
    let localValue = value;
    let sum = 0;
    while (localValue) {
      sum += localValue % 10;
      localValue = Math.floor(localValue / 10);
    }
    return sum;
  }
  function weightedSum(value, {
    alphabet: alphabet7 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    reverse: reverse2 = false,
    weights: weights2 = [1],
    modulus = 0,
    sumByDigit = false
  }) {
    const wlen = weights2.length;
    const numbers = value.split("").map((v) => alphabet7.indexOf(v));
    const weighted = (reverse2 ? numbers.reverse() : numbers).map(
      (v, idx) => v * weights2[idx % wlen]
    );
    return weighted.reduce((acc, v) => {
      let vv = v;
      while (vv < 0) {
        vv += modulus;
      }
      if (sumByDigit && vv > 9) {
        return (acc + sumAllDigits(vv)) % modulus;
      }
      return (acc + vv) % modulus;
    }, 0);
  }
  function luhnChecksumValidate(value, alphabet7 = "0123456789") {
    const parity = value.length % 2;
    const sum = value.split("").map((v) => alphabet7.indexOf(v)).reduce((acc, val, idx) => {
      let v = val;
      if (idx % 2 === parity) {
        v = val * 2;
        if (v > 9) {
          v -= 9;
        }
      }
      return acc + v;
    }, 0);
    return sum % 10 === 0;
  }
  function luhnChecksumValue(value, alphabet7 = "0123456789") {
    const alen = alphabet7.length;
    return value.split("").reverse().map((v) => alphabet7.indexOf(v)).reduce((acc, v, idx) => {
      if (idx % 2 === 0) {
        return (acc + v) % alen;
      }
      return (acc + Math.floor(v * 2 / alen) + v * 2 % alen) % alen;
    });
  }
  function luhnChecksumDigit(value, alphabet7 = "0123456789") {
    const cs = luhnChecksumValue(`${value}${alphabet7[0]}`);
    return alphabet7[(alphabet7.length - cs) % alphabet7.length];
  }
  var verhoeffD = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  ];
  var verhoeffP = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
  ];
  function invArray(array) {
    return array.split("").map((v) => parseInt(v, 10)).reverse();
  }
  function verhoeffValidate(array) {
    const invertedArray = invArray(array);
    const sum = invertedArray.reduce(
      (c, v, idx) => verhoeffD[c][verhoeffP[idx % 8][v]],
      0
    );
    return sum === 0;
  }
  function modulo(dividentIn, divisor) {
    let divident = dividentIn;
    const partLength = 10;
    while (divident.length > partLength) {
      const part = divident.substring(0, partLength);
      divident = parseInt(part, 10) % divisor + divident.substring(partLength);
    }
    return parseInt(divident, 10) % divisor;
  }
  function mod97base10Validate(value, expect = 1) {
    const alphabet7 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let fail = false;
    const bigValue = value.split("").map((c) => {
      const idx = alphabet7.indexOf(c);
      if (idx === -1) {
        fail = true;
        return "";
      }
      return String(idx);
    }).join("");
    if (fail) {
      return false;
    }
    return modulo(bigValue, 97) === expect;
  }
  function mod11mod10Validate(value) {
    const sum = value.split("").map((v) => parseInt(v, 10)).reduce((acc, n) => ((acc === 0 ? 10 : acc) * 2 % 11 + n) % 10, 5);
    return sum === 1;
  }

  // src/js/numberUtils/libraries/isValidDate.ts
  function validBirthdate(date) {
    if (date === null) {
      return false;
    }
    const now = /* @__PURE__ */ new Date();
    return date.getTime() <= now.getTime();
  }
  function buildDate(yy, mm, dd) {
    const yyN = parseInt(yy, 10);
    const mmN = parseInt(mm, 10) - 1;
    const ddN = parseInt(dd, 10);
    if (Number.isNaN(yyN) || Number.isNaN(mmN) || Number.isNaN(ddN)) {
      return null;
    }
    let d;
    if (yyN < 20) {
      d = new Date(2e3 + yyN, mmN, ddN);
    } else if (yyN < 100) {
      d = new Date(1900 + yyN, mmN, ddN);
    } else {
      d = new Date(yyN, mmN, ddN);
    }
    if (Number.isNaN(d.getFullYear())) {
      return null;
    }
    if (d.getDate() !== ddN || d.getMonth() !== mmN) {
      return null;
    }
    return d;
  }
  function isValidDate(yy, mm, dd, isBefore = false) {
    const d = buildDate(yy, mm, dd);
    if (d === null) {
      return false;
    }
    return isBefore ? validBirthdate(d) : true;
  }
  function isValidDateCompactYYMMDD(yymmdd, isBefore = false) {
    const [year, mon, day] = splitAt(yymmdd, 2, 4);
    return isValidDate(year, mon, day, isBefore);
  }
  function isValidDateCompactDDMMYY(ddmmyy, isBefore = false) {
    const [day, mon, year] = splitAt(ddmmyy, 2, 4);
    return isValidDate(year, mon, day, isBefore);
  }
  function isValidDateCompactYYYYMMDD(yyyymmdd, isBefore = false) {
    const [year, mon, day] = splitAt(yyyymmdd, 4, 6);
    return isValidDate(year, mon, day, isBefore);
  }

  // src/js/numberUtils/countriesData/ad/nrt.ts
  function clean(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  var validator = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Andorra Tax Register Number",
    localName: "N\xFAmero de Registre Tributari",
    abbreviation: "NRT",
    placeholder: "12345678 9 ZZ0",
    maxLength: 12,
    minLength: 12,
    countryPrefix: "AD",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean(input);
      if (err) {
        throw err;
      }
      return value.toLocaleUpperCase();
    },
    format(input, includeCountryPrefix) {
      const [value] = clean(input);
      return strings_exports.splitAt(value, 1, 7).join("-");
    },
    /**
     * Check if the number is a valid Andorra NRT number.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(value) {
      const [v, error] = clean(value);
      if (error) {
        return { isValid: false, error };
      }
      if (v.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      const mid = v.substring(1, v.length - 2);
      if (!strings_exports.isAlpha(v[0]) || !strings_exports.isAlpha(v[v.length - 1])) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!strings_exports.isDigits(mid)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!"ACDEFGLOPU".includes(v[0])) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (v[0] === "F" && mid > "699999") {
        return { isValid: false, error: new InvalidComponent() };
      }
      if ("AL".includes(v[0]) && mid > "699999" && mid < "800000") {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: v,
        isIndividual: "FE".includes(v[0]),
        isCompany: !"FE".includes(v[0])
      };
    }
  };
  var nrt_default = validator;

  // src/js/numberUtils/countriesData/ad/index.ts
  var countryNumberUtils = {
    iso2: "AD",
    numberUtils: [
      nrt_default
    ]
  };
  var ad_default = countryNumberUtils;

  // src/js/numberUtils/countriesData/al/nipt.ts
  function clean2(input) {
    let [value, err] = strings_exports.cleanUnicode(input, " ");
    if (err) {
      return [value, err];
    }
    if (value.startsWith("AL")) {
      value = value.substring(2);
    } else if (value.startsWith("(AL)")) {
      value = value.substring(4);
    }
    return [value, null];
  }
  var validator2 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Albanian VAT Number",
    localName: "Numri i Identifikimit p\xEBr Personin e Tatuesh\xEBm",
    abbreviation: "NIPT",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "AL",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean2(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean2(input);
      return value;
    },
    /**
     * Check if the number is a valid Albanian NIPT number.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input) {
      const [value, error] = clean2(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!/^[A-M]\d{8}[A-Z]$/.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [ccode, ydigit, monthDistrict, day, , check] = strings_exports.splitAt(
        value,
        1,
        2,
        4,
        6,
        9
      );
      const month = (parseInt(monthDistrict, 10) - 1) % 12 + 1;
      const yearVal = ccode.charCodeAt(0) - 65;
      const year = 1900 + yearVal * 10 + parseInt(ydigit, 10);
      if (!isValidDate(String(year), String(month), day)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!/^[A-Z]$/.test(check)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: true
      };
    }
  };
  var nipt_default = validator2;

  // src/js/numberUtils/countriesData/al/index.ts
  var countryNumberUtils2 = {
    iso2: "AL",
    numberUtils: [
      nipt_default
    ]
  };
  var al_default = countryNumberUtils2;

  // src/js/numberUtils/countriesData/ar/cbu.ts
  function clean3(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator3 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Single Banking Code",
    localName: "Clave Bancaria Uniforme",
    abbreviation: "CBU",
    maxLength: 22,
    minLength: 22,
    countryPrefix: "AR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean3(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean3(input);
      if (value.length <= 8) return value;
      const [a, b] = strings_exports.splitAt(value, 8);
      return `${a} ${b}`;
    },
    /**
     * Check if the number is a valid Argentinian CBU number.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input) {
      const [value, error] = clean3(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 22) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [front, c1, back, c2] = strings_exports.splitAt(value, 7, 8, 21);
      const s1 = String(
        10 - weightedSum(front, {
          reverse: true,
          weights: [3, 1, 7, 9, 3, 1, 7],
          modulus: 10
        })
      );
      const s2 = String(
        10 - weightedSum(back, {
          reverse: true,
          weights: [3, 1, 7, 9, 3, 1, 7, 9, 3, 1, 7, 9, 3, 1],
          modulus: 10
        })
      );
      if (s1 !== c1 || s2 !== c2) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: false
      };
    }
  };
  var cbu_default = validator3;

  // src/js/numberUtils/countriesData/ar/cuit.ts
  var cuitTypes = [
    // individuals
    "20",
    "23",
    "24",
    "27",
    // companies
    "30",
    "33",
    "34",
    // international purposes
    "50",
    "51",
    "55"
  ];
  function clean4(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator4 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Argentinian VAT Number",
    localName: "C\xF3digo \xDAnico de Identificaci\xF3n Tributaria",
    abbreviation: "CUIT",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "AR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean4(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean4(input);
      return strings_exports.splitAt(value, 2, 10).join("-");
    },
    /**
     * Check if the number is a valid CUIT number.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input) {
      const [value, error] = clean4(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, body, check] = strings_exports.splitAt(value, 2, 10);
      if (!cuitTypes.includes(front)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const cs = weightedSum(front + body, {
        weights: [5, 4, 3, 2, 7, 6, 5, 4, 3, 2],
        modulus: 11
      });
      const digit = "012345678990"[11 - cs];
      if (digit !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: front[0] === "2",
        isCompany: front[0] === "3"
      };
    }
  };
  var cuit_default = validator4;

  // src/js/numberUtils/countriesData/ar/dni.ts
  function clean5(input) {
    return strings_exports.cleanUnicode(input, " .");
  }
  var validator5 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Argentinian National Identity Document",
    localName: "Documento Nacional de Identidad",
    abbreviation: "DNI",
    maxLength: 8,
    minLength: 7,
    countryPrefix: "AR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean5(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean5(input);
      return strings_exports.splitAt(value, value.length - 6, value.length - 3).join(".");
    },
    /**
     * Check if the number is a valid DNI number.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input) {
      const [value, error] = clean5(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 7 && value.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var dni_default = validator5;

  // src/js/numberUtils/countriesData/ar/index.ts
  var countryNumberUtils3 = {
    iso2: "AR",
    numberUtils: [
      cbu_default,
      cuit_default,
      dni_default
    ]
  };
  var ar_default = countryNumberUtils3;

  // src/js/numberUtils/countriesData/at/businessid.ts
  function clean6(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -./");
    if (err) {
      return [value, err];
    }
    if (value.startsWith("FN")) {
      return [value.substring(2), null];
    }
    return [value, null];
  }
  var validator6 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Austrian Company Register Number",
    localName: "Company Register Number",
    maxLength: 7,
    minLength: 2,
    countryPrefix: "AT",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean6(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean6(input);
      return value;
    },
    /**
     * Check if the number is a valid Business ID number.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input) {
      const [value, error] = clean6(input);
      if (error) {
        return { isValid: false, error };
      }
      if (!/^\d+[A-Z]$/.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var businessid_default = validator6;

  // src/js/numberUtils/countriesData/at/tin.ts
  var faOffices = {
    "03": { office: "Wien 3/6/7/11/15 Schwechat Gerasdorf", region: "Wien" },
    "04": { office: "Wien 4/5/10", region: "Wien" },
    "06": { office: "Wien 8/16/17", region: "Wien" },
    "07": { office: "Wien 9/18/19 Klosterneuburg", region: "Wien" },
    "08": { office: "Wien 12/13/14 Purkersdorf", region: "Wien" },
    "09": { office: "Wien 1/23", region: "Wien" },
    "10": {
      office: "f\xFCr Geb\xFChren, Verkehrsteuern und Gl\xFCcksspiel",
      region: ""
    },
    "12": { office: "Wien 2/20/21/22", region: "Wien" },
    "15": { office: "Amstetten Melk Scheibbs", region: "Nieder\xF6sterreich" },
    "16": { office: "Baden M\xF6dling", region: "Nieder\xF6sterreich" },
    "18": { office: "G\xE4nserndorf Mistelbach", region: "Nieder\xF6sterreich" },
    "22": { office: "Hollabrunn Korneuburg Tulln", region: "Nieder\xF6sterreich" },
    "23": { office: "Waldviertel", region: "Nieder\xF6sterreich" },
    "29": { office: "Lilienfeld St. P\xF6lten", region: "Nieder\xF6sterreich" },
    "33": { office: "Neunkirchen Wr. Neustadt", region: "Nieder\xF6sterreich" },
    "38": {
      office: "Bruck Eisenstadt Oberwart",
      region: "Burgenland, Nieder\xF6sterreich"
    },
    "41": { office: "Braunau Ried Sch\xE4rding", region: "Ober\xF6sterreich" },
    "46": { office: "Linz", region: "Ober\xF6sterreich" },
    "51": { office: "Kirchdorf Perg Steyr", region: "Ober\xF6sterreich" },
    "52": { office: "Freistadt Rohrbach Urfahr", region: "Ober\xF6sterreich" },
    "53": { office: "Gmunden V\xF6cklabruck", region: "Ober\xF6sterreich" },
    "54": { office: "Grieskirchen Wels", region: "Ober\xF6sterreich" },
    "57": { office: "Klagenfurt", region: "K\xE4rnten" },
    "59": { office: "St. Veit Wolfsberg", region: "K\xE4rnten" },
    "61": { office: "Spittal Villach", region: "K\xE4rnten" },
    "65": { office: "Bruck Leoben M\xFCrzzuschlag", region: "Steiermark" },
    "67": { office: "Oststeiermark", region: "Steiermark" },
    "68": { office: "Graz-Stadt", region: "Steiermark" },
    "69": { office: "Graz-Umgebung", region: "Steiermark" },
    "71": { office: "Judenburg Liezen", region: "Steiermark" },
    "72": {
      office: "Deutschlandsberg Leibnitz Voitsberg",
      region: "Steiermark"
    },
    "81": { office: "Innsbruck", region: "Tirol" },
    "82": { office: "Kitzb\xFChel Lienz", region: "Tirol" },
    "83": { office: "Kufstein Schwaz", region: "Tirol" },
    "84": { office: "Landeck Reutte", region: "Tirol" },
    "90": { office: "St. Johann Tamsweg Zell am See", region: "Salzburg" },
    "91": { office: "Salzburg-Stadt", region: "Salzburg" },
    "93": { office: "Salzburg-Land", region: "Salzburg" },
    "97": { office: "Bregenz", region: "Vorarlberg" },
    "98": { office: "Feldkirch", region: "Vorarlberg" }
  };
  function clean7(input) {
    return strings_exports.cleanUnicode(input, " -./,");
  }
  var validator7 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Austrian Tax Identification Number",
    localName: "Abgabenkontonummer",
    abbreviation: "TIN",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "AT",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean7(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean7(input);
      if (value.length <= 2) return value;
      const [a, b, c] = strings_exports.splitAt(value, 2, 5);
      return `${a}-${b}${c ? "/" + c : ""}`;
    },
    validate(input) {
      const [value, error] = clean7(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [office, front, check] = strings_exports.splitAt(value, 2, 8);
      if (faOffices[office] === void 0) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const sum = `${office}${front}`.split("").map((x) => parseInt(x, 10)).reduce(
        (acc, digit2, idx) => acc + (idx % 2 === 1 ? [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][digit2] : digit2),
        0
      );
      const digit = String((10 - sum % 10) % 10);
      if (check !== digit) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var tin_default = validator7;

  // src/js/numberUtils/countriesData/at/uid.ts
  function clean8(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -./");
    if (err) {
      return [value, err];
    }
    if (value.startsWith("AT")) {
      return [value.substring(2), null];
    }
    return [value, null];
  }
  var validator8 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Austrian VAT Number",
    localName: "Umsatzsteuer-Identifikationsnummer",
    abbreviation: "UID",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "AT",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean8(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean8(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean8(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!value.startsWith("U") || !strings_exports.isDigits(value.substring(1))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [, front, check] = strings_exports.splitAt(value, 1, 8);
      const digit = String((16 - luhnChecksumValue(front)) % 10);
      if (check !== digit) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var uid_default = validator8;

  // src/js/numberUtils/countriesData/at/vnr.ts
  function clean9(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator9 = {
    type: "SSN" /* SocialSecurityIdentificationNumber */,
    name: "Austrian Social Security Number",
    localName: "Versicherungsnummer",
    abbreviation: "VSNR",
    maxLength: 10,
    minLength: 8,
    countryPrefix: "AT",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean9(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean9(input);
      return strings_exports.splitAt(value, 4).join(" ");
    },
    validate(input) {
      const [value, error] = clean9(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [front, check, dob] = strings_exports.splitAt(value, 3, 4);
      if (!isValidDateCompactDDMMYY(dob, true)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const sum = weightedSum(`${front}${dob}`, {
        weights: [3, 7, 9, 5, 8, 4, 2, 1, 6],
        modulus: 11
      });
      const digit = String(sum % 11);
      if (check !== digit) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: parseInt(front, 10) < 8e7,
        isCompany: front.length === 8 && parseInt(front, 10) > 8e7
      };
    }
  };
  var vnr_default = validator9;

  // src/js/numberUtils/countriesData/at/index.ts
  var countryNumberUtils4 = {
    iso2: "AT",
    numberUtils: [
      businessid_default,
      tin_default,
      uid_default,
      vnr_default
    ]
  };
  var at_default = countryNumberUtils4;

  // src/js/numberUtils/countriesData/au/abn.ts
  function clean10(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator10 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Australian Business Number",
    localName: "Business Number",
    abbreviation: "ABN",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "AU",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean10(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean10(input);
      return strings_exports.splitAt(value, 2, 5, 8).join(" ");
    },
    validate(input) {
      const [value, error] = clean10(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [check, rest] = strings_exports.splitAt(value, 2);
      const sum = weightedSum(rest, {
        weights: [3, 5, 7, 9, 11, 13, 15, 17, 19],
        modulus: 89
      });
      if (check !== String(11 + (177 - sum) % 89)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var abn_default = validator10;

  // src/js/numberUtils/countriesData/au/acn.ts
  function clean11(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator11 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Australian Company Number",
    localName: "Company Number",
    abbreviation: "ACN",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "AU",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean11(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean11(input);
      return strings_exports.splitAt(value, 3, 6).join(" ");
    },
    validate(input) {
      const [value, error] = clean11(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = weightedSum(front, {
        weights: [-8, -7, -6, -5, -4, -3, -2, -1],
        modulus: 10
      });
      if (String(sum) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var acn_default = validator11;

  // src/js/numberUtils/countriesData/au/tfn.ts
  function clean12(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator12 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Australian Tax File Number",
    localName: "Tax File Number",
    abbreviation: "TFN",
    maxLength: 9,
    minLength: 8,
    countryPrefix: "AU",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean12(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean12(input);
      return strings_exports.splitAt(value, 3, 6).join(" ");
    },
    validate(input) {
      const [value, error] = clean12(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8 && value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const sum = weightedSum(value, {
        modulus: 11,
        weights: [1, 4, 3, 7, 5, 8, 6, 9, 10]
      });
      if (sum !== 0) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: true
      };
    }
  };
  var tfn_default = validator12;

  // src/js/numberUtils/countriesData/au/index.ts
  var countryNumberUtils5 = {
    iso2: "AU",
    numberUtils: [
      abn_default,
      acn_default,
      tfn_default
    ]
  };
  var au_default = countryNumberUtils5;

  // src/js/numberUtils/countriesData/az/pin.ts
  function clean13(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator13 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Azerbaijani Personal Identification Number",
    localName: "F\u0259rdi \u0130dentifikasiya N\xF6mr\u0259sidir",
    abbreviation: "PIN",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "AZ",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean13(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean13(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean13(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var pin_default = validator13;

  // src/js/numberUtils/countriesData/az/tin.ts
  function clean14(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator14 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Azerbaijani Tax Identification Number",
    localName: "Vergi Identifikasiya N\xF6mr\u0259si",
    abbreviation: "V\xD6EN",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "AZ",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean14(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean14(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean14(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      const last = value[9];
      if (!["1", "2"].includes(last)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: last === "2",
        isCompany: last === "1"
      };
    }
  };
  var tin_default2 = validator14;

  // src/js/numberUtils/countriesData/az/index.ts
  var countryNumberUtils6 = {
    iso2: "AZ",
    numberUtils: [
      pin_default,
      tin_default2
    ]
  };
  var az_default = countryNumberUtils6;

  // src/js/numberUtils/countriesData/ba/jmbg.ts
  function clean15(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator15 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Bosnia Unique Master Citizen Number",
    localName: "Jedinstveni mati\u010Dni broj gra\u0111ana",
    abbreviation: "JMBG",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "BA",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean15(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean15(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean15(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [dd, mm, yyy] = strings_exports.splitAt(value, 2, 4, 7);
      const yyyy = `${parseInt(yyy, 10) < 800 ? "2" : "1"}${yyy}`;
      if (!isValidDate(yyyy, mm, dd, true)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [front, check] = strings_exports.splitAt(value, 12);
      const sum = 11 - weightedSum(front, {
        modulus: 11,
        weights: [7, 6, 5, 4, 3, 2, 7, 6, 5, 4, 3, 2]
      });
      if (String(sum % 11 % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var jmbg_default = validator15;

  // src/js/numberUtils/countriesData/ba/index.ts
  var countryNumberUtils7 = {
    iso2: "BA",
    numberUtils: [
      jmbg_default
    ]
  };
  var ba_default = countryNumberUtils7;

  // src/js/numberUtils/countriesData/be/personIdentifierHelpers.ts
  function getApproximatelyNow() {
    const ONE_DAY = 1e3 * 60 * 60 * 24;
    return new Date(Date.now() + ONE_DAY);
  }
  function isInPast(date) {
    return new Date(String(date)) <= getApproximatelyNow();
  }
  function getFullYears(yy) {
    const yval = typeof yy === "string" ? parseInt(yy, 10) : yy;
    return [1900 + yval, 2e3 + yval];
  }
  function getFirstSix(number) {
    return strings_exports.splitAt(number, 6)[0];
  }
  function getBaseNumber(number) {
    return strings_exports.splitAt(number, 9)[0];
  }
  function getChecksum(number) {
    const checksumString = strings_exports.splitAt(number, 9)[1];
    return parseInt(checksumString, 10);
  }
  function toDateArray(number) {
    const [yy, mm, dd] = strings_exports.splitAt(number, 2, 4, 6);
    return [yy, mm, dd];
  }
  function getValidPastDates(yymmdd) {
    const [yy, mm, dd] = toDateArray(yymmdd);
    return getFullYears(yy).filter((yyyy) => isValidDateCompactYYYYMMDD(`${yyyy}${mm}${dd}`)).map((yyyy) => `${yyyy}-${mm}-${dd}`).filter(isInPast);
  }
  function isUnknownDob(dob) {
    if (["000001", "002001", "004001"].includes(dob)) {
      return true;
    }
    const [yy, mm, dd] = toDateArray(dob);
    return strings_exports.isDigits(yy) && mm === "00" && strings_exports.isDigits(dd);
  }
  function toChecksumBasis(year, baseNumber) {
    return parseInt(year < 2e3 ? baseNumber : `${2}${baseNumber}`, 10);
  }
  function isValidDob(dob) {
    return Boolean(getValidPastDates(dob).length);
  }
  function defaultToDob(origFirstSix) {
    return origFirstSix;
  }
  function isValidFirstSix(firstSix, toDob2) {
    const dob = toDob2(firstSix);
    return isUnknownDob(dob) || isValidDob(dob);
  }
  function validStructure(number, toDob2 = defaultToDob) {
    const firstSix = getFirstSix(number);
    return isValidFirstSix(firstSix, toDob2);
  }
  function getChecksumBasesUnknownDob(baseNumber) {
    const firstSix = getFirstSix(baseNumber);
    const [yy] = toDateArray(firstSix);
    return getFullYears(yy).filter(isInPast).map((year) => toChecksumBasis(year, baseNumber));
  }
  function getChecksumBasesForStandardDob(baseNumber, toDob2) {
    const firstSix = getFirstSix(baseNumber);
    const dob = toDob2(firstSix);
    const validPastDates = getValidPastDates(dob);
    const extractYearFromDate = (date) => parseInt(date.split("-")[0], 10);
    const validPastYears = validPastDates.map(extractYearFromDate);
    return validPastYears.map((year) => toChecksumBasis(year, baseNumber));
  }
  function getChecksumBases(number, toDob2) {
    const firstSix = getFirstSix(number);
    const dob = toDob2(firstSix);
    const baseNumber = getBaseNumber(number);
    if (isUnknownDob(dob)) return getChecksumBasesUnknownDob(baseNumber);
    return getChecksumBasesForStandardDob(baseNumber, toDob2);
  }
  function isValidChecksumPair(checksumBasis, checksum2) {
    return !((checksumBasis + checksum2) % 97);
  }
  function validChecksum(number, toDob2 = defaultToDob) {
    const checksumBases = getChecksumBases(number, toDob2);
    const checksum2 = getChecksum(number);
    return checksumBases.some((csb) => isValidChecksumPair(csb, checksum2));
  }

  // src/js/numberUtils/countriesData/be/bis.ts
  function clean16(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  function toDob(firstSix) {
    const [y, m, d] = toDateArray(firstSix).map((s) => parseInt(s, 10));
    const adjustedDateArrays = [
      [y, m - 20, d],
      [y, m - 40, d]
    ];
    const dobArray = adjustedDateArrays.find((ada) => ada[1] >= 0 && ada[1] <= 12) || [];
    return dobArray.map((n) => `${n}`.padStart(2, "0")).join("");
  }
  var validator16 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Belgian Number for Foreigners",
    localName: "Num\xE9ro BIS",
    abbreviation: "BIS",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "BE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean16(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean16(input);
      return value;
    },
    validate(input) {
      const number = validator16.compact(input, false);
      if (!strings_exports.isDigits(number) || parseInt(number, 10) <= 0) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (number.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!validStructure(number, toDob)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!validChecksum(number, toDob)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: number,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var bis_default = validator16;

  // src/js/numberUtils/countriesData/be/nn.ts
  function clean17(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  var validator17 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Belgian National Number",
    localName: "Num\xE9ro National",
    abbreviation: "NN, RN",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "BE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean17(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean17(input);
      return value;
    },
    validate(input) {
      const value = validator17.compact(input, false);
      if (!strings_exports.isDigits(value) || parseInt(value, 10) <= 0) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!validStructure(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!validChecksum(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var nn_default = validator17;

  // src/js/numberUtils/countriesData/be/insz.ts
  function clean18(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  var validator18 = {
    type: "SSN" /* SocialSecurityIdentificationNumber */,
    name: "Belgian Social Security Identification Number",
    localName: "Identificatienummer van de Sociale Zekerheid",
    abbreviation: "INSZ, NISS",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "BE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean18(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean18(input);
      return value;
    },
    validate(input) {
      const results = [nn_default.validate(input), bis_default.validate(input)];
      const validResult = results.find((r) => r.isValid);
      if (validResult) return validResult;
      const checksumErrorResult = results.find(
        (r) => r.error && r.error.name === "InvalidChecksum"
      );
      return checksumErrorResult || results[0];
    }
  };
  var insz_default = validator18;

  // src/js/numberUtils/countriesData/be/vat.ts
  function clean19(input) {
    let [value, err] = strings_exports.cleanUnicode(input, " -.");
    if (err !== null) {
      return [value, err];
    }
    if (value.startsWith("BE")) {
      value = value.substring(2);
    }
    if (value.startsWith("(0)")) {
      value = `0${value.substring(3)}`;
    }
    if (value.length === 9) {
      value = `0${value}`;
    }
    return [value, null];
  }
  var validator19 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Belgian VAT Number",
    localName: "Ondernemingsnummer",
    abbreviation: "BTW, NWSt",
    maxLength: 10,
    minLength: 9,
    countryPrefix: "BE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean19(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean19(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean19(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, sum] = strings_exports.splitAt(value, -2);
      if (97 - parseInt(front, 10) % 97 !== parseInt(sum, 10)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var vat_default = validator19;

  // src/js/numberUtils/countriesData/be/index.ts
  var countryNumberUtils8 = {
    iso2: "BE",
    numberUtils: [
      bis_default,
      insz_default,
      nn_default,
      vat_default
    ]
  };
  var be_default = countryNumberUtils8;

  // src/js/numberUtils/countriesData/bg/egn.ts
  function clean20(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  var validator20 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Bulgarian Personal Identity Codes",
    localName: "\u0415\u0434\u0438\u043D\u0435\u043D \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u0438 \u043D\u043E\u043C\u0435\u0440",
    abbreviation: "\u0415\u0413\u041D (EGN)",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "BG",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean20(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean20(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean20(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = weightedSum(front, {
        modulus: 11,
        weights: [2, 4, 8, 5, 10, 9, 7, 3, 6]
      });
      if (String(sum % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var egn_default = validator20;

  // src/js/numberUtils/countriesData/bg/pnf.ts
  function clean21(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  var validator21 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Bulgarian Number of a Foreigner",
    localName: "\u041B\u0438\u0447\u0435\u043D \u043D\u043E\u043C\u0435\u0440 \u043D\u0430 \u0447\u0443\u0436\u0434\u0435\u043D\u0435\u0446",
    abbreviation: "PNF (\u041B\u041D\u0427)",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "BG",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean21(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean21(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean21(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = weightedSum(front, {
        weights: [21, 19, 17, 13, 11, 9, 7, 3, 1],
        modulus: 10
      });
      if (String(sum) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var pnf_default = validator21;

  // src/js/numberUtils/countriesData/bg/vat.ts
  function clean22(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -/");
    if (err !== null) {
      return [value, err];
    }
    if (value.startsWith("BG")) {
      return [value.substring(2), null];
    }
    return [value, err];
  }
  function checkLegal(value) {
    const [front, check] = strings_exports.splitAt(value, -1);
    let sum = weightedSum(front, {
      modulus: 11,
      weights: [1, 2, 3, 4, 5, 6, 7, 8]
    });
    if (sum === 10) {
      sum = weightedSum(front, {
        modulus: 11,
        weights: [3, 4, 5, 6, 7, 8, 9, 10]
      });
    }
    return String(sum % 10) === check;
  }
  function checkOther(value) {
    const [front, check] = strings_exports.splitAt(value, -1);
    const sum = 11 - weightedSum(front, {
      modulus: 11,
      weights: [4, 3, 2, 7, 6, 5, 4, 3, 2]
    });
    return String(sum % 10) !== check;
  }
  var validator22 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Bulgarian VAT Number",
    localName: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u0435\u043D \u043D\u043E\u043C\u0435\u0440 \u043F\u043E \u0414\u0414\u0421",
    abbreviation: "\u0414\u0414\u0421 \u043D\u043E\u043C\u0435\u0440",
    maxLength: 10,
    minLength: 9,
    countryPrefix: "BG",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean22(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean22(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean22(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9 && value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!["0", "1", "2", "3", "9"].includes(value[0])) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value.length === 9) {
        if (!checkLegal(value)) {
          return {
            isValid: false,
            error: new InvalidChecksum()
          };
        }
      } else if (!egn_default.validate(value).isValid && !pnf_default.validate(value).isValid && !checkOther(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: value.length === 10,
        isCompany: value.length === 9
      };
    }
  };
  var vat_default2 = validator22;

  // src/js/numberUtils/countriesData/bg/index.ts
  var countryNumberUtils9 = {
    iso2: "BG",
    numberUtils: [
      egn_default,
      pnf_default,
      vat_default2
    ]
  };
  var bg_default = countryNumberUtils9;

  // src/js/numberUtils/countriesData/br/cnpj.ts
  function clean23(input) {
    return strings_exports.cleanUnicode(input, " -./");
  }
  function computeDigit(input) {
    const mlen = input.length + 7;
    const value = 11 - input.split("").map((v, idx) => parseInt(v, 10) * ((mlen - idx) % 8 + 2)).reduce((acc, v) => acc + v) % 11;
    return value > 9 ? 0 : value;
  }
  var validator23 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Brazilian Company Identifier",
    localName: "Cadastro Nacional da Pessoa Jur\xEDdica",
    abbreviation: "CNPJ",
    maxLength: 14,
    minLength: 14,
    countryPrefix: "BR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean23(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean23(input);
      if (value.length <= 2) return value;
      const [a, b, c, d, e] = strings_exports.splitAt(value, 2, 5, 8, 12);
      return `${a}.${b}${c ? "." + c : ""}${d ? "/" + d : ""}${e ? "-" + e : ""}`;
    },
    validate(input) {
      const [value, error] = clean23(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 14) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, c1, c2] = strings_exports.splitAt(value, 12, 13);
      const d1 = String(computeDigit(front));
      const d2 = String(computeDigit(value.substring(0, 13)));
      if (d1 !== c1 || d2 !== c2) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var cnpj_default = validator23;

  // src/js/numberUtils/countriesData/br/cpf.ts
  function clean24(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  function computeDigit2(input) {
    const mlen = input.length + 1;
    const value = input.split("").map((v, idx) => parseInt(v, 10) * (mlen - idx)).reduce((acc, v) => (acc + v) % 11);
    return value < 2 ? 0 : 11 - value;
  }
  var validator24 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Brazilian National Identifier",
    localName: "Cadastro de Pessoas F\xEDsicas",
    abbreviation: "CPF",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "BR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean24(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean24(input);
      if (value.length <= 3) return value;
      const [a, b, c, d] = strings_exports.splitAt(value, 3, 6, value.length - 2);
      return `${a}.${b}${c ? "." + c : ""}${d ? "-" + d : ""}`;
    },
    validate(input) {
      const [value, error] = clean24(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, c1, c2] = strings_exports.splitAt(value, 9, 10);
      const d1 = String(computeDigit2(front));
      const d2 = String(computeDigit2(value.substring(0, 10)));
      if (d1 !== c1 || d2 !== c2) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var cpf_default = validator24;

  // src/js/numberUtils/countriesData/br/index.ts
  var countryNumberUtils10 = {
    iso2: "BR",
    numberUtils: [
      cnpj_default,
      cpf_default
    ]
  };
  var br_default = countryNumberUtils10;

  // src/js/numberUtils/countriesData/by/unp.ts
  var PREFIX = ["\u0423\u041D\u041F", "\u0423\u041D\u041F", "UNP", "UNP"];
  var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function clean25(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -/");
    if (err !== null) {
      return [value, err];
    }
    const v2 = PREFIX.reduce(
      (acc, p) => acc || (!value.startsWith(p) ? acc : value.substring(p.length)),
      null
    );
    return [v2 ?? value, null];
  }
  var validator25 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Belarus VAT Number",
    localName: "\u0423\u0447\u0435\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u043F\u043B\u0430\u0442\u0435\u043B\u044C\u0449\u0438\u043A\u0430",
    abbreviation: "\u0423\u041D\u041F (UNP)",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "BY",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean25(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean25(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean25(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value.substring(2))) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!strings_exports.isDigits(value[0]) && !"1234567ABCEHKM".includes(value[0])) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!strings_exports.isDigits(value[1]) && !"ABCEHKMOPT".includes(value[1])) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      let frontClean = front;
      if (!strings_exports.isDigits(front.substring(0, 2))) {
        const vv = String("ABCEHKMOPT".indexOf(front[1]));
        frontClean = `${front[0]}${vv}${front.substring(2)}`;
      }
      const sum = weightedSum(frontClean, {
        modulus: 11,
        weights: [29, 23, 19, 17, 13, 7, 5, 3],
        alphabet
      });
      if (sum === 10 || String(sum) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: true
      };
    }
  };
  var unp_default = validator25;

  // src/js/numberUtils/countriesData/by/index.ts
  var countryNumberUtils11 = {
    iso2: "BY",
    numberUtils: [
      unp_default
    ]
  };
  var by_default = countryNumberUtils11;

  // src/js/numberUtils/countriesData/bz/tin.ts
  function clean26(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator26 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Belize Tax Identification Number",
    localName: "Tax Identification Number",
    abbreviation: "TIN",
    maxLength: 8,
    minLength: 6,
    countryPrefix: "BZ",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean26(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean26(input);
      return strings_exports.splitAt(value, 6).join("-");
    },
    validate(input) {
      const [value, error] = clean26(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 6 && value.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [, code] = strings_exports.splitAt(value, 6);
      if (code && !["10", "13", "66"].includes(code)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: code === "10",
        isCompany: code === "13" || code === "66"
      };
    }
  };
  var tin_default3 = validator26;

  // src/js/numberUtils/countriesData/bz/index.ts
  var countryNumberUtils12 = {
    iso2: "BZ",
    numberUtils: [
      tin_default3
    ]
  };
  var bz_default = countryNumberUtils12;

  // src/js/numberUtils/countriesData/ca/bn.ts
  function clean27(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator27 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Canadian Business Number",
    localName: "Business Number",
    abbreviation: "BN",
    maxLength: 15,
    minLength: 9,
    countryPrefix: "CA",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean27(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean27(input);
      if (value.length === 15) {
        return strings_exports.splitAt(value, 5, 9, 11).join(" ");
      }
      return strings_exports.splitAt(value, 5).join(" ");
    },
    validate(input) {
      const [value, error] = clean27(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9 && value.length !== 15) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [front, rest] = strings_exports.splitAt(value, 9);
      if (!strings_exports.isDigits(front)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!luhnChecksumValidate(front)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      if (rest) {
        const [a, b] = strings_exports.splitAt(rest, 2);
        if (!["RC", "RM", "RP", "RT"].includes(a)) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (!strings_exports.isDigits(b)) {
          return { isValid: false, error: new InvalidFormat() };
        }
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var bn_default = validator27;

  // src/js/numberUtils/countriesData/ca/gst.ts
  function clean28(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validRe = /^\d{9}[A-Z]{2}\d{4}$/i;
  var validator28 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Goods and service Tax Number",
    localName: "Goods and service Tax Number",
    abbreviation: "GST",
    maxLength: 15,
    minLength: 15,
    countryPrefix: "CA",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean28(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean28(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean28(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 15) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!validRe.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return bn_default.validate(value);
    }
  };
  var gst_default = validator28;

  // src/js/numberUtils/countriesData/ca/pst.ts
  function clean29(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validRe2 = /^PST\d{8}$/;
  var validator29 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Provincial Sales Tax",
    localName: "",
    abbreviation: "PST",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "CA",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean29(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean29(input);
      return strings_exports.splitAt(value, 3, 7).join("-");
    },
    validate(input) {
      const [value, error] = clean29(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!validRe2.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var pst_default = validator29;

  // src/js/numberUtils/countriesData/ca/qst.ts
  function clean30(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validRe3 = /^\d{10}[a-z]{2}\d{4}$/i;
  var validator30 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Quebec Sales Tax Number",
    localName: "",
    abbreviation: "QST",
    maxLength: 16,
    minLength: 16,
    countryPrefix: "CA",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean30(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean30(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean30(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 16) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!validRe3.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check, , serial] = strings_exports.splitAt(value, 9, 10, 12);
      if (serial === "0000") {
        return { isValid: false, error: new InvalidComponent() };
      }
      const sum = weightedSum(front, {
        weights: [4, 3, 2, 7, 6, 5, 4, 3, 2],
        modulus: 11
      });
      if (String((11 - sum) % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var qst_default = validator30;

  // src/js/numberUtils/countriesData/ca/sin.ts
  function clean31(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator31 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Canadian Social Insurance Number",
    localName: "Social Insurance Number",
    abbreviation: "SIN",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "CA",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean31(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean31(input);
      return strings_exports.splitAt(value, 3, 6).join("-");
    },
    validate(input) {
      const [value, error] = clean31(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!luhnChecksumValidate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var sin_default = validator31;

  // src/js/numberUtils/countriesData/ca/index.ts
  var countryNumberUtils13 = {
    iso2: "CA",
    numberUtils: [
      bn_default,
      gst_default,
      pst_default,
      qst_default,
      sin_default
    ]
  };
  var ca_default = countryNumberUtils13;

  // src/js/numberUtils/countriesData/gen/ean.ts
  function clean32(input) {
    return cleanUnicode(input, " -");
  }
  var validator32 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "International Article Number",
    localName: "International Article Number",
    abbreviation: "EAN",
    maxLength: 14,
    minLength: 8,
    countryPrefix: "",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean32(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean32(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean32(input);
      if (error) {
        return { isValid: false, error };
      }
      if (![8, 12, 13, 14].includes(value.length)) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = splitAt(value, -1);
      const sum = weightedSum(front, {
        modulus: 10,
        weights: [3, 1],
        reverse: true
      });
      if (String((10 - sum) % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: false
      };
    }
  };
  var ean_default = validator32;

  // src/js/numberUtils/countriesData/ch/ssn.ts
  function clean33(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  var validator33 = {
    type: "SSN" /* SocialSecurityIdentificationNumber */,
    name: "Swiss Social Security Number",
    localName: "Sozialversicherungsnummer",
    abbreviation: "SSN",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "CH",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean33(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean33(input);
      return strings_exports.splitAt(value, 3, 7, 11).join(".");
    },
    validate(input) {
      const [value, error] = clean33(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!value.startsWith("756")) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!ean_default.validate(value).isValid) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var ssn_default = validator33;

  // src/js/numberUtils/countriesData/ch/uid.ts
  function clean34(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  var validator34 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Swiss Business Identifier",
    localName: "Unternehmens-Identifikationsnummer",
    abbreviation: "UID",
    maxLength: 12,
    minLength: 12,
    countryPrefix: "CH",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean34(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean34(input);
      if (value.length < 4) return value;
      const [a, b, c, d] = strings_exports.splitAt(value, 3, 6, 9);
      return `${a}-${b}${c ? "." + c : ""}${d ? "." + d : ""}`;
    },
    validate(input) {
      const [value, error] = clean34(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 12) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value.substring(3)) || !value.startsWith("CHE")) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [, front, check] = strings_exports.splitAt(value, 3, -1);
      const sum = weightedSum(front, {
        modulus: 11,
        weights: [5, 4, 3, 2, 7, 6, 5, 4]
      });
      if (String((11 - sum) % 11) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var uid_default2 = validator34;

  // src/js/numberUtils/countriesData/ch/vat.ts
  function clean35(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  var validator35 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Swiss VAT Number",
    localName: "Mehrwertsteuernummer",
    abbreviation: "MWST/TVA/IVA",
    maxLength: 16,
    minLength: 15,
    countryPrefix: "CH",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean35(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean35(input);
      if (value.length < 4) return value;
      const [a, b, c, d, e] = strings_exports.splitAt(value, 3, 6, 9, 12);
      return `${a}-${b}${c ? "." + c : ""}${d ? "." + d : ""}${e ? " " + e : ""}`;
    },
    validate(input) {
      const [value, error] = clean35(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 15 && value.length !== 16) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [front, sufix] = strings_exports.splitAt(value, 12);
      if (!["MWST", "TVA", "IVA", "TPV"].includes(sufix)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const result = uid_default2.validate(front);
      if (!result.isValid && result.error) {
        return { isValid: false, error: result.error };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var vat_default3 = validator35;

  // src/js/numberUtils/countriesData/ch/index.ts
  var countryNumberUtils14 = {
    iso2: "CH",
    numberUtils: [
      ssn_default,
      uid_default2,
      vat_default3
    ]
  };
  var ch_default = countryNumberUtils14;

  // src/js/numberUtils/countriesData/cl/rut.ts
  function clean36(input) {
    const [v, err] = strings_exports.cleanUnicode(input, " -");
    if (err) {
      return ["", err];
    }
    if (v.startsWith("CL")) {
      return [v.substring(2), null];
    }
    return [v, null];
  }
  var validator36 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Chilean National Tax Number",
    localName: "Rol \xDAnico Tributario ",
    abbreviation: "RUT",
    maxLength: 9,
    minLength: 8,
    countryPrefix: "CL",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean36(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean36(input);
      if (value.length <= 2) return value;
      const [a, b, c, d] = strings_exports.splitAt(value, 2, 5, 8);
      return `${a}.${b}${c ? "." + c : ""}${d ? "-" + d : ""}`;
    },
    /**
     * Check if the number is a valid RUT number.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input) {
      const [value, error] = clean36(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8 && value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [front, check] = strings_exports.splitAt(value, value.length - 1);
      if (!strings_exports.isDigits(front)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const sum = weightedSum(front, {
        reverse: true,
        weights: [9, 8, 7, 6, 5, 4, 9, 8, 7],
        modulus: 11
      });
      const digit = "0123456789K"[sum];
      if (check !== digit) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: true
      };
    }
  };
  var rut_default = validator36;

  // src/js/numberUtils/countriesData/cl/run.ts
  var validator37 = {
    ...rut_default,
    name: "Chilean National Identification Number",
    localName: "Rol \xDAnico Nacional",
    abbreviation: "RUN",
    countryPrefix: "CL"
  };
  var run_default = validator37;

  // src/js/numberUtils/countriesData/cl/index.ts
  var countryNumberUtils15 = {
    iso2: "CL",
    numberUtils: [
      run_default,
      rut_default
    ]
  };
  var cl_default = countryNumberUtils15;

  // src/js/numberUtils/countriesData/cn/ric.ts
  function clean37(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator38 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Chinese Resident Identity Card Number",
    localName: "\u5C45\u6C11\u8EAB\u4EFD\u8BC1",
    abbreviation: "RIC No",
    maxLength: 18,
    minLength: 18,
    countryPrefix: "CN",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean37(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean37(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean37(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 18) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [front, check] = strings_exports.splitAt(value, 17);
      if (!strings_exports.isDigits(front)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!isValidDateCompactYYYYMMDD(front.substring(6, 14), true)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const checkValue = weightedSum(front, {
        weights: [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        modulus: 11
      });
      const digit = "10X98765432"[checkValue];
      if (check !== digit) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var ric_default = validator38;

  // src/js/numberUtils/countriesData/cn/uscc.ts
  function clean38(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var alphabet2 = "0123456789ABCDEFGHJKLMNPQRTUWXY";
  var validator39 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Chinese Unified Social Credit Code",
    localName: "\u7EDF\u4E00\u793E\u4F1A\u4FE1\u7528\u4EE3\u7801",
    abbreviation: "USCC",
    maxLength: 18,
    minLength: 18,
    countryPrefix: "CN",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean38(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean38(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean38(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 18) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [front, back, check] = strings_exports.splitAt(value, 8, 17);
      if (!strings_exports.isDigits(front)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (back.split("").some((v) => !alphabet2.includes(v))) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const digit = weightedSum(value.substring(0, 17), {
        weights: [
          1,
          3,
          9,
          27,
          19,
          26,
          16,
          17,
          20,
          29,
          25,
          13,
          8,
          24,
          10,
          30,
          28
        ],
        modulus: 31,
        alphabet: alphabet2
      });
      if (alphabet2[31 - digit] !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var uscc_default = validator39;

  // src/js/numberUtils/countriesData/cn/index.ts
  var countryNumberUtils16 = {
    iso2: "CN",
    numberUtils: [
      ric_default,
      uscc_default
    ]
  };
  var cn_default = countryNumberUtils16;

  // src/js/numberUtils/countriesData/co/nit.ts
  function clean39(input) {
    return strings_exports.cleanUnicode(input, ",.- ");
  }
  var validator40 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Colombian Tax Identification Number",
    localName: "N\xFAmero de Identificaci\xF3n Tributaria",
    abbreviation: "NIT",
    maxLength: 16,
    minLength: 8,
    countryPrefix: "CO",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean39(input);
      if (err) {
        throw err;
      }
      return value.toLocaleUpperCase();
    },
    format(input, includeCountryPrefix) {
      const [value] = clean39(input);
      const [p1, p2, p3, p4] = strings_exports.splitAt(value, 3, 6, 9);
      return `${p1}.${p2}.${p3}-${p4}`;
    },
    /**
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input) {
      const [value, error] = clean39(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length < 8 || value.length > 16) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = weightedSum(front, {
        weights: [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71],
        reverse: true,
        modulus: 11
      });
      const digit = "01987654321"[sum];
      if (check !== digit) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: true
      };
    }
  };
  var nit_default = validator40;

  // src/js/numberUtils/countriesData/co/index.ts
  var countryNumberUtils17 = {
    iso2: "CO",
    numberUtils: [
      nit_default
    ]
  };
  var co_default = countryNumberUtils17;

  // src/js/numberUtils/countriesData/cr/cpf.ts
  function clean40(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " ");
    if (err) {
      return [value, err];
    }
    const parts = value.split("-");
    if (parts.length === 3) {
      parts[0] = parts[0].padStart(2, "0");
      parts[1] = parts[1].padStart(4, "0");
      parts[2] = parts[2].padStart(4, "0");
    }
    const number = parts.join("");
    if (number.length !== 10 && number.length !== 9) {
      return ["", new InvalidLength()];
    }
    return [number.padStart(10, "0"), err];
  }
  var validator41 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Costa Rica Physical Person ID Number",
    localName: "C\xE9dula de Persona F\xEDsica",
    abbreviation: "CPF",
    maxLength: 10,
    minLength: 3,
    countryPrefix: "CR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean40(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean40(input);
      return strings_exports.splitAt(value, 2, 6).join("-");
    },
    validate(input) {
      const [value, error] = clean40(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value[0] !== "0") {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var cpf_default2 = validator41;

  // src/js/numberUtils/countriesData/cr/cpj.ts
  var classTypes = {
    "2": ["100", "200", "300", "400"],
    "3": [
      "002",
      "003",
      "004",
      "005",
      "006",
      "007",
      "008",
      "009",
      "010",
      "011",
      "012",
      "013",
      "014",
      "101",
      "102",
      "103",
      "104",
      "105",
      "106",
      "107",
      "108",
      "109",
      "110"
    ],
    "4": ["000"],
    "5": ["001"]
  };
  function clean41(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator42 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Costa Rica Tax Number",
    localName: "C\xE9dula de Persona Jur\xEDdica",
    abbreviation: "CPJ",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "CR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean41(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean41(input);
      return strings_exports.splitAt(value, 1, 4).join("-");
    },
    validate(input) {
      const [value, error] = clean41(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const items = classTypes[value[0]];
      if (!items) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!items.includes(value.substring(1, 4))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var cpj_default = validator42;

  // src/js/numberUtils/countriesData/cr/cr.ts
  function clean42(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator43 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Costa Rica Foreigners ID Number",
    localName: "C\xE9dula de Residencia",
    abbreviation: "CR",
    maxLength: 12,
    minLength: 12,
    countryPrefix: "CR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean42(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean42(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean42(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 12) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value[0] !== "1") {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var cr_default = validator43;

  // src/js/numberUtils/countriesData/cr/index.ts
  var countryNumberUtils18 = {
    iso2: "CR",
    numberUtils: [
      cpf_default2,
      cpj_default,
      cr_default
    ]
  };
  var cr_default2 = countryNumberUtils18;

  // src/js/numberUtils/countriesData/cu/ni.ts
  function clean43(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator44 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Cuban Identity Card Number",
    localName: "N\xFAmero de Identidad",
    abbreviation: "NI",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "CU",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean43(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean43(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean43(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [yy, mm, dd, cen] = strings_exports.splitAt(value, 2, 4, 6, 7);
      let year;
      if ("012345".includes(cen)) {
        year = `19${yy}`;
      } else if ("678".includes(cen)) {
        year = `20${yy}`;
      } else if (cen === "9") {
        year = `18${yy}`;
      } else {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!isValidDate(year, mm, dd, true)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var ni_default = validator44;

  // src/js/numberUtils/countriesData/cu/index.ts
  var countryNumberUtils19 = {
    iso2: "CU",
    numberUtils: [
      ni_default
    ]
  };
  var cu_default = countryNumberUtils19;

  // src/js/numberUtils/countriesData/cy/vat.ts
  var alphabet3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var weights = {
    "0": 1,
    "1": 0,
    "2": 5,
    "3": 7,
    "4": 9,
    "5": 13,
    "6": 15,
    "7": 17,
    "8": 19,
    "9": 21
  };
  function clean44(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -");
    if (err !== null) {
      return [value, err];
    }
    if (value.startsWith("CY")) {
      return [value.substring(2), null];
    }
    return [value, null];
  }
  var validator45 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Cypriot VAT Number",
    localName: "\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u0395\u03B3\u03B3\u03C1\u03B1\u03C6\u03AE\u03C2 \u03A6.\u03A0.\u0391.",
    abbreviation: "\u03A6\u03A0\u0391",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "CY",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean44(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean44(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean44(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      if (!strings_exports.isDigits(front)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!alphabet3.includes(check)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const sum = front.split("").map((v) => parseInt(v, 10)).reduce((acc, v, idx) => acc + (idx % 2 === 0 ? weights[v] : v), 0);
      if (alphabet3[sum % 26] !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var vat_default4 = validator45;

  // src/js/numberUtils/countriesData/cy/index.ts
  var countryNumberUtils20 = {
    iso2: "CY",
    numberUtils: [
      vat_default4
    ]
  };
  var cy_default = countryNumberUtils20;

  // src/js/numberUtils/countriesData/cz/rc.ts
  function clean45(input) {
    return strings_exports.cleanUnicode(input, " /");
  }
  var validator46 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Czech Birth Number",
    localName: "Rodn\xE9 \u010D\xEDslo",
    abbreviation: "R\u010C",
    maxLength: 10,
    minLength: 9,
    countryPrefix: "CZ",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean45(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean45(input);
      return strings_exports.splitAt(value, 6).join("/");
    },
    validate(input) {
      const [value, error] = clean45(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10 && value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [yy, mm, dd] = strings_exports.splitAt(value, 2, 4, 6);
      const mon = parseInt(mm, 10) % 50 % 20;
      let year = parseInt(yy, 10) + 1900;
      if (value.length === 9) {
        if (year > 1980) {
          year -= 100;
        }
        if (year > 1953) {
          return {
            isValid: false,
            error: new InvalidComponent()
          };
        }
      } else if (year < 1954) {
        year += 100;
      }
      if (!isValidDate(String(year), String(mon), dd, true)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (value.length === 10) {
        const [front, check] = strings_exports.splitAt(value, -1);
        const sum = parseInt(front, 10) % 11 % (year < 1985 ? 10 : 11);
        if (String(sum) !== check) {
          return {
            isValid: false,
            error: new InvalidChecksum()
          };
        }
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var rc_default = validator46;

  // src/js/numberUtils/countriesData/cz/dic.ts
  function clean46(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -");
    if (err !== null) {
      return [value, err];
    }
    if (value.startsWith("CZ")) {
      return [value.substring(2), null];
    }
    return [value, null];
  }
  function checkLegal2(value) {
    const [front, check] = strings_exports.splitAt(value, -1);
    const sum = weightedSum(front, {
      modulus: 11,
      weights: [8, 7, 6, 5, 4, 3, 2, 1]
    });
    const v = (11 - sum) % 11;
    return (v === 0 ? "1" : String(v % 10)) === check;
  }
  function checkSpecial(value) {
    const [front, check] = strings_exports.splitAt(value, -1);
    const sum = weightedSum(front, {
      modulus: 11,
      weights: [8, 7, 6, 5, 4, 3, 2, 1]
    });
    const digit = String((8 - (10 - sum) % 11) % 10);
    return digit === check;
  }
  var validator47 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Czech VAT Number",
    localName: "Da\u0148ov\xE9 identifika\u010Dn\xED \u010D\xEDslo",
    abbreviation: "DI\u010C",
    maxLength: 10,
    minLength: 8,
    countryPrefix: "CZ",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean46(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean46(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean46(input);
      if (error) {
        return { isValid: false, error };
      }
      if (![8, 9, 10].includes(value.length)) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value.length === 8) {
        if (value.startsWith("9")) {
          return {
            isValid: false,
            error: new InvalidComponent()
          };
        }
        if (!checkLegal2(value)) {
          return {
            isValid: false,
            error: new InvalidChecksum()
          };
        }
        return {
          isValid: true,
          compact: value,
          isIndividual: false,
          isCompany: true
        };
      }
      if (value.length === 9 && value.startsWith("6")) {
        if (!checkSpecial(value)) {
          return {
            isValid: false,
            error: new InvalidChecksum()
          };
        }
        return {
          isValid: true,
          compact: value,
          isIndividual: false,
          isCompany: true
        };
      }
      return rc_default.validate(value);
    }
  };
  var dic_default = validator47;

  // src/js/numberUtils/countriesData/cz/index.ts
  var countryNumberUtils21 = {
    iso2: "CZ",
    numberUtils: [
      dic_default,
      rc_default
    ]
  };
  var cz_default = countryNumberUtils21;

  // src/js/numberUtils/libraries/iso7064.ts
  function iso7064mod10x11validate(value) {
    const check = value.split("").map((v) => parseInt(v, 10)).reduce((acc, v) => ((acc === 0 ? 10 : acc) * 2 % 11 + v) % 10, 5);
    return check === 1;
  }

  // src/js/numberUtils/countriesData/de/idnr.ts
  function clean47(input) {
    return strings_exports.cleanUnicode(input, " -./,");
  }
  var validator48 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "German Personal Tax Number",
    localName: "Steuerliche Identifikationsnummer",
    abbreviation: "IdNr",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "DE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean47(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean47(input);
      return strings_exports.splitAt(value, 2, 5, 8).join(" ");
    },
    validate(input) {
      const [value, error] = clean47(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value[0] === "0") {
        return { isValid: false, error: new InvalidComponent() };
      }
      const counter = {};
      value.substring(0, 10).split("").map((v) => parseInt(v, 10)).forEach((v) => {
        counter[v] = (counter[v] ?? 0) + 1;
      });
      const more = Object.values(counter).filter((v) => v > 1);
      if (more.length !== 1 && [2, 3].includes(more[0])) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!iso7064mod10x11validate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var idnr_default = validator48;

  // src/js/numberUtils/countriesData/de/passport.ts
  function clean48(input) {
    return strings_exports.cleanUnicode(input, " -./,");
  }
  var idRegexp = /([CFGHJK][0-9CFGHJKLMNPRTVWXYZ]{8})([0-9]?)[A-Z]?/;
  var validator49 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "German Passport Number",
    localName: "Ausweisen",
    abbreviation: "Passport",
    maxLength: 11,
    minLength: 9,
    countryPrefix: "DE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean48(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean48(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean48(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length < 9 || value.length > 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      const match = value.match(idRegexp);
      if (!match) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (match[2] !== "") {
        const [issue, issueCheck] = [match[1], match[2]];
        const issueSum = weightedSum(issue, {
          weights: [7, 3, 1],
          modulus: 10
        });
        if (String(issueSum) !== issueCheck) {
          return {
            isValid: false,
            error: new InvalidChecksum("issue.checksum")
          };
        }
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var passport_default = validator49;

  // src/js/numberUtils/countriesData/de/pwnr.ts
  var oldRegex = /^([0-9CFGHJKLMNPRTVWXYZ]{9})([0-9])[A-Z]?$/;
  function clean49(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -./,");
    if (err) {
      return [value, err];
    }
    if (value.length >= 25 && /[A-Z]/.test(value[10])) {
      const [p1, p2, p3, p4] = strings_exports.splitAt(value, 10, 11, 25);
      return [p1 + p3 + p2 + p4, err];
    }
    return [value, err];
  }
  function validateIssue(value) {
    const match = value.match(oldRegex);
    if (!match) {
      return { isValid: false, error: new InvalidFormat() };
    }
    const [issue, issueCheck] = [match[1], match[2]];
    const issueSum = weightedSum(issue, {
      weights: [7, 3, 1],
      modulus: 10
    });
    if (String(issueSum) !== issueCheck) {
      return {
        isValid: false,
        error: new InvalidChecksum("issue.checksum")
      };
    }
    return {
      isValid: true,
      compact: value,
      isIndividual: true,
      isCompany: false
    };
  }
  function validateNew(value) {
    if (!/^[0-9CFGHJKLMNPRTVWXYZ][0-9CFGHJKLMNPRTVWXYZ]+[A-Z][0-9]$/.test(value)) {
      return { isValid: false, error: new InvalidFormat() };
    }
    const [
      issue,
      issueCheck,
      birth,
      birthCheck,
      expiry,
      expiryCheck,
      nationality,
      checksum2
    ] = strings_exports.splitAt(value, 9, 10, 16, 17, 23, 24, 25);
    if (!isValidDateCompactYYMMDD(birth, true)) {
      return {
        isValid: false,
        error: new InvalidComponent("birthdate")
      };
    }
    if (!isValidDateCompactYYMMDD(expiry)) {
      return {
        isValid: false,
        error: new InvalidComponent("expiry")
      };
    }
    if (!/^[A-Z]$/.test(nationality)) {
      return {
        isValid: false,
        error: new InvalidComponent("nationality")
      };
    }
    const res = validateIssue(issue + issueCheck);
    if (res.isValid === false) {
      return res;
    }
    const birthSum = weightedSum(birth, {
      weights: [7, 3, 1],
      modulus: 10
    });
    const expirySum = weightedSum(expiry, {
      weights: [7, 3, 1],
      modulus: 10
    });
    if (String(birthSum) !== birthCheck) {
      return {
        isValid: false,
        error: new InvalidChecksum("birth.checksum")
      };
    }
    if (String(expirySum) !== expiryCheck) {
      return {
        isValid: false,
        error: new InvalidChecksum("expiry.checksum")
      };
    }
    const sum = weightedSum(value.substring(0, 24), {
      weights: [7, 3, 1],
      modulus: 10
    });
    if (String(sum) !== checksum2) {
      return {
        isValid: false,
        error: new InvalidChecksum("checksum")
      };
    }
    return {
      isValid: true,
      compact: value,
      isIndividual: true,
      isCompany: false
    };
  }
  var validator50 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "German Personalausweisnummer",
    localName: "Personalausweisnummer",
    abbreviation: "PwNr",
    maxLength: 26,
    minLength: 10,
    countryPrefix: "DE",
    compact(input) {
      const [value, err] = clean49(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input) {
      const [value] = clean49(input);
      return strings_exports.splitAt(value, 10, 17, 24, 25).join(" ");
    },
    validate(input) {
      const [value, error] = clean49(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length === 26) {
        return validateNew(value);
      } else if (value.length === 10 || value.length === 11) {
        return validateIssue(value);
      } else {
        return { isValid: false, error: new InvalidLength() };
      }
    }
  };
  var pwnr_default = validator50;

  // src/js/numberUtils/countriesData/de/stnr.ts
  function clean50(input) {
    return strings_exports.cleanUnicode(input, " -./,");
  }
  function buildMatch(fmt) {
    const pattern = fmt.replace(/([FBUP])\1*/g, (m) => {
      return `(\\d{${m.length}})`;
    });
    const matcher = new RegExp(`^${pattern}$`);
    return (value) => {
      const m = matcher.exec(value);
      if (!m) {
        return { match: false };
      }
      return {
        match: true,
        f: m[1] ?? "",
        b: m[2] ?? "",
        u: m[3] ?? "",
        p: m[4] ?? ""
      };
    };
  }
  function buildMatcher(rfmt, cfmt) {
    return {
      region: buildMatch(rfmt),
      country: buildMatch(cfmt)
    };
  }
  var REGION_FORMATS = {
    "DE-BW": buildMatcher("FFBBBUUUUP", "28FF0BBBUUUUP"),
    "DE-BY": buildMatcher("FFFBBBUUUUP", "9FFF0BBBUUUUP"),
    "DE-BE": buildMatcher("FFBBBUUUUP", "11FF0BBBUUUUP"),
    "DE-BB": buildMatcher("0FFBBBUUUUP", "30FF0BBBUUUUP"),
    "DE-HB": buildMatcher("FFBBBUUUUP", "24FF0BBBUUUUP"),
    "DE-HH": buildMatcher("FFBBBUUUUP", "22FF0BBBUUUUP"),
    "DE-HE": buildMatcher("0FFBBBUUUUP", "26FF0BBBUUUUP"),
    "DE-MV": buildMatcher("0FFBBBUUUUP", "40FF0BBBUUUUP"),
    "DE-NI": buildMatcher("FFBBBUUUUP", "23FF0BBBUUUUP"),
    "DE-NW": buildMatcher("FFFBBBBUUUP", "5FFF0BBBBUUUP"),
    "DE-RP": buildMatcher("FFBBBUUUUP", "27FF0BBBUUUUP"),
    "DE-SL": buildMatcher("0FFBBBUUUUP", "10FF0BBBUUUUP"),
    "DE-SN": buildMatcher("2FFBBBUUUUP", "32FF0BBBUUUUP"),
    "DE-ST": buildMatcher("1FFBBBUUUUP", "31FF0BBBUUUUP"),
    "DE-SH": buildMatcher("FFBBBUUUUP", "21FF0BBBUUUUP"),
    "DE-TH": buildMatcher("1FFBBBUUUUP", "41FF0BBBUUUUP")
  };
  function findMatch(value) {
    let result = null;
    Object.values(REGION_FORMATS).some(({ region, country }) => {
      const rResult = region(value);
      if (rResult.match) {
        result = rResult;
        return true;
      }
      const cResult = country(value);
      if (cResult.match) {
        result = cResult;
        return true;
      }
      return false;
    });
    return result;
  }
  var validator51 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "German Tax Number",
    localName: "Steuernummer",
    abbreviation: " St.-Nr.",
    maxLength: 13,
    minLength: 10,
    countryPrefix: "DE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean50(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean50(input);
      const match = findMatch(input);
      if (!match || !match.match) {
        return value;
      }
      return `${match.f}/${match.b}/${match.u} ${match.p}`;
    },
    validate(input) {
      const [value, error] = clean50(input);
      if (error) {
        return { isValid: false, error };
      }
      if (![10, 11, 13].includes(value.length)) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (findMatch(value) === null) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const counter = {};
      value.substring(0, 10).split("").forEach((v) => {
        counter[v] = (counter[v] ?? 0) + 1;
      });
      const more = Object.values(counter);
      if (!more.some((v) => v === 2 || v === 3)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var stnr_default = validator51;

  // src/js/numberUtils/countriesData/de/svnr.ts
  var AREA_NUMBER_OPTIONS = [
    "02",
    "03",
    "04",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "23",
    "24",
    "25",
    "26",
    "28",
    "29",
    "38",
    "39",
    "40",
    "80",
    "81",
    "82",
    "89"
  ].concat([...Array(79 - 42 + 1).keys()].map((x) => (x + 42).toString()));
  var BIRTH_MONTH_OPTIONS = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ];
  var checkAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var checkAlphabetDict = checkAlphabet.split("").reduce(
    (acc, c, idx) => ({
      ...acc,
      [c]: String(idx + 1).padStart(2, "0")
    }),
    {}
  );
  function clean51(input) {
    return strings_exports.cleanUnicode(input, " -./,");
  }
  var validator52 = {
    type: "SSN" /* SocialSecurityIdentificationNumber */,
    name: "German Pension Insurance Number",
    localName: "Sozialversicherungsnummer",
    abbreviation: "SVNR",
    maxLength: 12,
    minLength: 12,
    countryPrefix: "DE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean51(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean51(input);
      return strings_exports.splitAt(value, 2, 8, 9).join(" ");
    },
    validate(input) {
      const [value, error] = clean51(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 12) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isAlphanumeric(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!AREA_NUMBER_OPTIONS.includes(value.substring(0, 2))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!strings_exports.isDigits(value.substring(2, 4))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!BIRTH_MONTH_OPTIONS.includes(value.substring(4, 6))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!strings_exports.isDigits(value.substring(6, 8))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!strings_exports.isAlpha(value[8])) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!strings_exports.isDigits(value.substring(9, 11))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [frontWithAlpha, check] = strings_exports.splitAt(value, 11);
      const front = frontWithAlpha.split("").map((c) => checkAlphabetDict[c] ?? c).join("");
      const sum = weightedSum(front, {
        weights: [2, 1, 2, 5, 7, 1, 2, 1, 2, 1, 2, 1],
        modulus: 10,
        sumByDigit: true
      });
      if (String(sum % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var svnr_default = validator52;

  // src/js/numberUtils/countriesData/de/vat.ts
  function clean52(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -./,");
    if (err !== null) {
      return [value, err];
    }
    if (value.startsWith("DE")) {
      return [value.substring(2), null];
    }
    return [value, null];
  }
  var validator53 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "German VAT Number",
    localName: "Umsatzsteuer Identifikationsnummer",
    abbreviation: "USt ID Nr.",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "DE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean52(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean52(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean52(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!iso7064mod10x11validate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var vat_default5 = validator53;

  // src/js/numberUtils/countriesData/de/index.ts
  var countryNumberUtils22 = {
    iso2: "DE",
    numberUtils: [
      idnr_default,
      passport_default,
      pwnr_default,
      stnr_default,
      svnr_default,
      vat_default5
    ]
  };
  var de_default = countryNumberUtils22;

  // src/js/numberUtils/countriesData/dk/cpr.ts
  function getBirthDate(value) {
    const [dob] = strings_exports.splitAt(value, 6);
    const [day, month, yearStr] = strings_exports.splitAt(dob, 2, 4);
    let year = parseInt(yearStr);
    if ("5678".includes(value[6]) && year >= 58) {
      year += 1800;
    } else if ("0123".includes(value[6]) || "49".includes(value[6]) && year >= 37) {
      year += 1900;
    } else {
      year += 2e3;
    }
    const d = buildDate(String(year), month, day);
    if (d === null || !isValidDate(String(year), month, day)) {
      throw new InvalidComponent(
        "The number does not contain valid birth date information."
      );
    }
    return d;
  }
  function clean53(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -");
    if (err !== null) {
      return [value, err];
    }
    return [value, null];
  }
  var validator54 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Danish Citizen Number",
    localName: "Personnummer",
    abbreviation: "CPR",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "DK",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean53(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean53(input);
      return strings_exports.splitAt(value, 6).join("-");
    },
    validate(input) {
      const [value, error] = clean53(input);
      if (error) {
        return { isValid: false, error };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      try {
        const date = getBirthDate(value);
        if (!validBirthdate(date)) {
          return {
            isValid: false,
            error: new InvalidComponent(
              "The birth date information is valid, but this person has not been born yet."
            )
          };
        }
      } catch (err) {
        if (err instanceof ValidationError) {
          return {
            isValid: false,
            error: err
          };
        }
        return {
          isValid: false,
          error: new InvalidComponent(String(err))
        };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var cpr_default = validator54;

  // src/js/numberUtils/countriesData/dk/cvr.ts
  function clean54(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -");
    if (err !== null) {
      return [value, err];
    }
    if (value.startsWith("DK")) {
      return [value.substring(2), null];
    }
    return [value, null];
  }
  var validator55 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Danish VAT Number",
    localName: "Momsregistreringsnummer",
    abbreviation: "CVR",
    maxLength: 8,
    minLength: 8,
    countryPrefix: "DK",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean54(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean54(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean54(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = weightedSum(front, {
        modulus: 11,
        weights: [2, 7, 6, 5, 4, 3, 2, 1]
      });
      if (String((11 - sum) % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var cvr_default = validator55;

  // src/js/numberUtils/countriesData/dk/index.ts
  var countryNumberUtils23 = {
    iso2: "DK",
    numberUtils: [
      cpr_default,
      cvr_default
    ]
  };
  var dk_default = countryNumberUtils23;

  // src/js/numberUtils/countriesData/do/cedula.ts
  function clean55(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator56 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Dominican Republic National Identification Number",
    localName: "Cedula",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "DO",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean55(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean55(input);
      return strings_exports.splitAt(value, 3, 10).join("-");
    },
    validate(input) {
      const [value, error] = clean55(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value.substring(1))) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!luhnChecksumValidate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var cedula_default = validator56;

  // src/js/numberUtils/countriesData/do/ncf.ts
  var ncfTypes = [
    "01",
    // invoices for fiscal declaration (or tax reporting)
    "02",
    // invoices for final consumer
    "03",
    // debit note
    "04",
    // credit note (refunds)
    "11",
    // informal supplier invoices (purchases)
    "12",
    // single income invoices
    "13",
    // minor expenses invoices (purchases)
    "14",
    // invoices for special customers (tourists, free zones)
    "15",
    // invoices for the government
    "16",
    // invoices for export
    "17"
    // invoices for payments abroad
  ];
  var ecfTypes = [
    "31",
    // invoices for fiscal declaration (or tax reporting)
    "32",
    // invoices for final consumer
    "33",
    // debit note
    "34",
    // credit note (refunds)
    "41",
    // supplier invoices (purchases)
    "43",
    // minor expenses invoices (purchases)
    "44",
    // invoices for special customers (tourists, free zones)
    "45",
    // invoices for the government
    "46",
    // invoices for exports
    "47"
    // invoices for foreign payments
  ];
  function clean56(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator57 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Dominican Republic Receipt Number",
    localName: "N\xFAmeros de Comprobante Fiscal",
    abbreviation: "NCF",
    maxLength: 19,
    minLength: 11,
    countryPrefix: "DO",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean56(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean56(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean56(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length === 13) {
        if (!value.startsWith("E")) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (!strings_exports.isDigits(value.substring(1))) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (!ecfTypes.includes(value.substring(1, 3))) {
          return { isValid: false, error: new InvalidComponent() };
        }
      } else if (value.length === 11) {
        if (!value.startsWith("B")) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (!strings_exports.isDigits(value.substring(1))) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (!ncfTypes.includes(value.substring(1, 3))) {
          return { isValid: false, error: new InvalidComponent() };
        }
      } else if (value.length === 19) {
        if (!value.startsWith("AP")) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (!strings_exports.isDigits(value.substring(2))) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (!ncfTypes.includes(value.substring(9, 11))) {
          return { isValid: false, error: new InvalidComponent() };
        }
      } else {
        return { isValid: false, error: new InvalidLength() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var ncf_default = validator57;

  // src/js/numberUtils/countriesData/do/rnc.ts
  function clean57(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator58 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Dominican Republic Tax Number",
    localName: "Registro Nacional del Contribuyente",
    abbreviation: "RNC",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "DO",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean57(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean57(input);
      return strings_exports.splitAt(value, 1, 3, -1).join("-");
    },
    validate(input) {
      const [value, error] = clean57(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, 8);
      const sum = weightedSum(front, {
        weights: [7, 9, 8, 6, 5, 4, 3, 2],
        modulus: 11
      });
      if (String((10 - sum) % 9 + 1) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var rnc_default = validator58;

  // src/js/numberUtils/countriesData/do/index.ts
  var countryNumberUtils24 = {
    iso2: "DO",
    numberUtils: [
      cedula_default,
      ncf_default,
      rnc_default
    ]
  };
  var do_default = countryNumberUtils24;

  // src/js/numberUtils/countriesData/dz/nif.ts
  function clean58(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator59 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Algeria tax number",
    localName: "Num\xE9ro d'Identification Fiscale",
    abbreviation: "NIF",
    maxLength: 20,
    minLength: 15,
    countryPrefix: "DZ",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean58(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean58(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean58(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 15 && value.length !== 20) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: false
      };
    }
  };
  var nif_default = validator59;

  // src/js/numberUtils/countriesData/dz/index.ts
  var countryNumberUtils25 = {
    iso2: "DZ",
    numberUtils: [
      nif_default
    ]
  };
  var dz_default = countryNumberUtils25;

  // src/js/numberUtils/countriesData/ec/ci.ts
  function clean59(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  function validPrefix(value) {
    const prefix = parseInt(value.substring(0, 2), 10);
    if (prefix === 0 || prefix > 24 || prefix === 30 || prefix === 50) {
      return false;
    }
    return true;
  }
  var validator60 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Ecuadorian Personal Identity Code",
    localName: "C\xE9dula de Identidad",
    abbreviation: "CI",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "EC",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean59(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean59(input);
      return strings_exports.splitAt(value, 9).join("-");
    },
    validate(input) {
      const [value, error] = clean59(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!validPrefix(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (parseInt(value[2], 10) > 6) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const digit = value.split("").map((v) => parseInt(v, 10)).map((v, idx) => idx % 2 === 0 ? v * 2 : v).map((v) => v > 9 ? v - 9 : v).reduce((acc, v) => acc + v) % 10;
      if (digit !== 0) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var ci_default = validator60;

  // src/js/numberUtils/countriesData/ec/ruc.ts
  function clean60(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  var validator61 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Ecuadorian Company Tax Number",
    localName: "Registro \xDAnico de Contribuyentes",
    abbreviation: "RUC",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "EC",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean60(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean60(input);
      return strings_exports.splitAt(value, 10).join("-");
    },
    validate(input) {
      const [value, error] = clean60(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!validPrefix(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (parseInt(value[2], 10) < 6) {
        const [front, end] = strings_exports.splitAt(value, 10);
        if (end === "000") {
          return { isValid: false, error: new InvalidComponent() };
        }
        return ci_default.validate(front);
      }
      if (value[2] === "6") {
        const [front, end] = strings_exports.splitAt(value, 9);
        if (end === "0000") {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (weightedSum(front, {
          weights: [3, 2, 7, 6, 5, 4, 3, 2, 1],
          modulus: 11
        }) !== 0) {
          if (end.endsWith("000")) {
            return { isValid: false, error: new InvalidComponent() };
          }
          return ci_default.validate(value.substring(0, 10));
        }
      } else if (value[2] === "9") {
        const [front, end] = strings_exports.splitAt(value, 10);
        if (end === "000") {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (weightedSum(front, {
          weights: [4, 3, 2, 7, 6, 5, 4, 3, 2, 1],
          modulus: 11
        }) !== 0) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      } else {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var ruc_default = validator61;

  // src/js/numberUtils/countriesData/ec/index.ts
  var countryNumberUtils26 = {
    iso2: "EC",
    numberUtils: [
      ci_default,
      ruc_default
    ]
  };
  var ec_default = countryNumberUtils26;

  // src/js/numberUtils/countriesData/ee/ik.ts
  function clean61(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  function ikCheck(value) {
    const [front, check] = strings_exports.splitAt(value, -1);
    let sum = weightedSum(front, {
      modulus: 11,
      weights: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6]
    });
    if (sum === 10) {
      sum = weightedSum(front, {
        modulus: 11,
        weights: [3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      });
    }
    return String(sum % 10) === check;
  }
  function ikCheckDate(value) {
    let century2;
    switch (value[0]) {
      case "1":
      case "2":
        century2 = "18";
        break;
      case "3":
      case "4":
        century2 = "19";
        break;
      case "5":
      case "6":
        century2 = "20";
        break;
      case "7":
      case "8":
        century2 = "21";
        break;
      default:
        return false;
    }
    return isValidDateCompactYYYYMMDD(`${century2}${value.substring(1, 6)}`, true);
  }
  var validator62 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Estonian Personal ID Number",
    localName: "Isikukood",
    abbreviation: "IK",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "EE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean61(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean61(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean61(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!ikCheck(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var ik_default = validator62;

  // src/js/numberUtils/countriesData/ee/kmkr.ts
  function clean62(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " ");
    if (err !== null) {
      return [value, err];
    }
    if (value.startsWith("EE")) {
      return [value.substring(2), null];
    }
    return [value, null];
  }
  var validator63 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Estronian VAT Number",
    localName: "K\xE4ibemaksukohuslase",
    abbreviation: "KMKR",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "EE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean62(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean62(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean62(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = weightedSum(front, {
        modulus: 10,
        weights: [3, 7, 1]
      });
      if (String((10 - sum) % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var kmkr_default = validator63;

  // src/js/numberUtils/countriesData/ee/registrikood.ts
  function clean63(input) {
    return strings_exports.cleanUnicode(input, " -/");
  }
  var validator64 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Estonian Organisation Registration Code",
    localName: "Registrikood",
    maxLength: 8,
    minLength: 8,
    countryPrefix: "EE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean63(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean63(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean63(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!["1", "7", "8", "9"].includes(value[0])) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!ikCheck(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var registrikood_default = validator64;

  // src/js/numberUtils/countriesData/ee/index.ts
  var countryNumberUtils27 = {
    iso2: "EE",
    numberUtils: [
      ik_default,
      kmkr_default,
      registrikood_default
    ]
  };
  var ee_default = countryNumberUtils27;

  // src/js/numberUtils/countriesData/eg/tn.ts
  var ARABIC_NUMBERS_MAP = {
    // Arabic-indic digits.
    "\u0660": "0",
    "\u0661": "1",
    "\u0662": "2",
    "\u0663": "3",
    "\u0664": "4",
    "\u0665": "5",
    "\u0666": "6",
    "\u0667": "7",
    "\u0668": "8",
    "\u0669": "9",
    // Extended arabic-indic digits.
    "\u06F0": "0",
    "\u06F1": "1",
    "\u06F2": "2",
    "\u06F3": "3",
    "\u06F4": "4",
    "\u06F5": "5",
    "\u06F6": "6",
    "\u06F7": "7",
    "\u06F8": "8",
    "\u06F9": "9"
  };
  function clean64(input) {
    const norm = input.split("").map((c) => ARABIC_NUMBERS_MAP[c] ?? c).join("");
    return strings_exports.cleanUnicode(norm, " -/");
  }
  var validator65 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Tax Registration Number",
    localName: "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0636\u0631\u064A\u0628\u064A",
    abbreviation: "TN",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "EG",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean64(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean64(input);
      return strings_exports.splitAt(value, 3, 6).join("-");
    },
    validate(input) {
      const [value, error] = clean64(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: false
      };
    }
  };
  var tn_default = validator65;

  // src/js/numberUtils/countriesData/eg/index.ts
  var countryNumberUtils28 = {
    iso2: "EG",
    numberUtils: [
      tn_default
    ]
  };
  var eg_default = countryNumberUtils28;

  // src/js/numberUtils/countriesData/es/dni.ts
  var checkDigits = "TRWAGMYFPDXBNJZSQVHLCKE";
  function calcCheckDigit(value) {
    return checkDigits[parseInt(value.substring(0, 8), 10) % 23];
  }
  function clean65(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator66 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Spanish Personal Identify Code",
    localName: "Documento Nacional de Identidad",
    abbreviation: "DNI",
    placeholder: "54362315-K",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "ES",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean65(input);
      if (err) {
        throw err;
      }
      if (includeCountryPrefix) {
        return this.countryPrefix + value;
      } else {
        return value;
      }
    },
    format(input, includeCountryPrefix) {
      const [cleanValue] = clean65(input);
      const value = strings_exports.splitAt(cleanValue, 8).join("-");
      if (includeCountryPrefix) {
        return this.countryPrefix + value;
      } else {
        return value;
      }
    },
    validate(input) {
      const [value, error] = clean65(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== this.minLength) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [body, check] = strings_exports.splitAt(value, 8);
      if ("KLM".includes(body[0]) && strings_exports.isDigits(body.substring(1))) {
      } else if (!strings_exports.isDigits(body)) {
        return { isValid: false, error: new InvalidComponent() };
      } else if (calcCheckDigit(body) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var dni_default2 = validator66;

  // src/js/numberUtils/countriesData/es/nie.ts
  var checkDigits2 = "XYZ";
  function clean66(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator67 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Spanish Foreign Number",
    localName: "N\xFAmero de Identificaci\xF3n de Extranjero",
    abbreviation: "NIE",
    placeholder: "X-2482300-W",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "ES",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean66(input);
      if (err) {
        throw err;
      }
      if (includeCountryPrefix) {
        return this.countryPrefix + value;
      } else {
        return value;
      }
    },
    format(input, includeCountryPrefix) {
      const [cleanValue] = clean66(input);
      const value = strings_exports.splitAt(cleanValue, 1, 8).join("-");
      if (includeCountryPrefix) {
        return this.countryPrefix + value;
      } else {
        return value;
      }
    },
    validate(input) {
      const [value, error] = clean66(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== this.minLength) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [first, body, check] = strings_exports.splitAt(value, 1, 8);
      if (!strings_exports.isDigits(body) || !checkDigits2.includes(first) || strings_exports.isDigits(check)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (calcCheckDigit(`${checkDigits2.indexOf(first)}${body}`) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var nie_default = validator67;

  // src/js/numberUtils/countriesData/es/cif.ts
  var entityTypes = "ABCDEFGHJNPQRSUVW";
  var letterCheckDigits = "JABCDEFGHI";
  function clean67(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator68 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Spanish Company Tax Number",
    localName: "C\xF3digo de Identificaci\xF3n Fiscal",
    abbreviation: "CIF",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "ES",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean67(input);
      if (err) {
        throw err;
      }
      if (includeCountryPrefix) {
        return this.countryPrefix + value;
      } else {
        return value;
      }
    },
    format(input, includeCountryPrefix) {
      const [cleanValue] = clean67(input);
      const value = strings_exports.splitAt(cleanValue, 1, 8).join("-");
      if (includeCountryPrefix) {
        return this.countryPrefix + value;
      } else {
        return value;
      }
    },
    validate(input) {
      const [value, error] = clean67(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [first, body, check] = strings_exports.splitAt(value, 1, 8);
      if (!strings_exports.isDigits(body) || !entityTypes.includes(first) || !(strings_exports.isDigits(check) || letterCheckDigits.includes(check))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const cs = parseInt(luhnChecksumDigit(body), 10);
      const possibleCheckDigits = letterCheckDigits[cs] + String(cs);
      if (!possibleCheckDigits.includes(check)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var cif_default = validator68;

  // src/js/numberUtils/countriesData/es/nif.ts
  function clean68(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -./");
    if (err) {
      return [value, err];
    }
    if (value.startsWith("ES")) {
      return [value.substring(2), null];
    }
    return [value, null];
  }
  var validator69 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Spanish VAT Number",
    localName: "N\xFAmero de Identificaci\xF3n Fiscal",
    abbreviation: "NIF",
    placeholder: "B-58378431",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "ES",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean68(input);
      if (err) {
        throw err;
      }
      if (includeCountryPrefix) {
        return this.countryPrefix + value;
      } else {
        return value;
      }
    },
    format(input, includeCountryPrefix) {
      const [cleanValue] = clean68(input);
      const value = strings_exports.splitAt(cleanValue, 1).join("-");
      if (includeCountryPrefix) {
        return this.countryPrefix + value;
      } else {
        return value;
      }
    },
    validate(input) {
      const [value, error] = clean68(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== this.minLength) {
        return { isValid: false, error: new InvalidLength() };
      }
      if ("KLM".includes(value[0])) {
        if (value[value.length - 1] !== calcCheckDigit(value.substring(1))) {
          return { isValid: false, error: new InvalidChecksum() };
        }
        return {
          isValid: true,
          compact: value,
          isIndividual: true,
          isCompany: false
        };
      }
      if (strings_exports.isDigits(value[0])) {
        return dni_default2.validate(value);
      }
      if ("XYZ".includes(value[0])) {
        return nie_default.validate(value);
      }
      return cif_default.validate(value);
    }
  };
  var nif_default2 = validator69;

  // src/js/numberUtils/countriesData/es/index.ts
  var countryNumberUtils29 = {
    iso2: "ES",
    numberUtils: [
      dni_default2,
      nif_default2
    ]
  };
  var es_default = countryNumberUtils29;

  // src/js/numberUtils/countriesData/fi/alv.ts
  function clean69(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " ");
    if (err !== null) {
      return [value, err];
    }
    if (value.startsWith("FI")) {
      return [value.substring(2), null];
    }
    return [value, null];
  }
  var validator70 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Finnish VAT Number",
    localName: "Arvonlis\xE4veronumero Merv\xE4rdesskattenummer",
    abbreviation: "ALV nro",
    maxLength: 8,
    minLength: 8,
    countryPrefix: "FI",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean69(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean69(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean69(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const sum = weightedSum(value, {
        modulus: 11,
        weights: [7, 9, 10, 5, 8, 4, 2, 1]
      });
      if (sum !== 0) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var alv_default = validator70;

  // src/js/numberUtils/countriesData/fi/hetu.ts
  function clean70(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var CHECK_ALPHA = "0123456789ABCDEFHJKLMNPRSTUVWXY";
  var CENTURY = {
    "+": "18",
    "-": "19",
    Y: "19",
    X: "19",
    W: "19",
    V: "19",
    U: "19",
    A: "20",
    B: "20",
    C: "20",
    D: "20",
    E: "20",
    F: "20"
  };
  var VALID_CENTURY = Object.keys(CENTURY);
  var validator71 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Finnish Personal Identity Code",
    localName: "Henkil\xF6tunnus",
    abbreviation: "HETU",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "FI",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean70(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean70(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean70(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [front, , back, check2] = strings_exports.splitAt(value, 6, 7, -1);
      if (!strings_exports.isDigits(front) || !strings_exports.isDigits(back) || !CHECK_ALPHA.includes(check2)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!VALID_CENTURY.includes(value[6])) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [dd, mm, yy, century2, person, check] = strings_exports.splitAt(
        value,
        2,
        4,
        6,
        7,
        10
      );
      if (!isValidDate(`${CENTURY[century2]}${yy}`, mm, dd, true)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const checkable = `${dd}${mm}${yy}${person}`;
      if (CHECK_ALPHA[parseInt(checkable, 10) % CHECK_ALPHA.length] !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var hetu_default = validator71;

  // src/js/numberUtils/countriesData/fi/ytunnus.ts
  function clean71(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator72 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Finnish Business Identifier",
    localName: "Yritys- ja yhteis\xF6tunnus",
    abbreviation: "Y-tunnus",
    maxLength: 9,
    minLength: 8,
    countryPrefix: "FI",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean71(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean71(input);
      return strings_exports.splitAt(value, -1).join("-");
    },
    validate(input) {
      const [value, error] = clean71(input);
      if (error) {
        return { isValid: false, error };
      }
      return alv_default.validate(value);
    }
  };
  var ytunnus_default = validator72;

  // src/js/numberUtils/countriesData/fi/index.ts
  var countryNumberUtils30 = {
    iso2: "FI",
    numberUtils: [
      alv_default,
      hetu_default,
      ytunnus_default
    ]
  };
  var fi_default = countryNumberUtils30;

  // src/js/numberUtils/countriesData/fo/vn.ts
  function clean72(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  var validator73 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Vinnutal",
    localName: "NAME",
    abbreviation: "VN",
    maxLength: 6,
    minLength: 6,
    countryPrefix: "FO",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean72(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean72(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean72(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 6) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: false
      };
    }
  };
  var vn_default = validator73;

  // src/js/numberUtils/countriesData/fo/index.ts
  var countryNumberUtils31 = {
    iso2: "FO",
    numberUtils: [
      vn_default
    ]
  };
  var fo_default = countryNumberUtils31;

  // src/js/numberUtils/countriesData/fr/nif.ts
  function clean73(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator74 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "French Tax Identification Number",
    localName: "Num\xE9ro d'Immatriculation Fiscale",
    abbreviation: "NIF",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "FR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean73(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean73(input);
      return strings_exports.splitAt(value, 2, 4, 7, 10).join(" ");
    },
    validate(input) {
      const [value, error] = clean73(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [prefix, check] = strings_exports.splitAt(value, 10);
      const pvalue = parseInt(prefix, 10);
      if (!"0123".includes(value[0])) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (pvalue === 0) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (String(pvalue % 511).padStart(3, "0") !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var nif_default3 = validator74;

  // src/js/numberUtils/countriesData/fr/nir.ts
  function clean74(input) {
    return strings_exports.cleanUnicode(input, " .");
  }
  var validator75 = {
    type: "SSN" /* SocialSecurityIdentificationNumber */,
    name: "French Personal Identification Number",
    localName: "Num\xE9ro d\u2019Inscription au RNIPP",
    abbreviation: "NIR",
    maxLength: 15,
    minLength: 15,
    countryPrefix: "FR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean74(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean74(input);
      return strings_exports.splitAt(value, 1, 3, 5, 7, 10, 13).join(" ");
    },
    validate(input) {
      const [value, error] = clean74(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 15) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [pre, dept, post, check] = strings_exports.splitAt(value, 5, 7, 13);
      if (!strings_exports.isDigits(pre) || !strings_exports.isDigits(post) || !strings_exports.isDigits(check)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      let add = "";
      if (dept === "2A") {
        add = "19";
      } else if (dept === "2B") {
        add = "18";
      } else if (strings_exports.isDigits(dept)) {
        add = dept;
      } else {
        return { isValid: false, error: new InvalidComponent() };
      }
      const sum = parseInt(`${pre}${add}${post}`, 10) % 97;
      if (String(97 - sum).padStart(2, "0") !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var nir_default = validator75;

  // src/js/numberUtils/countriesData/fr/siren.ts
  function clean75(input) {
    return strings_exports.cleanUnicode(input, " .");
  }
  var validator76 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "French Company Identification Number",
    localName: "Syst\xE8me d'Identification du R\xE9pertoire des Entreprises",
    abbreviation: "SIREN",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "FR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean75(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean75(input);
      return strings_exports.splitAt(value, 3, 6).join(" ");
    },
    validate(input) {
      const [value, error] = clean75(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!luhnChecksumValidate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var siren_default = validator76;

  // src/js/numberUtils/countriesData/fr/siret.ts
  function clean76(input) {
    return strings_exports.cleanUnicode(input, " -/");
  }
  var validator77 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "French Company Establishment Identification Number",
    localName: "Syst\xE8me d'Identification du R\xE9pertoire des \xC9tablissements",
    abbreviation: "SIRET",
    maxLength: 14,
    minLength: 14,
    countryPrefix: "FR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean76(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean76(input);
      return strings_exports.splitAt(value, 3, 6, 9).join(" ");
    },
    validate(input) {
      const [value, error] = clean76(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 14) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value.startsWith("356000000") && value !== "35600000000048") {
        const sum = weightedSum(value, {
          weights: [1],
          modulus: 5
        });
        if (sum !== 0) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      } else if (!luhnChecksumValidate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var siret_default = validator77;

  // src/js/numberUtils/countriesData/fr/tva.ts
  function clean77(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -.");
    if (err !== null) {
      return [value, err];
    }
    if (value.startsWith("FR")) {
      return [value.substring(2), null];
    }
    return [value, null];
  }
  var alphabet4 = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";
  var validator78 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "French VAT Number",
    localName: "Num\xE9ro d'Identification \xE0 la Taxe sur la Valeur Ajout\xE9e",
    abbreviation: "n\xB0TVA",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "FR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean77(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean77(input);
      return strings_exports.splitAt(value, 2, 5, 8).join(" ");
    },
    validate(input) {
      const [value, error] = clean77(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [check, back] = strings_exports.splitAt(value, 2);
      if (!alphabet4.includes(check[0]) || !alphabet4.includes(check[1])) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!strings_exports.isDigits(back)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value.substring(2, 5) !== "000") {
        const r = siren_default.validate(value.substring(2));
        if (!r.isValid) {
          return r;
        }
      }
      if (strings_exports.isDigits(check)) {
        const sum = (12 + 3 * (parseInt(back, 10) % 97)) % 97;
        if (sum !== parseInt(check, 10)) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      } else {
        const c0 = alphabet4.indexOf(check[0]);
        const c1 = alphabet4.indexOf(check[1]);
        let cvalue;
        if (c0 < 10) {
          cvalue = c0 * 24 + c1 - 10;
        } else {
          cvalue = c0 * 34 + c1 - 100;
        }
        const sum = (parseInt(back, 10) + 1 + Math.floor(cvalue / 11)) % 11;
        const digit = cvalue % 11;
        if (sum !== digit) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var tva_default = validator78;

  // src/js/numberUtils/countriesData/fr/index.ts
  var countryNumberUtils32 = {
    iso2: "FR",
    numberUtils: [
      nif_default3,
      nir_default,
      siren_default,
      siret_default,
      tva_default
    ]
  };
  var fr_default = countryNumberUtils32;

  // src/js/numberUtils/countriesData/gb/nino-prefixes.ts
  var PREFIXES = /* @__PURE__ */ new Set([
    "AA",
    "AB",
    "AE",
    "AH",
    "AK",
    "AL",
    "AM",
    "AP",
    "AR",
    "AS",
    "AT",
    "AW",
    "AX",
    "AY",
    "AZ",
    "BA",
    "BB",
    "BE",
    "BH",
    "BK",
    "BL",
    "BM",
    "BT",
    "CA",
    "CB",
    "CE",
    "CH",
    "CK",
    "CL",
    "CR",
    "EA",
    "EB",
    "EE",
    "EH",
    "EK",
    "EL",
    "EM",
    "EP",
    "ER",
    "ES",
    "ET",
    "EW",
    "EX",
    "EY",
    "EZ",
    "GY",
    "HA",
    "HB",
    "HE",
    "HH",
    "HK",
    "HL",
    "HM",
    "HP",
    "HR",
    "HS",
    "HT",
    "HW",
    "HX",
    "HY",
    "HZ",
    "JA",
    "JB",
    "JC",
    "JE",
    "JG",
    "JH",
    "JJ",
    "JK",
    "JL",
    "JM",
    "JN",
    "JP",
    "JR",
    "JS",
    "JT",
    "JW",
    "JX",
    "JY",
    "JZ",
    "KA",
    "KB",
    "KE",
    "KH",
    "KK",
    "KL",
    "KM",
    "KP",
    "KR",
    "KS",
    "KT",
    "KW",
    "KX",
    "KY",
    "KZ",
    "LA",
    "LB",
    "LE",
    "LH",
    "LK",
    "LL",
    "LM",
    "LP",
    "LR",
    "LS",
    "LT",
    "LW",
    "LX",
    "LY",
    "LZ",
    "MA",
    "MW",
    "MX",
    "NA",
    "NB",
    "NE",
    "NH",
    "NL",
    "NM",
    "NP",
    "NR",
    "NS",
    "NW",
    "NX",
    "NY",
    "NZ",
    "OA",
    "OB",
    "OE",
    "OH",
    "OK",
    "OL",
    "OM",
    "OP",
    "OR",
    "OS",
    "OX",
    "PA",
    "PB",
    "PC",
    "PE",
    "PG",
    "PH",
    "PJ",
    "PK",
    "PL",
    "PM",
    "PN",
    "PP",
    "PR",
    "PS",
    "PT",
    "PW",
    "PX",
    "PY",
    "RA",
    "RB",
    "RE",
    "RH",
    "RK",
    "RM",
    "RP",
    "RR",
    "RS",
    "RT",
    "RW",
    "RX",
    "RY",
    "RZ",
    "SA",
    "SB",
    "SC",
    "SE",
    "SG",
    "SH",
    "SJ",
    "SK",
    "SL",
    "SM",
    "SN",
    "SP",
    "SR",
    "SS",
    "ST",
    "SW",
    "SX",
    "SY",
    "SZ",
    "TA",
    "TB",
    "TE",
    "TH",
    "TK",
    "TL",
    "TM",
    "TP",
    "TR",
    "TS",
    "TT",
    "TW",
    "TX",
    "TY",
    "TZ",
    "WA",
    "WB",
    "WE",
    "WK",
    "WL",
    "WM",
    "WP",
    "YA",
    "YB",
    "YE",
    "YH",
    "YK",
    "YL",
    "YM",
    "YP",
    "YR",
    "YS",
    "YT",
    "YW",
    "YX",
    "YY",
    "YZ",
    "ZA",
    "ZB",
    "ZE",
    "ZH",
    "ZK",
    "ZL",
    "ZM",
    "ZP",
    "ZR",
    "ZS",
    "ZT",
    "ZW",
    "ZX",
    "ZY"
  ]);
  var nino_prefixes_default = PREFIXES;

  // src/js/numberUtils/countriesData/gb/nino.ts
  function clean78(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  function validLength(value) {
    return [8, 9].includes(value.length);
  }
  var VALID_FORMAT_REGEX = /^([A-Z]{2})\d{6}[A-D]?$/;
  function validFormat(value) {
    const matchData = value.toUpperCase().match(VALID_FORMAT_REGEX);
    return !!matchData && nino_prefixes_default.has(matchData[1]);
  }
  var validator79 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "United Kingdom National Insurance Number",
    localName: "National Insurance Number",
    abbreviation: "NINO",
    maxLength: 9,
    minLength: 8,
    countryPrefix: "GB",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean78(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean78(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean78(input);
      if (error) {
        return { isValid: false, error };
      }
      if (!validLength(value)) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!validFormat(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var nino_default = validator79;

  // src/js/numberUtils/countriesData/gb/utr.ts
  function clean79(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator80 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "United Kingdom Unique Taxpayer Reference",
    localName: "Unique Taxpayer Reference",
    abbreviation: "UTR",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "GB",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean79(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean79(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean79(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [check, back] = strings_exports.splitAt(value, 1);
      const sum = weightedSum(back, {
        weights: [6, 7, 8, 9, 10, 5, 4, 3, 2],
        modulus: 11
      });
      const digit = "21987654321"[sum];
      if (digit !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var utr_default = validator80;

  // src/js/numberUtils/countriesData/gb/vat.ts
  function clean80(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -/");
    if (err !== null) {
      return [value, err];
    }
    if (value.startsWith("GB")) {
      return [value.substring(2), null];
    }
    return [value, null];
  }
  var validator81 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "United Kingdom (and Isle of Man) VAT Number",
    localName: "Value Added Tax Registration Number",
    abbreviation: "VAT Reg No",
    maxLength: 12,
    minLength: 5,
    countryPrefix: "GB",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean80(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean80(input);
      return strings_exports.splitAt(value, 3, 7).join(" ");
    },
    validate(input) {
      const [value, error] = clean80(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length === 5) {
        if (!strings_exports.isDigits(value.substring(2))) {
          return { isValid: false, error: new InvalidFormat() };
        }
        const cvalue = parseInt(value.substring(2), 10);
        if (value.startsWith("GD") && cvalue >= 500) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (value.startsWith("HA") && cvalue < 500) {
          return { isValid: false, error: new InvalidComponent() };
        }
      } else if (value.length === 11 && (value.startsWith("GD8888") || value.startsWith("HA8888"))) {
        if (!strings_exports.isDigits(value.substring(6))) {
          return { isValid: false, error: new InvalidFormat() };
        }
        const cvalue = parseInt(value.substring(6, 3), 10);
        if (value.startsWith("GD") && cvalue >= 500) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (value.startsWith("HA") && cvalue < 500) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (cvalue % 97 !== parseInt(value.substring(9, 2), 10)) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      } else if (value.length === 9 || value.length === 12) {
        if (!strings_exports.isDigits(value)) {
          return { isValid: false, error: new InvalidFormat() };
        }
        const sum = weightedSum(value.substring(0, 9), {
          weights: [8, 7, 6, 5, 4, 3, 2, 10, 1],
          modulus: 97
        });
        if (Number(value.substring(0, 3)) >= 100) {
          if (![0, 42, 55].includes(sum)) {
            return { isValid: false, error: new InvalidChecksum() };
          }
        } else if (sum !== 0) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      } else {
        return { isValid: false, error: new InvalidLength() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var vat_default6 = validator81;

  // src/js/numberUtils/countriesData/gb/index.ts
  var countryNumberUtils33 = {
    iso2: "GB",
    numberUtils: [
      nino_default,
      utr_default,
      vat_default6
    ]
  };
  var gb_default = countryNumberUtils33;

  // src/js/numberUtils/countriesData/gh/tin.ts
  function clean81(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validRe4 = /^[PCGQV]{1}00[A-Z0-9]{8}$/;
  var ALPHABET = "0123456789X";
  var validator82 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Taxpayer Identification Number",
    localName: "",
    abbreviation: "TIN",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "GH",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean81(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean81(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean81(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!validRe4.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [, front, check] = strings_exports.splitAt(value, 1, 10);
      const sum = weightedSum(front, {
        weights: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        modulus: 11
      });
      if (ALPHABET[sum] !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: value[0] === "P",
        isCompany: value[0] !== "P"
      };
    }
  };
  var tin_default4 = validator82;

  // src/js/numberUtils/countriesData/gh/index.ts
  var countryNumberUtils34 = {
    iso2: "GH",
    numberUtils: [
      tin_default4
    ]
  };
  var gh_default = countryNumberUtils34;

  // src/js/numberUtils/countriesData/gn/nifp.ts
  function clean82(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator83 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Num\xE9ro d'Identification Fiscale Permanent",
    localName: "",
    abbreviation: "NIFP",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "GN",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean82(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean82(input);
      return strings_exports.splitAt(value, 3, 6).join("-");
    },
    validate(input) {
      const [value, error] = clean82(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!luhnChecksumValidate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: false
      };
    }
  };
  var nifp_default = validator83;

  // src/js/numberUtils/countriesData/gn/index.ts
  var countryNumberUtils35 = {
    iso2: "GN",
    numberUtils: [
      nifp_default
    ]
  };
  var gn_default = countryNumberUtils35;

  // src/js/numberUtils/countriesData/gr/amka.ts
  function clean83(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator84 = {
    type: "SSN" /* SocialSecurityIdentificationNumber */,
    name: "Greek Social Security Number",
    localName: "\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u039C\u03B7\u03C4\u03C1\u03CE\u03BF\u03C5 \u039A\u03BF\u03B9\u03BD\u03C9\u03BD\u03B9\u03BA\u03AE\u03C2 \u0391\u03C3\u03C6\u03AC\u03BB\u03B9\u03C3\u03B7\u03C2",
    abbreviation: "AMKA",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "GR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean83(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean83(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean83(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [dd, mm, yy] = strings_exports.splitAt(value, 2, 4, 6);
      if (!isValidDate(yy, mm, dd)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!luhnChecksumValidate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var amka_default = validator84;

  // src/js/numberUtils/countriesData/gr/vat.ts
  function clean84(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " ");
    if (err !== null) {
      return [value, err];
    }
    let num = value;
    if (value.startsWith("GR") || value.startsWith("EL")) {
      num = value.substring(2);
    }
    if (num.length === 8) {
      return [`0${num}`, null];
    }
    return [num, null];
  }
  var validator85 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Greek VAT Number",
    localName: "\u0391\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 \u03A6\u03BF\u03C1\u03BF\u03BB\u03BF\u03B3\u03B9\u03BA\u03BF\u03CD \u039C\u03B7\u03C4\u03C1\u03CE\u03BF\u03C5",
    abbreviation: "\u0391\u03A6\u039C",
    maxLength: 9,
    minLength: 8,
    countryPrefix: "GR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean84(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean84(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean84(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = front.split("").map((v) => parseInt(v, 10)).reduce((acc, v) => acc * 2 + v, 0);
      if (String(sum * 2 % 11 % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var vat_default7 = validator85;

  // src/js/numberUtils/countriesData/gr/index.ts
  var countryNumberUtils36 = {
    iso2: "GR",
    numberUtils: [
      amka_default,
      vat_default7
    ]
  };
  var gr_default = countryNumberUtils36;

  // src/js/numberUtils/countriesData/gt/cui.ts
  function clean85(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var citiesPerRegion = {
    /* Guatemala */
    "01": 17,
    /* El Progreso */
    "02": 8,
    /* Sacatepéquez */
    "03": 16,
    /* Chimaltenango */
    "04": 16,
    /* Escuintla */
    "05": 13,
    /* Santa Rosa */
    "06": 14,
    /* Sololá */
    "07": 19,
    /* Totonicapán */
    "08": 8,
    /* Quetzaltenango */
    "09": 24,
    /* Suchitepéquez */
    "10": 21,
    /* Retalhuleu */
    "11": 9,
    /* San Marcos */
    "12": 30,
    /* Huehuetenango */
    "13": 32,
    /* Quiché */
    "14": 21,
    /* Baja Verapaz */
    "15": 8,
    /* Alta Verapaz */
    "16": 17,
    /* Petén */
    "17": 14,
    /* Izabal */
    "18": 5,
    /* Zacapa */
    "19": 11,
    /* Chiquimula */
    "20": 11,
    /* Jalapa */
    "21": 7,
    /* Jutiapa */
    "22": 17
  };
  var validator86 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Guatemala Identity Number",
    localName: "C\xF3digo \xDAnico de Identificaci\xF3n",
    abbreviation: "CUI",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "GT",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean85(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean85(input);
      return strings_exports.splitAt(value, 4, 9).join("-");
    },
    validate(input) {
      const [value, error] = clean85(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check, region, city] = strings_exports.splitAt(value, 8, 9, 11);
      const cities2 = citiesPerRegion[region];
      if (!cities2) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (parseInt(city, 10) > cities2) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const digit = String(
        weightedSum(front, {
          weights: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          modulus: 11
        }) % 10
      );
      if (check !== digit) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var cui_default = validator86;

  // src/js/numberUtils/countriesData/gt/nit.ts
  function clean86(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var checkDigit = "0123456789K";
  var validator87 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Guatemala Tax Number",
    localName: "N\xFAmero de Identificaci\xF3n Tributaria",
    abbreviation: "NIT",
    maxLength: 12,
    minLength: 2,
    countryPrefix: "GT",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean86(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean86(input);
      return strings_exports.splitAt(value, -1).join("-");
    },
    validate(input) {
      const [value, error] = clean86(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length < 2 || value.length > 12) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      if (!strings_exports.isDigits(front)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!checkDigit.includes(check)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const sum = (11 - weightedSum(front, {
        reverse: true,
        weights: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        modulus: 11
      })) % 11;
      if (check !== checkDigit[sum]) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var nit_default2 = validator87;

  // src/js/numberUtils/countriesData/gt/index.ts
  var countryNumberUtils37 = {
    iso2: "GT",
    numberUtils: [
      cui_default,
      nit_default2
    ]
  };
  var gt_default = countryNumberUtils37;

  // src/js/numberUtils/countriesData/hk/hkid.ts
  function clean87(input) {
    return strings_exports.cleanUnicode(input, " -()");
  }
  var alphabet5 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var validator88 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Hong Kong Identity Card Number",
    localName: "\u9999\u6E2F\u8EAB\u4EFD\u8B49",
    abbreviation: "HKID",
    maxLength: 9,
    minLength: 7,
    countryPrefix: "HK",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean87(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean87(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean87(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8 && value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!/^[A-NP-Z]{1,2}[0-9]{6}[0-9A]$/.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = (weightedSum(front, {
        modulus: 11,
        weights: front.length === 7 ? [8, 7, 6, 5, 4, 3, 2, 1] : [9, 8, 7, 6, 5, 4, 3, 2, 1],
        alphabet: alphabet5
      }) + (front.length === 7 ? 5 : 0)) % 11;
      if (alphabet5[(11 - sum) % 11] !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var hkid_default = validator88;

  // src/js/numberUtils/countriesData/hk/index.ts
  var countryNumberUtils38 = {
    iso2: "HK",
    numberUtils: [
      hkid_default
    ]
  };
  var hk_default = countryNumberUtils38;

  // src/js/numberUtils/countriesData/hr/oib.ts
  function clean88(input) {
    return strings_exports.cleanUnicode(input, " -", "HR");
  }
  var validator89 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Croatian Personal Identification Number",
    localName: "Osobni Identifikacijski Broj",
    abbreviation: "OIB",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "HR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean88(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean88(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean88(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!iso7064mod10x11validate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var oib_default = validator89;

  // src/js/numberUtils/countriesData/hr/index.ts
  var countryNumberUtils39 = {
    iso2: "HR",
    numberUtils: [
      oib_default
    ]
  };
  var hr_default = countryNumberUtils39;

  // src/js/numberUtils/countriesData/hu/anum.ts
  function clean89(input) {
    return strings_exports.cleanUnicode(input, " -", "HU");
  }
  var validator90 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Hugarian VAT Number",
    localName: "K\xF6z\xF6ss\xE9gi Ad\xF3sz\xE1m",
    abbreviation: "ANUM",
    maxLength: 8,
    minLength: 8,
    countryPrefix: "HU",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean89(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean89(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean89(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const sum = weightedSum(value, {
        modulus: 10,
        weights: [9, 7, 3, 1, 9, 7, 3, 1]
      });
      if (sum !== 0) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: true
      };
    }
  };
  var anum_default = validator90;

  // src/js/numberUtils/countriesData/hu/index.ts
  var countryNumberUtils40 = {
    iso2: "HU",
    numberUtils: [
      anum_default
    ]
  };
  var hu_default = countryNumberUtils40;

  // src/js/numberUtils/countriesData/id/npwp.ts
  function clean90(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  var NPWP_TAX_IDENTITIES = [
    "01",
    "02",
    "21",
    "31",
    "00",
    "20",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "24",
    "25",
    "26",
    "31",
    "34",
    "35",
    "36",
    "47",
    "48",
    "49",
    "57",
    "58",
    "67",
    "77",
    "78",
    "79",
    "87",
    "88",
    "89",
    "97"
  ];
  var validator91 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Indonesian VAT Number",
    localName: "Nomor Pokok Wajib Pajak",
    abbreviation: "NPWP",
    maxLength: 15,
    minLength: 15,
    countryPrefix: "ID",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean90(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean90(input);
      if (value.length <= 2) return value;
      const [a, b, c, d, e, f] = strings_exports.splitAt(value, 2, 5, 8, 9, 12);
      return `${a}.${b}${c ? "." + c : ""}${d ? "." + d : ""}${e ? "-" + e : ""}${f ? "." + f : ""}`;
    },
    validate(input) {
      const [value, error] = clean90(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 15) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!NPWP_TAX_IDENTITIES.includes(value.substring(0, 2))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!luhnChecksumValidate(value.substring(0, 9))) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: true
      };
    }
  };
  var npwp_default = validator91;

  // src/js/numberUtils/countriesData/id/index.ts
  var countryNumberUtils41 = {
    iso2: "ID",
    numberUtils: [
      npwp_default
    ]
  };
  var id_default = countryNumberUtils41;

  // src/js/numberUtils/countriesData/ie/vat.ts
  function clean91(input) {
    return strings_exports.cleanUnicode(input, " ", "IE");
  }
  var ALPHABET2 = "WABCDEFGHIJKLMNOPQRSTUV";
  function calcCheckDigit2(valueIn) {
    const value = valueIn.padStart(7, "0");
    const d1 = value.substring(0, 7).split("").reduce((acc, vv, idx) => {
      const v = Number.parseInt(vv, 10);
      return acc + (8 - idx) * v;
    }, 0);
    const d2 = value.length === 8 ? 9 * ALPHABET2.indexOf(value[7]) : 0;
    return ALPHABET2[(d1 + d2) % 23];
  }
  var validator92 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Irish VAT Number",
    localName: "C\xE1in Bhreisluacha",
    abbreviation: "CBL",
    maxLength: 9,
    minLength: 8,
    countryPrefix: "IE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean91(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean91(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean91(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8 && value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value[0]) || !strings_exports.isDigits(value.substring(2, 5))) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, end] = strings_exports.splitAt(value, 7);
      if (!end.split("").every((v) => ALPHABET2.includes(v))) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (strings_exports.isDigits(front)) {
        if (value[7] !== calcCheckDigit2(`${front}${value.substring(8)}`)) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      } else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".includes(value[1])) {
        if (value[7] !== calcCheckDigit2(`${value.substring(2, 7)}${value[0]}`)) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      } else {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var vat_default8 = validator92;

  // src/js/numberUtils/countriesData/ie/pps.ts
  function clean92(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var ppsRe = /^\d{7}[A-W][AHWTX]?$/;
  var validator93 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Irish Personal Number",
    localName: "Personal Public Service Number",
    abbreviation: "PPS",
    maxLength: 9,
    minLength: 8,
    countryPrefix: "IE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean92(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean92(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean92(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8 && value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!ppsRe.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value.length === 9 && "AH".includes(value[8])) {
        if (value[7] !== calcCheckDigit2(`${value.substring(0, 7)}${value.substring(8)}`)) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      } else if (value[7] !== calcCheckDigit2(value.substring(0, 7))) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var pps_default = validator93;

  // src/js/numberUtils/countriesData/ie/index.ts
  var countryNumberUtils42 = {
    iso2: "IE",
    numberUtils: [
      pps_default,
      vat_default8
    ]
  };
  var ie_default = countryNumberUtils42;

  // src/js/numberUtils/countriesData/il/hp.ts
  function clean93(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator94 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Israeli Company Number",
    localName: "\u05DE\u05E1\u05E4\u05E8 \u05D7\u05D1\u05E8\u05D4",
    abbreviation: "\u05D7.\u05E4.",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "IL",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean93(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean93(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean93(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value[0] !== "5") {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!luhnChecksumValidate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var hp_default = validator94;

  // src/js/numberUtils/countriesData/il/idnr.ts
  function clean94(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator95 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Israeli Identify Number",
    localName: "Mispar Zehut, \u05DE\u05E1\u05E4\u05E8 \u05D6\u05D4\u05D5\u05EA",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "IL",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean94(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean94(input);
      return strings_exports.splitAt(value, -1).join("-");
    },
    validate(input) {
      const [value, error] = clean94(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length > 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!luhnChecksumValidate(value.padStart(9, "0"))) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var idnr_default2 = validator95;

  // src/js/numberUtils/countriesData/il/index.ts
  var countryNumberUtils43 = {
    iso2: "IL",
    numberUtils: [
      hp_default,
      idnr_default2
    ]
  };
  var il_default = countryNumberUtils43;

  // src/js/numberUtils/countriesData/in/aadhaar.ts
  function clean95(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator96 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Indian Digital Resident Personal Identity Number",
    localName: "Aadhaar",
    maxLength: 12,
    minLength: 12,
    countryPrefix: "IN",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean95(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean95(input);
      return strings_exports.splitAt(value, 4, 8).join(" ");
    },
    validate(input) {
      const [value, error] = clean95(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 12) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value[0] === "0" || value[0] === "1") {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value.split("").reverse().join("") === value) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!verhoeffValidate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var aadhaar_default = validator96;

  // src/js/numberUtils/countriesData/in/epic.ts
  function clean96(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validRe5 = /^[A-Z]{3}[0-9]{7}$/;
  var validator97 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Electoral Photo Identity Card",
    localName: "",
    abbreviation: "EPIC",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "IN",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean96(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean96(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean96(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!validRe5.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [, front] = strings_exports.splitAt(value, 3);
      if (!luhnChecksumValidate(front)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var epic_default = validator97;

  // src/js/numberUtils/countriesData/in/pan.ts
  function clean97(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var PAN_HOLDER_TYPES = {
    A: "Association of Persons (AOP)",
    B: "Body of Individuals (BOI)",
    C: "Company",
    F: "Firm/Limited Liability Partnership",
    G: "Government Agency",
    H: "Hindu Undivided Family (HUF)",
    L: "Local Authority",
    J: "Artificial Juridical Person",
    P: "Individual",
    T: "Trust",
    K: "Krish (Trust Krish)"
  };
  var VALID_PAN_HOLDERS = Object.keys(PAN_HOLDER_TYPES);
  var validator98 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Indian Income Tax Identifier",
    localName: "Permanent Account Number",
    abbreviation: "PAN",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "IN",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean97(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean97(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean97(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!VALID_PAN_HOLDERS.includes(value[3])) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [, foo] = strings_exports.splitAt(value, 5, 9);
      if (foo === "0000") {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var pan_default = validator98;

  // src/js/numberUtils/countriesData/in/gstin.ts
  function clean98(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validRe6 = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]{3}$/;
  var ALPHABET3 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var STATE_CODES = {
    "01": "Jammu and Kashmir",
    "02": "Himachal Pradesh",
    "03": "Punjab",
    "04": "Chandigarh",
    "05": "Uttarakhand",
    "06": "Haryana",
    "07": "Delhi",
    "08": "Rajasthan",
    "09": "Uttar Pradesh",
    "10": "Bihar",
    "11": "Sikkim",
    "12": "Arunachal Pradesh",
    "13": "Nagaland",
    "14": "Manipur",
    "15": "Mizoram",
    "16": "Tripura",
    "17": "Meghalaya",
    "18": "Assam",
    "19": "West Bengal",
    "20": "Jharkhand",
    "21": "Orissa",
    "22": "Chattisgarh",
    "23": "Madhya Pradesh",
    "24": "Gujarat",
    "25": "Daman and Diu",
    "26": "Dadar and Nagar Haveli",
    "27": "Maharashtra",
    "28": "Andhra Pradesh",
    "29": "Karnataka",
    "30": "Goa",
    "31": "Lakshadweep",
    "32": "Kerala",
    "33": "Tamil Nadu",
    "34": "Puducherry",
    "35": "Anadaman and Nicobar Islands",
    "36": "Telangana",
    "37": "Andhra Pradesh (New)"
  };
  var VALID_STATE_CODES = Object.keys(STATE_CODES);
  var validator99 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Indian VAT Number",
    localName: "Goods and Services Tax Identification Number",
    abbreviation: "GSTIN",
    maxLength: 15,
    minLength: 15,
    countryPrefix: "IN",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean98(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean98(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean98(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 15) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!validRe6.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [state, panValue] = strings_exports.splitAt(value, 2, 12);
      if (!VALID_STATE_CODES.includes(state)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (value[12] === "0" || value[13] !== "Z") {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!pan_default.validate(panValue).isValid) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [first, check] = strings_exports.splitAt(value, -1);
      const sum = first.split("").map((char, index) => {
        const product = ALPHABET3.indexOf(char) * (index % 2 !== 0 ? 2 : 1);
        return Math.floor(product / ALPHABET3.length) + product % ALPHABET3.length;
      }).reduce((prev, current) => {
        return prev + current;
      });
      const checksum2 = (ALPHABET3.length - sum % ALPHABET3.length) % ALPHABET3.length;
      if (ALPHABET3[checksum2] !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var gstin_default = validator99;

  // src/js/numberUtils/countriesData/in/index.ts
  var countryNumberUtils44 = {
    iso2: "IN",
    numberUtils: [
      aadhaar_default,
      epic_default,
      gstin_default,
      pan_default
    ]
  };
  var in_default = countryNumberUtils44;

  // src/js/numberUtils/countriesData/is/kennitala.ts
  function clean99(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator100 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Icelandic Identity Code",
    localName: "Kennitala",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "IS",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean99(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean99(input);
      return strings_exports.splitAt(value, 6).join("-");
    },
    validate(input) {
      const [value, error] = clean99(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [dd, mm, yy, , centry] = strings_exports.splitAt(value, 2, 4, 6, 9);
      const dayValue = parseInt(dd, 10);
      const isOrg = dayValue > 40;
      const day = dayValue > 40 ? String(dayValue - 40).padStart(2, "0") : dd;
      const year = centry === "9" ? `19${yy}` : `20${yy}`;
      if (!isValidDate(year, mm, day)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const sum = weightedSum(value, {
        modulus: 11,
        weights: [3, 2, 7, 6, 5, 4, 3, 2, 1, 0]
      });
      if (sum !== 0) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: !isOrg,
        isCompany: isOrg
      };
    }
  };
  var kennitala_default = validator100;

  // src/js/numberUtils/countriesData/is/vsk.ts
  function clean100(input) {
    return strings_exports.cleanUnicode(input, " -", "IS");
  }
  var validator101 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Icelandic VAT Number",
    localName: "Vir\xF0isaukaskattsn\xFAmer",
    abbreviation: "VSK",
    maxLength: 6,
    minLength: 5,
    countryPrefix: "IS",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean100(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean100(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean100(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 5 && value.length !== 6) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var vsk_default = validator101;

  // src/js/numberUtils/countriesData/is/index.ts
  var countryNumberUtils45 = {
    iso2: "IS",
    numberUtils: [
      kennitala_default,
      vsk_default
    ]
  };
  var is_default = countryNumberUtils45;

  // src/js/numberUtils/countriesData/it/aic.ts
  function clean101(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var alphabet6 = "0123456789BCDFGHJKLMNPQRSTUVWXYZ";
  var validator102 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Italian Code for Identification of Drugs",
    localName: "Autorizzazione all\u2019Immissione in Commercio",
    abbreviation: "AIC",
    maxLength: 9,
    minLength: 6,
    countryPrefix: "IT",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean101(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean101(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean101(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 6 && value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      let base10 = value;
      if (value.length === 6) {
        const chars = value.split("");
        if (!chars.every((v) => alphabet6.includes(v))) {
          return { isValid: false, error: new InvalidFormat() };
        }
        base10 = String(
          chars.reverse().reduce((acc, v, idx) => acc + alphabet6.indexOf(v) * 32 ** idx, 0)
        ).padStart(9, "0");
      }
      if (!strings_exports.isDigits(base10)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, end] = strings_exports.splitAt(base10, -1);
      const sum = front.split("").map((v) => parseInt(v, 10)).reduce((acc, v, idx) => {
        const vv = v * (idx % 2 + 1);
        return acc + Math.floor(vv / 10) + vv % 10;
      }, 0);
      if (String(sum % 10) !== end) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: false
      };
    }
  };
  var aic_default = validator102;

  // src/js/numberUtils/countriesData/it/codicefiscale.ts
  var checkRe = /^[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST]{1}[0-9LMNPQRSTUV]{2}[A-Z]{1}[0-9LMNPQRSTUV]{3}[A-Z]{1}$/;
  var CHECK_CODE_ODD = {
    0: 1,
    1: 0,
    2: 5,
    3: 7,
    4: 9,
    5: 13,
    6: 15,
    7: 17,
    8: 19,
    9: 21,
    A: 1,
    B: 0,
    C: 5,
    D: 7,
    E: 9,
    F: 13,
    G: 15,
    H: 17,
    I: 19,
    J: 21,
    K: 2,
    L: 4,
    M: 18,
    N: 20,
    O: 11,
    P: 3,
    Q: 6,
    R: 8,
    S: 12,
    T: 14,
    U: 16,
    V: 10,
    W: 22,
    X: 25,
    Y: 24,
    Z: 23
  };
  var CHECK_CODE_EVEN = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25
  };
  var CHECK_CODE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function clean102(input) {
    return strings_exports.cleanUnicode(input, " -:");
  }
  var validator103 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Italian Tax Code",
    localName: "Codice Fiscale",
    abbreviation: "CF",
    maxLength: 16,
    minLength: 16,
    countryPrefix: "IT",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean102(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean102(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean102(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 16) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!checkRe.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = front.split("").reduce(
        (acc, v, idx) => (acc + (idx % 2 === 1 ? CHECK_CODE_EVEN[v] : CHECK_CODE_ODD[v])) % 26,
        0
      );
      if (CHECK_CODE_CHARS[sum] !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var codicefiscale_default = validator103;

  // src/js/numberUtils/countriesData/it/iva.ts
  function clean103(input) {
    return strings_exports.cleanUnicode(input, " -:", "IT");
  }
  var validator104 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Italian VAT Number",
    localName: "Partita Imposta sul Valore Aggiunto",
    abbreviation: "P.IVA",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "IT",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean103(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean103(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean103(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const code = parseInt(value.substring(7, 10), 10);
      if (!(code >= 1 && code <= 100) && ![120, 121, 888, 999].includes(code)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!luhnChecksumValidate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var iva_default = validator104;

  // src/js/numberUtils/countriesData/it/index.ts
  var countryNumberUtils46 = {
    iso2: "IT",
    numberUtils: [
      aic_default,
      codicefiscale_default,
      iva_default
    ]
  };
  var it_default = countryNumberUtils46;

  // src/js/numberUtils/countriesData/jp/cn.ts
  function clean104(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator105 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Japanese Corporate Number",
    localName: "\u6CD5\u4EBA\u756A\u53F7 (h\u014Djin bang\u014D)",
    abbreviation: "CN",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "JP",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean104(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean104(input);
      return strings_exports.splitAt(value, 1, 5, 9).join("-");
    },
    validate(input) {
      const [value, error] = clean104(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [check, rest] = strings_exports.splitAt(value, 1);
      const sum = weightedSum(rest, {
        modulus: 9,
        reverse: true,
        weights: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
      });
      if (String(9 - sum) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var cn_default2 = validator105;

  // src/js/numberUtils/countriesData/jp/index.ts
  var countryNumberUtils47 = {
    iso2: "JP",
    numberUtils: [
      cn_default2
    ]
  };
  var jp_default = countryNumberUtils47;

  // src/js/numberUtils/countriesData/ke/pin.ts
  function clean105(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validRe7 = /^[A|P]{1}[0-9]{9}[A-Z]{1}$/i;
  var validator106 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Personal Identification Number",
    localName: "",
    abbreviation: "PIN",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "KE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean105(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean105(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean105(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!validRe7.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: value[0] === "A",
        isCompany: value[0] === "P"
      };
    }
  };
  var pin_default2 = validator106;

  // src/js/numberUtils/countriesData/ke/index.ts
  var countryNumberUtils48 = {
    iso2: "KE",
    numberUtils: [
      pin_default2
    ]
  };
  var ke_default = countryNumberUtils48;

  // src/js/numberUtils/countriesData/kr/brn.ts
  function clean106(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator107 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "South Korean Business Registration Number",
    localName: "\uC0AC\uC5C5\uC790 \uB4F1\uB85D \uBC88\uD638",
    abbreviation: "BRN",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "KR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean106(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean106(input);
      return strings_exports.splitAt(value, 3, 5).join("-");
    },
    /**
     * BRN (사업자 등록 번호, South Korea Business Registration Number).
     */
    validate(input) {
      const [value, error] = clean106(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [head, mid, end, check] = strings_exports.splitAt(value, 3, 5, 9);
      if (parseInt(head, 10) < 101) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (mid === "00") {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (end === "0000") {
        return { isValid: false, error: new InvalidComponent() };
      }
      const sum = weightedSum(value.substring(0, 9), {
        modulus: 10,
        weights: [1, 3, 7, 1, 3, 7, 1, 3, 5]
      });
      const extra = Math.floor(parseInt(end[3], 10) * 5 / 10);
      if (String((10 - (sum + extra) % 10) % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var brn_default = validator107;

  // src/js/numberUtils/countriesData/kr/rrn.ts
  function clean107(input) {
    return strings_exports.cleanUnicode(input, " -/");
  }
  var centuryPrefix = {
    0: 18,
    1: 19,
    2: 19,
    3: 20,
    4: 20,
    5: 19,
    6: 19,
    7: 20,
    8: 20,
    9: 18
  };
  var validator108 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "South Korean Resident Registration Number",
    localName: "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638",
    abbreviation: "RRN",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "KR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean107(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean107(input);
      return strings_exports.splitAt(value, 6).join("-");
    },
    validate(input) {
      const [value, error] = clean107(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [dob, century2, place, , check] = strings_exports.splitAt(value, 6, 7, 9, 12);
      if (!isValidDateCompactYYYYMMDD(`${centuryPrefix[century2]}${dob}`, true)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (parseInt(place, 10) > 96) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const sum = weightedSum(value.substring(0, 12), {
        modulus: 11,
        weights: [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5]
      });
      if (String((11 - sum) % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var rrn_default = validator108;

  // src/js/numberUtils/countriesData/kr/index.ts
  var countryNumberUtils49 = {
    iso2: "KR",
    numberUtils: [
      brn_default,
      rrn_default
    ]
  };
  var kr_default = countryNumberUtils49;

  // src/js/numberUtils/countriesData/li/peid.ts
  function clean108(input) {
    const [value, error] = strings_exports.cleanUnicode(input, " .");
    if (error) {
      return [value, error];
    }
    return [value.replace(/^0+/, ""), null];
  }
  var validator109 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Liechtenstein Tax Code",
    localName: "Personenidentifikationsnummer",
    abbreviation: "PEID",
    maxLength: 12,
    minLength: 4,
    countryPrefix: "LI",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean108(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean108(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean108(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length < 4 || value.length > 12) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: true
      };
    }
  };
  var peid_default = validator109;

  // src/js/numberUtils/countriesData/li/index.ts
  var countryNumberUtils50 = {
    iso2: "LI",
    numberUtils: [
      peid_default
    ]
  };
  var li_default = countryNumberUtils50;

  // src/js/numberUtils/countriesData/lk/nic.ts
  function clean109(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator110 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Sri Lankan National Identity Card Number",
    localName: "NIC Number",
    maxLength: 12,
    minLength: 10,
    countryPrefix: "LK",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean109(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean109(input);
      return value.toLowerCase();
    },
    validate(input) {
      const [value, error] = clean109(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10 && value.length !== 12) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!/^[\d]{9}[vVxX]$|^[\d]{12}$/.test(value)) {
        return { isValid: false, error: new InvalidFormat("Invalid NIC format") };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var nic_default = validator110;

  // src/js/numberUtils/countriesData/lk/index.ts
  var countryNumberUtils51 = {
    iso2: "LK",
    numberUtils: [
      nic_default
    ]
  };
  var lk_default = countryNumberUtils51;

  // src/js/numberUtils/countriesData/lt/asmens.ts
  function clean110(input) {
    return strings_exports.cleanUnicode(input, " -/");
  }
  var validator111 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Lithuanian Personal Code",
    localName: "Asmens Kodas",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "LT",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean110(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean110(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean110(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value[0] !== "9" && !ikCheckDate(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!ikCheck(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var asmens_default = validator111;

  // src/js/numberUtils/countriesData/lt/pvm.ts
  function clean111(input) {
    return strings_exports.cleanUnicode(input, " -", "LT");
  }
  var validator112 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Lithuanian VAT Number",
    localName: "Prid\u0117tin\u0117s Vert\u0117s Mokestis Mok\u0117tojo Kodas",
    abbreviation: "PVM Kodas",
    maxLength: 12,
    minLength: 9,
    countryPrefix: "LT",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean111(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean111(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean111(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9 && value.length !== 12) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value.length === 9 && value[7] !== "1") {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (value.length === 12 && value[10] !== "1") {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!ikCheck(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var pvm_default = validator112;

  // src/js/numberUtils/countriesData/lt/index.ts
  var countryNumberUtils52 = {
    iso2: "LT",
    numberUtils: [
      asmens_default,
      pvm_default
    ]
  };
  var lt_default = countryNumberUtils52;

  // src/js/numberUtils/countriesData/lu/tva.ts
  function clean112(input) {
    return strings_exports.cleanUnicode(input, " :-.", "LU");
  }
  var validator113 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Luxembourgian VAT Number",
    localName: "Num\xE9ro d'Identification \xE0 la Taxe sur la Valeur Ajout\xE9e",
    abbreviation: "n\xB0 TVA",
    maxLength: 8,
    minLength: 8,
    countryPrefix: "LU",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean112(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean112(input);
      return strings_exports.splitAt(value, 3, 6).join(" ");
    },
    validate(input) {
      const [value, error] = clean112(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -2);
      if (parseInt(front, 10) % 89 !== parseInt(check, 10)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var tva_default2 = validator113;

  // src/js/numberUtils/countriesData/lu/index.ts
  var countryNumberUtils53 = {
    iso2: "LU",
    numberUtils: [
      tva_default2
    ]
  };
  var lu_default = countryNumberUtils53;

  // src/js/numberUtils/countriesData/lv/pvn.ts
  function clean113(input) {
    return strings_exports.cleanUnicode(input, " -", "LV");
  }
  var validator114 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Latvian VAT Number",
    localName: "Pievienot\u0101s V\u0113rt\u012Bbas Nodok\u013Ca",
    abbreviation: "PVN",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "LV",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean113(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean113(input);
      if ("0123".includes(value[0])) {
        return strings_exports.splitAt(value, 6).join("-");
      }
      return strings_exports.splitAt(value, 4, 8).join(" ");
    },
    validate(input) {
      const [value, error] = clean113(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const isIndividual = "0123".includes(value[0]);
      if (isIndividual) {
        const [dd, mm, yy, century2] = strings_exports.splitAt(value, 2, 4, 6, 7);
        if (!isValidDate(`${18 + parseInt(century2, 10)}${yy}`, mm, dd, true)) {
          return { isValid: false, error: new InvalidComponent() };
        }
        const [front, check] = strings_exports.splitAt(value, -1);
        const sum = 1 + weightedSum(front, {
          weights: [10, 5, 8, 4, 2, 1, 6, 3, 7, 9],
          modulus: 11
        });
        if (String(sum % 11 % 10) !== check) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      } else {
        const sum = weightedSum(value, {
          weights: [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1],
          modulus: 11
        });
        if (sum !== 3) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      }
      return {
        isValid: true,
        compact: value,
        isIndividual,
        isCompany: !isIndividual
      };
    }
  };
  var pvn_default = validator114;

  // src/js/numberUtils/countriesData/lv/index.ts
  var countryNumberUtils54 = {
    iso2: "LV",
    numberUtils: [
      pvn_default
    ]
  };
  var lv_default = countryNumberUtils54;

  // src/js/numberUtils/countriesData/ma/ice.ts
  function clean114(input) {
    return strings_exports.cleanUnicode(input, " -/");
  }
  var validator115 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Moroccan Company Establishment Identification Number",
    localName: "Identifiant Commun de l'Entreprises",
    abbreviation: "ICE",
    maxLength: 15,
    minLength: 15,
    countryPrefix: "MA",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean114(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean114(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean114(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 15) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!mod97base10Validate(value, 0)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var ice_default = validator115;

  // src/js/numberUtils/countriesData/ma/ice9.ts
  function clean115(input) {
    return strings_exports.cleanUnicode(input, " .");
  }
  var validator116 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Moroccan Company Number",
    localName: "Numero d'Entreprise",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "MA",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean115(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean115(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean115(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var ice9_default = validator116;

  // src/js/numberUtils/countriesData/ma/index.ts
  var countryNumberUtils55 = {
    iso2: "MA",
    numberUtils: [
      ice_default,
      ice9_default
    ]
  };
  var ma_default = countryNumberUtils55;

  // src/js/numberUtils/countriesData/mc/tva.ts
  function clean116(input) {
    return strings_exports.cleanUnicode(input, " ", "FR");
  }
  var validator117 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Monacan VAT Number",
    localName: "Num\xE9ro d'Identification \xE0 la Taxe sur la Valeur Ajout\xE9e",
    abbreviation: "n\xB0 TVA",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "MC",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean116(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean116(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean116(input);
      if (error) {
        return { isValid: false, error };
      }
      const r = tva_default.validate(value);
      if (!r.isValid) {
        return r;
      }
      if (value.substring(2, 5) !== "000") {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var tva_default3 = validator117;

  // src/js/numberUtils/countriesData/mc/index.ts
  var countryNumberUtils56 = {
    iso2: "MC",
    numberUtils: [
      tva_default3
    ]
  };
  var mc_default = countryNumberUtils56;

  // src/js/numberUtils/countriesData/md/idno.ts
  function clean117(input) {
    return strings_exports.cleanUnicode(input, " -/");
  }
  var validator118 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Moldavian Company Identification Number",
    localName: "Unique State Identification Number",
    abbreviation: "IDNO",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "MD",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean117(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean117(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean117(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = weightedSum(front, {
        weights: [7, 3, 1, 7, 3, 1, 7, 3, 1, 7, 3, 1],
        modulus: 10
      });
      if (String(sum) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var idno_default = validator118;

  // src/js/numberUtils/countriesData/md/index.ts
  var countryNumberUtils57 = {
    iso2: "MD",
    numberUtils: [
      idno_default
    ]
  };
  var md_default = countryNumberUtils57;

  // src/js/numberUtils/countriesData/me/jmbg.ts
  var validator119 = {
    ...jmbg_default,
    name: "Montenegrin Unique Master Citizen Number",
    localName: "\u0408\u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u0438 \u043C\u0430\u0442\u0438\u0447\u043D\u0438 \u0431\u0440\u043E\u0458 \u0433\u0440\u0430\u0452\u0430\u043D\u0430",
    abbreviation: "\u0408\u041C\u0411\u0413",
    countryPrefix: "ME"
  };
  var jmbg_default2 = validator119;

  // src/js/numberUtils/countriesData/me/pib.ts
  function clean118(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator120 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Montenegro tax number",
    localName: "Poreski Identifikacioni Broj",
    abbreviation: "PIB",
    maxLength: 8,
    minLength: 8,
    countryPrefix: "ME",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean118(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean118(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean118(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, 7);
      const sum = weightedSum(front, {
        weights: [8, 7, 6, 5, 4, 3, 2],
        modulus: 11
      });
      if (String((11 - sum) % 11 % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var pib_default = validator120;

  // src/js/numberUtils/countriesData/me/index.ts
  var countryNumberUtils58 = {
    iso2: "ME",
    numberUtils: [
      jmbg_default2,
      pib_default
    ]
  };
  var me_default = countryNumberUtils58;

  // src/js/numberUtils/countriesData/mk/edb.ts
  function clean119(input) {
    return strings_exports.cleanUnicode(input, " -", ["MK", "\u041C\u041A"]);
  }
  var validator121 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "NAME",
    localName: "NAME",
    abbreviation: "EDB",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "MK",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean119(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean119(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean119(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, 12);
      const sum = (11 - weightedSum(front, {
        weights: [7, 6, 5, 4, 3, 2],
        modulus: 11
      })) % 11;
      if (String(sum % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: false
      };
    }
  };
  var edb_default = validator121;

  // src/js/numberUtils/countriesData/mk/jmbg.ts
  var validator122 = {
    ...jmbg_default,
    name: "Macedonian Unique Master Citizen Number",
    localName: "\u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D \u043C\u0430\u0442\u0438\u0447\u0435\u043D \u0431\u0440\u043E\u0458 \u043D\u0430 \u0433\u0440\u0430\u0453\u0430\u043D\u0438\u043D\u043E\u0442",
    abbreviation: "\u0415\u041C\u0411\u0413",
    countryPrefix: "MK"
  };
  var jmbg_default3 = validator122;

  // src/js/numberUtils/countriesData/mk/index.ts
  var countryNumberUtils59 = {
    iso2: "MK",
    numberUtils: [
      edb_default,
      jmbg_default3
    ]
  };
  var mk_default = countryNumberUtils59;

  // src/js/numberUtils/countriesData/mt/vat.ts
  function clean120(input) {
    return strings_exports.cleanUnicode(input, " -", "MT");
  }
  var validator123 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Maltese VAT Number",
    localName: "Vat Reg. No.",
    abbreviation: "Vat No.",
    maxLength: 8,
    minLength: 8,
    countryPrefix: "MT",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean120(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean120(input);
      return strings_exports.splitAt(value, 4).join("-");
    },
    validate(input) {
      const [value, error] = clean120(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const sum = weightedSum(value, {
        weights: [3, 4, 6, 7, 8, 9, 10, 1],
        modulus: 37
      });
      if (sum !== 0) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var vat_default9 = validator123;

  // src/js/numberUtils/countriesData/mt/index.ts
  var countryNumberUtils60 = {
    iso2: "MT",
    numberUtils: [
      vat_default9
    ]
  };
  var mt_default = countryNumberUtils60;

  // src/js/numberUtils/countriesData/mu/nid.ts
  var ALPHABET4 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nidRe = /^[A-Z][0-9]+[0-9A-Z]$/;
  function clean121(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator124 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Mauritian National Identifier",
    localName: "National Identifier",
    abbreviation: "NID",
    maxLength: 14,
    minLength: 14,
    countryPrefix: "MU",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean121(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean121(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean121(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 14) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!nidRe.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = weightedSum(front, {
        weights: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        alphabet: ALPHABET4,
        modulus: 17
      });
      if (ALPHABET4[17 - sum] !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var nid_default = validator124;

  // src/js/numberUtils/countriesData/mu/index.ts
  var countryNumberUtils61 = {
    iso2: "MU",
    numberUtils: [
      nid_default
    ]
  };
  var mu_default = countryNumberUtils61;

  // src/js/numberUtils/countriesData/mx/banks.ts
  var banksMap = {
    // source: https://es.wikipedia.org/wiki/CLABE#C.C3.B3digo_de_banco (Jan 9, 2017)
    2: { tag: "BANAMEX", name: "Banco Nacional de M\xE9xico, S.A." },
    6: { tag: "BANCOMEXT", name: "Banco Nacional de Comercio Exterior" },
    9: { tag: "BANOBRAS", name: "Banco Nacional de Obras y Servicios P\xFAblicos" },
    12: { tag: "BBVA BANCOMER", name: "BBVA Bancomer, S.A." },
    14: { tag: "SANTANDER", name: "Banco Santander, S.A." },
    19: {
      tag: "BANJERCITO",
      name: "Banco Nacional del Ej\xE9rcito, Fuerza A\xE9rea y Armada"
    },
    21: { tag: "HSBC", name: "HSBC M\xE9xico, S.A." },
    22: { tag: "GE MONEY", name: "GE Money Bank, S.A." },
    30: { tag: "BAJ\xCDO", name: "Banco del Baj\xEDo, S.A." },
    32: { tag: "IXE", name: "IXE Banco, S.A." },
    36: { tag: "INBURSA", name: "Banco Inbursa, S.A." },
    37: { tag: "INTERACCIONES", name: "Banco Interacciones, S.A." },
    42: { tag: "MIFEL", name: "Banca Mifel, S.A." },
    44: { tag: "SCOTIABANK", name: "Scotiabank Inverlat, S.A." },
    58: { tag: "BANREGIO", name: "Banco Regional de Monterrey, S.A." },
    59: { tag: "INVEX", name: "Banco Invex, S.A." },
    60: { tag: "BANSI", name: "Bansi, S.A." },
    62: { tag: "AFIRME", name: "Banca Afirme, S.A." },
    72: { tag: "BANORTE", name: "Banco Mercantil del Norte, S.A." },
    102: { tag: "ABNAMRO", name: "ABN AMRO Bank M\xE9xico, S.A." },
    103: {
      tag: "AMERICAN EXPRESS",
      name: "American Express Bank (M\xE9xico), S.A."
    },
    106: { tag: "BAMSA", name: "Bank of America M\xE9xico, S.A." },
    108: { tag: "TOKYO", name: "Bank of Tokyo-Mitsubishi UFJ (M\xE9xico), S.A." },
    110: { tag: "JP MORGAN", name: "Banco J.P. Morgan, S.A." },
    112: { tag: "BMONEX", name: "Banco Monex, S.A." },
    113: { tag: "VE POR MAS", name: "Banco Ve por Mas, S.A." },
    116: { tag: "ING", name: "ING Bank (M\xE9xico), S.A." },
    124: { tag: "DEUTSCHE", name: "Deutsche Bank M\xE9xico, S.A." },
    126: { tag: "CREDIT SUISSE", name: "Banco Credit Suisse (M\xE9xico), S.A." },
    127: { tag: "AZTECA", name: "Banco Azteca, S.A." },
    128: { tag: "AUTOFIN", name: "Banco Autofin M\xE9xico, S.A." },
    129: { tag: "BARCLAYS", name: "Barclays Bank M\xE9xico, S.A." },
    130: { tag: "COMPARTAMOS", name: "Banco Compartamos, S.A." },
    131: { tag: "FAMSA", name: "Banco Ahorro Famsa, S.A." },
    132: { tag: "BMULTIVA", name: "Banco Multiva, S.A." },
    133: { tag: "PRUDENTIAL", name: "Prudencial Bank, S.A." },
    134: { tag: "WAL-MART", name: "Banco Wal Mart de M\xE9xico Adelante, S.A." },
    135: { tag: "NAFIN", name: "Nacional Financiera, S.N.C." },
    136: { tag: "REGIONAL", name: "Banco Regional, S.A." },
    137: { tag: "BANCOPPEL", name: "BanCoppel, S.A." },
    138: { tag: "ABC CAPITAL", name: "ABC Capital, S.A. I.B.M." },
    139: { tag: "UBS BANK", name: "UBS Banco, S.A." },
    140: { tag: "F\xC1CIL", name: "Banco F\xE1cil, S.A." },
    141: {
      tag: "VOLKSWAGEN",
      name: "Volkswagen Bank S.A. Instituci\xF3n de Banca M\xFAltiple"
    },
    143: { tag: "CIBANCO", name: "Consultor\xEDa Internacional Banco, S.A." },
    145: { tag: "BBASE", name: "Banco BASE, S.A. de I.B.M." },
    147: {
      tag: "BANKAOOL",
      name: "Bankaool, S.A., Instituci\xF3n de Banca M\xFAltiple"
    },
    148: {
      tag: "PAGATODO",
      name: "Banco PagaTodo S.A., Instituci\xF3n de Banca M\xFAltiple"
    },
    150: {
      tag: "BIM",
      name: "Banco Inmobiliario Mexicano, S.A., Instituci\xF3n de Banca M\xFAltiple"
    },
    152: {
      tag: "BANCREA",
      name: "Banco Bancrea, S.A., Instituci\xF3n de Banca M\xFAltiple"
    },
    156: { tag: "SABADELL", name: "Banco Sabadell, S.A. I.B.M." },
    166: {
      tag: "BANSEFI",
      name: "Banco del Ahorro Nacional y Servicios Financieros, S.N.C."
    },
    168: {
      tag: "HIPOTECARIA FEDERAL",
      name: "Sociedad Hipotecaria Federal, S.N.C."
    },
    600: { tag: "MONEXCB", name: "Monex Casa de Bolsa, S.A. de C.V." },
    601: { tag: "GBM", name: "GBM Grupo Burs\xE1til Mexicano, S.A. de C.V." },
    602: { tag: "MASARI CC.", name: "Masari Casa de Cambio, S.A. de C.V." },
    604: { tag: "C.B. INBURSA", name: "Inversora Burs\xE1til, S.A. de C.V." },
    605: { tag: "VALU\xC9", name: "Valu\xE9, S.A. de C.V., Casa de Bolsa" },
    606: {
      tag: "CB BASE",
      name: "Base Internacional Casa de Bolsa, S.A. de C.V."
    },
    607: { tag: "TIBER", name: "Casa de Cambio Tiber, S.A. de C.V." },
    608: { tag: "VECTOR", name: "Vector Casa de Bolsa, S.A. de C.V." },
    610: { tag: "B&B", name: "B y B Casa de Cambio, S.A. de C.V." },
    611: { tag: "INTERCAM", name: "Intercam Casa de Cambio, S.A. de C.V." },
    613: {
      tag: "MULTIVA",
      name: "Multivalores Casa de Bolsa, S.A. de C.V. Multiva Gpo. Fin."
    },
    614: {
      tag: "ACCIVAL",
      name: "Acciones y Valores Banamex, S.A. de C.V., Casa de Bolsa"
    },
    615: {
      tag: "MERRILL LYNCH",
      name: "Merrill Lynch M\xE9xico, S.A. de C.V., Casa de Bolsa"
    },
    616: { tag: "FINAMEX", name: "Casa de Bolsa Finamex, S.A. de C.V." },
    617: { tag: "VALMEX", name: "Valores Mexicanos Casa de Bolsa, S.A. de C.V." },
    618: { tag: "\xDANICA", name: "\xDAnica Casa de Cambio, S.A. de C.V." },
    619: { tag: "ASEGURADORA MAPFRE", name: "MAPFRE Tepeyac S.A." },
    620: { tag: "AFORE PROFUTURO", name: "Profuturo G.N.P., S.A. de C.V." },
    621: { tag: "CB ACTINBER", name: "Actinver Casa de Bolsa, S.A. de C.V." },
    622: { tag: "ACTINVE SI", name: "Actinver S.A. de C.V." },
    623: { tag: "SKANDIA", name: "Skandia Vida S.A. de C.V." },
    624: {
      tag: "CONSULTOR\xCDA",
      name: "Consultor\xEDa Internacional Casa de Cambio, S.A. de C.V."
    },
    626: { tag: "CBDEUTSCHE", name: "Deutsche Securities, S.A. de C.V." },
    627: { tag: "ZURICH", name: "Zurich Compa\xF1\xEDa de Seguros, S.A." },
    628: { tag: "ZURICHVI", name: "Zurich Vida, Compa\xF1\xEDa de Seguros, S.A." },
    629: {
      tag: "HIPOTECARIA SU CASITA",
      name: "Hipotecaria su Casita, S.A. de C.V."
    },
    630: { tag: "C.B. INTERCAM", name: "Intercam Casa de Bolsa, S.A. de C.V." },
    631: {
      tag: "C.B. VANGUARDIA",
      name: "Vanguardia Casa de Bolsa, S.A. de C.V."
    },
    632: { tag: "BULLTICK C.B.", name: "Bulltick Casa de Bolsa, S.A. de C.V." },
    633: { tag: "STERLING", name: "Sterling Casa de Cambio, S.A. de C.V." },
    634: {
      tag: "FINCOMUN",
      name: "Fincom\xFAn, Servicios Financieros Comunitarios, S.A. de C.V."
    },
    636: { tag: "HDI SEGUROS", name: "HDI Seguros, S.A. de C.V." },
    637: { tag: "ORDER", name: "OrderExpress Casa de Cambio , S.A. de C.V. AAC" },
    638: {
      tag: "AKALA",
      name: "Akala, S.A. de C.V., Sociedad Financiera Popular"
    },
    640: {
      tag: "JP MORGAN C.B.",
      name: "J.P. Morgan Casa de Bolsa, S.A. de C.V."
    },
    642: { tag: "REFORMA", name: "Operadora de Recursos Reforma, S.A. de C.V." },
    646: {
      tag: "STP",
      name: "Sistema de Transferencias y Pagos STP, S.A. de C.V., SOFOM E.N.R."
    },
    647: { tag: "TELECOMM", name: "Telecomunicaciones de M\xE9xico" },
    648: { tag: "EVERCORE", name: "Evercore Casa de Bolsa, S.A. de C.V." },
    649: { tag: "SKANDIA", name: "Skandia Operadora S.A. de C.V." },
    651: { tag: "SEGMTY", name: "Seguros Monterrey New York Life, S.A de C.V." },
    652: {
      tag: "ASEA",
      name: "Soluci\xF3n Asea, S.A. de C.V., Sociedad Financiera Popular"
    },
    653: { tag: "KUSPIT", name: "Kuspit Casa de Bolsa, S.A. de C.V." },
    655: { tag: "SOFIEXPRESS", name: "J.P. SOFIEXPRESS, S.A. de C.V., S.F.P." },
    656: { tag: "UNAGRA", name: "UNAGRA, S.A. de C.V., S.F.P." },
    659: {
      tag: "OPCIONES EMPRESARIALES DEL NOROESTE",
      name: "Opciones Empresariales Del Noreste, S.A. DE C.V."
    },
    670: {
      tag: "LIBERTAD",
      name: "Libertad Servicios Financieros, S.A. De C.V."
    },
    846: { tag: "STP", name: "Sistema de Transferencias y Pagos STP" },
    901: { tag: "CLS", name: "CLS Bank International" },
    902: { tag: "INDEVAL", name: "SD. INDEVAL, S.A. de C.V." },
    999: { tag: "N/A", name: "N/A" }
  };
  var citiesPairs = [
    // source: https://es.wikipedia.org/wiki/CLABE#C.C3.B3digo_de_plaza (Jan 9, 2017)
    [10, "Aguascalientes"],
    [12, "Calvillo"],
    [14, "Jes\xFAs Mar\xEDa"],
    [20, "Mexicali"],
    [22, "Ensenada"],
    [27, "Tecate"],
    [27, "Tijuana"],
    [28, "La Mesa"],
    [28, "Rosarito"],
    [28, "Tijuana [alternate]"],
    // see first occurrence at 27
    [40, "La Paz"],
    [41, "Cabo San Lucas"],
    [42, "Ciudad Constituci\xF3n"],
    [43, "Guerrero Negro"],
    [45, "San Jos\xE9 del Cabo"],
    [46, "Santa Rosal\xEDa"],
    [50, "Campeche"],
    [51, "Calkin\xED"],
    [52, "Ciudad del Carmen"],
    [53, "Champot\xF3n"],
    [60, "G\xF3mez Palacio"],
    [60, "Torre\xF3n"],
    [62, "Ciudad Acu\xF1a"],
    [68, "Monclova"],
    [71, "Nava"],
    [72, "Nueva Rosita"],
    [74, "Parras de la Fuente"],
    [75, "Piedras Negras"],
    [76, "Ramos Arizpe"],
    [77, "Sabinas"],
    [78, "Saltillo"],
    [80, "San Pedro de las Colonias"],
    [90, "Colima"],
    [95, "Manzanillo"],
    [97, "Tecom\xE1n"],
    [100, "Ter\xE1n"],
    [100, "Tuxtla Guti\xE9rrez"],
    [103, "Arriaga"],
    [107, "Cintalapa"],
    [109, "Comit\xE1n"],
    [109, "Villa Las Rosas"],
    [111, "Chiapa de Corso"],
    [113, "F. Comalapa"],
    [114, "Huixtla"],
    [123, "Ocosingo"],
    [124, "Ocozocuautla"],
    [125, "Palenque"],
    [126, "Pichucalco"],
    [127, "Pijijiapan"],
    [128, "Reforma"],
    [130, "San Crist\xF3bal de las Casas"],
    [131, "Simojovel"],
    [133, "Tapachula"],
    [135, "Tonala"],
    [137, "Venustiano Carranza"],
    [138, "Villa Flores"],
    [140, "Yajal\xF3n"],
    [150, "Chihuahua"],
    [150, "Ciudad Delicias"],
    [152, "Ciudad An\xE1huac"],
    [155, "Ciudad Camargo"],
    [158, "Ciudad Cuauht\xE9moc"],
    [161, "Ciudad Guerrero"],
    [162, "Parral"],
    [163, "Ciudad Jim\xE9nez"],
    [164, "Ciudad Ju\xE1rez"],
    [165, "Ciudad Madera"],
    [167, "El Molino de Namiquipa"],
    [168, "Nuevo Casas Grandes"],
    [180, "Atizapan"],
    [180, "Chalco"],
    [180, "Ciudad de M\xE9xico"],
    [180, "Coacalco"],
    [180, "Cuautitl\xE1n Izcalli"],
    [180, "Cuautitl\xE1n"],
    [180, "Ecatepec"],
    [180, "Huehuetoca"],
    [180, "Huixquilucan"],
    [180, "Ixtapaluca"],
    [180, "Los Reyes La Paz"],
    [180, "Naucalpan"],
    [180, "Nezahualc\xF3yotl"],
    [180, "Tecamac"],
    [180, "Teotihuac\xE1n"],
    [180, "Texcoco"],
    [180, "Tlalnepantla"],
    [190, "Durango"],
    [198, "N/A"],
    [201, "Tepehuanes"],
    [202, "Vicente Guerrero"],
    [210, "Guanajuato"],
    [211, "Abasolo"],
    [212, "Ac\xE1mbaro"],
    [213, "Apaseo el Alto"],
    [214, "Apaseo el Grande"],
    [215, "Celaya"],
    [216, "Comonfort"],
    [217, "Coroneo"],
    [218, "Cortazar"],
    [219, "Cuer\xE1maro"],
    [220, "Dolores Hidalgo"],
    [222, "Irapuato"],
    [223, "Jaral del Progreso"],
    [224, "Jer\xE9cuaro"],
    [225, "Le\xF3n"],
    [226, "Cd. Manuel Doblado"],
    [227, "Morole\xF3n"],
    [229, "P\xE9njamo"],
    [232, "Romita"],
    [233, "Salamanca"],
    [234, "Salvatierra"],
    [236, "San Felipe"],
    [237, "Pur\xEDsima de Bustos"],
    [237, "San Francisco del Rinco\xF3n"],
    [238, "San Jos\xE9 Iturbide"],
    [239, "San Luis de la Paz"],
    [240, "San Miguel Allende"],
    [244, "Silao"],
    [247, "Uriangato"],
    [248, "Valle de Santiago"],
    [249, "Yuriria"],
    [260, "Chilpancingo"],
    [261, "Acapulco"],
    [263, "Arcelia"],
    [264, "Atoyac de \xC1lvarez"],
    [266, "Ciudad Altamirano"],
    [267, "Coyuca de Ben\xEDtez"],
    [270, "Chilapa"],
    [271, "Huitzuco"],
    [272, "Iguala"],
    [272, "La Sabana"],
    [274, "Cuajinicuilapa"],
    [274, "Ometepec"],
    [275, "San Marcos"],
    [276, "Taxco"],
    [278, "Teloloapan"],
    [281, "Tlapa"],
    [282, "Ixtapa Zihuatanejo"],
    [282, "Zihuatanejo"],
    [290, "Pachuca"],
    [291, "Actopan"],
    [292, "Apam"],
    [293, "Atotonilco el Grande"],
    [294, "Ciudad Sahag\xFAn"],
    [294, "Teocaltiche"],
    [295, "Cuautepec"],
    [296, "Huejutla"],
    [297, "Huichapan"],
    [298, "Ixmiquilpan"],
    [303, "Progreso de Obreg\xF3n"],
    [305, "Tepeapulco"],
    [308, "Tizayuca"],
    [311, "Tula de Allende"],
    [312, "Tulancingo"],
    [313, "Zacualtip\xE1n"],
    [314, "Zimap\xE1n"],
    [320, "El Salto"],
    [320, "Guadalajara"],
    [320, "San Pedro Tlaquepaque"],
    [320, "Tlajomulco"],
    [320, "Tonala [alternate]"],
    // see first occurrence at 135
    [320, "Zapopan"],
    [326, "Ameca"],
    [327, "Arandas"],
    [330, "Atotonilco el Alto"],
    [331, "Atequiza"],
    [333, "Autl\xE1n"],
    [334, "Azteca"],
    [340, "Casimiro Castillo"],
    [341, "Cihuatl\xE1n"],
    [342, "Ciudad Guzm\xE1n"],
    [346, "Chapala"],
    [348, "El Grullo"],
    [355, "Ixtlahuac\xE1n del R\xEDo"],
    [356, "Jalostotitl\xE1n"],
    [357, "Jamay"],
    [361, "La Barca"],
    [362, "Lagos de Moreno"],
    [370, "Ocotl\xE1n"],
    [373, "Pihuamo"],
    [375, "Las Juntas"],
    [375, "Nuevo Vallarta"],
    [375, "Pitillal"],
    [375, "Puerto Vallarta"],
    [381, "San Juan de los Lagos"],
    [382, "N/A"],
    [384, "San Miguel el Alto"],
    [385, "San Patricio Melaque"],
    [386, "Sayula"],
    [387, "Tala"],
    [389, "Tamazula de Gordiano"],
    [391, "Tecalitl\xE1n"],
    [396, "Tepatitl\xE1n"],
    [397, "Tequila"],
    [403, "Tototl\xE1n"],
    [404, "T\xFAxpam"],
    [411, "Villa Hidalgo"],
    [413, "Zacoalco de Torres"],
    [414, "Zapotiltic"],
    [416, "Zapotlanejo"],
    [420, "Toluca"],
    [421, "Acambay"],
    [422, "Almoloya de Ju\xE1rez"],
    [424, "Amecameca"],
    [425, "Apaxco"],
    [426, "Atlacomulco"],
    [428, "Coatepec de Harinas"],
    [430, "Chicoloapan"],
    [431, "Chiconcuac"],
    [432, "El Oro"],
    [433, "Ixtapan de la Sal"],
    [434, "Ixtlahuaca"],
    [435, "Jilotepec"],
    [438, "Lerma"],
    [441, "Metepec"],
    [443, "Otumba"],
    [445, "San Mateo Atenco"],
    [446, "Tejupilco"],
    [448, "Temascaltepec"],
    [449, "Temoaya"],
    [450, "Tenancingo"],
    [451, "Tenago del Valle"],
    [453, "Santiago Tiangistenco"],
    [455, "Tultepec"],
    [456, "Tultitl\xE1n"],
    [457, "Valle de Bravo"],
    [460, "Villa Nicol\xE1s Romero"],
    [463, "Zumpango"],
    [470, "Morelia"],
    [472, "Aguililla"],
    [476, "Apatzing\xE1n"],
    [480, "Ciudad Hidalgo"],
    [483, "Cotija"],
    [484, "Cuitzeo"],
    [492, "Huetamo"],
    [493, "Jacona"],
    [494, "Jiquilpan"],
    [496, "La Piedad"],
    [497, "L\xE1zaro C\xE1rdenas"],
    [498, "Los Reyes"],
    [499, "Maravat\xEDo"],
    [501, "Nueva Italia"],
    [506, "P\xE1tzcuaro"],
    [508, "Pur\xE9pero"],
    [509, "Puruandiro"],
    [512, "Sahuayo"],
    [515, "Tac\xE1mbaro"],
    [517, "Tanganc\xEDcuaro"],
    [519, "Tepalcatepec"],
    [523, "Tlazazalca"],
    [528, "Uruapan"],
    [533, "Yur\xE9cuaro"],
    [534, "Zacapu"],
    [535, "Zamora"],
    [536, "Zinap\xE9cuaro"],
    [537, "Zit\xE1cuaro"],
    [540, "Cuernavaca"],
    [542, "Cuautla"],
    [542, "Oaxtepec, Morelos"],
    [543, "Jiutepec"],
    [544, "Jojutla"],
    [545, "Puente de Ixtla"],
    [546, "Temixco"],
    [548, "Tetecala"],
    [549, "Yautepec"],
    [552, "Zacatepec"],
    [560, "Tepic"],
    [561, "Acaponeta"],
    [562, "Ahuacatl\xE1n"],
    [564, "Compostela"],
    [566, "Ixtl\xE1n del R\xEDo"],
    [571, "San Blas"],
    [573, "Santiago Ixcuintla"],
    [575, "T\xFAxpam [alternate]"],
    // see first occurrence at 404
    [580, "Apodaca"],
    [580, "Cadereyta"],
    [580, "Cd. Guadalupe"],
    [580, "General Escobedo"],
    [580, "Monterrey"],
    [580, "San Nicol\xE1s de los Garza"],
    [580, "San Pedro Garza Garc\xEDa"],
    [580, "Santa Catarina"],
    [583, "Allende"],
    [592, "General Zuazua"],
    [595, "Linares"],
    [597, "Montemorelos"],
    [599, "Sabinas Hidalgo"],
    [600, "Salinas Victoria"],
    [601, "El Cercado"],
    [601, "Villa de Santiago"],
    [610, "Oaxaca"],
    [613, "Tlaxiaco"],
    [614, "Huajuapan de Le\xF3n"],
    [616, "Ixtepec"],
    [617, "Juchit\xE1n"],
    [619, "Loma Bonita"],
    [620, "Mat\xEDas Romero"],
    [621, "Miahuatl\xE1n"],
    [622, "Ocotl\xE1n [alternate]"],
    // see first occurrence at 370
    [624, "Puerto Escondido"],
    [626, "Salina Cruz"],
    [627, "Lagunas"],
    [628, "Tuxtepec"],
    [630, "Pochutla"],
    [631, "San Pedro Tapanatepec"],
    [632, "Santa Luc\xEDa del Camino"],
    [634, "Bah\xEDas de Huatulco"],
    [635, "Santiago Juxtlahuaca"],
    [636, "Pinotepa Nacional"],
    [637, "Tehuantepec"],
    [638, "Tlacolula"],
    [640, "Zimatl\xE1n"],
    [650, "Cholula"],
    [650, "La Resurrecci\xF3n"],
    [650, "Puebla"],
    [650, "San Baltazar Campeche"],
    [651, "N/A"],
    [652, "Acatzingo"],
    [654, "Atlixco"],
    [656, "Cuetzalan"],
    [659, "Huauchinango"],
    [660, "Huejotzingo"],
    [662, "Iz\xFAcar de Matamoros"],
    [667, "San Mart\xEDn Texmelucan"],
    [668, "San Felipe Hueyotlipan"],
    [669, "Tecamachalco"],
    [670, "Tehuac\xE1n"],
    [671, "San Lorenzo"],
    [672, "Teziutl\xE1n"],
    [674, "Xicotepec de Ju\xE1rez"],
    [676, "Zacatl\xE1n"],
    [680, "Pedro Escobedo"],
    [680, "Quer\xE9taro"],
    [680, "Villa Corregidora"],
    [681, "Amealco"],
    [685, "San Juan del R\xEDo"],
    [686, "Tequisquiapan"],
    [690, "Chetumal"],
    [691, "Canc\xFAn"],
    [691, "Col. Puerto Ju\xE1rez"],
    [692, "Cozumel"],
    [693, "N/A"],
    [694, "Playa del Carmen"],
    [700, "San Luis Potos\xED"],
    [703, "Cerritos"],
    [705, "Ciudad Valles"],
    [709, "Matehuala"],
    [711, "R\xEDo Verde"],
    [716, "Tamu\xEDn"],
    [730, "Culiac\xE1n"],
    [735, "Concordia"],
    [736, "Cosala"],
    [737, "Choix"],
    [738, "El Fuerte"],
    [739, "Escuinapa"],
    [740, "Guam\xFAchil"],
    [741, "Guasave"],
    [743, "Los Mochis"],
    [743, "Topolobampo"],
    [744, "Mazatl\xE1n"],
    [745, "Mocorito"],
    [746, "Navolato"],
    [760, "Hermosillo"],
    [761, "Agua Prieta"],
    [765, "Caborca"],
    [766, "Cananea"],
    [767, "Ciudad Obreg\xF3n"],
    [767, "Esperanza"],
    [769, "Empalme"],
    [770, "Guaymas"],
    [770, "San Carlos"],
    [771, "Huatabampo"],
    [773, "Magdalena"],
    [776, "Nacozari de Garc\xEDa"],
    [777, "Navojoa"],
    [778, "Nogales"],
    [779, "Puerto Pe\xF1asco"],
    [780, "San Luis R\xEDo Colorado"],
    [790, "Tamulte"],
    [790, "Villa Hermosa"],
    [792, "C\xE1rdenas"],
    [793, "Ciudad Pemex"],
    [794, "Comalcalco"],
    [796, "Emiliano Zapata"],
    [797, "Frontera"],
    [798, "Huimanguillo"],
    [800, "Jalpa de M\xE9ndez"],
    [802, "Macuspana"],
    [803, "Nacajuca"],
    [804, "Para\xEDso"],
    [805, "Tacotalpa"],
    [806, "Teapa"],
    [807, "Tenosique"],
    [810, "Ciudad Victoria"],
    [811, "Altamira"],
    [813, "Ciudad Madero"],
    [813, "Tampico"],
    [814, "Ciudad Mante"],
    [818, "Matamoros"],
    [821, "Colombia"],
    [821, "Nuevo Laredo"],
    [822, "Reynosa"],
    [823, "R\xEDo Bravo"],
    [825, "Soto La Marina"],
    [826, "Valle Hermoso"],
    [830, "Tlaxcala"],
    [832, "Apizaco"],
    [834, "Santa Ana Chiautempan"],
    [840, "Jalapa"],
    [841, "Acayucan"],
    [843, "Agua Dulce"],
    [845, "\xC1lamo"],
    [846, "Altotonga"],
    [848, "Banderilla"],
    [849, "Boca del R\xEDo"],
    [852, "Ciudad Mendoza"],
    [853, "Coatepec"],
    [854, "Coatzacoalcos"],
    [855, "C\xF3rdoba"],
    [856, "Cosamaloapan"],
    [860, "Cuitl\xE1huac"],
    [863, "Fort\xEDn de las Flores"],
    [864, "Guti\xE9rrez Zamora"],
    [865, "Huatusco"],
    [867, "Isla"],
    [868, "Ixtaczoquitl\xE1n"],
    [869, "J\xE1ltipan"],
    [871, "Juan Rodr\xEDguez Clara"],
    [872, "Villa Jos\xE9 Cardel"],
    [873, "Las Choapas"],
    [875, "Naranjos"],
    [876, "Mart\xEDnez de la Torre"],
    [877, "Minatitl\xE1n"],
    [878, "Misantla"],
    [879, "Nanchital"],
    [882, "Orizaba"],
    [885, "Papantla"],
    [886, "Perote"],
    [888, "Poza Rica"],
    [889, "R\xEDo Blanco"],
    [890, "San Andr\xE9s Tuxtla"],
    [891, "San Rafael"],
    [894, "Plat\xF3n S\xE1nchez"],
    [894, "Tantoyuca"],
    [895, "Tempoal"],
    [898, "Tierra Blanca"],
    [901, "Tlapacoyan"],
    [903, "T\xFAxpam de Rodr\xEDguez Cano"],
    [905, "Cd. Industrial Framboyan"],
    [905, "Veracruz"],
    [910, "M\xE9rida"],
    [913, "Motul"],
    [914, "Oxkutzcab"],
    [915, "Progreso"],
    [917, "Ticul"],
    [918, "Tizim\xEDn"],
    [920, "Valladolid"],
    [930, "Zacatecas"],
    [933, "Fresnillo"],
    [934, "Guadalupe"],
    [935, "Jalpa"],
    [936, "Jerez de G. Salinas"],
    [938, "Juchipila"],
    [939, "Loreto"],
    [946, "Nochistl\xE1n"],
    [958, "Valpara\xEDso"],
    [960, "Calera de V. Rosales"]
  ];
  var cities = citiesPairs.reduce(
    (acc, [k, v]) => ({ ...acc, [k]: v }),
    {}
  );

  // src/js/numberUtils/countriesData/mx/clabe.ts
  function clean122(input) {
    return strings_exports.cleanUnicode(input, "- ");
  }
  var validator125 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Mexican Standardized Bank Code",
    localName: "Clave Bancaria Estandarizada",
    abbreviation: "CLABE",
    maxLength: 18,
    minLength: 18,
    countryPrefix: "MX",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean122(input);
      if (err) {
        throw err;
      }
      return value.toLocaleUpperCase();
    },
    format(input, includeCountryPrefix) {
      const [value] = clean122(input);
      return value;
    },
    /**
     * Check if the number is a valid CLABE.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input) {
      const [value, error] = clean122(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 18) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [bankCode, cityCode, account, checksum2] = strings_exports.splitAt(
        value,
        3,
        6,
        17
      );
      if (banksMap[parseInt(bankCode, 10)] === void 0) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (cities[parseInt(cityCode, 10)] === void 0) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!strings_exports.isDigits(account)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const sum = (10 - weightedSum(value.substring(0, 17), {
        weights: [3, 7, 1],
        modulus: 10
      })) % 10;
      if (checksum2 !== String(sum)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: false
      };
    }
  };
  var clabe_default = validator125;

  // src/js/numberUtils/countriesData/mx/curp.ts
  function clean123(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var nameBlacklist = /* @__PURE__ */ new Set([
    "BACA",
    "BAKA",
    "BUEI",
    "BUEY",
    "CACA",
    "CACO",
    "CAGA",
    "CAGO",
    "CAKA",
    "CAKO",
    "COGE",
    "COGI",
    "COJA",
    "COJE",
    "COJI",
    "COJO",
    "COLA",
    "CULO",
    "FALO",
    "FETO",
    "GETA",
    "GUEI",
    "GUEY",
    "JETA",
    "JOTO",
    "KACA",
    "KACO",
    "KAGA",
    "KAGO",
    "KAKA",
    "KAKO",
    "KOGE",
    "KOGI",
    "KOJA",
    "KOJE",
    "KOJI",
    "KOJO",
    "KOLA",
    "KULO",
    "LILO",
    "LOCA",
    "LOCO",
    "LOKA",
    "LOKO",
    "MAME",
    "MAMO",
    "MEAR",
    "MEAS",
    "MEON",
    "MIAR",
    "MION",
    "MOCO",
    "MOKO",
    "MULA",
    "MULO",
    "NACA",
    "NACO",
    "PEDA",
    "PEDO",
    "PENE",
    "PIPI",
    "PITO",
    "POPO",
    "PUTA",
    "PUTO",
    "QULO",
    "RATA",
    "ROBA",
    "ROBE",
    "ROBO",
    "RUIN",
    "SENO",
    "TETA",
    "VACA",
    "VAGA",
    "VAGO",
    "VAKA",
    "VUEI",
    "VUEY",
    "WUEI",
    "WUEY"
  ]);
  var validStates = /* @__PURE__ */ new Set([
    "AS",
    "BC",
    "BS",
    "CC",
    "CH",
    "CL",
    "CM",
    "CS",
    "DF",
    "DG",
    "GR",
    "GT",
    "HG",
    "JC",
    "MC",
    "MN",
    "MS",
    "NE",
    "NL",
    "NT",
    "OC",
    "PL",
    "QR",
    "QT",
    "SL",
    "SP",
    "SR",
    "TC",
    "TL",
    "TS",
    "VZ",
    "YN",
    "ZS"
  ]);
  var checkAlphabet2 = "0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ";
  var checkAlphabetDict2 = checkAlphabet2.split("").reduce((acc, c, idx) => ({ ...acc, [c]: idx }), {});
  var validator126 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Mexican Personal Identification",
    localName: "Clave \xDAnica de Registro de Poblaci\xF3n",
    abbreviation: "CURP",
    maxLength: 18,
    minLength: 18,
    countryPrefix: "MX",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean123(input);
      if (err) {
        throw err;
      }
      return value.toLocaleUpperCase();
    },
    format(input, includeCountryPrefix) {
      const [value] = clean123(input);
      return value;
    },
    /**
     * Check if the number is a valid CURP number.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input) {
      const [value, error] = clean123(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 18) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!/^[A-Z]{4}[0-9]{6}[A-Z]{6}[0-9A-Z][0-9]$/.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!isValidDateCompactYYMMDD(value.substring(4, 10), true)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (nameBlacklist.has(value.substring(0, 4))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!["H", "M", "X"].includes(value[10])) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!validStates.has(value.substring(11, 13))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const check = value.substring(0, 17).split("").reduce(
        (acc, c, idx) => acc + (checkAlphabetDict2[c] ?? 0) * (18 - idx),
        0
      );
      const checkStr = String((10 - check % 10) % 10);
      if (checkStr !== value[17]) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var curp_default = validator126;

  // src/js/numberUtils/countriesData/mx/rfc.ts
  function clean124(input) {
    return strings_exports.cleanUnicode(input, "-_ ");
  }
  var nameBlacklist2 = /* @__PURE__ */ new Set([
    "BUEI",
    "BUEY",
    "CACA",
    "CACO",
    "CAGA",
    "CAGO",
    "CAKA",
    "CAKO",
    "COGE",
    "COJA",
    "COJE",
    "COJI",
    "COJO",
    "CULO",
    "FETO",
    "GUEY",
    "JOTO",
    "KACA",
    "KACO",
    "KAGA",
    "KAGO",
    "KAKA",
    "KOGE",
    "KOJO",
    "KULO",
    "MAME",
    "MAMO",
    "MEAR",
    "MEAS",
    "MEON",
    "MION",
    "MOCO",
    "MULA",
    "PEDA",
    "PEDO",
    "PENE",
    "PUTA",
    "PUTO",
    "QULO",
    "RATA",
    "RUIN"
  ]);
  var checkAlphabet3 = "0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ \xD1";
  var validator127 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Mexican Tax Number",
    localName: "Registro Federal de Contribuyentes",
    abbreviation: "RFC",
    maxLength: 13,
    minLength: 10,
    countryPrefix: "MX",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean124(input);
      if (err) {
        throw err;
      }
      return value.toLocaleUpperCase();
    },
    format(input, includeCountryPrefix) {
      const [value] = clean124(input);
      if (value.length === 12) {
        return strings_exports.splitAt(value, 3, 9).join(" ");
      }
      if (value.length === 13) {
        return strings_exports.splitAt(value, 4, 10).join(" ");
      }
      return strings_exports.splitAt(value, 4).join(" ");
    },
    /**
     * Check if the number is a valid RFC number.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input) {
      const [value, error] = clean124(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length === 10 || value.length === 13) {
        if (!/^[A-Z&Ñ]{4}[0-9]{6}([0-9A-Z]{3})?$/.test(value)) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (nameBlacklist2.has(value.substring(0, 4))) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (!isValidDateCompactYYMMDD(value.substring(4, 10), true)) {
          return { isValid: false, error: new InvalidComponent() };
        }
      } else if (value.length === 12) {
        if (!/^[A-Z&Ñ]{3}[0-9]{6}[0-9A-Z]{3}$/.test(value)) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (!isValidDateCompactYYMMDD(value.substring(3, 9))) {
          return { isValid: false, error: new InvalidComponent() };
        }
      } else {
        return { isValid: false, error: new InvalidLength() };
      }
      if (value.length >= 12) {
        if (!/[1-9A-V][1-9A-Z][0-9A]$/.test(value)) {
          return { isValid: false, error: new InvalidComponent() };
        }
        const [front, check] = strings_exports.splitAt(value, -1);
        const sum = weightedSum(front.padStart(12, " "), {
          modulus: 11,
          alphabet: checkAlphabet3,
          weights: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
          reverse: true
        });
        const mod = 11 - sum % 11;
        let val;
        if (mod === 11) {
          val = "0";
        } else if (mod === 10) {
          val = "A";
        } else {
          val = String(mod);
        }
        if (check !== val) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: value.length !== 12,
        isCompany: value.length === 12
      };
    }
  };
  var rfc_default = validator127;

  // src/js/numberUtils/countriesData/mx/index.ts
  var countryNumberUtils62 = {
    iso2: "MX",
    numberUtils: [
      clabe_default,
      curp_default,
      rfc_default
    ]
  };
  var mx_default = countryNumberUtils62;

  // src/js/numberUtils/countriesData/my/nric.ts
  function clean125(input) {
    return strings_exports.cleanUnicode(input, " -*");
  }
  var UNASSIGNED = [
    "00",
    "17",
    "18",
    "19",
    "20",
    "69",
    "73",
    "80",
    "81",
    "94",
    "95",
    "96",
    "97"
  ];
  var validator128 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Malaysian National Registration Identity Card Number",
    localName: "National Registration Identity Card Number",
    abbreviation: "NRIC No.",
    maxLength: 12,
    minLength: 12,
    countryPrefix: "MY",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean125(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean125(input);
      return strings_exports.splitAt(value, 6, 8).join("-");
    },
    validate(input) {
      const [value, error] = clean125(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 12) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [bdate, place] = strings_exports.splitAt(value, 6, 8);
      if (!isValidDateCompactYYMMDD(bdate, true)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (UNASSIGNED.includes(place)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var nric_default = validator128;

  // src/js/numberUtils/countriesData/my/index.ts
  var countryNumberUtils63 = {
    iso2: "MY",
    numberUtils: [
      nric_default
    ]
  };
  var my_default = countryNumberUtils63;

  // src/js/numberUtils/countriesData/nl/bsn.ts
  function clean126(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  function checksum(value) {
    const nineCharValue = value.padStart(9, "0");
    const sum = weightedSum(nineCharValue, {
      weights: [9, 8, 7, 6, 5, 4, 3, 2, -1],
      modulus: 11
    });
    return sum === 0;
  }
  var validator129 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Dutch Citizen Identification Number",
    localName: "Burgerservicenummer",
    abbreviation: "BSN",
    maxLength: 9,
    minLength: 8,
    countryPrefix: "NL",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean126(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean126(input);
      return strings_exports.splitAt(value, 4, 6).join(".");
    },
    validate(input) {
      const [value, error] = clean126(input);
      if (error) {
        return { isValid: false, error };
      }
      if (![8, 9].includes(value.length)) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!checksum(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var bsn_default = validator129;

  // src/js/numberUtils/countriesData/nl/btw.ts
  function clean127(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -.", "NL");
    if (err) {
      return [value, err];
    }
    const [a, b] = strings_exports.splitAt(value, -3);
    return [`${a.padStart(9, "0")}${b}`, null];
  }
  var validator130 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Dutch VAT Number",
    localName: "Btw-identificatienummer",
    abbreviation: "Btw-nr.",
    maxLength: 12,
    minLength: 12,
    countryPrefix: "NL",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean127(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean127(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean127(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 12) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [a, b, c] = strings_exports.splitAt(value, 9, 10);
      if (!strings_exports.isDigits(a) || !strings_exports.isDigits(c)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (b !== "B") {
        return { isValid: false, error: new InvalidFormat() };
      }
      const sum = weightedSum(a, {
        weights: [9, 8, 7, 6, 5, 4, 3, 2, -1],
        modulus: 11
      });
      if (sum % 11 !== 0 && !mod97base10Validate(`NL${a}${b}${c}`)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: `${a}${b}${c}`,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var btw_default = validator130;

  // src/js/numberUtils/countriesData/nl/onderwijsnummer.ts
  function clean128(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  var validator131 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Dutch Student Identification Number",
    localName: "Onderwijsnummer",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "NL",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean128(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean128(input);
      return strings_exports.splitAt(value, 4, 6).join(".");
    },
    validate(input) {
      const [value, error] = clean128(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value.substring(0, 2) !== "10") {
        return { isValid: false, error: new InvalidFormat() };
      }
      const sum = weightedSum(value, {
        weights: [9, 8, 7, 6, 5, 4, 3, 2, -1],
        modulus: 1e4
      });
      if (sum % 11 !== 5) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var onderwijsnummer_default = validator131;

  // src/js/numberUtils/countriesData/nl/index.ts
  var countryNumberUtils64 = {
    iso2: "NL",
    numberUtils: [
      bsn_default,
      btw_default,
      onderwijsnummer_default
    ]
  };
  var nl_default = countryNumberUtils64;

  // src/js/numberUtils/countriesData/no/fodselsnummer.ts
  function clean129(input) {
    return strings_exports.cleanUnicode(input, " -:");
  }
  function checkBirthdate(value) {
    let [dd, mm, yy, rest] = strings_exports.splitAt(value, 2, 4, 6, 9).map((v) => parseInt(v, 10));
    if (dd > 40) {
      dd -= 40;
    }
    if (mm > 40) {
      mm -= 40;
    }
    if (rest < 500) {
      yy += 1900;
    } else if (rest < 750 && yy > 54) {
      yy += 1800;
    } else if (rest < 1e3 && yy < 40) {
      yy += 2e3;
    } else if (rest >= 900 && rest < 1e3 && yy >= 40) {
      yy += 1900;
    } else {
      return false;
    }
    return isValidDate(String(yy), String(mm), String(dd), true);
  }
  var validator132 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Norwegian National Identity Number",
    localName: "F\xF8dselsnummer",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "NO",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean129(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean129(input);
      return strings_exports.splitAt(value, 6).join(" ");
    },
    validate(input) {
      const [value, error] = clean129(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!checkBirthdate(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [front1, check1] = strings_exports.splitAt(value, 9, 10);
      const [front2, check2] = strings_exports.splitAt(value, 10);
      const sum1 = weightedSum(front1, {
        weights: [3, 7, 6, 1, 8, 9, 4, 5, 2],
        modulus: 11
      });
      const sum2 = weightedSum(front2, {
        weights: [5, 4, 3, 2, 7, 6, 5, 4, 3, 2],
        modulus: 11
      });
      if (String((11 - sum1) % 11) !== check1 || String((11 - sum2) % 11) !== check2) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var fodselsnummer_default = validator132;

  // src/js/numberUtils/countriesData/no/kontonr.ts
  function clean130(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -.");
    if (err) {
      return [value, err];
    }
    if (value.startsWith("0000")) {
      return [value.substring(4), null];
    }
    return [value, null];
  }
  var validator133 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Norwegian Bank Account Number",
    localName: "Kontonummer",
    abbreviation: "Konto Nr.",
    maxLength: 11,
    minLength: 7,
    countryPrefix: "NO",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean130(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean130(input);
      return strings_exports.splitAt(value.padStart(11, "0"), 4, 6).join(".");
    },
    validate(input) {
      const [value, error] = clean130(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11 && value.length !== 7) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value.length === 7 && !luhnChecksumValidate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      if (value.length === 11) {
        const [front, check] = strings_exports.splitAt(value, -1);
        const sum = weightedSum(front, {
          weights: [6, 7, 8, 9, 4, 5, 6, 7, 8, 9],
          modulus: 11
        });
        if (String(sum) !== check) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var kontonr_default = validator133;

  // src/js/numberUtils/countriesData/no/mva.ts
  function clean131(input) {
    return strings_exports.cleanUnicode(input, " ", "NO");
  }
  var validator134 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Norwegian VAT Number",
    localName: "Merverdiavgift",
    abbreviation: "MVA",
    maxLength: 12,
    minLength: 12,
    countryPrefix: "NO",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean131(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean131(input);
      return `NO ${strings_exports.splitAt(value, 3, 6, 9).join(" ")}`;
    },
    validate(input) {
      const [value, error] = clean131(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 12) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value.substring(0, 9))) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, end] = strings_exports.splitAt(value, 9);
      if (end !== "MVA") {
        return { isValid: false, error: new InvalidFormat() };
      }
      const sum = weightedSum(front, {
        weights: [3, 2, 7, 6, 5, 4, 3, 2, 1],
        modulus: 11
      });
      if (sum !== 0) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var mva_default = validator134;

  // src/js/numberUtils/countriesData/no/orgnr.ts
  function clean132(input) {
    return strings_exports.cleanUnicode(input, " -/");
  }
  var validator135 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Norwegian Organization Number",
    localName: "Organisasjonsnummer",
    abbreviation: "Orgnr",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "NO",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean132(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean132(input);
      return strings_exports.splitAt(value, 3, 6).join(" ");
    },
    validate(input) {
      const [value, error] = clean132(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const sum = weightedSum(value, {
        weights: [3, 2, 7, 6, 5, 4, 3, 2, 1],
        modulus: 11
      });
      if (sum !== 0) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var orgnr_default = validator135;

  // src/js/numberUtils/countriesData/no/index.ts
  var countryNumberUtils65 = {
    iso2: "NO",
    numberUtils: [
      fodselsnummer_default,
      kontonr_default,
      mva_default,
      orgnr_default
    ]
  };
  var no_default = countryNumberUtils65;

  // src/js/numberUtils/countriesData/nz/bank.ts
  var bankData = {
    "01": {
      algorithm: "AB",
      branches: [
        [1, 999],
        [1100, 1199],
        [1800, 1899]
      ]
    },
    "02": {
      algorithm: "AB",
      branches: [
        [1, 999],
        [1200, 1299]
      ]
    },
    "03": {
      algorithm: "AB",
      branches: [
        [1, 999],
        [1300, 1399],
        [1500, 1599],
        [1700, 1799],
        [1900, 1999]
      ]
    },
    "06": {
      algorithm: "AB",
      branches: [
        [1, 999],
        [1400, 1499]
      ]
    },
    "08": { algorithm: "D", branches: [[6500, 6599]] },
    "09": { algorithm: "E", branches: [[0, 0]] },
    "11": {
      algorithm: "AB",
      branches: [
        [5e3, 6499],
        [6600, 8999]
      ]
    },
    "12": {
      algorithm: "AB",
      branches: [
        [3e3, 3299],
        [3400, 3499],
        [3600, 3699]
      ]
    },
    "13": { algorithm: "AB", branches: [[4900, 4999]] },
    "14": { algorithm: "AB", branches: [[4700, 4799]] },
    "15": { algorithm: "AB", branches: [[3900, 3999]] },
    "16": { algorithm: "AB", branches: [[4400, 4499]] },
    "17": { algorithm: "AB", branches: [[3300, 3399]] },
    "18": { algorithm: "AB", branches: [[3500, 3599]] },
    "19": { algorithm: "AB", branches: [[4600, 4649]] },
    "20": { algorithm: "AB", branches: [[4100, 4199]] },
    "21": { algorithm: "AB", branches: [[4800, 4899]] },
    "22": { algorithm: "AB", branches: [[4e3, 4049]] },
    "23": { algorithm: "AB", branches: [[3700, 3799]] },
    "24": { algorithm: "AB", branches: [[4300, 4349]] },
    "25": { algorithm: "F", branches: [[2500, 2599]] },
    "26": { algorithm: "G", branches: [[2600, 2699]] },
    "27": { algorithm: "AB", branches: [[3800, 3849]] },
    "28": { algorithm: "G", branches: [[2100, 2149]] },
    "29": { algorithm: "G", branches: [[2150, 2299]] },
    "30": { algorithm: "AB", branches: [[2900, 2949]] },
    "31": { algorithm: "X", branches: [[2800, 2849]] },
    "33": { algorithm: "F", branches: [[6700, 6799]] },
    "35": { algorithm: "AB", branches: [[2400, 2499]] },
    "38": { algorithm: "AB", branches: [[9e3, 9499]] }
  };
  var algorithms = {
    A: {
      weights: [0, 0, 6, 3, 7, 9, 0, 0, 10, 5, 8, 4, 2, 1, 0, 0, 0, 0],
      modulus: 11
    },
    B: {
      weights: [0, 0, 0, 0, 0, 0, 0, 0, 10, 5, 8, 4, 2, 1, 0, 0, 0, 0],
      modulus: 11
    },
    C: {
      weights: [3, 7, 0, 0, 0, 0, 9, 1, 10, 5, 3, 4, 2, 1, 0, 0, 0, 0],
      modulus: 11
    },
    D: {
      weights: [0, 0, 0, 0, 0, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0],
      modulus: 11
    },
    E: {
      weights: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 3, 2, 0, 0, 0, 1],
      modulus: 11
    },
    F: {
      weights: [0, 0, 0, 0, 0, 0, 0, 1, 7, 3, 1, 7, 3, 1, 0, 0, 0, 0],
      modulus: 10
    },
    G: {
      weights: [0, 0, 0, 0, 0, 0, 0, 1, 3, 7, 1, 3, 7, 1, 0, 3, 7, 1],
      modulus: 10
    },
    X: {
      weights: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      modulus: 1
    }
  };
  function clean133(input) {
    const [valueA, err] = strings_exports.cleanUnicode(input, "");
    if (err !== null) {
      return [valueA, err];
    }
    const cvalue = valueA.trim();
    if (!/[ -]/.test(cvalue)) {
      return [cvalue, null];
    }
    const parts = cvalue.split(/[ -]/g);
    if (parts.length !== 4) {
      return [cvalue, new InvalidFormat()];
    }
    return [
      [
        parts[0].padStart(2, "0"),
        parts[1].padStart(4, "0"),
        parts[2].padStart(7, "0"),
        parts[3].padStart(3, "0")
      ].join(""),
      null
    ];
  }
  var validator136 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "New Zealand Bank Account Number",
    localName: "Bank Account Number",
    maxLength: 16,
    minLength: 4,
    countryPrefix: "NZ",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean133(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean133(input);
      return strings_exports.splitAt(value, 2, 6, -3).join("-");
    },
    validate(input) {
      const [value, error] = clean133(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 16) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [bank, branch, account, suffix] = strings_exports.splitAt(value, 2, 6, -3);
      const bankInfo = bankData[bank];
      if (!bankInfo) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const bnum = parseInt(branch, 10);
      if (!bankInfo.branches.some((pair) => bnum >= pair[0] && bnum <= pair[1])) {
        return { isValid: false, error: new InvalidComponent() };
      }
      let alg = bankInfo.algorithm;
      if (alg === "AB") {
        alg = parseInt(account, 10) < 99e4 ? "A" : "B";
      }
      const algInfo = algorithms[alg];
      if (!algInfo) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const sum = weightedSum(`${bank}${branch}0${account}0${suffix}`, algInfo);
      if (String(sum) !== "0") {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: false
      };
    }
  };
  var bank_default = validator136;

  // src/js/numberUtils/countriesData/nz/ird.ts
  function clean134(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -");
    if (err !== null) {
      return [value, err];
    }
    if (value.startsWith("NZ")) {
      return [value.substring(2), null];
    }
    return [value, null];
  }
  var validator137 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Inland Revenue Department Number",
    localName: "Te Tari Taake",
    abbreviation: "IRD",
    maxLength: 9,
    minLength: 8,
    countryPrefix: "NZ",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean134(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean134(input);
      return strings_exports.splitAt(value, 2, 5).join("-");
    },
    validate(input) {
      const [value, error] = clean134(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8 && value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [frontV, check] = strings_exports.splitAt(value, -1);
      const front = frontV.padStart(8, "0");
      let sum = (11 - weightedSum(front, {
        weights: [3, 2, 7, 6, 5, 4, 3, 2],
        modulus: 11
      })) % 11;
      if (sum === 10) {
        sum = (11 - weightedSum(front, {
          weights: [7, 4, 3, 2, 5, 2, 7, 6],
          modulus: 11
        })) % 11;
      }
      if (String(sum) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        // cannot determine based on ird
        isCompany: true
        // cannot determine based on ird
      };
    }
  };
  var ird_default = validator137;

  // src/js/numberUtils/countriesData/nz/index.ts
  var countryNumberUtils66 = {
    iso2: "NZ",
    numberUtils: [
      bank_default,
      ird_default
    ]
  };
  var nz_default = countryNumberUtils66;

  // src/js/numberUtils/countriesData/pe/ce.ts
  function clean135(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator138 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Peruvian ID Card for Foreigners",
    localName: "Carn\xE9 de Extranjer\xEDa",
    abbreviation: "CE",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "PE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean135(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean135(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean135(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var ce_default = validator138;

  // src/js/numberUtils/countriesData/pe/cui.ts
  function clean136(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator139 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Peruvian Personal Identification Card",
    localName: "C\xE9dula \xDAnica de Identidad",
    abbreviation: "CUI",
    maxLength: 9,
    minLength: 8,
    countryPrefix: "PE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean136(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean136(input);
      if (value.length === 9) {
        return strings_exports.splitAt(value, 8).join("-");
      }
      return value;
    },
    validate(input) {
      const [value, error] = clean136(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8 && value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value.length === 9) {
        const [front, check] = strings_exports.splitAt(value, 8);
        const sum = weightedSum(front, {
          weights: [3, 2, 7, 6, 5, 4, 3, 2],
          modulus: 11
        });
        const digits = ["65432110987"[sum], "KJIHGFEDCBA"[sum]];
        if (!digits.includes(check)) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var cui_default2 = validator139;

  // src/js/numberUtils/countriesData/pe/ruc.ts
  function clean137(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator140 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Peruvian Company Tax Number",
    localName: "Registro \xDAnico de Contribuyentes",
    abbreviation: "RUC",
    maxLength: 11,
    minLength: 9,
    countryPrefix: "PE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean137(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean137(input);
      if (value.length === 9) {
        return strings_exports.splitAt(value, 8).join("-");
      }
      return value;
    },
    validate(input) {
      const [value, error] = clean137(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!["10", "15", "16", "17", "20"].includes(value.substring(0, 2))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [front, check] = strings_exports.splitAt(value, 10);
      const sum = weightedSum(front, {
        weights: [5, 4, 3, 2, 7, 6, 5, 4, 3, 2],
        modulus: 11
      });
      if (String((11 - sum) % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var ruc_default2 = validator140;

  // src/js/numberUtils/countriesData/pe/index.ts
  var countryNumberUtils67 = {
    iso2: "PE",
    numberUtils: [
      ce_default,
      cui_default2,
      ruc_default2
    ]
  };
  var pe_default = countryNumberUtils67;

  // src/js/numberUtils/countriesData/pk/cnic.ts
  var PROVINCES = {
    "1": "Khyber Pakhtunkhwa",
    "2": "FATA",
    "3": "Punjab",
    "4": "Sindh",
    "5": "Balochistan",
    "6": "Islamabad",
    "7": "Gilgit-Baltistan"
  };
  var VALID_PROVINCES = Object.keys(PROVINCES);
  function clean138(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator141 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Pakistani Computerized National Identification Number",
    localName: "Computerized National Identification Number",
    abbreviation: "CNIC",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "PK",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean138(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean138(input);
      return strings_exports.splitAt(value, 5, 12).join("-");
    },
    validate(input) {
      const [value, error] = clean138(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value[12] === "0") {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!VALID_PROVINCES.includes(value[0])) {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var cnic_default = validator141;

  // src/js/numberUtils/countriesData/pk/ntn.ts
  function clean139(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator142 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Pakistani National Tax Number",
    localName: "National Tax Number",
    abbreviation: "NTN",
    maxLength: 7,
    minLength: 7,
    countryPrefix: "PK",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean139(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean139(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean139(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 7) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var ntn_default = validator142;

  // src/js/numberUtils/countriesData/pk/index.ts
  var countryNumberUtils68 = {
    iso2: "PK",
    numberUtils: [
      cnic_default,
      ntn_default
    ]
  };
  var pk_default = countryNumberUtils68;

  // src/js/numberUtils/countriesData/pl/nip.ts
  function clean140(input) {
    return strings_exports.cleanUnicode(input, " -", "PL");
  }
  var validator143 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Polish VAT Number",
    localName: "Numer Identyfikacji Podatkowej",
    abbreviation: "NIP",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "PL",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean140(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean140(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean140(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const sum = weightedSum(value, {
        weights: [6, 5, 7, 2, 3, 4, 5, 6, 7, -1],
        modulus: 11
      });
      if (sum !== 0) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var nip_default = validator143;

  // src/js/numberUtils/countriesData/pl/pesel.ts
  function clean141(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator144 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Polish National Identification Number",
    localName: "Powszechny Elektroniczny System Ewidencji Ludno\u015Bci",
    abbreviation: "PESEL",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "PL",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean141(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean141(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean141(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [yy, mm, dd] = strings_exports.splitAt(value, 2, 4, 6);
      const month = parseInt(mm, 10);
      let century2;
      if (month >= 80) {
        century2 = "18";
      } else if (month >= 60) {
        century2 = "22";
      } else if (month >= 40) {
        century2 = "21";
      } else if (month >= 20) {
        century2 = "20";
      } else {
        century2 = "19";
      }
      if (!isValidDate(`${century2}${yy}`, String(month % 20), dd, true)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = weightedSum(front, {
        weights: [1, 3, 7, 9, 1, 3, 7, 9, 1, 3],
        modulus: 10
      });
      if (String((10 - sum) % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var pesel_default = validator144;

  // src/js/numberUtils/countriesData/pl/regon.ts
  function clean142(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator145 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Polish Statistical Identificaiton Number",
    localName: "Rejestr Gospodarki Narodowej",
    abbreviation: "REGON",
    maxLength: 14,
    minLength: 9,
    countryPrefix: "PL",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean142(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean142(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean142(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9 && value.length !== 14) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check, , check2] = strings_exports.splitAt(value, 8, 9, -1);
      const sum = weightedSum(front, {
        weights: [8, 9, 2, 3, 4, 5, 6, 7],
        modulus: 11
      });
      if (String(sum % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      if (value.length === 14) {
        const sum2 = weightedSum(value.substring(0, 13), {
          weights: [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8],
          modulus: 11
        });
        if (String(sum2 % 10) !== check2) {
          return { isValid: false, error: new InvalidChecksum() };
        }
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var regon_default = validator145;

  // src/js/numberUtils/countriesData/pl/index.ts
  var countryNumberUtils69 = {
    iso2: "PL",
    numberUtils: [
      nip_default,
      pesel_default,
      regon_default
    ]
  };
  var pl_default = countryNumberUtils69;

  // src/js/numberUtils/countriesData/pt/cc.ts
  var ALPHABET5 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var validRe8 = /^\d{9}[A-Z0-9]{2}\d$/i;
  function clean143(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator146 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Portuguese National Identification Number",
    localName: "N\xFAmero de Cart\xE3o de Cidad\xE3o",
    abbreviation: "CC",
    placeholder: "12345678 9 ZZ0",
    maxLength: 12,
    minLength: 12,
    countryPrefix: "PT",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean143(input);
      if (err) {
        throw err;
      }
      if (includeCountryPrefix) {
        return this.countryPrefix + value;
      } else {
        return value;
      }
    },
    format(input, includeCountryPrefix) {
      const [cleanValue] = clean143(input);
      const value = strings_exports.splitAt(cleanValue, 8, 9).join(" ");
      if (includeCountryPrefix) {
        return this.countryPrefix + value;
      } else {
        return value;
      }
    },
    validate(input) {
      const [value, error] = clean143(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== this.minLength) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!validRe8.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!luhnChecksumValidate(value, ALPHABET5)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: "1234".includes(value[0]),
        isCompany: !"1234".includes(value[0])
      };
    }
  };
  var cc_default = validator146;

  // src/js/numberUtils/countriesData/pt/nif.ts
  function clean144(input) {
    return strings_exports.cleanUnicode(input, " -.", "PT");
  }
  var validator147 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Portuguese Taxpayer Identification Number",
    localName: "N\xFAmero de Identifica\xE7\xE3o Fiscal",
    abbreviation: "NIF",
    placeholder: "123 456 789",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "PT",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean144(input);
      if (err) {
        throw err;
      }
      if (includeCountryPrefix) {
        return this.countryPrefix + value;
      } else {
        return value;
      }
    },
    format(input, includeCountryPrefix) {
      const [cleanValue] = clean144(input);
      const value = strings_exports.splitAt(cleanValue, 3, 6).join(" ");
      if (includeCountryPrefix) {
        return this.countryPrefix + value;
      } else {
        return value;
      }
    },
    validate(input) {
      const [value, error] = clean144(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== this.minLength) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value) || value[0] === "0") {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = weightedSum(front, {
        weights: [9, 8, 7, 6, 5, 4, 3, 2, 1],
        modulus: 11
      });
      if (String((11 - sum) % 11 % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: "1234".includes(value[0]),
        isCompany: !"1234".includes(value[0])
      };
    }
  };
  var nif_default4 = validator147;

  // src/js/numberUtils/countriesData/pt/index.ts
  var countryNumberUtils70 = {
    iso2: "PT",
    numberUtils: [
      cc_default,
      nif_default4
    ]
  };
  var pt_default = countryNumberUtils70;

  // src/js/numberUtils/countriesData/py/cedula.ts
  function clean145(input) {
    return strings_exports.cleanUnicode(input, " .-");
  }
  var validator148 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Paraguay CI Number",
    localName: "Cedula de la Identidad civil",
    abbreviation: "CI",
    maxLength: 7,
    minLength: 5,
    countryPrefix: "PY",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean145(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean145(input);
      return value;
    },
    /**
     * Check if the number is a valid CI.
     * This checks the length, formatting and other contraints.
     *
     */
    validate(input) {
      const [value, error] = clean145(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length < 5 || value.length > 7) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var cedula_default2 = validator148;

  // src/js/numberUtils/countriesData/py/ruc.ts
  function clean146(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator149 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Paraguay Tax Number",
    localName: "Registro \xDAnico del Contribuyentes",
    abbreviation: "RUC",
    maxLength: 8,
    minLength: 8,
    countryPrefix: "PY",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean146(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean146(input);
      return `${value.substring(0, value.length - 1)}-${value.substring(
        value.length - 1
      )}`;
    },
    /**
     * Check if the number is a valid RUC.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input) {
      const [value, error] = clean146(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length < 5 || value.length > 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [front, check] = strings_exports.splitAt(value, value.length - 1);
      const sum = front.split("").reverse().map((x) => parseInt(x, 10)).reduce((acc, digit2, idx) => acc + digit2 * (idx + 2), 0);
      const digit = String((11 - sum % 11) % 10);
      if (check !== digit) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: parseInt(front, 10) < 8e7,
        isCompany: front.length === 8 && parseInt(front, 10) > 8e7
      };
    }
  };
  var ruc_default3 = validator149;

  // src/js/numberUtils/countriesData/py/index.ts
  var countryNumberUtils71 = {
    iso2: "PY",
    numberUtils: [
      cedula_default2,
      ruc_default3
    ]
  };
  var py_default = countryNumberUtils71;

  // src/js/numberUtils/countriesData/ro/cnp.ts
  function clean147(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var century = {
    "0": "19",
    // shouldn't happen,
    "1": "19",
    "2": "19",
    "3": "18",
    "4": "18",
    "5": "20",
    "6": "20",
    "7": "19",
    "8": "19",
    "9": "19"
  };
  var COUNTIES = {
    "01": "Alba",
    "02": "Arad",
    "03": "Arges",
    "04": "Bacau",
    "05": "Bihor",
    "06": "Bistrita-Nasaud",
    "07": "Botosani",
    "08": "Brasov",
    "09": "Braila",
    "10": "Buzau",
    "11": "Caras-Severin",
    "12": "Cluj",
    "13": "Constanta",
    "14": "Covasna",
    "15": "Dambovita",
    "16": "Dolj",
    "17": "Galati",
    "18": "Gorj",
    "19": "Harghita",
    "20": "Hunedoara",
    "21": "Ialomita",
    "22": "Iasi",
    "23": "Ilfov",
    "24": "Maramures",
    "25": "Mehedinti",
    "26": "Mures",
    "27": "Neamt",
    "28": "Olt",
    "29": "Prahova",
    "30": "Satu Mare",
    "31": "Salaj",
    "32": "Sibiu",
    "33": "Suceava",
    "34": "Teleorman",
    "35": "Timis",
    "36": "Tulcea",
    "37": "Vaslui",
    "38": "Valcea",
    "39": "Vrancea",
    "40": "Bucuresti",
    "41": "Bucuresti - Sector 1",
    "42": "Bucuresti - Sector 2",
    "43": "Bucuresti - Sector 3",
    "44": "Bucuresti - Sector 4",
    "45": "Bucuresti - Sector 5",
    "46": "Bucuresti - Sector 6",
    "47": "Bucuresti - Sector 7 (desfiintat)",
    "48": "Bucuresti - Sector 8 (desfiintat)",
    "51": "Calarasi",
    "52": "Giurgiu"
  };
  var VALID_COUNTIES = Object.keys(COUNTIES);
  var validator150 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Romanian Numerical Personal Code",
    localName: "Cod Numeric Personal",
    abbreviation: "CNP",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "RO",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean147(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean147(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean147(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value[0] === "0") {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [first, dvalue, county] = strings_exports.splitAt(value, 1, 7, 9);
      if (!isValidDateCompactYYYYMMDD(`${century[first]}${dvalue}`, true)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!VALID_COUNTIES.includes(county)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = weightedSum(front, {
        weights: [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9],
        modulus: 11
      });
      const digit = sum === 10 ? "1" : String(sum);
      if (check !== digit) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var cnp_default = validator150;

  // src/js/numberUtils/countriesData/ro/cui.ts
  function clean148(input) {
    return strings_exports.cleanUnicode(input, " -", "RO");
  }
  var validator151 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Romanian Company Identifier",
    localName: "Codul Unic de \xCEnregistrare",
    abbreviation: "CUI",
    maxLength: 10,
    minLength: 2,
    countryPrefix: "RO",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean148(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean148(input);
      return strings_exports.splitAt(value, 3, 6).join(" ");
    },
    validate(input) {
      const [value, error] = clean148(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length < 2 || value.length > 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value) || value[0] === "0") {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value.padStart(9, "0"), -1);
      const sum = 10 * weightedSum(front, {
        weights: [7, 5, 3, 2, 1, 7, 5, 3, 2],
        modulus: 11
      });
      if (String(sum % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var cui_default3 = validator151;

  // src/js/numberUtils/countriesData/ro/cif.ts
  function clean149(input) {
    return strings_exports.cleanUnicode(input, " -", "RO");
  }
  var validator152 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Romanian VAT Number",
    localName: "Codul de Identificare Fiscal\u0103",
    abbreviation: "CIF",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "RO",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean149(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean149(input);
      return cui_default3.format(value, false);
    },
    validate(input) {
      const [value, error] = clean149(input);
      if (error) {
        return { isValid: false, error };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value.length === 13) {
        return cnp_default.validate(value);
      }
      if (value.length >= 2 && value.length <= 10) {
        return cui_default3.validate(value);
      }
      return { isValid: false, error: new InvalidLength() };
    }
  };
  var cif_default2 = validator152;

  // src/js/numberUtils/countriesData/ro/onrc.ts
  var checkRe2 = /[A-Z]\d+\/\d{1,5}\/\d+/;
  function* genit() {
    for (let i = 0; i <= 41; i += 1) {
      yield i;
    }
    yield 51;
    yield 52;
  }
  var counties = new Set(genit());
  function clean150(input) {
    const [value, err] = strings_exports.cleanUnicode(input, "");
    if (err !== null) {
      return [value, err];
    }
    const better = value.replace(/[ /\\-]+/g, "/").replace(/^([A-Z])\//, "$1").replace(/([A-Z])(\d)\//, "$10$2").replace(/\/\d{2}[.]\d{2}[.](\d{4})$/, "/$1");
    return [better, null];
  }
  var validator153 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Romanian Trade Register Identifier",
    localName: "Ordine din Registrul Comer\u0163ului",
    abbreviation: "NRC",
    maxLength: 4,
    minLength: 4,
    countryPrefix: "RO",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean150(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean150(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean150(input);
      if (error) {
        return { isValid: false, error };
      }
      if (!checkRe2.test(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!"JFC".includes(value[0])) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [county, serial, year] = value.substring(1).split("/");
      if (!counties.has(parseInt(county, 10))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (serial.length > 5) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (year.length !== 4) {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var onrc_default = validator153;

  // src/js/numberUtils/countriesData/ro/index.ts
  var countryNumberUtils72 = {
    iso2: "RO",
    numberUtils: [
      cif_default2,
      cnp_default,
      cui_default3,
      onrc_default
    ]
  };
  var ro_default = countryNumberUtils72;

  // src/js/numberUtils/countriesData/rs/jmbg.ts
  var validator154 = {
    ...jmbg_default,
    name: "Serbian Unique Master Citizen Number",
    localName: "\u0408\u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u0438 \u043C\u0430\u0442\u0438\u0447\u043D\u0438 \u0431\u0440\u043E\u0458 \u0433\u0440\u0430\u0452\u0430\u043D\u0430",
    abbreviation: "\u0408\u041C\u0411\u0413",
    countryPrefix: "RS"
  };
  var jmbg_default4 = validator154;

  // src/js/numberUtils/countriesData/rs/pib.ts
  function clean151(input) {
    return strings_exports.cleanUnicode(input, " -.", "RS");
  }
  var validator155 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Serbian Tax Identification Number",
    localName: "Poreski Identifikacioni Broj",
    abbreviation: "PIB",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "RS",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean151(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean151(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean151(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!mod11mod10Validate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var pib_default2 = validator155;

  // src/js/numberUtils/countriesData/rs/index.ts
  var countryNumberUtils73 = {
    iso2: "RS",
    numberUtils: [
      jmbg_default4,
      pib_default2
    ]
  };
  var rs_default = countryNumberUtils73;

  // src/js/numberUtils/countriesData/ru/inn.ts
  function clean152(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator156 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Russian Tax Identifier",
    localName: "\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u043D\u0430\u043B\u043E\u0433\u043E\u043F\u043B\u0430\u0442\u0435\u043B\u044C\u0449\u0438\u043A\u0430",
    abbreviation: "\u0418\u041D\u041D",
    maxLength: 12,
    minLength: 10,
    countryPrefix: "RU",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean152(input);
      if (err) {
        throw err;
      }
      return value.toLocaleUpperCase();
    },
    format(input, includeCountryPrefix) {
      const [value] = clean152(input);
      return value;
    },
    /**
     * Check if the number is a valid INN number.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input) {
      const [value, error] = clean152(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10 && value.length !== 12) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      let digit;
      const [front, check] = strings_exports.splitAt(
        value,
        value.length === 10 ? -1 : -2
      );
      if (value.length === 10) {
        digit = String(
          weightedSum(front, {
            weights: [2, 4, 10, 3, 5, 9, 4, 6, 8],
            modulus: 11
          }) % 10
        );
      } else {
        const d1 = String(
          weightedSum(front, {
            weights: [7, 2, 4, 10, 3, 5, 9, 4, 6, 8],
            modulus: 11
          }) % 10
        );
        const d2 = String(
          weightedSum(front + d1, {
            weights: [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8],
            modulus: 11
          }) % 10
        );
        digit = `${d1}${d2}`;
      }
      if (digit !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: value.length === 12,
        isCompany: value.length === 10
      };
    }
  };
  var inn_default = validator156;

  // src/js/numberUtils/countriesData/ru/index.ts
  var countryNumberUtils74 = {
    iso2: "RU",
    numberUtils: [
      inn_default
    ]
  };
  var ru_default = countryNumberUtils74;

  // src/js/numberUtils/countriesData/se/orgnr.ts
  function clean153(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  var validator157 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Swedish Company Number",
    localName: "Organisationsnummer",
    abbreviation: "Orgnr",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "SE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean153(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean153(input);
      return strings_exports.splitAt(value, -4).join("-");
    },
    validate(input) {
      const [value, error] = clean153(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!luhnChecksumValidate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var orgnr_default2 = validator157;

  // src/js/numberUtils/countriesData/se/personnummer.ts
  var ONE_HUNDRED_YEARS_IN_MS = 100 * 365 * 24 * 60 * 60 * 1e3;
  function clean154(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " :");
    if (err) {
      return [value, err];
    }
    const [a, b, c] = strings_exports.splitAt(value, -5, -4);
    return [`${a.replace(/[-+]/g, "")}${b}${c}`, null];
  }
  function formatImpl(input) {
    const [value] = clean154(input);
    let front, back, sep = "-";
    if (value.length === 12 || value.length === 13) {
      const [yyyy, mm, dd] = strings_exports.splitAt(value, 0, 4, 6, 8);
      const d = buildDate(yyyy, mm, dd);
      if (d === null) {
        return value;
      }
      if ((/* @__PURE__ */ new Date()).getTime() - d.getTime() > ONE_HUNDRED_YEARS_IN_MS) {
        sep = "+";
      }
      front = `${yyyy.substring(2)}${mm}${dd}`;
      back = value.substring(value.length - 4);
    } else if (value.length === 10) {
      front = value.substring(0, 6);
      back = value.substring(6);
    } else if (value.length === 11) {
      front = value.substring(0, 6);
      sep = value[6];
      back = value.substring(7);
    } else {
      return value;
    }
    return `${front}${sep}${back}`;
  }
  var validator158 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Swedish Personal Identity Number",
    localName: "Personnummer",
    maxLength: 13,
    minLength: 10,
    countryPrefix: "SE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean154(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format: formatImpl,
    validate(input) {
      const [value, error] = clean154(input);
      if (error) {
        return { isValid: false, error };
      }
      let a, b, c;
      if (value.length === 11) {
        [a, b, c] = strings_exports.splitAt(value, -5, -4);
      } else if (value.length === 13) {
        [, a, b, c] = strings_exports.splitAt(value, -11, -5, -4);
      } else {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!"-+".includes(b)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const digits = `${a}${c}`;
      if (!strings_exports.isDigits(digits)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      let yyyymmdd;
      if (value.length === 13) {
        yyyymmdd = value.substring(0, 8);
      } else {
        const yymmdd = value.substring(0, 6);
        const year = (/* @__PURE__ */ new Date()).getFullYear();
        let century2 = Math.floor(year / 100);
        if (parseInt(yymmdd.substring(0, 2), 10) > year % 100) {
          century2 -= 1;
        }
        if (b === "+") {
          century2 -= 1;
        }
        yyyymmdd = `${century2}${yymmdd}`;
      }
      if (!isValidDateCompactYYYYMMDD(yyyymmdd, true)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!luhnChecksumValidate(digits)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: formatImpl(input),
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var personnummer_default = validator158;

  // src/js/numberUtils/countriesData/se/vat.ts
  function clean155(input) {
    return strings_exports.cleanUnicode(input, " -.", "SE");
  }
  var validator159 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Swedish VAT Number",
    localName: "Momsregistreringsnummer",
    abbreviation: "Momsnr.",
    maxLength: 12,
    minLength: 12,
    countryPrefix: "SE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean155(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean155(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean155(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 12) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, end] = strings_exports.splitAt(value, -2);
      if (end !== "01") {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!luhnChecksumValidate(front)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var vat_default10 = validator159;

  // src/js/numberUtils/countriesData/se/index.ts
  var countryNumberUtils75 = {
    iso2: "SE",
    numberUtils: [
      orgnr_default2,
      personnummer_default,
      vat_default10
    ]
  };
  var se_default = countryNumberUtils75;

  // src/js/numberUtils/countriesData/sg/uen.ts
  function clean156(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var OTHER_UEN_ENTITY_TYPES = [
    "CC",
    "CD",
    "CH",
    "CL",
    "CM",
    "CP",
    "CS",
    "CX",
    "DP",
    "FB",
    "FC",
    "FM",
    "FN",
    "GA",
    "GB",
    "GS",
    "HS",
    "LL",
    "LP",
    "MB",
    "MC",
    "MD",
    "MH",
    "MM",
    "MQ",
    "NB",
    "NR",
    "PA",
    "PB",
    "PF",
    "RF",
    "RP",
    "SM",
    "SS",
    "TC",
    "TU",
    "VH",
    "XL"
  ];
  function validateLocal(value) {
    const [front, check] = strings_exports.splitAt(value, -1);
    if (!strings_exports.isDigits(front)) {
      return { isValid: false, error: new InvalidComponent() };
    }
    const sum = weightedSum(front, {
      modulus: 11,
      weights: [10, 8, 6, 4, 9, 7, 5, 3, 1]
    });
    const digit = "ZKCMDNERGWH"[sum];
    if (check !== digit) {
      return { isValid: false, error: new InvalidChecksum() };
    }
    return {
      isValid: true,
      compact: value,
      isIndividual: false,
      isCompany: true
    };
  }
  function validateBusiness(value) {
    const [front, check] = strings_exports.splitAt(value, -1);
    if (!strings_exports.isDigits(front)) {
      return { isValid: false, error: new InvalidComponent() };
    }
    const sum = weightedSum(front, {
      modulus: 11,
      weights: [10, 4, 9, 3, 8, 2, 7, 1]
    });
    const digit = "XMKECAWLJDB"[sum];
    if (check !== digit) {
      return { isValid: false, error: new InvalidChecksum() };
    }
    return {
      isValid: true,
      compact: value,
      isIndividual: false,
      isCompany: true
    };
  }
  function validateOther(value) {
    const [kind, year, etype, rest, check] = strings_exports.splitAt(value, 1, 3, 5, -1);
    if (!["R", "S", "T"].includes(kind)) {
      return { isValid: false, error: new InvalidComponent() };
    }
    if (!strings_exports.isDigits(year)) {
      return { isValid: false, error: new InvalidComponent() };
    }
    if (kind === "T" && parseInt(year, 10) > (/* @__PURE__ */ new Date()).getFullYear() % 100) {
      return { isValid: false, error: new InvalidComponent() };
    }
    if (!OTHER_UEN_ENTITY_TYPES.includes(etype)) {
      return { isValid: false, error: new InvalidComponent() };
    }
    if (!strings_exports.isDigits(rest)) {
      return { isValid: false, error: new InvalidComponent() };
    }
    const alphabet7 = "ABCDEFGHJKLMNPQRSTUVWX0123456789";
    const digit = alphabet7[(weightedSum(value.substring(0, 9), {
      weights: [4, 3, 5, 3, 10, 2, 2, 5, 7],
      modulus: 11,
      alphabet: alphabet7
    }) + 6) % 11];
    if (check !== digit) {
      return { isValid: false, error: new InvalidChecksum() };
    }
    return {
      isValid: true,
      compact: value,
      isIndividual: false,
      isCompany: true
    };
  }
  var validator160 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Singapore Unique Entity Number",
    localName: "Unique Entity Number",
    abbreviation: "UEN",
    maxLength: 10,
    minLength: 9,
    countryPrefix: "SG",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean156(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean156(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean156(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9 && value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (value.length === 9) {
        return validateBusiness(value);
      }
      if (strings_exports.isDigits(value[0])) {
        return validateLocal(value);
      }
      return validateOther(value);
    }
  };
  var uen_default = validator160;

  // src/js/numberUtils/countriesData/sg/index.ts
  var countryNumberUtils76 = {
    iso2: "SG",
    numberUtils: [
      uen_default
    ]
  };
  var sg_default = countryNumberUtils76;

  // src/js/numberUtils/countriesData/si/ddv.ts
  function clean157(input) {
    return strings_exports.cleanUnicode(input, " -", "SI");
  }
  var validator161 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Slovenian VAT Number",
    localName: "Identifikacijska \u0161tevilka za DDV",
    abbreviation: "ID za DDV",
    maxLength: 8,
    minLength: 8,
    countryPrefix: "SI",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean157(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean157(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean157(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = 11 - weightedSum(front, {
        weights: [8, 7, 6, 5, 4, 3, 2, 1],
        modulus: 11
      });
      if (String(sum % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var ddv_default = validator161;

  // src/js/numberUtils/countriesData/si/emso.ts
  var validator162 = {
    ...jmbg_default,
    name: "Slovene Unique Master Citizen Number",
    localName: "Enotna Mati\u010Dna \u0160tevilka Ob\u010Dana",
    abbreviation: "EM\u0160O",
    countryPrefix: "SI"
  };
  var emso_default = validator162;

  // src/js/numberUtils/countriesData/si/jmbg.ts
  var validator163 = {
    ...jmbg_default,
    name: "Slovene Unique Master Citizen Number",
    localName: "Enotna Mati\u010Dna \u0160tevilka Ob\u010Dana",
    abbreviation: "EM\u0160O",
    countryPrefix: "SI"
  };
  var jmbg_default5 = validator163;

  // src/js/numberUtils/countriesData/si/index.ts
  var countryNumberUtils77 = {
    iso2: "SI",
    numberUtils: [
      ddv_default,
      emso_default,
      jmbg_default5
    ]
  };
  var si_default = countryNumberUtils77;

  // src/js/numberUtils/countriesData/sk/dph.ts
  function clean158(input) {
    return strings_exports.cleanUnicode(input, " -", "SK");
  }
  var validator164 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Slovak VAT Number",
    localName: "Identifika\u010Dn\xE9 \u010C\xEDslo pre Da\u0148 z Pridanej Hodnoty",
    abbreviation: "I\u010C DPH",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "SK",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean158(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean158(input);
      return strings_exports.splitAt(value, 3, 6, 8).join(" ");
    },
    validate(input) {
      const [value, error] = clean158(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!"234789".includes(value[0])) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (parseInt(value, 10) % 11 !== 0) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var dph_default = validator164;

  // src/js/numberUtils/countriesData/sk/rc.ts
  var validator165 = {
    ...rc_default,
    name: "Slovak Birth Number",
    localName: "Rodn\xE9 \u010D\xEDslo",
    abbreviation: "RC",
    countryPrefix: "SK"
  };
  var rc_default2 = validator165;

  // src/js/numberUtils/countriesData/sk/index.ts
  var countryNumberUtils78 = {
    iso2: "SK",
    numberUtils: [
      dph_default,
      rc_default2
    ]
  };
  var sk_default = countryNumberUtils78;

  // src/js/numberUtils/countriesData/sm/coe.ts
  var lowNumbers = /* @__PURE__ */ new Set([
    2,
    4,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    16,
    18,
    19,
    20,
    21,
    25,
    26,
    30,
    32,
    33,
    35,
    36,
    37,
    38,
    39,
    40,
    42,
    45,
    47,
    49,
    51,
    52,
    55,
    56,
    57,
    58,
    59,
    61,
    62,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    79,
    80,
    81,
    84,
    85,
    87,
    88,
    91,
    92,
    94,
    95,
    96,
    97,
    99
  ]);
  function clean159(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " .");
    if (err) {
      return [value, err];
    }
    return [value.replace(/^0+/, ""), null];
  }
  var validator166 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "San Marino National Tax Number",
    localName: "Codice Operatore Eeconomico",
    abbreviation: "COE",
    maxLength: 5,
    minLength: 3,
    countryPrefix: "SM",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean159(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean159(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean159(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length > 5 || value.length === 0) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value.length < 3 && !lowNumbers.has(parseInt(value, 10))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var coe_default = validator166;

  // src/js/numberUtils/countriesData/sm/index.ts
  var countryNumberUtils79 = {
    iso2: "SM",
    numberUtils: [
      coe_default
    ]
  };
  var sm_default = countryNumberUtils79;

  // src/js/numberUtils/countriesData/sv/nit.ts
  function clean160(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -");
    if (err !== null) {
      return [value, err];
    }
    if (value.startsWith("SV")) {
      return [value.substring(2), err];
    }
    return [value, err];
  }
  var validator167 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "El Salvador Tax Number",
    localName: "N\xFAmero de Identificaci\xF3n Tributaria",
    abbreviation: "NIT",
    maxLength: 14,
    minLength: 14,
    countryPrefix: "SV",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean160(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean160(input);
      return strings_exports.splitAt(value, 4, -4, -1).join("-");
    },
    validate(input) {
      const [value, error] = clean160(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 14) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!["0", "1", "9"].includes(value[0])) {
        return { isValid: false, error: new InvalidComponent() };
      }
      let sum;
      const [front, check] = strings_exports.splitAt(value, 13);
      if (value.substring(10, 3) === "100") {
        sum = weightedSum(front, {
          weights: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
          modulus: 11
        }) % 10;
      } else {
        sum = (11 - weightedSum(front, {
          weights: [2, 7, 6, 5, 4, 3, 2, 7, 6, 5, 4, 3, 2],
          modulus: 11
        })) % 10;
      }
      if (check !== String(sum)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: true
      };
    }
  };
  var nit_default3 = validator167;

  // src/js/numberUtils/countriesData/sv/index.ts
  var countryNumberUtils80 = {
    iso2: "SV",
    numberUtils: [
      nit_default3
    ]
  };
  var sv_default = countryNumberUtils80;

  // src/js/numberUtils/countriesData/th/idnr.ts
  function clean161(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator168 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Thai National Identity Card Number",
    localName: "\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E15\u0E31\u0E27\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E44\u0E17\u0E22",
    abbreviation: "IDNR",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "TH",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean161(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean161(input);
      return strings_exports.splitAt(value, 1, 5, 10, 12).join("-");
    },
    validate(input) {
      const [value, error] = clean161(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if ("09".includes(value[0])) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [front, check] = strings_exports.splitAt(value, 12);
      const sum = weightedSum(front, {
        weights: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        modulus: 11
      });
      if (String((11 - sum) % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var idnr_default3 = validator168;

  // src/js/numberUtils/countriesData/th/moa.ts
  function clean162(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator169 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Thailand Memorandum of Association Number",
    localName: "",
    abbreviation: "MOA",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "TH",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean162(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean162(input);
      return strings_exports.splitAt(value, 1, 3, 4, 7, 12).join("-");
    },
    validate(input) {
      const [value, error] = clean162(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (value[0] !== "0") {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [front, check] = strings_exports.splitAt(value, 12);
      const sum = weightedSum(front, {
        weights: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        modulus: 11
      });
      if (String((11 - sum) % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var moa_default = validator169;

  // src/js/numberUtils/countriesData/th/tin.ts
  function clean163(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator170 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Thailand Taxpayer Identification Number",
    localName: "",
    abbreviation: "TIN",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "TH",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean163(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      if (idnr_default3.validate(input).isValid) {
        return idnr_default3.format(input, false);
      }
      return moa_default.format(input, false);
    },
    validate(input) {
      const v1 = idnr_default3.validate(input);
      if (v1.isValid) {
        return v1;
      }
      return moa_default.validate(input);
    }
  };
  var tin_default5 = validator170;

  // src/js/numberUtils/countriesData/th/index.ts
  var countryNumberUtils81 = {
    iso2: "TH",
    numberUtils: [
      idnr_default3,
      moa_default,
      tin_default5
    ]
  };
  var th_default = countryNumberUtils81;

  // src/js/numberUtils/countriesData/tn/mf.ts
  function clean164(input) {
    return strings_exports.cleanUnicode(input, " /.-");
  }
  var validRe9 = /^(\d+)(.*)$/;
  function compactImpl(input) {
    const [value, err] = clean164(input);
    if (err) {
      return ["", err];
    }
    const match = value.match(validRe9);
    if (match && match.length === 3) {
      return [match[1].padStart(7, "0") + match[2], null];
    }
    return [value, null];
  }
  var VALID_CONTROL_KEYS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  var VALID_TVA_CODES = ["A", "P", "B", "D", "N"];
  var VALID_CATEGORY_CODES = ["M", "P", "C", "N", "E"];
  var validator171 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Tunisia tax number",
    localName: "Matricule Fiscal",
    abbreviation: "MF",
    maxLength: 13,
    minLength: 3,
    countryPrefix: "TN",
    compact(input, includeCountryPrefix) {
      const [value, error] = compactImpl(input);
      if (error) {
        throw error;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value, error] = compactImpl(input);
      if (error) {
        return input;
      }
      const [front, key, tva, category, rest] = strings_exports.splitAt(
        value,
        7,
        8,
        9,
        10
      );
      if (value.length === 8) {
        return `${front}/${key}`;
      }
      return `${front}/${key}/${tva}/${category}/${rest}`;
    },
    validate(input) {
      const [value, error] = compactImpl(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8 && value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [front, key, tva, category, rest] = strings_exports.splitAt(
        value,
        7,
        8,
        9,
        10
      );
      if (!strings_exports.isDigits(front)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!VALID_CONTROL_KEYS.includes(key)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (value.length !== 8) {
        if (!VALID_TVA_CODES.includes(tva)) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (!VALID_CATEGORY_CODES.includes(category)) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (!strings_exports.isDigits(rest)) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (rest !== "000" && category !== "E") {
          return { isValid: false, error: new InvalidComponent() };
        }
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: false
      };
    }
  };
  var mf_default = validator171;

  // src/js/numberUtils/countriesData/tn/index.ts
  var countryNumberUtils82 = {
    iso2: "TN",
    numberUtils: [
      mf_default
    ]
  };
  var tn_default2 = countryNumberUtils82;

  // src/js/numberUtils/countriesData/tr/tckimlik.ts
  function clean165(input) {
    return strings_exports.cleanUnicode(input, "");
  }
  var validator172 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Turkish Identificatio Number",
    localName: "T\xFCrkiye Cumhuriyeti Kimlik Numaras\u0131",
    abbreviation: "T.C. Kimlik No.",
    maxLength: 11,
    minLength: 11,
    countryPrefix: "TR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean165(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean165(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean165(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 11) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value) || value[0] === "0") {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -2);
      const sum1 = (10 - weightedSum(front, {
        weights: [3, 1],
        modulus: 10
      })) % 10;
      const sum2 = (sum1 + weightedSum(front, {
        weights: [1],
        modulus: 10
      })) % 10;
      if (`${sum1}${sum2}` !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var tckimlik_default = validator172;

  // src/js/numberUtils/countriesData/tr/vkn.ts
  function clean166(input) {
    return strings_exports.cleanUnicode(input, "");
  }
  var validator173 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Turkish Tax Identification Number",
    localName: "Vergi Kimlik Numaras\u0131",
    abbreviation: "VKN",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "TR",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean166(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean166(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean166(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = front.split("").map((v, i) => (parseInt(v, 10) + 9 - i) % 10).map((v, i) => {
        if (v === 0) {
          return v;
        }
        return v * 2 ** (9 - i) % 9 || 9;
      }).reduce((acc, v) => (acc + v) % 10);
      if (String((10 - sum) % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var vkn_default = validator173;

  // src/js/numberUtils/countriesData/tr/index.ts
  var countryNumberUtils83 = {
    iso2: "TR",
    numberUtils: [
      tckimlik_default,
      vkn_default
    ]
  };
  var tr_default = countryNumberUtils83;

  // src/js/numberUtils/countriesData/tw/ban.ts
  function clean167(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator174 = {
    abbreviation: "BAN",
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Taiwanese Unified Business Number",
    localName: "\u7D71\u4E00\u7DE8\u865F",
    maxLength: 8,
    minLength: 8,
    countryPrefix: "TW",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean167(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean167(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean167(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var ban_default = validator174;

  // src/js/numberUtils/countriesData/tw/natid.ts
  function clean168(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var ALPHABET6 = "0123456789ABCDEFGHJKLMNPQRSTUVXYWZIO";
  var validator175 = {
    localName: "\u4E2D\u83EF\u6C11\u570B\u570B\u6C11\u8EAB\u5206\u8B49",
    abbreviation: "NATID",
    type: "NIN" /* NationalIdentificationNumber */,
    name: "National ID Number",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "TW",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean168(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean168(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean168(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [issuer, gender, code, check] = strings_exports.splitAt(value, 1, 2, 9);
      if (!strings_exports.isAlpha(issuer)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!/[1-28-9]/.test(gender)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!strings_exports.isDigits(code)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!strings_exports.isDigits(check)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const leading = ALPHABET6.indexOf(issuer) - 10;
      const sum = weightedSum(`${gender}${code}${check}`, {
        weights: [8, 7, 6, 5, 4, 3, 2, 1, 1],
        alphabet: ALPHABET6,
        modulus: 10
      }) + Math.floor(leading / 10 + 1) + leading * 9;
      if (sum % 10 !== 0) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var natid_default = validator175;

  // src/js/numberUtils/countriesData/tw/tax_code.ts
  function clean169(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator176 = {
    abbreviation: "",
    localName: "",
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Tax Code",
    maxLength: 10,
    minLength: 7,
    countryPrefix: "TW",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean169(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean169(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean169(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10 && value.length !== 7) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (value.length === 7) {
        const [lead, yymmdd] = strings_exports.splitAt(value, 1);
        if (lead !== "9") {
          return { isValid: false, error: new InvalidFormat() };
        }
        if (!strings_exports.isDigits(yymmdd)) {
          return { isValid: false, error: new InvalidFormat() };
        }
        if (!isValidDateCompactYYMMDD(yymmdd, true)) {
          return { isValid: false, error: new InvalidComponent() };
        }
      } else {
        const [yyyymmdd, name] = strings_exports.splitAt(value, 8);
        if (!isValidDateCompactYYYYMMDD(yyyymmdd, true)) {
          return { isValid: false, error: new InvalidComponent() };
        }
        if (!/^[A-Z]+$/i.test(name)) {
          return { isValid: false, error: new InvalidComponent() };
        }
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var tax_code_default = validator176;

  // src/js/numberUtils/countriesData/tw/ubn.ts
  function clean170(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator177 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Taiwanese Business Administration Number",
    localName: "",
    abbreviation: "UBN",
    maxLength: 8,
    minLength: 8,
    countryPrefix: "TW",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean170(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean170(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean170(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const weights2 = [1, 2, 1, 2, 1, 2, 4, 1];
      const digits = weights2.map((w, idx) => String(parseInt(value[idx], 10) * w)).join("");
      const sum = digits.split("").reduce((acc, d) => (acc + parseInt(d, 10)) % 10, 0);
      if (!(sum === 0 || sum === 9 && value[6] === "7")) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var ubn_default = validator177;

  // src/js/numberUtils/countriesData/tw/ui.ts
  function clean171(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator178 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "UI Number",
    localName: "\u4E2D\u83EF\u6C11\u570B\u570B\u6C11\u8EAB\u5206\u8B49",
    abbreviation: "UI",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "TW",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean171(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean171(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean171(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      const [issuer, gender, code, check] = strings_exports.splitAt(value, 1, 2, 9);
      if (!strings_exports.isAlpha(issuer)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!/[A-D]/.test(gender)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!strings_exports.isDigits(code)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!strings_exports.isDigits(check)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const leading = ALPHABET6.indexOf(issuer) - 10;
      const sum = weightedSum(`${gender}${code}${check}`, {
        weights: [8, 7, 6, 5, 4, 3, 2, 1, 1],
        alphabet: ALPHABET6,
        modulus: 10
      }) + Math.floor(leading / 10 + 1) + leading * 9;
      if (sum % 10 !== 0) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var ui_default = validator178;

  // src/js/numberUtils/countriesData/tw/index.ts
  var countryNumberUtils84 = {
    iso2: "TW",
    numberUtils: [
      ban_default,
      natid_default,
      tax_code_default,
      ubn_default,
      ui_default
    ]
  };
  var tw_default = countryNumberUtils84;

  // src/js/numberUtils/countriesData/ua/edrpou.ts
  function clean172(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator179 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Ukrainian Unified State Register of Enterprises and Organizations",
    localName: "\u0404\u0434\u0438\u043D\u043E\u0433\u043E \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u0433\u043E \u0440\u0435\u0454\u0441\u0442\u0440\u0443 \u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0441\u0442\u0432 \u0442\u0430 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0439 \u0423\u043A\u0440\u0430\u0457\u043D\u0438",
    abbreviation: "\u0404\u0414\u0420\u041F\u041E\u0423",
    maxLength: 8,
    minLength: 8,
    countryPrefix: "UA",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean172(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean172(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean172(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const weights2 = "345".includes(front[0]) ? [7, 1, 2, 3, 4, 5, 6] : [1, 2, 3, 4, 5, 6, 7];
      let sum = weightedSum(front, {
        weights: weights2,
        modulus: 11
      });
      if (sum === 10) {
        sum = weightedSum(front, {
          weights: weights2.map((v) => v + 2),
          modulus: 11
        });
      }
      if (String(sum) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var edrpou_default = validator179;

  // src/js/numberUtils/countriesData/ua/rntrc.ts
  function clean173(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator180 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Ukrainian Registration Number of the Taxpayer's Registration Card",
    localName: "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438 \u043F\u043B\u0430\u0442\u043D\u0438\u043A\u0430 \u043F\u043E\u0434\u0430\u0442\u043A\u0456\u0432",
    abbreviation: "\u0420\u041D\u041E\u041A\u041F\u041F",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "UA",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean173(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean173(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean173(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, -1);
      const sum = weightedSum(front, {
        weights: [-1, 5, 7, 9, 4, 6, 10, 5, 7],
        modulus: 11
      });
      if (String(sum % 10) !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var rntrc_default = validator180;

  // src/js/numberUtils/countriesData/ua/index.ts
  var countryNumberUtils85 = {
    iso2: "UA",
    numberUtils: [
      edrpou_default,
      rntrc_default
    ]
  };
  var ua_default = countryNumberUtils85;

  // src/js/numberUtils/countriesData/us/ein.ts
  var prefixes = [
    // Brookhaven
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "11",
    "13",
    "14",
    "16",
    "21",
    "22",
    "23",
    "25",
    "34",
    "51",
    "52",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "65",
    // Andover
    "10",
    "12",
    // Fresno"
    "15",
    "24",
    // Internet
    "20",
    "26",
    "27",
    "45",
    "46",
    "47",
    "81",
    "82",
    "83",
    "84",
    // Cincinnati
    "30",
    "32",
    "35",
    "36",
    "37",
    "38",
    "61",
    // Small Business Administration (SBA)
    "31",
    // Philadelphia
    "33",
    "39",
    "41",
    "42",
    "43",
    "46",
    "48",
    "62",
    "63",
    "64",
    "66",
    "68",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "85",
    "86",
    "87",
    "88",
    "91",
    "92",
    "93",
    "98",
    "99",
    // Kansas City
    "40",
    "44",
    // Austin
    "50",
    "53",
    // Atlanta
    "60",
    "67",
    // Ogden
    "80",
    "90",
    // Memphis
    "94",
    "95"
  ];
  function clean174(input) {
    return strings_exports.cleanUnicode(input, "- ");
  }
  var validator181 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "U.S. Employer Identification Number",
    localName: "Employer Identification Number",
    abbreviation: "EIN",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "US",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean174(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean174(input);
      return strings_exports.splitAt(value, 2).join("-");
    },
    /**
     * Check if the number is a valid EIN number.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input) {
      const [value, error] = clean174(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!prefixes.includes(value.substring(0, 2))) {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var ein_default = validator181;

  // src/js/numberUtils/countriesData/us/ssn.ts
  var invalidSSN = [
    "111111111",
    "222222222",
    "333333333",
    "444444444",
    "555555555",
    "777777777",
    "888888888",
    "999999999",
    "123123123",
    "999999999",
    // Used in Advertising and known "invalid"
    "002281852",
    "042103580",
    "062360749",
    "078051120",
    "095073645",
    "128036045",
    "135016629",
    "141186941",
    "165167999",
    "165187999",
    "165207999",
    "165227999",
    "165247999",
    "189092294",
    "212097694",
    "212099999",
    "219099999",
    "306302348",
    "308125070",
    "457555462",
    "468288779",
    "549241889"
  ];
  function clean175(input) {
    return strings_exports.cleanUnicode(input, "- ");
  }
  var validator182 = {
    type: "SSN" /* SocialSecurityIdentificationNumber */,
    name: "U.S. Social Security Number",
    localName: "Social Security Number",
    abbreviation: "SSN",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "US",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean175(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean175(input);
      return strings_exports.splitAt(value, 3, 5).join("-");
    },
    /**
     * Check if the number is a valid SSN number.
     * This checks the length, formatting and other contraints. It does not check
     * for control letter.
     */
    validate(input) {
      const [value, error] = clean175(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (invalidSSN.includes(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (/^(000|666|9)\d+/.test(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (/^\d{3}00\d{4}/.test(value)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var ssn_default2 = validator182;

  // src/js/numberUtils/countriesData/us/index.ts
  var countryNumberUtils86 = {
    iso2: "US",
    numberUtils: [
      ein_default,
      ssn_default2
    ]
  };
  var us_default = countryNumberUtils86;

  // src/js/numberUtils/countriesData/uy/cedula.ts
  function clean176(input) {
    return strings_exports.cleanUnicode(input, " -/");
  }
  var validator183 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Uruguayan Identity Card Number",
    localName: "C\xE9dula de Identidad",
    abbreviation: "CI",
    maxLength: 8,
    minLength: 8,
    countryPrefix: "UY",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean176(input);
      if (err) {
        throw err;
      }
      return value;
    },
    // 9dddddddd
    // 123456789
    format(input, includeCountryPrefix) {
      const [value] = clean176(input);
      if (value.length <= 1) return value;
      const [a, b, c, d] = strings_exports.splitAt(value, 1, 4, 7);
      return `${a}.${b}${c ? "." + c : ""}${d ? "-" + d : ""}`;
    },
    validate(input) {
      const [value, error] = clean176(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 8) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, 7);
      const sum = weightedSum(front, {
        weights: [2, 9, 8, 7, 6, 3, 4],
        modulus: 10
      });
      if (check !== String((10 - sum) % 10)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var cedula_default3 = validator183;

  // src/js/numberUtils/countriesData/uy/nie.ts
  function clean177(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator184 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "Uruguayan Foreigners Identification Number",
    localName: "N\xFAmero de Identidad de Extranjero",
    abbreviation: "NIE",
    maxLength: 9,
    minLength: 9,
    countryPrefix: "UY",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean177(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean177(input);
      if (value.length <= 2) return value;
      const [a, b, c, d] = strings_exports.splitAt(value, 2, 5, 8);
      return `${a}.${b}${c ? "." + c : ""}${d ? "-" + d : ""}`;
    },
    validate(input) {
      const [value, error] = clean177(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 9) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [front, check] = strings_exports.splitAt(value, 8);
      const digit = String(
        (11 - weightedSum(front, {
          weights: [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
          modulus: 11
        })) % 10
      );
      if (check !== digit) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var nie_default2 = validator184;

  // src/js/numberUtils/libraries/pymod.ts
  function pymod(value, modulus) {
    return (value % modulus + modulus) % modulus;
  }

  // src/js/numberUtils/countriesData/uy/rut.ts
  function clean178(input) {
    const [value, err] = strings_exports.cleanUnicode(input, " -");
    if (err) {
      return [value, err];
    }
    if (value.startsWith("UY")) {
      return [value.substring(2), null];
    }
    return [value, err];
  }
  var validator185 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Uruguayan Tax Number",
    localName: "Registro \xDAnico Tributario",
    abbreviation: "RUT",
    maxLength: 12,
    minLength: 12,
    countryPrefix: "UY",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean178(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean178(input);
      return strings_exports.splitAt(value, 2, -4, -1).join("-");
    },
    validate(input) {
      const [value, error] = clean178(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 12) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (parseInt(value.substring(0, 2), 10) > 21 || value.substring(0, 2) === "00") {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (value.substring(2, 8) === "000000") {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (value.substring(8, 11) !== "001") {
        return { isValid: false, error: new InvalidComponent() };
      }
      const [front, check] = strings_exports.splitAt(value, 11);
      const sum = weightedSum(front, {
        weights: [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
        modulus: 11
      });
      const digit = String(pymod(-sum, 11));
      if (check !== digit) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var rut_default2 = validator185;

  // src/js/numberUtils/countriesData/uy/index.ts
  var countryNumberUtils87 = {
    iso2: "UY",
    numberUtils: [
      cedula_default3,
      nie_default2,
      rut_default2
    ]
  };
  var uy_default = countryNumberUtils87;

  // src/js/numberUtils/countriesData/ve/rif.ts
  var companyTypes = {
    V: 4,
    // natural person born in Venezuela
    E: 8,
    // foreign natural person
    J: 12,
    // company
    P: 16,
    // passport
    G: 20
    // government
  };
  function clean179(input) {
    return strings_exports.cleanUnicode(input, " -");
  }
  var validator186 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Venezuelan VAT Number",
    localName: "Registro \xDAnico de Informaci\xF3n Fiscal",
    abbreviation: "RIF",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "VE",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean179(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean179(input);
      return strings_exports.splitAt(value, 1, 9).join("-");
    },
    validate(input) {
      const [value, error] = clean179(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value.substring(1))) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [ctype, body, check] = strings_exports.splitAt(value, 1, 9);
      const first = companyTypes[ctype];
      if (first === void 0) {
        return { isValid: false, error: new InvalidComponent() };
      }
      const digit = (first + weightedSum(body, {
        weights: [3, 2, 7, 6, 5, 4, 3, 2],
        modulus: 11
      })) % 11;
      if ("00987654321"[digit] !== check) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: ["V", "E"].includes(ctype),
        isCompany: ["J", "G", "P"].includes(ctype)
      };
    }
  };
  var rif_default = validator186;

  // src/js/numberUtils/countriesData/ve/index.ts
  var countryNumberUtils88 = {
    iso2: "VE",
    numberUtils: [
      rif_default
    ]
  };
  var ve_default = countryNumberUtils88;

  // src/js/numberUtils/countriesData/vn/mst.ts
  function clean180(input) {
    return strings_exports.cleanUnicode(input, " -.");
  }
  var validator187 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "Vietnamese Tax Number",
    localName: "M\xE3 s\u1ED1 thu\u1EBF",
    abbreviation: "MST",
    maxLength: 13,
    minLength: 10,
    countryPrefix: "VN",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean180(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean180(input);
      return strings_exports.splitAt(value, 10).join("-");
    },
    validate(input) {
      const [value, error] = clean180(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10 && value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [province, sequence, check, suffix] = strings_exports.splitAt(
        value,
        2,
        9,
        10
      );
      if (sequence === "0000000" || suffix === "000" || province === "00") {
        return { isValid: false, error: new InvalidComponent() };
      }
      const sum = weightedSum(value.substring(0, 9), {
        modulus: 11,
        weights: [31, 29, 23, 19, 17, 13, 7, 5, 3]
      });
      if (check !== String(10 - sum)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: false,
        isCompany: true
      };
    }
  };
  var mst_default = validator187;

  // src/js/numberUtils/countriesData/vn/index.ts
  var countryNumberUtils89 = {
    iso2: "VN",
    numberUtils: [
      mst_default
    ]
  };
  var vn_default2 = countryNumberUtils89;

  // src/js/numberUtils/countriesData/za/idnr.ts
  function clean181(input) {
    return strings_exports.cleanUnicode(input, " ");
  }
  var validator188 = {
    type: "NIN" /* NationalIdentificationNumber */,
    name: "South African Identity Document Number",
    localName: "Identity Document Number",
    abbreviation: "IDNR",
    maxLength: 13,
    minLength: 13,
    countryPrefix: "ZA",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean181(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean181(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean181(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 13) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      const [bdate, gender, , citizen] = strings_exports.splitAt(value, 6, 7, 10, 11);
      if (!"01".includes(citizen)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!strings_exports.isDigits(gender)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!isValidDateCompactYYMMDD(bdate, true)) {
        return { isValid: false, error: new InvalidComponent() };
      }
      if (!luhnChecksumValidate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        isCompany: false
      };
    }
  };
  var idnr_default4 = validator188;

  // src/js/numberUtils/countriesData/za/tin.ts
  function clean182(input) {
    return strings_exports.cleanUnicode(input, " -/");
  }
  var validator189 = {
    type: "TIN" /* TaxpayerIdentificationNumber */,
    name: "South African Tax Identification Number",
    localName: "Tax Identification Number",
    abbreviation: "TIN",
    maxLength: 10,
    minLength: 10,
    countryPrefix: "ZA",
    compact(input, includeCountryPrefix) {
      const [value, err] = clean182(input);
      if (err) {
        throw err;
      }
      return value;
    },
    format(input, includeCountryPrefix) {
      const [value] = clean182(input);
      return value;
    },
    validate(input) {
      const [value, error] = clean182(input);
      if (error) {
        return { isValid: false, error };
      }
      if (value.length !== 10) {
        return { isValid: false, error: new InvalidLength() };
      }
      if (!strings_exports.isDigits(value)) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!"01239".includes(value[0])) {
        return { isValid: false, error: new InvalidFormat() };
      }
      if (!luhnChecksumValidate(value)) {
        return { isValid: false, error: new InvalidChecksum() };
      }
      return {
        isValid: true,
        compact: value,
        isIndividual: true,
        // TIN can be either. cannot determine
        isCompany: true
        // TIN can be either. cannot determine
      };
    }
  };
  var tin_default6 = validator189;

  // src/js/numberUtils/countriesData/za/index.ts
  var countryNumberUtils90 = {
    iso2: "ZA",
    numberUtils: [
      idnr_default4,
      tin_default6
    ]
  };
  var za_default = countryNumberUtils90;

  // src/js/numberUtils/countriesData/index.ts
  var countryNumberUtils91 = [
    ad_default,
    al_default,
    ar_default,
    at_default,
    au_default,
    az_default,
    ba_default,
    be_default,
    bg_default,
    br_default,
    by_default,
    bz_default,
    ca_default,
    ch_default,
    cl_default,
    cn_default,
    co_default,
    cr_default2,
    cu_default,
    cy_default,
    cz_default,
    de_default,
    dk_default,
    do_default,
    dz_default,
    ec_default,
    ee_default,
    eg_default,
    es_default,
    fi_default,
    fo_default,
    fr_default,
    gb_default,
    gh_default,
    gn_default,
    gr_default,
    gt_default,
    hk_default,
    hr_default,
    hu_default,
    id_default,
    ie_default,
    il_default,
    in_default,
    is_default,
    it_default,
    jp_default,
    ke_default,
    kr_default,
    li_default,
    lk_default,
    lt_default,
    lu_default,
    lv_default,
    ma_default,
    mc_default,
    md_default,
    me_default,
    mk_default,
    mt_default,
    mu_default,
    mx_default,
    my_default,
    nl_default,
    no_default,
    nz_default,
    pe_default,
    pk_default,
    pl_default,
    pt_default,
    py_default,
    ro_default,
    rs_default,
    ru_default,
    se_default,
    sg_default,
    si_default,
    sk_default,
    sm_default,
    sv_default,
    th_default,
    tn_default2,
    tr_default,
    tw_default,
    ua_default,
    us_default,
    uy_default,
    ve_default,
    vn_default2,
    za_default
  ];
  var countriesData_default = countryNumberUtils91;

  // src/js/numberUtils/index.ts
  var numberUtils_default = countriesData_default;

  // src/js/input/utils.ts
  function getNumberUtils(countryCode, numberType) {
    const countryNumberUtils92 = numberUtils_default.find(({ iso2 }) => iso2.toLowerCase() === countryCode.toLowerCase());
    if (!countryNumberUtils92) {
      throw new InvalidCountry();
    }
    const countryNumberTypeUtils = countryNumberUtils92.numberUtils.find(({ type }) => type === numberType);
    if (!countryNumberTypeUtils) {
      throw new InvalidNumberType();
    }
    return countryNumberTypeUtils;
  }
  function formatNumberAsYouType(number, countryISO2, numberType) {
    try {
      const numberUtils = getNumberUtils(countryISO2, numberType);
      return numberUtils.format(number, false);
    } catch (e) {
      return number;
    }
  }
  function formatNumber(number, countryISO2, numberType) {
    try {
      const numberUtils = getNumberUtils(countryISO2, numberType);
      return numberUtils.format(number, false);
    } catch (e) {
      return number;
    }
  }
  function getExampleNumber(countryISO2, numberType) {
    try {
      const numberUtils = getNumberUtils(countryISO2, numberType);
      return numberUtils.placeholder || "";
    } catch (e) {
      return "";
    }
  }
  function getCoreNumber(number, countryISO2, numberType) {
    try {
      const numberUtils = getNumberUtils(countryISO2, numberType);
      return numberUtils.compact(number, false);
    } catch (e) {
      return number;
    }
  }
  function getFullNumber(number, countryISO2, numberType, includeFormatting) {
    try {
      const numberUtils = getNumberUtils(countryISO2, numberType);
      return includeFormatting ? numberUtils.format(number, true) : numberUtils.compact(number, true);
    } catch (e) {
      return number;
    }
  }
  function isValidNumber(number, countryISO2, numberType) {
    try {
      const numberUtils = getNumberUtils(countryISO2, numberType);
      return numberUtils.validate(number);
    } catch (e) {
      const error = e instanceof ValidationError ? e : new ValidationError(e);
      const validateReturn = {
        isValid: false,
        error
      };
      return validateReturn;
    }
  }
  function getMaxLength(countryISO2, numberType) {
    try {
      const numberUtils = getNumberUtils(countryISO2, numberType);
      return numberUtils.maxLength;
    } catch (e) {
      return 0;
    }
  }
  function getMinLength(countryISO2, numberType) {
    try {
      const numberUtils = getNumberUtils(countryISO2, numberType);
      return numberUtils.minLength;
    } catch (e) {
      return 0;
    }
  }

  // src/js/input/internationalNumberInputWithUtils.ts
  var utilsTmp = {
    formatNumber,
    formatNumberAsYouType,
    getCoreNumber,
    getExampleNumber,
    getFullNumber,
    isValidNumber,
    getMaxLength,
    getMinLength,
    numberType: "NIN" /* NationalIdentificationNumber */
  };
  internationalNumberInput.utils = utilsTmp;
  var internationalNumberInputWithUtils_default = internationalNumberInput;
  return __toCommonJS(internationalNumberInputWithUtils_exports);
})();
internationalNumberInput = internationalNumberInput.default;

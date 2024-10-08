/*
 * International Number Input v0.1.0
 * https://github.com/ivomfrazao/international-number-input.git
 * Licensed under the MIT license
 */

// UMD
(function(factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    window.internationalNumberInput = factory();
  }
}(() => {

var factoryOutput = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
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
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/guid-typescript/dist/guid.js
  var require_guid = __commonJS({
    "node_modules/guid-typescript/dist/guid.js"(exports) {
      "use strict";
      exports.__esModule = true;
      var Guid2 = (
        /** @class */
        function() {
          function Guid3(guid) {
            if (!guid) {
              throw new TypeError("Invalid argument; `value` has no value.");
            }
            this.value = Guid3.EMPTY;
            if (guid && Guid3.isGuid(guid)) {
              this.value = guid;
            }
          }
          Guid3.isGuid = function(guid) {
            var value = guid.toString();
            return guid && (guid instanceof Guid3 || Guid3.validator.test(value));
          };
          Guid3.create = function() {
            return new Guid3([Guid3.gen(2), Guid3.gen(1), Guid3.gen(1), Guid3.gen(1), Guid3.gen(3)].join("-"));
          };
          Guid3.createEmpty = function() {
            return new Guid3("emptyguid");
          };
          Guid3.parse = function(guid) {
            return new Guid3(guid);
          };
          Guid3.raw = function() {
            return [Guid3.gen(2), Guid3.gen(1), Guid3.gen(1), Guid3.gen(1), Guid3.gen(3)].join("-");
          };
          Guid3.gen = function(count) {
            var out = "";
            for (var i = 0; i < count; i++) {
              out += ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
            }
            return out;
          };
          Guid3.prototype.equals = function(other) {
            return Guid3.isGuid(other) && this.value === other.toString();
          };
          Guid3.prototype.isEmpty = function() {
            return this.value === Guid3.EMPTY;
          };
          Guid3.prototype.toString = function() {
            return this.value;
          };
          Guid3.prototype.toJSON = function() {
            return {
              value: this.value
            };
          };
          Guid3.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
          Guid3.EMPTY = "00000000-0000-0000-0000-000000000000";
          return Guid3;
        }()
      );
      exports.Guid = Guid2;
    }
  });

  // src/js/input/InternationalNumberInput.ts
  var InternationalNumberInput_exports = {};
  __export(InternationalNumberInput_exports, {
    default: () => InternationalNumberInput_default,
    internationalNumberInput: () => internationalNumberInput
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
    [
      "af",
      "93"
    ],
    [
      "al",
      "355"
    ],
    [
      "dz",
      "213"
    ],
    [
      "as",
      "1",
      5,
      ["684"]
    ],
    [
      "ad",
      "376"
    ],
    [
      "ao",
      "244"
    ],
    [
      "ai",
      "1",
      6,
      ["264"]
    ],
    [
      "ag",
      "1",
      7,
      ["268"]
    ],
    [
      "ar",
      "54"
    ],
    [
      "am",
      "374"
    ],
    [
      "aw",
      "297"
    ],
    [
      "ac",
      "247"
    ],
    [
      "au",
      "61",
      0
    ],
    [
      "at",
      "43"
    ],
    [
      "az",
      "994"
    ],
    [
      "bs",
      "1",
      8,
      ["242"]
    ],
    [
      "bh",
      "973"
    ],
    [
      "bd",
      "880"
    ],
    [
      "bb",
      "1",
      9,
      ["246"]
    ],
    [
      "by",
      "375"
    ],
    [
      "be",
      "32"
    ],
    [
      "bz",
      "501"
    ],
    [
      "bj",
      "229"
    ],
    [
      "bm",
      "1",
      10,
      ["441"]
    ],
    [
      "bt",
      "975"
    ],
    [
      "bo",
      "591"
    ],
    [
      "ba",
      "387"
    ],
    [
      "bw",
      "267"
    ],
    [
      "br",
      "55"
    ],
    [
      "io",
      "246"
    ],
    [
      "vg",
      "1",
      11,
      ["284"]
    ],
    [
      "bn",
      "673"
    ],
    [
      "bg",
      "359"
    ],
    [
      "bf",
      "226"
    ],
    [
      "bi",
      "257"
    ],
    [
      "kh",
      "855"
    ],
    [
      "cm",
      "237"
    ],
    [
      "ca",
      "1",
      1,
      ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "879", "902", "905"]
    ],
    [
      "cv",
      "238"
    ],
    [
      "bq",
      "599",
      1,
      ["3", "4", "7"]
    ],
    [
      "ky",
      "1",
      12,
      ["345"]
    ],
    [
      "cf",
      "236"
    ],
    [
      "td",
      "235"
    ],
    [
      "cl",
      "56"
    ],
    [
      "cn",
      "86"
    ],
    [
      "cx",
      "61",
      2,
      ["89164"]
    ],
    [
      "cc",
      "61",
      1,
      ["89162"]
    ],
    [
      "co",
      "57"
    ],
    [
      "km",
      "269"
    ],
    [
      "cg",
      "242"
    ],
    [
      "cd",
      "243"
    ],
    [
      "ck",
      "682"
    ],
    [
      "cr",
      "506"
    ],
    [
      "ci",
      "225"
    ],
    [
      "hr",
      "385"
    ],
    [
      "cu",
      "53"
    ],
    [
      "cw",
      "599",
      0
    ],
    [
      "cy",
      "357"
    ],
    [
      "cz",
      "420"
    ],
    [
      "dk",
      "45"
    ],
    [
      "dj",
      "253"
    ],
    [
      "dm",
      "1",
      13,
      ["767"]
    ],
    [
      "do",
      "1",
      2,
      ["809", "829", "849"]
    ],
    [
      "ec",
      "593"
    ],
    [
      "eg",
      "20"
    ],
    [
      "sv",
      "503"
    ],
    [
      "gq",
      "240"
    ],
    [
      "er",
      "291"
    ],
    [
      "ee",
      "372"
    ],
    [
      "sz",
      "268"
    ],
    [
      "et",
      "251"
    ],
    [
      "fk",
      "500"
    ],
    [
      "fo",
      "298"
    ],
    [
      "fj",
      "679"
    ],
    [
      "fi",
      "358",
      0
    ],
    [
      "fr",
      "33"
    ],
    [
      "gf",
      "594"
    ],
    [
      "pf",
      "689"
    ],
    [
      "ga",
      "241"
    ],
    [
      "gm",
      "220"
    ],
    [
      "ge",
      "995"
    ],
    [
      "de",
      "49"
    ],
    [
      "gh",
      "233"
    ],
    [
      "gi",
      "350"
    ],
    [
      "gr",
      "30"
    ],
    [
      "gl",
      "299"
    ],
    [
      "gd",
      "1",
      14,
      ["473"]
    ],
    [
      "gp",
      "590",
      0
    ],
    [
      "gu",
      "1",
      15,
      ["671"]
    ],
    [
      "gt",
      "502"
    ],
    [
      "gg",
      "44",
      1,
      ["1481", "7781", "7839", "7911"]
    ],
    [
      "gn",
      "224"
    ],
    [
      "gw",
      "245"
    ],
    [
      "gy",
      "592"
    ],
    [
      "ht",
      "509"
    ],
    [
      "hn",
      "504"
    ],
    [
      "hk",
      "852"
    ],
    [
      "hu",
      "36"
    ],
    [
      "is",
      "354"
    ],
    [
      "in",
      "91"
    ],
    [
      "id",
      "62"
    ],
    [
      "ir",
      "98"
    ],
    [
      "iq",
      "964"
    ],
    [
      "ie",
      "353"
    ],
    [
      "im",
      "44",
      2,
      ["1624", "74576", "7524", "7924", "7624"]
    ],
    [
      "il",
      "972"
    ],
    [
      "it",
      "39",
      0
    ],
    [
      "jm",
      "1",
      4,
      ["876", "658"]
    ],
    [
      "jp",
      "81"
    ],
    [
      "je",
      "44",
      3,
      ["1534", "7509", "7700", "7797", "7829", "7937"]
    ],
    [
      "jo",
      "962"
    ],
    [
      "kz",
      "7",
      1,
      ["33", "7"]
    ],
    [
      "ke",
      "254"
    ],
    [
      "ki",
      "686"
    ],
    [
      "xk",
      "383"
    ],
    [
      "kw",
      "965"
    ],
    [
      "kg",
      "996"
    ],
    [
      "la",
      "856"
    ],
    [
      "lv",
      "371"
    ],
    [
      "lb",
      "961"
    ],
    [
      "ls",
      "266"
    ],
    [
      "lr",
      "231"
    ],
    [
      "ly",
      "218"
    ],
    [
      "li",
      "423"
    ],
    [
      "lt",
      "370"
    ],
    [
      "lu",
      "352"
    ],
    [
      "mo",
      "853"
    ],
    [
      "mg",
      "261"
    ],
    [
      "mw",
      "265"
    ],
    [
      "my",
      "60"
    ],
    [
      "mv",
      "960"
    ],
    [
      "ml",
      "223"
    ],
    [
      "mt",
      "356"
    ],
    [
      "mh",
      "692"
    ],
    [
      "mq",
      "596"
    ],
    [
      "mr",
      "222"
    ],
    [
      "mu",
      "230"
    ],
    [
      "yt",
      "262",
      1,
      ["269", "639"]
    ],
    [
      "mx",
      "52"
    ],
    [
      "fm",
      "691"
    ],
    [
      "md",
      "373"
    ],
    [
      "mc",
      "377"
    ],
    [
      "mn",
      "976"
    ],
    [
      "me",
      "382"
    ],
    [
      "ms",
      "1",
      16,
      ["664"]
    ],
    [
      "ma",
      "212",
      0
    ],
    [
      "mz",
      "258"
    ],
    [
      "mm",
      "95"
    ],
    [
      "na",
      "264"
    ],
    [
      "nr",
      "674"
    ],
    [
      "np",
      "977"
    ],
    [
      "nl",
      "31"
    ],
    [
      "nc",
      "687"
    ],
    [
      "nz",
      "64"
    ],
    [
      "ni",
      "505"
    ],
    [
      "ne",
      "227"
    ],
    [
      "ng",
      "234"
    ],
    [
      "nu",
      "683"
    ],
    [
      "nf",
      "672"
    ],
    [
      "kp",
      "850"
    ],
    [
      "mk",
      "389"
    ],
    [
      "mp",
      "1",
      17,
      ["670"]
    ],
    [
      "no",
      "47",
      0
    ],
    [
      "om",
      "968"
    ],
    [
      "pk",
      "92"
    ],
    [
      "pw",
      "680"
    ],
    [
      "ps",
      "970"
    ],
    [
      "pa",
      "507"
    ],
    [
      "pg",
      "675"
    ],
    [
      "py",
      "595"
    ],
    [
      "pe",
      "51"
    ],
    [
      "ph",
      "63"
    ],
    [
      "pl",
      "48"
    ],
    [
      "pt",
      "351"
    ],
    [
      "pr",
      "1",
      3,
      ["787", "939"]
    ],
    [
      "qa",
      "974"
    ],
    [
      "re",
      "262",
      0
    ],
    [
      "ro",
      "40"
    ],
    [
      "ru",
      "7",
      0
    ],
    [
      "rw",
      "250"
    ],
    [
      "ws",
      "685"
    ],
    [
      "sm",
      "378"
    ],
    [
      "st",
      "239"
    ],
    [
      "sa",
      "966"
    ],
    [
      "sn",
      "221"
    ],
    [
      "rs",
      "381"
    ],
    [
      "sc",
      "248"
    ],
    [
      "sl",
      "232"
    ],
    [
      "sg",
      "65"
    ],
    [
      "sx",
      "1",
      21,
      ["721"]
    ],
    [
      "sk",
      "421"
    ],
    [
      "si",
      "386"
    ],
    [
      "sb",
      "677"
    ],
    [
      "so",
      "252"
    ],
    [
      "za",
      "27"
    ],
    [
      "kr",
      "82"
    ],
    [
      "ss",
      "211"
    ],
    [
      "es",
      "34"
    ],
    [
      "lk",
      "94"
    ],
    [
      "bl",
      "590",
      1
    ],
    [
      "sh",
      "290"
    ],
    [
      "kn",
      "1",
      18,
      ["869"]
    ],
    [
      "lc",
      "1",
      19,
      ["758"]
    ],
    [
      "mf",
      "590",
      2
    ],
    [
      "pm",
      "508"
    ],
    [
      "vc",
      "1",
      20,
      ["784"]
    ],
    [
      "sd",
      "249"
    ],
    [
      "sr",
      "597"
    ],
    [
      "sj",
      "47",
      1,
      ["79"]
    ],
    [
      "se",
      "46"
    ],
    [
      "ch",
      "41"
    ],
    [
      "sy",
      "963"
    ],
    [
      "tw",
      "886"
    ],
    [
      "tj",
      "992"
    ],
    [
      "tz",
      "255"
    ],
    [
      "th",
      "66"
    ],
    [
      "tl",
      "670"
    ],
    [
      "tg",
      "228"
    ],
    [
      "tk",
      "690"
    ],
    [
      "to",
      "676"
    ],
    [
      "tt",
      "1",
      22,
      ["868"]
    ],
    [
      "tn",
      "216"
    ],
    [
      "tr",
      "90"
    ],
    [
      "tm",
      "993"
    ],
    [
      "tc",
      "1",
      23,
      ["649"]
    ],
    [
      "tv",
      "688"
    ],
    [
      "ug",
      "256"
    ],
    [
      "ua",
      "380"
    ],
    [
      "ae",
      "971"
    ],
    [
      "gb",
      "44",
      0
    ],
    [
      "us",
      "1",
      0
    ],
    [
      "uy",
      "598"
    ],
    [
      "vi",
      "1",
      24,
      ["340"]
    ],
    [
      "uz",
      "998"
    ],
    [
      "vu",
      "678"
    ],
    [
      "va",
      "39",
      1,
      ["06698"]
    ],
    [
      "ve",
      "58"
    ],
    [
      "vn",
      "84"
    ],
    [
      "wf",
      "681"
    ],
    [
      "eh",
      "212",
      1,
      ["5288", "5289"]
    ],
    [
      "ye",
      "967"
    ],
    [
      "zm",
      "260"
    ],
    [
      "zw",
      "263"
    ],
    [
      "ax",
      "358",
      1,
      ["18"]
    ]
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

  // src/js/input/InternationalNumberInput.class.ts
  var import_guid_typescript = __toESM(require_guid());

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

  // src/js/input/InternationalNumberInput.class.ts
  var Ini = class {
    constructor(input, customOptions = {}) {
      this.id = import_guid_typescript.Guid.create().toString();
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
        this.options.countryOrder = this.options.countryOrder.map((country) => country.toLowerCase());
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
      this.numberInput.classList.add(buildElementClass(this.options.styles, "elementNumberInputClass" /* NumberInput */));
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
      const wrapper = createDOMElement(
        "div",
        {
          class: parentClass
        }
      );
      this.numberInput.parentNode?.insertBefore(wrapper, this.numberInput);
      if (allowDropdown || showFlags) {
        this.countryContainer = createDOMElement(
          "div",
          {
            class: buildElementClass(this.options.styles, "elementCountryContainerClass" /* CountryContainer */)
          },
          wrapper
        );
        if (allowDropdown) {
          this.selectedCountry = createDOMElement(
            "button",
            {
              type: "button",
              class: buildElementClass(this.options.styles, "elementSelectedCountryClass" /* SelectedCountry */),
              "aria-expanded": "false",
              "aria-label": this.options.i18n.selectedCountryAriaLabel,
              "aria-haspopup": "true",
              "aria-controls": `${buildElementClass(this.options.styles, "elementDropdownContentClass" /* DropdownContent */)}-${this.id}`,
              "role": "combobox"
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
              class: buildElementClass(styles, "elementSelectedCountryClass" /* SelectedCountry */)
            },
            this.countryContainer
          );
        }
        const selectedCountryPrimary = createDOMElement(
          "div",
          {
            class: buildElementClass(this.options.styles, "elementSelectedCountryPrimaryClass" /* SelectedCountryPrimary */)
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
            class: buildElementClass(this.options.styles, "elementAccessibilityTextClass" /* AccessibilityText */)
          },
          this.selectedCountryInner
        );
        if (allowDropdown) {
          this.dropdownArrow = createDOMElement(
            "div",
            {
              class: buildElementClass(this.options.styles, "elementArrowClass" /* Arrow */),
              "aria-hidden": "true"
            },
            selectedCountryPrimary
          );
          const extraClasses = fixDropdownWidth ? "" : buildElementClass(styles, void 0, "attributeFlexibleDropdownWidthClass" /* FlexibleDropdownWidth */);
          this.dropdownContent = createDOMElement("div", {
            id: `${buildElementClass(this.options.styles, "elementDropdownContentClass" /* DropdownContent */)}-${this.id}`,
            class: `${buildElementClass(this.options.styles, "elementDropdownContentClass" /* DropdownContent */)} ${buildElementClass(this.options.styles, "elementHideClass" /* Hide */)} ${extraClasses}`
          });
          if (countrySearch) {
            this.searchInput = createDOMElement(
              "input",
              {
                type: "text",
                class: buildElementClass(styles, "elementSearchInputClass" /* SearchInput */),
                placeholder: i18n.searchPlaceholder,
                role: "combobox",
                "aria-expanded": "true",
                "aria-label": i18n.searchPlaceholder,
                "aria-controls": `${buildElementClass(this.options.styles, "elementCountryListboxClass" /* CountryListbox */)}-${this.id}`,
                "aria-autocomplete": "list",
                "autocomplete": "off"
              },
              this.dropdownContent
            );
            this.searchResultsA11yText = createDOMElement(
              "span",
              {
                class: buildElementClass(this.options.styles, "elementAccessibilityTextClass" /* AccessibilityText */)
              },
              this.dropdownContent
            );
          }
          this.countryList = createDOMElement(
            "ul",
            {
              class: buildElementClass(this.options.styles, "elementCountryListboxClass" /* CountryListbox */),
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
            this.dropdown = createDOMElement(
              "div",
              {
                class: dropdownClasses
              }
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
          this.hiddenInput = createDOMElement(
            "input",
            {
              type: "hidden",
              name: names.phone
            }
          );
          wrapper.appendChild(this.hiddenInput);
        }
        if (names.country) {
          this.hiddenInputCountry = createDOMElement(
            "input",
            {
              type: "hidden",
              name: names.country
            }
          );
          wrapper.appendChild(this.hiddenInputCountry);
        }
      }
    }
    /**
     * For each country: add a country list item <li> to the countryList <ul> container.
     */
    _appendListItems() {
      this.countries.forEach((country, index) => {
        const extraClass = index === 0 ? buildElementClass(this.options.styles, "elementHighlightClass" /* Highlight */) : "";
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
          const flagBoxElement = createDOMElement(
            "div",
            {
              class: buildElementClass(this.options.styles, "elementFlagBoxClass" /* FlagBox */)
            }
          );
          createDOMElement(
            "div",
            {
              class: `${buildElementClass(this.options.styles, "elementFlagClass" /* Flag */)} ${buildElementClass(this.options.styles, country.iso2)}`
            },
            flagBoxElement
          );
          listItem.insertAdjacentElement(
            "beforeend",
            flagBoxElement
          );
        }
        const content = createDOMElement(
          "span",
          {
            class: buildElementClass(this.options.styles, "elementCountryNameClass" /* CountryName */)
          }
        );
        content.insertAdjacentText(
          "beforeend",
          country.name
        );
        listItem.insertAdjacentElement(
          "beforeend",
          content
        );
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
      const elementHideClass = buildElementClass(this.options.styles, "elementHideClass" /* Hide */);
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
      this.selectedCountry.addEventListener("click", this._handleClickSelectedCountry);
      this._handleCountryContainerKeydown = (e) => {
        const isDropdownHidden = this.dropdownContent.classList.contains(elementHideClass);
        if (isDropdownHidden && ["ArrowUp" /* ArrowUp */, "ArrowDown" /* ArrowDown */, " " /* Space */, "Enter" /* Enter */].map((key) => key.toString()).includes(e.key)) {
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
                setTimeout(() => forEachInstance("handleAutoCountry"));
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
          const valueBeforeCaret = this.numberInput.value.substring(0, currentCaretPos);
          const formattedValue = this._formatNumberAsYouType();
          this.numberInput.value = formattedValue;
        }
      };
      this.numberInput.addEventListener("input", this._handleInputEvent);
      if (strictMode) {
        this._handleKeydownEvent = (e) => {
          if (e.key && e.key.length === 1 && !e.altKey && !e.ctrlKey && !e.metaKey) {
            if (strictMode) {
              const isInitialPlus = this.numberInput.selectionStart === 0 && e.key === "+";
              const isNumeric = /^[0-9]$/.test(e.key);
              const isAllowedChar = isInitialPlus || isNumeric;
              const fullNumber = this._getFullNumber();
              const coreNumber = InternationalNumberInput_default.utils.getCoreNumber(fullNumber, this.selectedCountryData.iso2, this.options.numberType);
              const hasReachedMaxLength = this.maxCoreNumberLength && coreNumber.length >= this.maxCoreNumberLength;
              const selectedText = this.numberInput.value.substring(this.numberInput.selectionStart || 0, this.numberInput.selectionEnd || 0);
              const hasSelectedDigit = /\d/.test(selectedText);
              if (!isAllowedChar || hasReachedMaxLength && !hasSelectedDigit) {
                e.preventDefault();
              }
            }
          }
        };
        this.numberInput.addEventListener("keydown", this._handleKeydownEvent);
      }
    }
    /**
     * Adhere to the input's maxlength attr.
     * @param number The number the user inputted.
     * @returns The number limited to the max length allowed
     */
    _cap(number) {
      const max = parseInt(this.numberInput.getAttribute("maxlength") || "", 10);
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
      this.dropdownContent.classList.remove(buildElementClass(this.options.styles, "elementHideClass" /* Hide */));
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
      this.dropdownArrow.classList.add(buildElementClass(this.options.styles, "elementArrowClass" /* Arrow */, "attributeUpClass" /* Up */));
      this.dropdownArrow.classList.add(buildElementClass(this.options.styles, "elementArrowClass" /* Arrow */, "attributeDownClass" /* Down */));
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
      const countryClass = buildElementClass(this.options.styles, "elementCountryClass" /* Country */);
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
      this.countryList.addEventListener("click", this._handleClickCountryList);
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
        if (["ArrowUp" /* ArrowUp */, "ArrowDown" /* ArrowDown */, "Enter" /* Enter */, "Escape" /* Escape */].map((key) => key.toString()).includes(e.key)) {
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
        this.searchInput.addEventListener("input", this._handleSearchChange);
        this.searchInput.addEventListener("click", (e) => e.stopPropagation());
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
        searchText = i18n.multipleSearchResults?.replace("${count}", count.toString());
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
      const elementHighlightClass = buildElementClass(this.options.styles, "elementHighlightClass" /* Highlight */);
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
        this.selectedCountry.setAttribute("aria-activedescendant", activeDescendant);
        if (this.options.countrySearch) {
          this.searchInput.setAttribute("aria-activedescendant", activeDescendant);
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
      const {
        autoPlaceholder,
        numberType,
        customPlaceholder
      } = this.options;
      const shouldSetPlaceholder = autoPlaceholder === "agressive" /* Aggressive */ || !this.hadInitialPlaceholder && autoPlaceholder === "polite" /* Polite */;
      if (shouldSetPlaceholder && InternationalNumberInput_default.utils) {
        let placeholder = this.selectedCountryData?.iso2 ? InternationalNumberInput_default.utils.getExampleNumber(
          this.selectedCountryData?.iso2,
          numberType
        ) : "";
        placeholder = this._beforeSetNumber(placeholder);
        if (typeof customPlaceholder === "function") {
          placeholder = customPlaceholder(placeholder, this.selectedCountryData);
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
      this.dropdownContent.classList.add(buildElementClass(this.options.styles, "elementHideClass" /* Hide */));
      this.selectedCountry.setAttribute("aria-expanded", "false");
      this.selectedCountry.removeAttribute("aria-activedescendant");
      if (this.highlightedItem) {
        this.highlightedItem.setAttribute("aria-selected", "false");
      }
      if (this.options.countrySearch) {
        this.searchInput.removeAttribute("aria-activedescendant");
      }
      this.dropdownArrow.classList.remove(buildElementClass(this.options.styles, "elementArrowClass" /* Arrow */, "attributeUpClass" /* Up */));
      document.removeEventListener("keydown", this._handleKeydownOnDropdown);
      if (this.options.countrySearch) {
        this.searchInput.removeEventListener("input", this._handleSearchChange);
      }
      document.documentElement.removeEventListener(
        "click",
        this._handleClickOffToClose
      );
      this.countryList.removeEventListener(
        "mouseover",
        this._handleMouseoverCountryList
      );
      this.countryList.removeEventListener("click", this._handleClickCountryList);
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
      const result = InternationalNumberInput_default.utils ? InternationalNumberInput_default.utils.formatNumberAsYouType(val, this.selectedCountryData?.iso2, this.options.numberType) : val;
      return result;
    }
    //**************************
    //*  SECRET PUBLIC METHODS
    //**************************
    /**
     * Handles the geoip call return.
     */
    handleAutoCountry() {
      if (this.options.initialCountry === "auto" && InternationalNumberInput_default.autoCountry) {
        this.defaultCountry = InternationalNumberInput_default.autoCountry;
        const hasSelectedCountryOrGlobe = this.selectedCountryData?.iso2 || this.selectedCountryInner.classList.contains(buildElementClass(this.options.styles, "elementGlobeClass" /* Globe */));
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
    //*  PUBLIC METHODS
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
      this.numberInput.removeEventListener("input", this._handleInputEvent);
      if (this._handleKeydownEvent) {
        this.numberInput.removeEventListener("keydown", this._handleKeydownEvent);
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
        return InternationalNumberInput_default.utils.isValidNumber(this._getFullNumber(), iso2, this.options.numberType);
      }
      return { isValid: false, error: new ValidationError("An unknown error occurred") };
      ;
    }
    /**
     * Validates the currently entered number.
     * @returns Identifies if the entered number is valid.
     */
    isValidNumber() {
      const val = this._getFullNumber();
      return InternationalNumberInput_default.utils ? InternationalNumberInput_default.utils.isValidNumber(val, this.selectedCountryData?.iso2, this.options.numberType).isValid : false;
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
      input.setAttribute("data-international-number-input-id", ini.id.toString());
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
        const id = input.getAttribute("data-international-number-input-id");
        return id ? internationalNumberInput.instances[id] : null;
      },
      //* A map from instance ID to instance object.
      instances: {},
      loadUtils,
      version: "0.1.0"
    }
  );
  var InternationalNumberInput_default = internationalNumberInput;
  return __toCommonJS(InternationalNumberInput_exports);
})();

// UMD
  return factoryOutput.default;
}));

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A TypeScript plugin that attaches a searchable country-flag dropdown to any `<input>` element and provides formatting, placeholder generation, and validation for international standard numbers — national ID cards, tax IDs (VAT/TIN), and social security numbers. The set of supported countries, number types, and validation rules is designed to be extended; the countries currently implemented are a starting point, not a fixed list.

## Commands

Node.js and npm are required but are not globally installed in the dev environment. Use the node binary at:
```
~/.vscode-server/bin/10c8e557c8b9f9ed0a87f61f1c9a44bde731c409/node
```

```bash
# Full build (CSS + JS + translations)
npm run build          # grunt build

# JS only (lint → tsc declarations → esbuild bundle → replace)
npm run build:js       # grunt js

# Fast JS build (esbuild only, no lint/tsc)
npm run build:jsfast   # node build.js

# Run all tests
npm run jest           # jest

# Run a single test file
npx jest src/js/numberUtils/countriesData/es/dni.spec.ts

# Run tests matching a pattern
npx jest --testPathPattern="countriesData/es"

# Lint
npm run lint:js        # eslint src/js/input/InternationalNumberInput.ts

# Spell check
npm run lint:spelling  # cspell
```

`tsc` only generates `.d.ts` declarations (see `tsconfig.json` — `emitDeclarationOnly: true`). Actual bundling is done by esbuild via `build.js`.

## Architecture

### Two separate bundles

The build produces two distinct bundles:

| Bundle | Entry point | Purpose |
|---|---|---|
| `internationalNumberInput.js` | `src/js/input/InternationalNumberInput.ts` | UI plugin only — no validators |
| `internationalNumberInputWithUtils.js` | `src/js/input/internationalNumberInputWithUtils.ts` | Plugin + all country validators bundled together |

The UI plugin loads validators lazily at runtime via `loadUtils()` (a path to the utils bundle passed as an option). `internationalNumberInputWithUtils.ts` is the convenience bundle that skips that lazy load.

### Validator data flow

```
countriesData/index.ts          ← imports all country modules (add new ones here)
  └── {cc}/index.ts             ← CountryStandardNumberUtils (iso2 + numberUtils[])
        └── {validator}.ts      ← StandardNumberUtils (one number type per file)

numberUtils/index.ts            ← re-exports countriesData
input/utils.ts                  ← getNumberUtils(iso2, NumberType) → StandardNumberUtils
internationalNumberInputWithUtils.ts  ← wires utils.ts into the plugin instance
```

`utils.ts` looks up a validator by `iso2` (case-insensitive) then by `type` (exact `NumberType` enum match). If either lookup fails it throws `InvalidCountry` or `InvalidNumberType`.

### Key types (`src/js/types.ts`)

```typescript
enum NumberType { NIN = "NIN", TIN = "TIN", SSN = "SSN" }

interface StandardNumberUtils {
  type: NumberType;
  name: string;          // English name
  localName: string;     // Name in local language
  abbreviation?: string;
  placeholder?: string;
  maxLength: number;     // length of compact (stripped) form
  minLength: number;
  countryPrefix: string; // ISO2 uppercase

  compact(value: string, includeCountryPrefix: boolean): string;
  format(value: string, includeCountryPrefix: boolean): string;
  validate(value: string): ValidateReturn;
}

interface CountryStandardNumberUtils {
  iso2: string;          // uppercase ISO 3166-1 alpha-2
  numberUtils: StandardNumberUtils[];
}
```

### Validation error hierarchy (`src/js/exceptions.ts`)

All validation errors extend `ValidationError`. Validators must throw (or return `{ isValid: false, error }` with) one of:
- `InvalidLength`, `InvalidFormat`, `InvalidComponent`, `InvalidChecksum`, `InvalidCountry`, `InvalidNumberType`

### Country validator conventions

Each validator file must:
1. Export `default validator` typed as `StandardNumberUtils`
2. Define a local `clean()` function using `strings.cleanUnicode(input, '<separators>')` which returns `[value, error]`
3. Use `compact()` / `format()` returning the value with/without `countryPrefix` based on the `includeCountryPrefix` parameter
4. Use `this.minLength` / `this.maxLength` in `validate()` for length checks
5. Return `{ isValid: true, compact, isIndividual, isCompany }` on success

Some validators delegate to another country's validator via object spread. When doing this:
- Use a **default import** (`import base from '../xx/validator'`), not `import * as`
- Always explicitly set `countryPrefix` to override the base country's value

### Shared utilities (`src/js/numberUtils/libraries/`)

- `strings.cleanUnicode(input, separators, prefix?)` — strips separators and optional country prefix
- `strings.splitAt(value, ...positions)` — splits string at positions for formatting
- `strings.isDigits(value)` — checks all chars are digits
- `weightedSum(value, { weights, modulus })` — checksum helper
- `iso7064` — ISO 7064 check digit algorithms
- `isValidDate(yyyy, mm, dd, ...)` — date validation for IDs with embedded birth dates

The `gen/` directory contains cross-country utilities (currently EAN-13 checksum used by CH SSN).

### Adding a new country

1. Create `src/js/numberUtils/countriesData/{cc}/` with one `.ts` file per number type
2. Create `src/js/numberUtils/countriesData/{cc}/index.ts` following this pattern:
   ```typescript
   import { CountryStandardNumberUtils } from '../../../types';
   import <name> from './<file>';

   const countryNumberUtils: CountryStandardNumberUtils = {
     iso2: "XX",
     numberUtils: [ <name> ]
   }
   export default countryNumberUtils;
   ```
3. Add `import XX from './{cc}'` and `XX` to the array in `src/js/numberUtils/countriesData/index.ts`
4. Note: `in` (India) and `do` (Dominican Republic) are reserved JS words — import them as `IN` / `DO`

### CSS design

The plugin is CSS-unopinionated by design. `build/css/InternationalNumberInput.css` is provided as a functional starting point but consumers are expected to replace or override it entirely.

Every class name the plugin emits is configurable via the `styles` option at init time. The defaults use an `ini` namespace (`ini`, `ini__flag`, `ini--allow-dropdown`, etc.) but any names can be substituted:

```typescript
internationalNumberInput(input, {
  styles: {
    elementParentClass: "my-wrapper",
    elementFlagClass: "my-flag",
    attributeAllowDropdownClass: "my-allow-dropdown",
    // ... all other element/attribute class names
  }
});
```

The built-in CSS is entirely driven by CSS custom properties (prefixed `--ini-`) for colours, spacing, flag dimensions, and asset paths, so light theming can be done by overriding those variables without touching the class names at all.

The two categories of configurable class names in `AllStyleOptions` are:
- `element*Class` — classes added to DOM elements (e.g. `elementFlagClass`, `elementNumberInputClass`)
- `attribute*Class` — modifier classes added to the parent element to reflect state (e.g. `attributeAllowDropdownClass`, `attributeInlineDropdownClass`)

### tsconfig scope

`tsconfig.json` only includes `src/js/input/InternationalNumberInput.ts` as the entry point. The validator tree (`numberUtils/`) is **not** type-checked by `tsc` — it is bundled by esbuild without type checking. TypeScript errors in validator files will not surface during `npm run build:js`.

# International Number Input

International Number Input is a JavaScript plugin for entering and validating international numbers, such as national identification or tax identification numbers. It takes a regular input field, adds a searchable country dropdown, displays a relevant placeholder number, formats the number as you type, and provides comprehensive validation methods.

## Installation

```sh
npm install international-number-input
```

## Usage

The package exposes two ways to include the validator logic. Choose based on your performance requirements.

### Option A — lazy loading (recommended for browser use)

Use the base entry point for the UI plugin, then call `loadUtils()` with the path to the validators file served from your own server or a CDN. The validators are fetched on demand and are not part of your initial bundle.

```js
import internationalNumberInput from 'international-number-input';
import 'international-number-input/build/css/InternationalNumberInput.css';

const input = document.querySelector('#my-input');
const ini = internationalNumberInput(input, {
  // path to the validators file — serve it from your CDN or public folder
  utilsScriptPath: '/assets/internationalNumberInputWithUtils.min.js',
});
```

Bundle cost at page load: **~10 KB gzip** (UI only).
Validators are fetched separately: **~52 KB gzip** (all 92 countries).

### Option B — bundled (convenience)

Import from the `with-utils` entry point to get the UI plugin and all validators in a single module. No separate file to serve, but all 92 country validators ship in your bundle whether you use them or not.

```js
import internationalNumberInput from 'international-number-input/with-utils';
import 'international-number-input/build/css/InternationalNumberInput.css';

const input = document.querySelector('#my-input');
const ini = internationalNumberInput(input);
```

Bundle cost: **~52 KB gzip** (UI + all 92 country validators, minified).

## Styling

The plugin ships with `build/css/InternationalNumberInput.css` as a ready-to-use starting point, but it is intentionally easy to discard or override. Every class name the plugin writes to the DOM is configurable via the `styles` option at initialisation, so the plugin can be dropped into any design system without class name conflicts. The built-in stylesheet uses CSS custom properties (`--ini-*`) for all colours, spacing, and asset paths, so light theming requires only a handful of variable overrides.

## Extensibility

The plugin is designed to be extended. Countries, number types, and validation rules are all data-driven and can be added without changing the core plugin:

- **New countries** — add a directory under `src/js/numberUtils/countriesData/{iso2}/` with one validator file per number type, a country `index.ts`, and register it in `src/js/numberUtils/countriesData/index.ts`.
- **New number types** — add a value to the `NumberType` enum in `src/js/types.ts` and implement the `StandardNumberUtils` interface in the relevant country validator(s).
- **New validation rules** — each validator is a self-contained TypeScript module implementing `compact()`, `format()`, and `validate()`. Existing validators can be updated independently without affecting others.

The countries and number types currently included are a starting point. The architecture intentionally imposes no limit on what can be added.

## Credits

Full credit list at [CREDITS.md](CREDITS.md)

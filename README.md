# International Number Input

International Number Input is a JavaScript plugin for entering and validating international numbers, such as national identification or tax identification numbers. It takes a regular input field, adds a searchable country dropdown, displays a relevant placeholder number, formats the number as you type, and provides comprehensive validation methods.

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

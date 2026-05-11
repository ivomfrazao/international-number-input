# International Number Input - Interactive Demo

A fully interactive demo where you can experiment with all critical settings of the international-number-input plugin and see real-time effects on validation, formatting, and display.

## Quick Start

1. Build the project first:
   ```bash
   npm run build
   ```

2. Open `demo/index.html` in your browser (or serve from a local web server)

## Features

### Settings Panel (Left Sidebar)

- **Number Type Selector**: Choose between NIN (National ID), TIN (Tax ID), or SSN (Social Security Number)
  - Available countries change based on the selected type

- **Initial Country**: Set the starting country (ISO 3166-1 alpha-2 code, e.g., "pt", "us", "gb")

- **Behavior Toggles**:
  - `Allow Dropdown` - Enable/disable the country picker dropdown
  - `Show Flags` - Display country flag icons
  - `Format As You Type` - Live formatting as the user types
  - `Format On Display` - Format when the input is initialized or updated
  - `Country Search` - Add a search field to the dropdown
  - `Strict Mode` - Only allow valid characters for the selected number type
  - `Fullscreen Popup` - Use fullscreen popup on mobile devices

- **Auto Placeholder**: Control placeholder behavior
  - `Off` - No placeholder
  - `Polite` - Show example when field is empty (default)
  - `Aggressive` - Always show example

- **Country Filtering**:
  - `Only Countries` - Comma-separated list of allowed countries (empty = all available)
  - `Country Order` - Comma-separated list of countries to pin at top of dropdown

### Interactive Input Section

- **Quick Examples**: Pre-configured buttons for common use cases:
  - Portuguese National ID
  - US Social Security Number
  - Swiss VAT/Tax ID
  - UK VAT/Tax ID
  - Spanish NIF/Tax ID
  - Canadian SIN

- **Number Input Field**: Test your settings with this input
  - Real-time validation
  - Auto-formatting (if enabled)
  - Country selection dropdown (if enabled)

### Validation Results

Real-time feedback as you type:
- **Valid?**: ✓ or ✗ indicator
- **Error**: Error type if validation fails (e.g., InvalidLength, InvalidFormat, InvalidChecksum)
- **Selected Country**: Current country and its ISO code
- **Number Type**: The type of number (NIN, TIN, SSN) for the selected country

### Output Display

- **Formatted Number**: The number with formatting applied (includes country prefix if applicable)
- **Compact Number**: The number in compact form (no separators)

### Current Configuration

View the exact configuration object being used (in JSON format), showing all active settings.

## Testing Guide

### Test Basic Functionality

1. Select a number type (e.g., TIN)
2. Select an example (e.g., "CH VAT")
3. Type or paste a valid number
4. Verify validation and formatting work

### Test Settings

1. Toggle `Format As You Type` and observe formatting behavior
2. Toggle `Show Flags` to see flag display change
3. Toggle `Strict Mode` and try typing invalid characters
4. Change `Auto Placeholder` and observe placeholder examples

### Test Country Filtering

1. Enter `pt,es,us` in `Country Order` field
2. Click `Apply Settings`
3. Open the dropdown - these countries should appear at the top

### Test on Mobile

1. Open demo on a mobile device or use DevTools mobile emulation
2. Toggle `Fullscreen Popup` setting
3. Open the country dropdown to see the difference

## Integration Notes

The demo uses:
- `internationalNumberInputWithUtils.js` - The bundled version with all validators included
- The plugin's CSS from `build/css/intlTelInput.min.css`
- Demo-specific CSS from `styles.css` for layout and styling

## Common Configurations

### Validate Multiple Types for Same Country

If you need to validate multiple number types (e.g., both NIN and TIN for Spain):
1. Change the `Number Type` selector
2. Click `Apply Settings`
3. The input reinitializes with the new type
4. Or programmatically switch via `setCountry()` or `setNumber()`

### Restrict to Specific Countries

1. Set `Only Countries` to a comma-separated list (e.g., `ch,at,de`)
2. This overrides any other country settings
3. Dropdown only shows allowed countries

### Customize for Your Use Case

Each setting combines to create different behaviors:
- **Minimal UI**: Disable dropdown, flags, and search
- **Full-Featured**: Enable all dropdowns, search, formatting, and placeholders
- **Strict Entry**: Enable strict mode for pre-validated forms
- **User-Friendly**: Aggressive auto-placeholder with full dropdown support

## Troubleshooting

### "Failed to initialize input"
- Ensure `npm run build` was run to create the bundles
- Check browser console for detailed error message

### Numbers not formatting
- Enable `Format As You Type` or `Format On Display`
- Ensure the number type and country combination is valid

### Dropdown not appearing
- Check that `Allow Dropdown` is enabled
- Ensure `onlyCountries` list (if set) includes valid country codes

### Invalid number not showing error
- Verify the number type matches the country's capabilities
- Check the validation error type in the results panel

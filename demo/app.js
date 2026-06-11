// Demo Examples Configuration
const EXAMPLES = {
  'pt-nid': {
    numberType: 'NIN',
    initialCountry: 'pt',
    onlyCountries: ['pt'],
    countryOrder: ['pt']
  },
  'us-ssn': {
    numberType: 'SSN',
    initialCountry: 'us',
    onlyCountries: ['us'],
    countryOrder: ['us']
  },
  'ch-vat': {
    numberType: 'TIN',
    initialCountry: 'ch',
    onlyCountries: ['ch'],
    countryOrder: ['ch']
  },
  'gb-vat': {
    numberType: 'TIN',
    initialCountry: 'gb',
    onlyCountries: ['gb'],
    countryOrder: ['gb']
  },
  'es-nif': {
    numberType: 'TIN',
    initialCountry: 'es',
    onlyCountries: ['es'],
    countryOrder: ['es']
  },
  'ca-ssn': {
    numberType: 'SSN',
    initialCountry: 'ca',
    onlyCountries: ['ca'],
    countryOrder: ['ca']
  }
};

// Default Settings
const DEFAULT_SETTINGS = {
  numberType: 'TIN',
  initialCountry: 'pt',
  allowDropdown: true,
  showFlags: true,
  formatAsYouType: true,
  formatOnDisplay: true,
  countrySearch: true,
  strictMode: false,
  useFullscreenPopup: false,
  autoPlaceholder: 'Polite',
  onlyCountries: [],
  countryOrder: []
};

let currentInstance = null;
let currentSettings = { ...DEFAULT_SETTINGS };

/**
 * Initialize or reinitialize the input with current settings
 */
function initializeInput() {
  // Destroy previous instance
  if (currentInstance) {
    currentInstance.destroy();
  }

  const input = document.getElementById('numberInput');

  // Parse array settings
  const onlyCountries = parseArraySetting(currentSettings.onlyCountries);
  const countryOrder = parseArraySetting(currentSettings.countryOrder);

  // Build options object
  const options = {
    numberType: currentSettings.numberType,
    initialCountry: currentSettings.initialCountry.toLowerCase() || undefined,
    allowDropdown: currentSettings.allowDropdown,
    showFlags: currentSettings.showFlags,
    formatAsYouType: currentSettings.formatAsYouType,
    formatOnDisplay: currentSettings.formatOnDisplay,
    countrySearch: currentSettings.countrySearch,
    strictMode: currentSettings.strictMode,
    useFullscreenPopup: currentSettings.useFullscreenPopup,
    autoPlaceholder: currentSettings.autoPlaceholder,
    ...(onlyCountries.length > 0 && { onlyCountries }),
    ...(countryOrder.length > 0 && { countryOrder })
  };

  try {
    currentInstance = window.internationalNumberInput(input, options);
    displayConfig(options);
    attachInputListeners();
    clearResults();
  } catch (error) {
    console.error('Error initializing input:', error);
    showError('Failed to initialize input: ' + error.message);
  }
}

/**
 * Parse comma-separated string into array of ISO2 codes
 */
function parseArraySetting(value) {
  if (typeof value === 'string') {
    return value
      .split(',')
      .map(v => v.trim().toLowerCase())
      .filter(v => v.length === 2);
  }
  return Array.isArray(value) ? value.map(v => v.toLowerCase()) : [];
}

/**
 * Attach event listeners to the input for real-time validation
 */
function attachInputListeners() {
  const input = document.getElementById('numberInput');

  input.addEventListener('input', updateResults);
  input.addEventListener('change', updateResults);
  input.addEventListener('countrychange', updateResults);
}

/**
 * Update validation results and output
 */
function updateResults() {
  if (!currentInstance) return;

  try {
    const isValid = currentInstance.isValidNumber();
    const validationError = currentInstance.getValidationError();
    const countryData = currentInstance.getSelectedCountryData();
    const formattedNumber = currentInstance.getNumber();
    const compactNumber = currentInstance.getCompactNumber();

    // Update validation result
    const validElement = document.getElementById('validResult');
    validElement.textContent = isValid ? '✓ Valid' : '✗ Invalid';
    validElement.className = `result-value ${isValid ? 'valid' : 'invalid'}`;

    // Update error message
    const errorElement = document.getElementById('errorResult');
    if (!isValid && validationError.error) {
      errorElement.textContent = validationError.error.constructor.name;
      errorElement.className = 'result-value error';
    } else {
      errorElement.textContent = '-';
      errorElement.className = 'result-value';
    }

    // Update country
    const countryElement = document.getElementById('countryResult');
    if (countryData) {
      countryElement.textContent = `${countryData.iso2.toUpperCase()} - ${countryData.name}`;
      countryElement.className = 'result-value';
    } else {
      countryElement.textContent = 'None selected';
      countryElement.className = 'result-value';
    }

    // Update number type
    const typeElement = document.getElementById('typeResult');
    typeElement.textContent = currentSettings.numberType;
    typeElement.className = 'result-value';

    // Update formatted output
    const formattedElement = document.getElementById('formattedOutput');
    formattedElement.textContent = formattedNumber || '(empty)';

    // Update compact output
    const compactElement = document.getElementById('compactOutput');
    compactElement.textContent = compactNumber || '(empty)';

  } catch (error) {
    console.error('Error updating results:', error);
  }
}

/**
 * Clear all results to initial state
 */
function clearResults() {
  document.getElementById('validResult').textContent = '—';
  document.getElementById('validResult').className = 'result-value';
  document.getElementById('errorResult').textContent = '—';
  document.getElementById('errorResult').className = 'result-value';
  document.getElementById('countryResult').textContent = '—';
  document.getElementById('countryResult').className = 'result-value';
  document.getElementById('typeResult').textContent = '—';
  document.getElementById('typeResult').className = 'result-value';
  document.getElementById('formattedOutput').textContent = '—';
  document.getElementById('compactOutput').textContent = '—';
}

/**
 * Display current configuration as JSON
 */
function displayConfig(options) {
  const configDisplay = document.getElementById('configDisplay');
  const cleanConfig = {};

  for (const [key, value] of Object.entries(options)) {
    if (value !== undefined && value !== false && value !== '' && (!Array.isArray(value) || value.length > 0)) {
      cleanConfig[key] = value;
    }
  }

  configDisplay.textContent = JSON.stringify(cleanConfig, null, 2);
}

/**
 * Update currentSettings from form inputs
 */
function updateSettingsFromForm() {
  currentSettings.numberType = document.getElementById('numberType').value;
  currentSettings.initialCountry = document.getElementById('initialCountry').value || 'pt';
  currentSettings.allowDropdown = document.getElementById('allowDropdown').checked;
  currentSettings.showFlags = document.getElementById('showFlags').checked;
  currentSettings.formatAsYouType = document.getElementById('formatAsYouType').checked;
  currentSettings.formatOnDisplay = document.getElementById('formatOnDisplay').checked;
  currentSettings.countrySearch = document.getElementById('countrySearch').checked;
  currentSettings.strictMode = document.getElementById('strictMode').checked;
  currentSettings.useFullscreenPopup = document.getElementById('useFullscreenPopup').checked;
  currentSettings.autoPlaceholder = document.getElementById('autoPlaceholder').value;
  currentSettings.onlyCountries = document.getElementById('onlyCountries').value;
  currentSettings.countryOrder = document.getElementById('countryOrder').value;
}

/**
 * Update form inputs from currentSettings
 */
function updateFormFromSettings() {
  document.getElementById('numberType').value = currentSettings.numberType;
  document.getElementById('initialCountry').value = currentSettings.initialCountry;
  document.getElementById('allowDropdown').checked = currentSettings.allowDropdown;
  document.getElementById('showFlags').checked = currentSettings.showFlags;
  document.getElementById('formatAsYouType').checked = currentSettings.formatAsYouType;
  document.getElementById('formatOnDisplay').checked = currentSettings.formatOnDisplay;
  document.getElementById('countrySearch').checked = currentSettings.countrySearch;
  document.getElementById('strictMode').checked = currentSettings.strictMode;
  document.getElementById('useFullscreenPopup').checked = currentSettings.useFullscreenPopup;
  document.getElementById('autoPlaceholder').value = currentSettings.autoPlaceholder;
  document.getElementById('onlyCountries').value = currentSettings.onlyCountries;
  document.getElementById('countryOrder').value = currentSettings.countryOrder;
}

/**
 * Show error message
 */
function showError(message) {
  const errorElement = document.getElementById('inputError');
  errorElement.textContent = message;
  errorElement.classList.remove('hidden');
}

/**
 * Clear error message
 */
function clearError() {
  const errorElement = document.getElementById('inputError');
  errorElement.textContent = '';
  errorElement.classList.add('hidden');
}

/**
 * Event: Apply Settings Button
 */
function onApplySettings() {
  clearError();
  updateSettingsFromForm();
  initializeInput();
}

/**
 * Event: Reset Button
 */
function onReset() {
  clearError();
  currentSettings = { ...DEFAULT_SETTINGS };
  updateFormFromSettings();
  initializeInput();
}

/**
 * Event: Example Button Click
 */
function onExampleClick(exampleKey) {
  clearError();
  const example = EXAMPLES[exampleKey];
  if (example) {
    currentSettings = { ...DEFAULT_SETTINGS, ...example };
    updateFormFromSettings();
    initializeInput();
    // Clear the input for the user to test with
    document.getElementById('numberInput').value = '';
    clearResults();
  }
}

/**
 * Initialize Demo
 */
function initDemo() {
  // Attach button event listeners
  document.getElementById('applyBtn').addEventListener('click', onApplySettings);
  document.getElementById('resetBtn').addEventListener('click', onReset);

  // Attach example button listeners
  document.querySelectorAll('.example-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      onExampleClick(btn.dataset.example);
    });
  });

  // Initial setup
  updateFormFromSettings();
  initializeInput();
}

// Start demo when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDemo);
} else {
  initDemo();
}

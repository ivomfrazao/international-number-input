/**
 * Normalises string to ensure expected values when performing other operations.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize for more details.
 * @param s The string to be normalized.
 * @returns The normalized string.
 */
//* Normalise string: turns "Réunion" into "Reunion".
//* from https://stackoverflow.com/a/37511463
export function normaliseString(s: string = ""): string {
	return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

/**
 * Return the only the numeric part of a string.
 * @param s The string from which the numeric part is wanted.
 * @returns A string containing only the numeric part of the provided input parameter.
 */
export function getNumeric(s: string): string{
	return s.replace(/\D/g, "");
} 
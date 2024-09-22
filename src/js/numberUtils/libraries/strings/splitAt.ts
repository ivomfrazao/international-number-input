/**
 * split a string at the given indexes
 *
 * e.g. splitAt('abcdefghijklmnop', 3, 6, 9) => ['abc', 'def', 'ghijklmonop']
 */
export function splitAt(value: string, ...points: number[]): string[] {
	const parts = [0, ...points, value.length].map((p, idx, arr) => {
		const start = p < 0 ? value.length + p : p;
		const end = arr[idx + 1] < 0 ? value.length + arr[idx + 1] : arr[idx + 1];

		return value.substring(start, end);
	});

	return parts.filter(v => v.length !== 0);
}

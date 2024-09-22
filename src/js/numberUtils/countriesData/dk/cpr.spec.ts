import { InvalidComponent } from '../exceptions';
import { format, getBirthDate, validate } from './cpr';

describe('dk/cpr', () => {
	it('format:2110625629', () => {
		const result = validator.format('2110625629', false)

		expect(result).toEqual('211062-5629');
	});

	it('getBirthDate("511062-0629")', () => {
		expect(() => {
			getBirthDate('511062-0629');
		}).toThrow(InvalidComponent);
	});

	it('getBirthDate("010180-1234")', () => {
		const result = validator.validate('010180-1234');

		expect(result.isValid).toEqual(true);
	});

	it('validate wrong date', () => {
		const result = validator.validate('511062-5629');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate future date', () => {
		const result = validator.validate('2110525629');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});
});

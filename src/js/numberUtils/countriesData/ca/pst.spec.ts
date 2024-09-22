import validator from './pst';
import { InvalidLength } from '../exceptions';

describe('ca/pst', () => {
	it('format:PST12345678', () => {
		const result = validator.format('PST12345678', false)

		expect(result).toEqual('PST-1234-5678');
	});

	it('fvalidate:PST-1234-5678', () => {
		const result = validator.validate('PST-1234-5678');

		expect(result.isValid && result.compact).toEqual('PST12345678');
	});

	test.each(['PST-1234-5678'])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	it('validate:PST-1234-567', () => {
		const result = validator.validate('PST-1234-567');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});
});

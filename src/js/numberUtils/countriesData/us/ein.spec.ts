import { InvalidComponent, InvalidLength } from '../exceptions';
import validator from './ein';

describe('us/tin', () => {
	it('format:536904399', () => {
		const result = validator.format('536904399', false)

		expect(result).toEqual('53-6904399');
	});

	it('validate:123-45-6789', () => {
		const result = validator.validate('123-45-6789');

		expect(result.isValid && result.compact).toEqual('123456789');
	});

	it('validate:1234567890123', () => {
		const result = validator.validate('1234567890123');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:00-3456789', () => {
		const result = validator.validate('00-3456789');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});
});

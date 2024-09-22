import { InvalidComponent, InvalidLength } from '../exceptions';
import validator from './ssn';

describe('us/ssn', () => {
	it('format:536904399', () => {
		const result = validator.format('536904399', false)

		expect(result).toEqual('536-90-4399');
	});

	it('validate:536-90-4399', () => {
		const result = validator.validate('536-90-4399');

		expect(result.isValid && result.compact).toEqual('536904399');
	});

	it('validate:1234567890123', () => {
		const result = validator.validate('1234567890123');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:189092294', () => {
		const result = validator.validate('189092294');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});
});

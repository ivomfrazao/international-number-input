import validator from './ntn';
import { InvalidLength } from '../exceptions';

describe('pk/ntn', () => {
	it('format:1234567', () => {
		const result = validator.format('1234567', false)

		expect(result).toEqual('1234567');
	});

	it('validate:1234567', () => {
		const result = validator.validate('1234567');

		expect(result.isValid && result.compact).toEqual('1234567');
	});

	it('validate:123456', () => {
		const result = validator.validate('123456');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});
});

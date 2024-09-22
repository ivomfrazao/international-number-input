import validator from './peid';
import { InvalidLength } from '../exceptions';

describe('li/peid', () => {
	it('format:1234567', () => {
		const result = validator.format('1234567', false)

		expect(result).toEqual('1234567');
	});

	it('validate:00001234567', () => {
		const result = validator.validate('00001234567');

		expect(result.isValid && result.compact).toEqual('1234567');
	});

	it('validate:00001234568913454545', () => {
		const result = validator.validate('00001234568913454545');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});
});

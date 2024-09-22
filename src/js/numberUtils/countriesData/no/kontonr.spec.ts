import validator from './kontonr';
import * as exceptions from '../../../exceptions';

describe('no/kontonr', () => {
	it('format:86011117947', () => {
		const result = validator.format('86011117947', false)

		expect(result).toEqual('8601.11.17947');
	});

	it('validate:8601 11 17947', () => {
		const result = validator.validate('8601 11 17947');

		expect(result.isValid && result.compact).toEqual('86011117947');
	});

	it('validate:0000.4090403', () => {
		const result = validator.validate('0000.4090403');

		expect(result.isValid && result.compact).toEqual('4090403');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:8601 11 17949', () => {
		const result = validator.validate('8601 11 17949');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

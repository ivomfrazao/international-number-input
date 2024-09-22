import validator from './cedula';
import * as exceptions from '../../../exceptions';

describe('uy/cedula', () => {
	it('format:11211234', () => {
		const result = validator.format('11211234', false)

		expect(result).toEqual('1.121.123-4');
	});

	it('validate:12345672', () => {
		const result = validator.validate('12345672');

		expect(result.isValid && result.compact).toEqual('12345672');
	});

	it('validate:1121123', () => {
		const result = validator.validate('1121123');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:12345673', () => {
		const result = validator.validate('12345673');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

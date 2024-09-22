import validator from './nit';
import * as exceptions from '../../../exceptions';

describe('sv/nit', () => {
	it('format:06140507071048', () => {
		const result = validator.format('06140507071048', false)

		expect(result).toEqual('0614-050707-104-8');
	});

	it('validate:0614-050707-104-8', () => {
		const result = validator.validate('0614-050707-104-8');

		expect(result.isValid && result.compact).toEqual('06140507071048');
	});

	it('validate:SV 0614-050707-104-8', () => {
		const result = validator.validate('SV 0614-050707-104-8');

		expect(result.isValid && result.compact).toEqual('06140507071048');
	});

	it('validate:1234567890123', () => {
		const result = validator.validate('1234567890123');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:0614-050707-104-0', () => {
		const result = validator.validate('0614-050707-104-0');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

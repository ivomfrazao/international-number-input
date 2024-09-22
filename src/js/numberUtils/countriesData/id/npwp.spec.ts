import validator from './npwp';
import * as exceptions from '../../../exceptions';

describe('id/npwp', () => {
	it('format:013000666091000', () => {
		const result = validator.format('013000666091000', false)

		expect(result).toEqual('01.300.066.6-091.000');
	});

	it('validate:01.312.166.0-091.000', () => {
		const result = validator.validate('01.312.166.0-091.000');

		expect(result.isValid && result.compact).toEqual('013121660091000');
	});

	it('validate:016090524017000', () => {
		const result = validator.validate('016090524017000');

		expect(result.isValid && result.compact).toEqual('016090524017000');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:216090524017001', () => {
		const result = validator.validate('216090524017001');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

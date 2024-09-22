import validator from './nit';
import * as exceptions from '../../../exceptions';

describe('gt/nit', () => {
	it('format:39525503', () => {
		const result = validator.format('39525503', false)

		expect(result).toEqual('3952550-3');
	});

	it('validate:576937-K', () => {
		const result = validator.validate('576937-K');

		expect(result.isValid && result.compact).toEqual('576937K');
	});

	it('validate:7108-0', () => {
		const result = validator.validate('7108-0');

		expect(result.isValid && result.compact).toEqual('71080');
	});

	it('validate:1234567890123', () => {
		const result = validator.validate('1234567890123');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:8977112-0', () => {
		const result = validator.validate('8977112-0');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

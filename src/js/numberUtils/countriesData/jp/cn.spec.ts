import validator from './cn';
import * as exceptions from '../../../exceptions';

describe('jp/cn', () => {
	it('format:5835678256246', () => {
		const result = validator.format('5835678256246', false)

		expect(result).toEqual('5-8356-7825-6246');
	});

	it('validate:5-8356-7825-6246', () => {
		const result = validator.validate('5-8356-7825-6246');

		expect(result.isValid && result.compact).toEqual('5835678256246');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:2-8356-7825-6246', () => {
		const result = validator.validate('2-8356-7825-6246');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

import validator from './coe';
import * as exceptions from '../../../exceptions';

describe('sm/coe', () => {
	it('format:51', () => {
		const result = validator.format('51', false)

		expect(result).toEqual('51');
	});

	it('validate:51', () => {
		const result = validator.validate('51');

		expect(result.isValid && result.compact).toEqual('51');
	});

	it('validate:024165', () => {
		const result = validator.validate('024165');

		expect(result.isValid && result.compact).toEqual('24165');
	});

	it('validate:2416A', () => {
		const result = validator.validate('2416A');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});

	it('validate:1124165', () => {
		const result = validator.validate('1124165');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});
});

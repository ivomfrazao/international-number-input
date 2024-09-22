import validator from './utr';
import * as exceptions from '../../../exceptions';

describe('gb/utr', () => {
	it('format:1955839661', () => {
		const result = validator.format('1955839661', false)

		expect(result).toEqual('1955839661');
	});

	it('validate:1955839661', () => {
		const result = validator.validate('1955839661');

		expect(result.isValid && result.compact).toEqual('1955839661');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:2955839661', () => {
		const result = validator.validate('2955839661');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

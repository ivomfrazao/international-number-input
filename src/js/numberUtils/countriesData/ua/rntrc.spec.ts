import validator from './rntrc';
import * as exceptions from '../../../exceptions';

describe('ua/rntrc', () => {
	it('format:1759013776', () => {
		const result = validator.format('1759013776', false)

		expect(result).toEqual('1759013776');
	});

	it('validate:1759013776', () => {
		const result = validator.validate('1759013776');

		expect(result.isValid && result.compact).toEqual('1759013776');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:1759013770', () => {
		const result = validator.validate('1759013770');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

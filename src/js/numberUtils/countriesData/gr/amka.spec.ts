import validator from './amka';
import * as exceptions from '../../../exceptions';

describe('gr/amka', () => {
	it('format:01013099997', () => {
		const result = validator.format('01013099997', false)

		expect(result).toEqual('01013099997');
	});

	it('validate:01013099997', () => {
		const result = validator.validate('01013099997');

		expect(result.isValid && result.compact).toEqual('01013099997');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:01013099999', () => {
		const result = validator.validate('01013099999');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

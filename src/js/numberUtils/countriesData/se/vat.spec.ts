import validator from './vat';
import * as exceptions from '../../../exceptions';

describe('se/vat', () => {
	it('format:SE 123456789701', () => {
		const result = validator.format('SE 123456789701', false)

		expect(result).toEqual('123456789701');
	});

	it('validate:SE 123456789701', () => {
		const result = validator.validate('SE 123456789701');

		expect(result.isValid && result.compact).toEqual('123456789701');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:SE 123456789101', () => {
		const result = validator.validate('SE 123456789101');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

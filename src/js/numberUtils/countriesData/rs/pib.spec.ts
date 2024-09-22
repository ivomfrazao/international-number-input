import validator from './pib';
import * as exceptions from '../../../exceptions';

describe('rs/pib', () => {
	it('format:101134702', () => {
		const result = validator.format('101134702', false)

		expect(result).toEqual('101134702');
	});

	it('validate:101134702', () => {
		const result = validator.validate('101134702');

		expect(result.isValid && result.compact).toEqual('101134702');
	});

	it('validate:1234567890', () => {
		const result = validator.validate('1234567890');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:101134701', () => {
		const result = validator.validate('101134701');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

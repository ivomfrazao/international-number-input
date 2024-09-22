import validator from './vkn';
import * as exceptions from '../../../exceptions';

describe('tr/vkn', () => {
	it('format:4540536920', () => {
		const result = validator.format('4540536920', false)

		expect(result).toEqual('4540536920');
	});

	it('validate:4540536920', () => {
		const result = validator.validate('4540536920');

		expect(result.isValid && result.compact).toEqual('4540536920');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:4540536921', () => {
		const result = validator.validate('4540536921');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

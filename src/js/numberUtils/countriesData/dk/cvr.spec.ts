import validator from './cvr';
import * as exceptions from '../../../exceptions';

describe('dk/cvr', () => {
	it('format:DK 13585628', () => {
		const result = validator.format('DK 13585628', false)

		expect(result).toEqual('13585628');
	});

	it('validate:DK 13585628', () => {
		const result = validator.validate('DK 13585628');

		expect(result.isValid && result.compact).toEqual('13585628');
	});

	it('validate:1234567', () => {
		const result = validator.validate('1234567');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:DK 13585627', () => {
		const result = validator.validate('DK 13585627');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

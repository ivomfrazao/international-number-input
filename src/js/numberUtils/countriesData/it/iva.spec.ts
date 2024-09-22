import validator from './iva';
import * as exceptions from '../../../exceptions';

describe('it/iva', () => {
	it('format:IT 00743110157', () => {
		const result = validator.format('IT 00743110157', false)

		expect(result).toEqual('00743110157');
	});

	it('validate:IT 00743110157', () => {
		const result = validator.validate('IT 00743110157');

		expect(result.isValid && result.compact).toEqual('00743110157');
	});

	it('validate:IT 0074311015', () => {
		const result = validator.validate('IT 0074311015');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:IT 00743110158', () => {
		const result = validator.validate('IT 00743110158');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

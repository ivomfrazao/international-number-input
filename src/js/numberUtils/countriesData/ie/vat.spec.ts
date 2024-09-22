import validator from './vat';
import * as exceptions from '../../../exceptions';

describe('ie/vat', () => {
	it('format:IE 6433435OA', () => {
		const result = validator.format('IE 6433435OA', false)

		expect(result).toEqual('6433435OA');
	});

	it('validate:IE 6433435F', () => {
		const result = validator.validate('IE 6433435F');

		expect(result.isValid && result.compact).toEqual('6433435F');
	});

	it('validate:IE 6433435OA', () => {
		const result = validator.validate('IE 6433435OA');

		expect(result.isValid && result.compact).toEqual('6433435OA');
	});

	it('validate:8D79739I', () => {
		const result = validator.validate('8D79739I');

		expect(result.isValid && result.compact).toEqual('8D79739I');
	});

	it('validate:1234567890', () => {
		const result = validator.validate('1234567890');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:6433435E', () => {
		const result = validator.validate('6433435E');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

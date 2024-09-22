import validator from './pps';
import * as exceptions from '../../../exceptions';

describe('ie/pps', () => {
	it('format:6433435F', () => {
		const result = validator.format('6433435F', false)

		expect(result).toEqual('6433435F');
	});

	it('validate:6433435F', () => {
		const result = validator.validate('6433435F');

		expect(result.isValid && result.compact).toEqual('6433435F');
	});

	it('validate:6433435FT', () => {
		const result = validator.validate('6433435FT');

		expect(result.isValid && result.compact).toEqual('6433435FT');
	});

	it('validate:6433435FW', () => {
		const result = validator.validate('6433435FW');

		expect(result.isValid && result.compact).toEqual('6433435FW');
	});

	it('validate:6433435OA', () => {
		const result = validator.validate('6433435OA');

		expect(result.isValid && result.compact).toEqual('6433435OA');
	});

	it('validate:6433435IH', () => {
		const result = validator.validate('6433435IH');

		expect(result.isValid && result.compact).toEqual('6433435IH');
	});

	it('validate:12345678', () => {
		const result = validator.validate('1234567891');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:6433435VH', () => {
		const result = validator.validate('6433435VH');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});

	it('validate:6433435E', () => {
		const result = validator.validate('6433435VH');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

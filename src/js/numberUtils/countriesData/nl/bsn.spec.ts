import validator from './bsn';
import * as exceptions from '../../../exceptions';

describe('nl/bsn', () => {
	it('format:111222333', () => {
		const result = validator.format('111222333', false)

		expect(result).toEqual('1112.22.333');
	});

	test.each([
		'001855013', // RSIN
		'1112.22.333', // BSN
	])('isValid', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	it('validate:1112.22.333', () => {
		const result = validator.validate('1112.22.333');

		expect(result.isValid && result.compact).toEqual('111222333');
	});

	it('validate:002455799', () => {
		const result = validator.validate('002455799');

		// expect(result.isValid && result.compact).toEqual('002455799');
		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});

	it('validate:12345678912', () => {
		const result = validator.validate('12345678912');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:1112.52.333', () => {
		const result = validator.validate('1112.52.333');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});

	it('validate:123456782', () => {
		const result = validator.validate('123456782');

		expect(result.isValid && result.compact).toEqual('123456782');
	});

	it('validate:40645678', () => {
		const result = validator.validate('40645678');

		expect(result.isValid && result.compact).toEqual('40645678');
	});

	it('validate:1', () => {
		const result = validator.validate('1');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:1234567', () => {
		const result = validator.validate('1234567');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});
});

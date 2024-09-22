import validator from './bn';
import * as exceptions from '../../../exceptions';

describe('ca/bn', () => {
	it('format:123026635RC0001', () => {
		const result = validator.format('123026635RC0001', false)

		expect(result).toEqual('12302 6635 RC 0001');
	});

	it('validate:12302 6635 RC 0001', () => {
		const result = validator.validate('12302 6635 RC 0001');

		expect(result.isValid && result.compact).toEqual('123026635RC0001');
	});

	it('validate:12302 6635', () => {
		const result = validator.validate('12302 6635');

		expect(result.isValid && result.compact).toEqual('123026635');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:12345678Z', () => {
		const result = validator.validate('12345678Z');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});

	it('validate:123456783', () => {
		const result = validator.validate('123456783');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

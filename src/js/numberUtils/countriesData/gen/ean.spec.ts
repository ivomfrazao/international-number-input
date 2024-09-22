import validator from './ean';
import * as exceptions from '../../../exceptions';

describe('gen/ean', () => {
	it('format:73513537', () => {
		const result = validator.format('73513537', false)

		expect(result).toEqual('73513537');
	});

	it('validate:978-0-471-11709-4', () => {
		const result = validator.validate('978-0-471-11709-4');

		expect(result.isValid && result.compact).toEqual('9780471117094');
	});

	it('validate:98412345678908', () => {
		const result = validator.validate('98412345678908');

		expect(result.isValid && result.compact).toEqual('98412345678908');
	});

	it('validate:123456789', () => {
		const result = validator.validate('123456789');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:98412345678907', () => {
		const result = validator.validate('98412345678907');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

import validator from './vat';
import * as exceptions from '../../../exceptions';

describe('gr/vat', () => {
	it('format:GR 23456783', () => {
		const result = validator.format('GR 23456783', false)

		expect(result).toEqual('023456783');
	});

	it('validate:GR 23456780', () => {
		const result = validator.validate('GR 23456780');

		expect(result.isValid && result.compact).toEqual('023456780');
	});

	it('validate:EL 094259216', () => {
		const result = validator.validate('EL 094259216');

		expect(result.isValid && result.compact).toEqual('094259216');
	});

	it('validate:1234567', () => {
		const result = validator.validate('1234567');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:123456781', () => {
		const result = validator.validate('123456781');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

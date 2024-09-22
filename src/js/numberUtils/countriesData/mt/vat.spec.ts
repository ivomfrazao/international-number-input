import validator from './vat';
import * as exceptions from '../../../exceptions';

describe('mt/vat', () => {
	it('format:MT 1167-9112', () => {
		const result = validator.format('MT 1167-9112', false)

		expect(result).toEqual('1167-9112');
	});

	it('validate:MT 1167-9112', () => {
		const result = validator.validate('MT 1167-9112');

		expect(result.isValid && result.compact).toEqual('11679112');
	});

	it('validate:123456789', () => {
		const result = validator.validate('123456789');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:MT 1167-9113', () => {
		const result = validator.validate('MT 1167-9113');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

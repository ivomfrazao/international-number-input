import validator from './anum';
import * as exceptions from '../../../exceptions';

describe('hu/anum', () => {
	it('format:HU-12892312', () => {
		const result = validator.format('HU-12892312', false)

		expect(result).toEqual('12892312');
	});

	it('validate:HU-12892312', () => {
		const result = validator.validate('HU-12892312');

		expect(result.isValid && result.compact).toEqual('12892312');
	});

	it('validate:1234567', () => {
		const result = validator.validate('1234567');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:HU-12892313', () => {
		const result = validator.validate('HU-12892313');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

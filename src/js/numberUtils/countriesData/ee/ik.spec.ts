import validator from './ik';
import * as exceptions from '../../../exceptions';

describe('ee/ik', () => {
	it('format:36805280109', () => {
		const result = validator.format('36805280109', false)

		expect(result).toEqual('36805280109');
	});

	it('validate:36805280109', () => {
		const result = validator.validate('36805280109');

		expect(result.isValid && result.compact).toEqual('36805280109');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:36805280108', () => {
		const result = validator.validate('36805280108');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

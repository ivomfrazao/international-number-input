import validator from './nid';
import * as exceptions from '../../../exceptions';

describe('mu/nid', () => {
	it('format:M090497290349B', () => {
		const result = validator.format('M090497290349B', false)

		expect(result).toEqual('M090497290349B');
	});

	it('validate:M090497290349B', () => {
		const result = validator.validate('M090497290349B');

		expect(result.isValid && result.compact).toEqual('M090497290349B');
	});

	it('validate:L2207971502833', () => {
		const result = validator.validate('L2207971502833');

		expect(result.isValid && result.compact).toEqual('L2207971502833');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:M090497290348B', () => {
		const result = validator.validate('M090497290348B');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

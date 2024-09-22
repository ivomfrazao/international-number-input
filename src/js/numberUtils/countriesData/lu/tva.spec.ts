import validator from './tva';
import * as exceptions from '../../../exceptions';

describe('lu/tva', () => {
	it('format:LU 150 274 42', () => {
		const result = validator.format('15027442', false)

		expect(result).toEqual('150 274 42');
	});

	it('validate:LU 150 274 42', () => {
		const result = validator.validate('LU 150 274 42');

		expect(result.isValid && result.compact).toEqual('15027442');
	});

	it('validate:123456789', () => {
		const result = validator.validate('123456789');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:LU 150 274 43', () => {
		const result = validator.validate('LU 150 274 43');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

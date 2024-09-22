import validator from './mst';
import * as exceptions from '../../../exceptions';

describe('va/mst', () => {
	it('format:01.00.112.437', () => {
		const result = validator.format('01.00.112.437', false)

		expect(result).toEqual('0100112437');
	});

	it('format:0312 68 78 78 - 001', () => {
		const result = validator.format('0312 68 78 78 - 001', false)

		expect(result).toEqual('0312687878-001');
	});

	it('validate:0100233488', () => {
		const result = validator.validate('0100233488');

		expect(result.isValid && result.compact).toEqual('0100233488');
	});

	it('validate:0314409058-002', () => {
		const result = validator.validate('0314409058-002');

		expect(result.isValid && result.compact).toEqual('0314409058002');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:0100233480', () => {
		const result = validator.validate('0100233480');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

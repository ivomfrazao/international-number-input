import validator from './idnr';
import * as exceptions from '../../../exceptions';

describe('za/idnr', () => {
	it('format:7503305044089', () => {
		const result = validator.format('7503305044089', false)

		expect(result).toEqual('7503305044089');
	});

	it('validate:7503305044089', () => {
		const result = validator.validate('7503305044089');

		expect(result.isValid && result.compact).toEqual('7503305044089');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:8503305044089', () => {
		const result = validator.validate('8503305044089');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

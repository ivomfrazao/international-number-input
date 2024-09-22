import validator from './idno';
import * as exceptions from '../../../exceptions';

describe('md/idno', () => {
	it('format:1008600038413', () => {
		const result = validator.format('1008600038413', false)

		expect(result).toEqual('1008600038413');
	});

	it('validate:1008600038413', () => {
		const result = validator.validate('1008600038413');

		expect(result.isValid && result.compact).toEqual('1008600038413');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:1008600038412', () => {
		const result = validator.validate('1008600038412');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

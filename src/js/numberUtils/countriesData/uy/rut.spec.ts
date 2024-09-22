import validator from './rut';
import * as exceptions from '../../../exceptions';

describe('uy/rut', () => {
	it('format:211003420017', () => {
		const result = validator.format('211003420017', false)

		expect(result).toEqual('21-100342-001-7');
	});

	it('validate:21-100342-001-7', () => {
		const result = validator.validate('21-100342-001-7');

		expect(result.isValid && result.compact).toEqual('211003420017');
	});

	it('validate:UY 21 140634 001 1', () => {
		const result = validator.validate('UY 21 140634 001 1');

		expect(result.isValid && result.compact).toEqual('211406340011');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:210303670014', () => {
		const result = validator.validate('210303670014');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

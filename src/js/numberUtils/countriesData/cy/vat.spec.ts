import validator from './vat';
import * as exceptions from '../../../exceptions';

describe('cy/vat', () => {
	it('format:CY-10259033P', () => {
		const result = validator.format('CY-10259033P', false);

		expect(result).toEqual('10259033P');
	});

	it('validate:CY-10259033P', () => {
		const result = validator.validate('CY-10259033P');

		expect(result.isValid && result.compact).toEqual('10259033P');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:CY-10259033Z', () => {
		const result = validator.validate('CY-10259033Z');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

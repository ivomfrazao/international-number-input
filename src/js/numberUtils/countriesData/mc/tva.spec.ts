import validator from './tva';
import * as exceptions from '../../../exceptions';

describe('mc/tva', () => {
	it('format:53 0000 04605', () => {
		const result = validator.format('53 0000 04605', false)

		expect(result).toEqual('53000004605');
	});

	it('validate:53 0000 04605', () => {
		const result = validator.validate('53 0000 04605');

		expect(result.isValid && result.compact).toEqual('53000004605');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:FR 61 954 506 077', () => {
		const result = validator.validate('FR 61 954 506 077');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});
});

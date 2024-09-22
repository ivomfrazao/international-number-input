import validator from './dni';
import * as exceptions from '../../../exceptions';

describe('es/dni', () => {
	it('format:54362315K', () => {
		const result = validator.format('54362315K', false);

		expect(result).toEqual('54362315-K');
	});

	it('validate:54362315-K', () => {
		const result = validator.validate('54362315-K');

		expect(result.isValid && result.compact).toEqual('54362315K');
	});

	it('validate:54362315', () => {
		const result = validator.validate('54362315');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:54362315Z', () => {
		const result = validator.validate('54362315Z');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

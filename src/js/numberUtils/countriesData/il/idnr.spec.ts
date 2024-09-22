import validator from './idnr';
import * as exceptions from '../../../exceptions';

describe('il/idnr', () => {
	it('format:39337423', () => {
		const result = validator.format('39337423', false)

		expect(result).toEqual('3933742-3');
	});

	it('validate:3933742-3', () => {
		const result = validator.validate('3933742-3');

		expect(result.isValid && result.compact).toEqual('39337423');
	});

	it('validate:3933742999', () => {
		const result = validator.validate('3933742999');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:3933742-2', () => {
		const result = validator.validate('3933742-2');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

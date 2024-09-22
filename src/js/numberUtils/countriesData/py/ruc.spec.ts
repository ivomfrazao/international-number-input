import validator from './ruc';
import * as exceptions from '../../../exceptions';

describe('py/ruc', () => {
	it('format:800280610', () => {
		const result = validator.format('80028061 0', false)

		expect(result).toEqual('80028061-0');
	});

	it('validate:80028061-0', () => {
		const result = validator.validate('80028061-0');

		expect(result.isValid && result.compact).toEqual('800280610');
	});

	it('validate:8765432-6', () => {
		const result = validator.validate('8765432-6');

		expect(result.isValid && result.compact).toEqual('87654326');
	});

	it('validate:2660-3', () => {
		const result = validator.validate('2660-3');

		expect(result.isValid && result.compact).toEqual('26603');
	});

	it('validate:660-3', () => {
		const result = validator.validate('660-3');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:2660-4', () => {
		const result = validator.validate('2660-4');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

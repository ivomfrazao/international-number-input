import validator from './ird';
import * as exceptions from '../../../exceptions';

describe('nz/ird', () => {
	it('format:4909185-0', () => {
		const result = validator.format('4909185-0', false)

		expect(result).toEqual('49-091-850');
	});

	it('validate:4909185-0', () => {
		const result = validator.validate('4909185-0');

		expect(result.isValid && result.compact).toEqual('49091850');
	});

	it('validate:NZ 4909185-0', () => {
		const result = validator.validate('NZ 4909185-0');

		expect(result.isValid && result.compact).toEqual('49091850');
	});

	it('validate:123478', () => {
		const result = validator.validate('123478');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:136410133', () => {
		const result = validator.validate('136410133');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

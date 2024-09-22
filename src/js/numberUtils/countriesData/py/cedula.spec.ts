import validator from './cedula';
import { InvalidComponent, InvalidLength } from '../exceptions';

describe('py/ci', () => {
	it('format:6.001.234', () => {
		const result = validator.format('6.001.234', false)

		expect(result).toEqual('6001234');
	});

	it('validate:15000', () => {
		const result = validator.validate('15000');

		expect(result.isValid && result.compact).toEqual('15000');
	});

	it('validate:3 785 123', () => {
		const result = validator.validate('3 785 123');

		expect(result.isValid && result.compact).toEqual('3785123');
	});

	it('validate:6-001-234', () => {
		const result = validator.validate('6-001-234');

		expect(result.isValid && result.compact).toEqual('6001234');
	});

	it('validate:660.3', () => {
		const result = validator.validate('660.3');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:26601234', () => {
		const result = validator.validate('26601234');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:266012A', () => {
		const result = validator.validate('266012A');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});
});

import validator from './hp';
import {
	InvalidLength,
	InvalidChecksum,
	InvalidComponent,
} from '../exceptions';

describe('th/idnr', () => {
	it('format:5161-79157', () => {
		const result = validator.format('5161-79157', false)

		expect(result).toEqual('516179157');
	});

	it('validate:516179157', () => {
		const result = validator.validate('516179157');

		expect(result.isValid && result.compact).toEqual('516179157');
	});

	it('validate:4161791589', () => {
		const result = validator.validate('4161791589');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:416179158', () => {
		const result = validator.validate('416179158');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate:516179158', () => {
		const result = validator.validate('516179158');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

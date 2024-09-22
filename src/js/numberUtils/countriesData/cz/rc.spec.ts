import validator from './rc';
import {
	InvalidLength,
	InvalidChecksum,
	InvalidComponent,
} from '../exceptions';

describe('cz/rc', () => {
	it('format:7103192745', () => {
		const result = validator.format('7103192745', false)

		expect(result).toEqual('710319/2745');
	});

	it('validate:710319/2745', () => {
		const result = validator.validate('710319/2745');

		expect(result.isValid && result.compact).toEqual('7103192745');
	});

	it('validate:991231123', () => {
		const result = validator.validate('991231123');

		expect(result.isValid && result.compact).toEqual('991231123');
	});

	it('validate:1103492745', () => {
		const result = validator.validate('1103492745');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate:590312/12', () => {
		const result = validator.validate('590312/12');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:7103192746', () => {
		const result = validator.validate('7103192746');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

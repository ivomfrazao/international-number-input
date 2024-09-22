import validator from './nif';
import { InvalidComponent, InvalidLength } from '../exceptions';

describe('fr/nif', () => {
	it('format:0701987765432', () => {
		const result = validator.format('0701987765432', false)

		expect(result).toEqual('07 01 987 765 432');
	});

	test.each(['3023217600053', '0701987765493'])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid && result.compact).toEqual(value);
	});

	test.each(['0000000000000'])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(false);
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:9701987765432', () => {
		const result = validator.validate('9701987765432');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});
});

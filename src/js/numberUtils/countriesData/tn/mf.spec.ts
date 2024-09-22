import validator from './mf';
import { InvalidComponent, InvalidFormat } from '../exceptions';

describe('tn/mf', () => {
	it('format:1496298 T P N 000', () => {
		const result = validator.format('1496298 T P N 000', false)

		expect(result).toEqual('1496298/T/P/N/000');
	});

	it('fvalidate:121J', () => {
		const result = validator.validate('121J');

		expect(result.isValid && result.compact).toEqual('0000121J');
	});

	test.each(['1234567/M/A/E/001', '1282182 W', '121J'])(
		'validate:%s',
		value => {
			const result = validator.validate(value);

			expect(result.isValid).toEqual(true);
		},
	);

	it('validate:aaaaaaa/M/A/E/abc', () => {
		const result = validator.validate('aaaaaaa/M/A/E/abc');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});

	it('validate:1234567/M/A/X/000', () => {
		const result = validator.validate('1234567/M/A/X/000');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});
});

import validator from './personnummer';
import * as exceptions from '../../../exceptions';

describe('se/personnummer', () => {
	test.each([
		['8803200017', '880320-0017'], // no hyphen assume young person
		['880320-0017', '880320-0017'], // standard format
		['880320+0017', '880320+0017'], // standard format, person over 100
		['19200901-0000', '200901+0000'], // 4digit year, hypen that's useless person over 100
		['192009010000', '200901+0000'], // 4digit year, no hyphen, person over 100
		['20200901-0000', '200901-0000'], // 4digit year, hyphen
		['202009010000', '200901-0000'], // 4digit year, no hyphen
	])('format:%s', (given, want) => {
		const result = validator.format(given);

		expect(result).toEqual(want);
	});

	it('validate:880320-0016', () => {
		const result = validator.validate('880320-0016');

		expect(result.isValid && result.compact).toEqual('880320-0016');
	});

	test.each(['811228-9874', '670919-9530', '11900102-2384'])(
		'validate:%s',
		value => {
			const result = validator.validate(value);

			expect(result.isValid).toEqual(true);
		},
	);

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:880320-0018', () => {
		const result = validator.validate('880320-0018');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

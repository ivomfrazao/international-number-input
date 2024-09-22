import validator from './tax_code';
import * as exceptions from '../../../exceptions';

describe('tw/tax_code', () => {
	it('format:0050150 3', () => {
		const result = validator.format('0050150 3', false)

		expect(result).toEqual('00501503');
	});

	test.each(['9000503', '2000 05 03 AA'])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	it('validate:9 00 05 15', () => {
		const result = validator.validate('9 00 05 15');

		expect(result.isValid && result.compact).toEqual('9000515');
	});

	it('validate:12345', () => {
		const result = validator.validate('12345');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:12345AA', () => {
		const result = validator.validate('12345AA');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});
});

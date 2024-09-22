import validator from './pesel';
import * as exceptions from '../../../exceptions';

describe('pl/pesel', () => {
	it('format:44051401359', () => {
		const result = validator.format('44051401359', false)

		expect(result).toEqual('44051401359');
	});

	test.each(['09222509560', '44051401359'])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	it('cvalidate:44051401359', () => {
		const result = validator.validate('44051401359');

		expect(result.isValid && result.compact).toEqual('44051401359');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:44051401358', () => {
		const result = validator.validate('44051401358');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

import validator from './ice';
import * as exceptions from '../../../exceptions';

describe('ma/ice', () => {
	it('format:0015 1257 2000078', () => {
		const result = validator.format('0015 1257 2000078', false)

		expect(result).toEqual('001512572000078');
	});

	it('validate:00151257200007 8', () => {
		const result = validator.validate('00151257200007 8');

		expect(result.isValid && result.compact).toEqual('001512572000078');
	});

	test.each([
		'001561191000066',
		'001512572000078',
		'002410367000010',
		'002614910000044',
	])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:MA0015125720000', () => {
		const result = validator.validate('MA0015125720000');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});
});

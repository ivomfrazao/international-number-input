import validator from './tva';
import * as exceptions from '../../../exceptions';

describe('fr/tva', () => {
	it('format:Fr 40 303 265045', () => {
		const result = validator.format('Fr 40 303 265045', false)

		expect(result).toEqual('40 303 265 045');
	});

	it('validate:Fr 40 303 265 045', () => {
		const result = validator.validate('Fr 40 303 265 045');

		expect(result.isValid && result.compact).toEqual('40303265045');
	});

	test.each([
		'40303265045',
		'23334175221',
		'K7399859412',
		'4Z123456782',
		'04494887854', // First digit of checksum is 0
		'FR04494887854', // First digit of checksum is 0
		'FR84323140392',
	])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:84 323 140 391', () => {
		const result = validator.validate('84 323 140 391');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

import validator from './siret';
import * as exceptions from '../../../exceptions';

describe('fr/siret', () => {
	it('format:552 008443', () => {
		const result = validator.format('73282932000074', false)

		expect(result).toEqual('732 829 320 00074');
	});

	test.each([
		'73282932000074',
		'356 000 000 09075',
		'35600000000048',
		'35600000049837',
	])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});
	// it('validate:73282932000074', () => {
	//	 const result = validator.validate('73282932000074');

	//	 expect(result.isValid && result.compact).toEqual('73282932000074');
	// });

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	test.each(['35600000049838', '73282932000075'])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

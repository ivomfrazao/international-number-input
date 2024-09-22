import validator from './tin';
import * as exceptions from '../../../exceptions';

describe('gn/tin', () => {
	it('format:C0000803561', () => {
		const result = validator.format('C0000803561', false)

		expect(result).toEqual('C0000803561');
	});

	it('fvalidate:C0000803561', () => {
		const result = validator.validate('C0000803561');

		expect(result.isValid && result.compact).toEqual('C0000803561');
	});

	test.each([
		'C0000803561',
		'C0002147866',
		'C001095242X',
		'C000366497X',
		'G0061140708',
		'V0003107108',
		'P0008816751',
	])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	it('validate:C000080356', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:C0000803562', () => {
		const result = validator.validate('C0000803562');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

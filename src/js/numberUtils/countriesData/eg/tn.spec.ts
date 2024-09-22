import validator from './tn';
import * as exceptions from '../../../exceptions';

describe('eg/tn', () => {
	it('format:100531385', () => {
		const result = validator.format('100531385', false)

		expect(result).toEqual('100-531-385');
	});

	it('fvalidate:100-531-385', () => {
		const result = validator.validate('100-531-385');

		expect(result.isValid && result.compact).toEqual('100531385');
	});

	test.each([
		'100-531-385',
		'٣٣١-١٠٥-٢٦٨',
		'421 – 159 – 723',
		'431-134-189',
		'432-600-132',
		'455-466-138',
		'455273677',
		'٩٤٦-١٤٩-٢٠٠',
		'۹٤۹-۸۹۱-۲۰٤',
	])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	it('validate:VV3456789', () => {
		const result = validator.validate('VV3456789');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});

	it('validate:12345', () => {
		const result = validator.validate('12345');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});
});

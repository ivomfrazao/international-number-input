import validator from './nifp';
import * as exceptions from '../../../exceptions';

describe('gn/nifp', () => {
	it('format:693770885', () => {
		const result = validator.format('693770885', false)

		expect(result).toEqual('693-770-885');
	});

	it('fvalidate:693-770-885', () => {
		const result = validator.validate('693-770-885');

		expect(result.isValid && result.compact).toEqual('693770885');
	});

	test.each([
		'693770885',
		'693-770-885',
		'102193364',
		'330284803',
		'447777913',
	])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:693770884', () => {
		const result = validator.validate('693770884');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

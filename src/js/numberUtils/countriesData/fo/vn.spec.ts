import validator from './vn';
import * as exceptions from '../../../exceptions';

describe('fo/vn', () => {
	it('format:623857', () => {
		const result = validator.format('623857', false)

		expect(result).toEqual('623857');
	});

	it('fvalidate:623857', () => {
		const result = validator.validate('623857');

		expect(result.isValid && result.compact).toEqual('623857');
	});

	test.each(['623857', '33 28 28', '563.609'])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	it('validate:62385', () => {
		const result = validator.validate('62385');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:62385A', () => {
		const result = validator.validate('62385A');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});
});

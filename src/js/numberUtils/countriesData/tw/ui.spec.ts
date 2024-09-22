import validator from './ui';
import * as exceptions from '../../../exceptions';

describe('tw/ui', () => {
	it('format:00501-50 3', () => {
		const result = validator.format('00501-50 3', false)

		expect(result).toEqual('00501503');
	});

	it('validate:AB00501503', () => {
		const result = validator.validate('AB00501503');

		expect(result.isValid && result.compact).toEqual('AB00501503');
	});

	it('validate:AD00501509', () => {
		const result = validator.validate('AD00501509');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});

	it('validate:12345', () => {
		const result = validator.validate('12345');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:A700501503', () => {
		const result = validator.validate('A700501503');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	// additional tests
	test.each(['A200501503', 'A800501509', 'CC00151113'])('not-valid:', value => {
		const result = validator.validate(value);
		expect(result.isValid).toEqual(false);
	});

	test.each(['AB12345677', 'CC00151114', 'AB00501503'])('valid:', value => {
		const result = validator.validate(value);
		expect(result.isValid).toEqual(true);
	});
});

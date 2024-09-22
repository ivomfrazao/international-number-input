import validator from './natid';
import * as exceptions from '../../../exceptions';

describe('tw/natid', () => {
	it('format:0050150 3', () => {
		const result = validator.format('005-0150 3', false)

		expect(result).toEqual('00501503');
	});

	it('validate:A200501505', () => {
		const result = validator.validate('A200501505');

		expect(result.isValid && result.compact).toEqual('A200501505');
	});

	it('validate:12345', () => {
		const result = validator.validate('12345');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:12345AAAA', () => {
		const result = validator.validate('12345AAA1A');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	test.each(['A200501503', 'A800501509', 'A800501509'])('not-valid:', value => {
		const result = validator.validate(value);
		expect(result.isValid).toEqual(false);
	});

	test.each(['A800000014', 'A123456789', 'A100501503', 'A200501505'])(
		'valid:',
		value => {
			const result = validator.validate(value);
			expect(result.isValid).toEqual(true);
		},
	);
});

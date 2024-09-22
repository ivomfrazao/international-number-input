import validator from './gst';
import * as exceptions from '../../../exceptions';

describe('ca/gst', () => {
	it('format:754039725 RT 0001', () => {
		const result = validator.format('754039725 RT 0001', false)

		expect(result).toEqual('754039725RT0001');
	});

	it('fvalidate:754039725 RT 0001', () => {
		const result = validator.validate('754039725 RT 0001');

		expect(result.isValid && result.compact).toEqual('754039725RT0001');
	});

	test.each(['807138417RT0001', '754039725 RT 0001'])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	it('validate:VALUE', () => {
		const result = validator.validate('VALUE');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:754039729 RT 0001', () => {
		const result = validator.validate('754039729 RT 0001');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

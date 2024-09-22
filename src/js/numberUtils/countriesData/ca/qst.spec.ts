import validator from './qst';
import {
	InvalidLength,
	InvalidChecksum,
	InvalidComponent,
} from '../exceptions';

describe('ca/qst', () => {
	it('format:1224002901 TQ 0001', () => {
		const result = validator.format('1224002901 TQ 0001', false)

		expect(result).toEqual('1224002901TQ0001');
	});

	it('fvalidate:1224002901 TQ 0001', () => {
		const result = validator.validate('1224002901 TQ 0001');

		expect(result.isValid && result.compact).toEqual('1224002901TQ0001');
	});

	test.each(['1224002901 TQ 0001', '1214326422TQ0001'])(
		'validate:%s',
		value => {
			const result = validator.validate(value);

			expect(result.isValid).toEqual(true);
		},
	);

	it('validate:1224002901 TQ 000', () => {
		const result = validator.validate('1224002901 TQ 000');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:1224002902 TQ 0001', () => {
		const result = validator.validate('1224002902 TQ 0001');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});

	it('validate:1224002901 TQ 0000', () => {
		const result = validator.validate('1224002901 TQ 0000');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});
});

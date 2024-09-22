import validator from './ruc';
import * as exceptions from '../../../exceptions';

describe('ec/ruc', () => {
	it('format:1792060346001', () => {
		const result = validator.format('1792060346001', false)

		expect(result).toEqual('1792060346-001');
	});

	it('validate:1792060346-001', () => {
		const result = validator.validate('1792060346-001');

		expect(result.isValid && result.compact).toEqual('1792060346001');
	});

	test.each(['0101016905001', '0962467429001', '1803557964001'])(
		'validate:%s',
		value => {
			const result = validator.validate(value);

			expect(result.isValid).toEqual(true);
		},
	);

	it('validate:1792060346-00', () => {
		const result = validator.validate('1792060346-00');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:1792060347-001', () => {
		const result = validator.validate('1792060347-001');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

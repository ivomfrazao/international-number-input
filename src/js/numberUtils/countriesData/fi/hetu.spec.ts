import validator from './hetu';
import * as exceptions from '../../../exceptions';

describe('fi/hetu', () => {
	it('format:131052-308T', () => {
		const result = validator.format('131052-308T', false)

		expect(result).toEqual('131052-308T');
	});

	it('validate:131052-308T', () => {
		const result = validator.validate('131052-308T');

		expect(result.isValid && result.compact).toEqual('131052-308T');
	});

	test.each(['131022B3082', '131052X308T', '131052-308T'])(
		'validate:%s',
		value => {
			const result = validator.validate(value);

			expect(result.isValid).toEqual(true);
		},
	);

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:131052-308U', () => {
		const result = validator.validate('131052-308U');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

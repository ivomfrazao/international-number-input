import validator from './nif';
import * as exceptions from '../../../exceptions';

describe('dz/nif', () => {
	it('format:000 216 001 808 337 13010', () => {
		const result = validator.format('000 216 001 808 337 13010', false)

		expect(result).toEqual('00021600180833713010');
	});

	it('fvalidate:000 216 001 808 337 13010', () => {
		const result = validator.validate('000 216 001 808 337 13010');

		expect(result.isValid && result.compact).toEqual('00021600180833713010');
	});

	test.each([
		'416001000000007',
		'408 020 000 150 039',
		'41201600000606600001',
		'000 216 001 808 337 13010',
	])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	it('validate:X1600100000000V', () => {
		const result = validator.validate('X1600100000000V');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});

	it('validate:41600100000000', () => {
		const result = validator.validate('41600100000000');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});
});

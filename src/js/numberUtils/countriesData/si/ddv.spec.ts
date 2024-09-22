import validator from './ddv';
import * as exceptions from '../../../exceptions';

describe('si/ddv', () => {
	it('format:SI 5022 3054', () => {
		const result = validator.format('SI 5022 3054', false)

		expect(result).toEqual('50223054');
	});

	it('validate:SI 5022 3054', () => {
		const result = validator.validate('SI 5022 3054');

		expect(result.isValid && result.compact).toEqual('50223054');
	});

	it('validate:1234567', () => {
		const result = validator.validate('1234567');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:SI 5022 3053', () => {
		const result = validator.validate('SI 5022 3053');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

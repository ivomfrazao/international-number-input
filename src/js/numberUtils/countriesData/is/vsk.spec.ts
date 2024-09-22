import validator from './vsk';
import { InvalidLength } from '../exceptions';

describe('is/vsk', () => {
	it('format:IS 00621', () => {
		const result = validator.format('IS 00621', false)

		expect(result).toEqual('00621');
	});

	it('validate:IS 00621', () => {
		const result = validator.validate('IS 00621');

		expect(result.isValid && result.compact).toEqual('00621');
	});

	it('validate:IS 0062199', () => {
		const result = validator.validate('IS 0062199');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});
});

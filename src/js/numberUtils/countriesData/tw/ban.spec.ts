import validator from './ban';
import * as exceptions from '../../../exceptions';

describe('tw/ban', () => {
	it('format:0050150 3', () => {
		const result = validator.format('0050150 3', false)

		expect(result).toEqual('00501503');
	});

	it('validate:00501503', () => {
		const result = validator.validate('00501503');

		expect(result.isValid && result.compact).toEqual('00501503');
	});

	it('validate:12345', () => {
		const result = validator.validate('12345');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:12345AAA', () => {
		const result = validator.validate('12345AAA');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});
});

import validator from './brn';
import * as exceptions from '../../../exceptions';

describe('kr/brn', () => {
	it('format:1168200276', () => {
		const result = validator.format('1168200276', false)

		expect(result).toEqual('116-82-00276');
	});

	it('validate:116-82-00276', () => {
		const result = validator.validate('116-82-00276');

		expect(result.isValid && result.compact).toEqual('1168200276');
	});

	it('validate:123456789', () => {
		const result = validator.validate('123456789');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:116-82-00278', () => {
		const result = validator.validate('116-82-00278');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

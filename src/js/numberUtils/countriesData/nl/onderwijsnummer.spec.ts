import validator from './onderwijsnummer';
import * as exceptions from '../../../exceptions';

describe('nl/onderwijsnummer', () => {
	it('format:1012.22.331', () => {
		const result = validator.format('1012.22.331', false)

		expect(result).toEqual('1012.22.331');
	});

	it('validate:1012.22.331', () => {
		const result = validator.validate('1012.22.331');

		expect(result.isValid && result.compact).toEqual('101222331');
	});

	it('validate:1234567812', () => {
		const result = validator.validate('12345678012');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:100252333', () => {
		const result = validator.validate('100252333');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});

	it('validate:1', () => {
		const result = validator.validate('1');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});
});

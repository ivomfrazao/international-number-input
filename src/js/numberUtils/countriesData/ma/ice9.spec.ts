import validator from './ice9';
import * as exceptions from '../../../exceptions';

describe('ma/ice9', () => {
	it('format:001512572', () => {
		const result = validator.format('001512572', false)

		expect(result).toEqual('001512572');
	});

	it('validate:001512572', () => {
		const result = validator.validate('001512572');

		expect(result.isValid && result.compact).toEqual('001512572');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:MA0015125', () => {
		const result = validator.validate('MA0015125');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});
});

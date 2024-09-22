import validator from './registrikood';
import * as exceptions from '../../../exceptions';

describe('ee/registrikood', () => {
	it('format:12345678', () => {
		const result = validator.format('12345678', false)

		expect(result).toEqual('12345678');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.isValid && result.compact).toEqual('12345678');
	});

	it('validate:1234567899', () => {
		const result = validator.validate('1234567899');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:12345679', () => {
		const result = validator.validate('12345679');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

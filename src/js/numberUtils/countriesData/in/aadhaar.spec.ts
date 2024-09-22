import validator from './aadhaar';
import * as exceptions from '../../../exceptions';

describe('in/aadhaar', () => {
	it('format:234123412346', () => {
		const result = validator.format('234123412346', false)

		expect(result).toEqual('2341 2341 2346');
	});

	it('validate:234123412346', () => {
		const result = validator.validate('234123412346');

		expect(result.isValid && result.compact).toEqual('234123412346');
	});

	it('validate:123412341234', () => {
		const result = validator.validate('123412341234');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});

	it('validate:222222222222', () => {
		const result = validator.validate('222222222222');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:234123412347', () => {
		const result = validator.validate('234123412347');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

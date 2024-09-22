import validator from './tckimlik';
import * as exceptions from '../../../exceptions';

describe('tr/tckimlik', () => {
	it('format:17291716060', () => {
		const result = validator.format('17291716060', false)

		expect(result).toEqual('17291716060');
	});

	it('validate:17291716060', () => {
		const result = validator.validate('17291716060');

		expect(result.isValid && result.compact).toEqual('17291716060');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:17291716050', () => {
		const result = validator.validate('17291716050');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});

	it('validate:64211142102', () => {
		const result = validator.validate('64211142102');

		expect(result.isValid && result.compact).toEqual('64211142102');
	});

	it('validate:62345678900', () => {
		const result = validator.validate('62345678900');

		expect(result.isValid && result.compact).toEqual('62345678900');
	});
});

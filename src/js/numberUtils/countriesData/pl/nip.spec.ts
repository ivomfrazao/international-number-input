import validator from './nip';
import * as exceptions from '../../../exceptions';

describe('pl/nip', () => {
	it('format:PL 8567346215', () => {
		const result = validator.format('PL 8567346215', false)

		expect(result).toEqual('8567346215');
	});

	it('validate:PL 8567346215', () => {
		const result = validator.validate('PL 8567346215');

		expect(result.isValid && result.compact).toEqual('8567346215');
	});

	it('validate:0000002000', () => {
		const result = validator.validate('0000002000');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:PL 8567346216', () => {
		const result = validator.validate('PL 8567346216');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

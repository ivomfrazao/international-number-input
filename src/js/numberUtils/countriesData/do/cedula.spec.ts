import validator from './cedula';
import { InvalidLength, InvalidFormat, InvalidChecksum } from '../exceptions';

describe('do/cedula', () => {
	it('format:00113918205', () => {
		const result = validator.format('00113918205', false)

		expect(result).toEqual('001-1391820-5');
	});

	it('validate:00113918205', () => {
		const result = validator.validate('00113918205');

		expect(result.isValid && result.compact).toEqual('00113918205');
	});

	it('validate:0011391820Q', () => {
		const result = validator.validate('0011391820Q');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});

	it('validate:001139182', () => {
		const result = validator.validate('001139182');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:00113918204', () => {
		const result = validator.validate('00113918204');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

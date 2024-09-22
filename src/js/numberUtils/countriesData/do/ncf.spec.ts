import validator from './ncf';
import * as exceptions from '../../../exceptions';

describe('do/ncf', () => {
	it('format:E31 000000 0005', () => {
		const result = validator.format('E31 000000 0005', false)

		expect(result).toEqual('E310000000005');
	});

	it('validate:E310000000005', () => {
		const result = validator.validate('E310000000005');

		expect(result.isValid && result.compact).toEqual('E310000000005');
	});

	it('validate:B0100000005', () => {
		const result = validator.validate('B0100000005');

		expect(result.isValid && result.compact).toEqual('B0100000005');
	});

	it('validate:Z0100000005', () => {
		const result = validator.validate('Z0100000005');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate:Z0100', () => {
		const result = validator.validate('Z0100');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});
});

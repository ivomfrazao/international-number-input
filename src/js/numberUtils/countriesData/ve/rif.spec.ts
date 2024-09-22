import validator from './rif';
import * as exceptions from '../../../exceptions';

describe('ve/rif', () => {
	it('format:V114702834', () => {
		const result = validator.format('V114702834', false);

		expect(result).toEqual('V-11470283-4');
	});

	it('validate:V-11470283-4', () => {
		const result = validator.validate('V-11470283-4');

		expect(result.isValid && result.compact).toEqual('V114702834');
	});

	it('validate:O-11470283-3', () => {
		const result = validator.validate('O-11470283-3');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:V-11470283-3', () => {
		const result = validator.validate('V-11470283-3');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

import validator from './kmkr';
import * as exceptions from '../../../exceptions';

describe('ee/kmkr', () => {
	it('format:EE 100 931 558', () => {
		const result = validator.format('EE 100 931 558', false)

		expect(result).toEqual('100931558');
	});

	it('validate:100594102', () => {
		const result = validator.validate('100594102');

		expect(result.isValid && result.compact).toEqual('100594102');
	});

	it('validate:1234567', () => {
		const result = validator.validate('1234567');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:100594103', () => {
		const result = validator.validate('100594103');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

import validator from './cc';
import * as exceptions from '../../../exceptions';

describe('pt/cc', () => {
	it('format:100000000AA7', () => {
		const result = validator.format('100000000AA7', false);

		expect(result).toEqual('10000000 0 AA7');
	});

	it('validate:10000000 0 AA7', () => {
		const result = validator.validate('10000000 0 AA7');

		expect(result.isValid && result.compact).toEqual('100000000AA7');
	});

	it('validate:100000000AA7', () => {
		const result = validator.validate('100000000AA7');

		expect(result.isValid && result.compact).toEqual('100000000AA7');
	});

	it('validate:100000000AA7 isIndividual', () => {
		const result = validator.validate('100000000AA7');

		expect(result.isValid && result.isIndividual).toEqual(true);
		expect(result.isValid && result.isCompany).toEqual(false);
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:1000000A0AA7', () => {
		const result = validator.validate('1000000A0AA7');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});

	it('validate:100000000AA0', () => {
		const result = validator.validate('100000000AA0');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

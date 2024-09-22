import validator from './orgnr';
import * as exceptions from '../../../exceptions';

describe('se/orgnr', () => {
	it('format:1234567897', () => {
		const result = validator.format('1234567897', false)

		expect(result).toEqual('123456-7897');
	});

	it('validate:1234567897', () => {
		const result = validator.validate('1234567897');

		expect(result.isValid && result.compact).toEqual('1234567897');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:1234567891', () => {
		const result = validator.validate('1234567891');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

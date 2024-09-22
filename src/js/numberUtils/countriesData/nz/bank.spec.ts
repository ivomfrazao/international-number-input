import validator from './bank';
import * as exceptions from '../../../exceptions';

describe('nz/bank', () => {
	it('format:01-902-0068389-00', () => {
		const result = validator.format('01-902-0068389-00', false)

		expect(result).toEqual('01-0902-0068389-000');
	});

	it('validate:01-902-0068389-00', () => {
		const result = validator.validate('01-902-0068389-00');

		expect(result.isValid && result.compact).toEqual('0109020068389000');
	});

	it('validate:123478', () => {
		const result = validator.validate('123478');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:01-902-0068388-00', () => {
		const result = validator.validate('01-902-0068388-00');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

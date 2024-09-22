import validator from './dph';
import * as exceptions from '../../../exceptions';

describe('sk/dph', () => {
	it('format:SK 202 274 96 19', () => {
		const result = validator.format('SK 202 274 96 19', false)

		expect(result).toEqual('202 274 96 19');
	});

	it('validate:SK 202 274 96 19', () => {
		const result = validator.validate('SK 202 274 96 19');

		expect(result.isValid && result.compact).toEqual('2022749619');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:SK 202 274 96 18', () => {
		const result = validator.validate('SK 202 274 96 18');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

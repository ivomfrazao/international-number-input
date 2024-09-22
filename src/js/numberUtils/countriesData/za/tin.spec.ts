import validator from './tin';
import * as exceptions from '../../../exceptions';

describe('za/tin', () => {
	it('format:2449/494-16-0', () => {
		const result = validator.format('2449/494-16-0', false)

		expect(result).toEqual('2449494160');
	});

	it('validate:0001339050', () => {
		const result = validator.validate('0001339050');

		expect(result.isValid && result.compact).toEqual('0001339050');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:2449/494/16/0', () => {
		const result = validator.validate('2449/494/16/0');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

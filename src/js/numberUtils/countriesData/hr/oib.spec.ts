import validator from './oib';
import * as exceptions from '../../../exceptions';

describe('hr/oib', () => {
	it('format:HR 33392005961', () => {
		const result = validator.format('HR 33392005961', false)

		expect(result).toEqual('33392005961');
	});

	it('validate:HR 33392005961', () => {
		const result = validator.validate('HR 33392005961');

		expect(result.isValid && result.compact).toEqual('33392005961');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:33392005962', () => {
		const result = validator.validate('33392005962');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

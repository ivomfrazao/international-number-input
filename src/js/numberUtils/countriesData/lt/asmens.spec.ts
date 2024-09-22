import validator from './asmens';
import * as exceptions from '../../../exceptions';

describe('lt/asmens', () => {
	it('format:33309240064', () => {
		const result = validator.format('33309240064', false)

		expect(result).toEqual('33309240064');
	});

	it('validate:33309240064', () => {
		const result = validator.validate('33309240064');

		expect(result.isValid && result.compact).toEqual('33309240064');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:33309240164', () => {
		const result = validator.validate('33309240164');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

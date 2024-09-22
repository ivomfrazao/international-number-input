import validator from './aic';
import * as exceptions from '../../../exceptions';

describe('it/aic', () => {
	it('format:000307052', () => {
		const result = validator.format('000307052', false)

		expect(result).toEqual('000307052');
	});

	it('validate:000307052', () => {
		const result = validator.validate('000307052');

		expect(result.isValid && result.compact).toEqual('000307052');
	});

	it('validate:009CVD', () => {
		const result = validator.validate('009CVD');

		expect(result.isValid && result.compact).toEqual('009CVD');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:000307053', () => {
		const result = validator.validate('000307053');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});

	it('validate:009CVE', () => {
		const result = validator.validate('009CVW');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

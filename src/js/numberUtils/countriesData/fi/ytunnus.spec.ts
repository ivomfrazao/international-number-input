import validator from './ytunnus';
import * as exceptions from '../../../exceptions';

describe('fi/ytunnus', () => {
	it('format:20774740', () => {
		const result = validator.format('20774740', false)

		expect(result).toEqual('2077474-0');
	});

	it('validate:2077474-0', () => {
		const result = validator.validate('2077474-0');

		expect(result.isValid && result.compact).toEqual('20774740');
	});

	it('validate:1234567', () => {
		const result = validator.validate('1234567');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:2077474-1', () => {
		const result = validator.validate('2077474-1');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

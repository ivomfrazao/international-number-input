import validator from './alv';
import * as exceptions from '../../../exceptions';

describe('fi/alv', () => {
	it('format:FI 20774740', () => {
		const result = validator.format('FI 20774740', false)

		expect(result).toEqual('20774740');
	});

	it('validate:FI 20774740', () => {
		const result = validator.validate('FI 20774740');

		expect(result.isValid && result.compact).toEqual('20774740');
	});

	it('validate:123458', () => {
		const result = validator.validate('123458');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:20774741', () => {
		const result = validator.validate('20774741');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

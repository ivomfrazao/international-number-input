import validator from './vat';
import * as exceptions from '../../../exceptions';

describe('gb/vat', () => {
	it('format:GB 980 7806 84', () => {
		const result = validator.format('GB 980 7806 84', false)

		expect(result).toEqual('980 7806 84');
	});

	it('validate:GB 980 7806 84', () => {
		const result = validator.validate('GB 980 7806 84');

		expect(result.isValid && result.compact).toEqual('980780684');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:802311781', () => {
		const result = validator.validate('802311781');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});

	it('validate:GB340804329', () => {
		const result = validator.validate('GB340804329');

		expect(result.isValid && result.compact).toEqual('340804329');
	});

	it('validate:GB346270013', () => {
		const result = validator.validate('GB346270013');

		expect(result.isValid && result.compact).toEqual('346270013');
	});
});

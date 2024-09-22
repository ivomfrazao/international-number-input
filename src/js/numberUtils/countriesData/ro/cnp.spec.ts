import validator from './cnp';
import {
	InvalidLength,
	InvalidChecksum,
	InvalidComponent,
} from '../exceptions';

describe('ro/cnp', () => {
	it('format:1630615123457', () => {
		const result = validator.format('1630615123457', false)

		expect(result).toEqual('1630615123457');
	});

	it('validate:1630615123457', () => {
		const result = validator.validate('1630615123457');

		expect(result.isValid && result.compact).toEqual('1630615123457');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:1630615123458', () => {
		const result = validator.validate('1630615123458');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});

	it('validate:0800101221142', () => {
		const result = validator.validate('0800101221142');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate:0800101228842', () => {
		const result = validator.validate('0800101228842');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate:1632215123457', () => {
		const result = validator.validate('1632215123457');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});
});

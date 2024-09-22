import validator from './siren';
import * as exceptions from '../../../exceptions';

describe('fr/siren', () => {
	it('format:552 008 443', () => {
		const result = validator.format('552008443', false)

		expect(result).toEqual('552 008 443');
	});

	it('validate:552 008 443', () => {
		const result = validator.validate('552 008 443');

		expect(result.isValid && result.compact).toEqual('552008443');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:552 008 442', () => {
		const result = validator.validate('552 008 442');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

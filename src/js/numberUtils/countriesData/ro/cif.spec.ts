import validator from './cif';
import * as exceptions from '../../../exceptions';

describe('ro/cif', () => {
	it('format:RO 185 472 90', () => {
		const result = validator.format('RO 185 472 90', false)

		expect(result).toEqual('185 472 90');
	});

	it('validate:RO 185 472 90', () => {
		const result = validator.validate('RO 185 472 90');

		expect(result.isValid && result.compact).toEqual('18547290');
	});

	it('validate:185 472 90', () => {
		const result = validator.validate('185 472 90');

		expect(result.isValid && result.compact).toEqual('18547290');
	});

	it('validate:1630615123457', () => {
		const result = validator.validate('1630615123457');

		expect(result.isValid && result.compact).toEqual('1630615123457');
	});

	it('validate:123456789012', () => {
		const result = validator.validate('123456789012');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:185 472 91', () => {
		const result = validator.validate('185 472 91');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

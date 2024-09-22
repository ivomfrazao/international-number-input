import validator from './nie';
import * as exceptions from '../../../exceptions';

describe('uy/nie', () => {
	it('format:911211234', () => {
		const result = validator.format('911211234', false)

		expect(result).toEqual('91.121.123-4');
	});

	it('validate:912345670', () => {
		const result = validator.validate('912345670');

		expect(result.isValid && result.compact).toEqual('912345670');
	});

	it('validate:1121123', () => {
		const result = validator.validate('1121123');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:912345673', () => {
		const result = validator.validate('912345673');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

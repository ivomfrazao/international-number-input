import validator from './edrpou';
import * as exceptions from '../../../exceptions';

describe('ua/edrpou', () => {
	it('format:32855961', () => {
		const result = validator.format('32855961', false)

		expect(result).toEqual('32855961');
	});

	it('validate:32855961', () => {
		const result = validator.validate('32855961');

		expect(result.isValid && result.compact).toEqual('32855961');
	});

	it('validate:12345', () => {
		const result = validator.validate('12345');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:32855968', () => {
		const result = validator.validate('32855968');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

import validator from './orgnr';
import * as exceptions from '../../../exceptions';

describe('no/orgnr', () => {
	it('format:988077917', () => {
		const result = validator.format('988077917', false)

		expect(result).toEqual('988 077 917');
	});

	it('validate:988 077 917', () => {
		const result = validator.validate('988 077 917');

		expect(result.isValid && result.compact).toEqual('988077917');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:988 077 918', () => {
		const result = validator.validate('988 077 918');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

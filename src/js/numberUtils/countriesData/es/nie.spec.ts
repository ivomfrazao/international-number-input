import validator from './nie';
import * as exceptions from '../../../exceptions';

describe('es/nie', () => {
	it('format:x-2482300w', () => {
		const result = validator.format('x-2482300w', false)

		expect(result).toEqual('X-2482300-W');
	});

	it('validate:x-2482300w', () => {
		const result = validator.validate('x-2482300w');

		expect(result.isValid && result.compact).toEqual('X2482300W');
	});

	it('validate:X2482300', () => {
		const result = validator.validate('X2482300');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:x-2482300a', () => {
		const result = validator.validate('x-2482300a');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

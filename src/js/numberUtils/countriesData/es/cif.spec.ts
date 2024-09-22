import validator from './cif';
import * as exceptions from '../../../exceptions';

describe('es/cif', () => {
	it('format:J99216582', () => {
		const result = validator.format('J99216582', false);

		expect(result).toEqual('J-9921658-2');
	});

	it.each(['J99216582', 'B86670460', 'Q2876031B', 'N0112768G', 'W8265365J'])(
		'validate:%s',
		(cif: string) => {
			const result = validator.validate(cif);

			expect(result.isValid && result.compact).toEqual(cif);
		},
	);

	it('validate:X13585626', () => {
		const result = validator.validate('X13585626');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate:J992165831', () => {
		const result = validator.validate('J992165831');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:M-1234567-L', () => {
		const result = validator.validate('M-1234567-L');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate:O-1234567-L', () => {
		const result = validator.validate('O-1234567-L');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});
});

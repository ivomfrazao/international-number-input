import validator from './nif';
import * as exceptions from '../../../exceptions';

describe('pt/nif', () => {
	it('format:123456789', () => {
		const result = validator.format('123456789', false);

		expect(result).toEqual('123 456 789');
	});

	it('validate:123456789', () => {
		const result = validator.validate('123456789');

		expect(result.isValid && result.compact).toEqual('123456789');
	});

	it('validate:123456789 isIndividual', () => {
		const result = validator.validate('123456789');

		expect(result.isValid && result.isIndividual).toEqual(true);
		expect(result.isValid && result.isCompany).toEqual(false);
	});

	it('validate:545259045', () => {
		const result = validator.validate('545259045');

		expect(result.isValid && result.compact).toEqual('545259045');
	});

	it('validate:545259045 isCompany', () => {
		const result = validator.validate('545259045');

		expect(result.isValid && result.isCompany).toEqual(true);
		expect(result.isValid && result.isIndividual).toEqual(false);
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:023456789', () => {
		const result = validator.validate('023456789');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});

	it('validate:123456780', () => {
		const result = validator.validate('123456780');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

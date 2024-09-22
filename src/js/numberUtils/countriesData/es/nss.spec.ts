import validator from './nss';
import { InvalidLength, InvalidComponent } from '../../../exceptions';

describe('es/nss', () => {
	it('format:281234567840', () => {
		const result = validator.format('281234567840');

		expect('28-1234567840').toEqual(result);
	});

	it.each(['281234567840'])('validate:%s', (value: string) => {
		const result = validator.validate(value);

		expect(value).toEqual(result.isValid && result.compact);
	});

	it('validate:77 12345678 40', () => {
		const result = validator.validate('77 12345678 40');

		expect(result.error).toBeInstanceOf(InvalidComponent);
	});

	it('validate:28 12345678 4', () => {
		const result = validator.validate('28 12345678 4');

		expect(result.error).toBeInstanceOf(InvalidLength);
	});
});

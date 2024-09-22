import validator from './idnr';
import {
	InvalidLength,
	InvalidChecksum,
	InvalidComponent,
} from '../exceptions';

describe('th/idnr', () => {
	it('format:1112034563562', () => {
		const result = validator.format('1112034563562', false)

		expect(result).toEqual('1-1120-34563-56-2');
	});

	test.each(['3100600445635', '1-2345-45678-78-1', '1112034563562'])(
		'validate:%s',
		value => {
			const result = validator.validate(value);

			expect(result.isValid).toEqual(true);
		},
	);

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:0101700230705', () => {
		const result = validator.validate('0101700230705');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate:1101700230705', () => {
		const result = validator.validate('1101700230705');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

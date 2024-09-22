import { validate } from './clabe';
import * as exceptions from '../../../exceptions';

describe('mx/clabe', () => {
	it('validate:12345678901234567', () => {
		const result = validator.validate('12345678901234567');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:000000000000000000', () => {
		const result = validator.validate('000000000000000000');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate:002115016003269411', () => {
		const result = validator.validate('002115016003269411');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate:00000000000000000a', () => {
		const result = validator.validate('00000000000000000a');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate:002010077777777779', () => {
		const result = validator.validate('002010077777777779');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});

	it('validate:002010077777777771', () => {
		const result = validator.validate('002010077777777771');

		expect(result.isValid && result.compact).toEqual('002010077777777771');
	});

	it('validate:032180000118359719', () => {
		const result = validator.validate('032180000118359719');

		expect(result.isValid && result.compact).toEqual('032180000118359719');
	});

	it('validate:014027000005555558', () => {
		const result = validator.validate('014027000005555558');

		expect(result.isValid && result.compact).toEqual('014027000005555558');
	});

	it('validate:014028000005555557', () => {
		const result = validator.validate('014028000005555557');

		expect(result.isValid && result.compact).toEqual('014028000005555557');
	});

	it('validate:002010777777777770', () => {
		const result = validator.validate('002010777777777770');

		expect(result.isValid && result.compact).toEqual('002010777777777770');
	});
});

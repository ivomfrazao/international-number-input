import validator from './pvm';
import * as exceptions from '../../../exceptions';

describe('lt/pvm', () => {
	it('format:119511515', () => {
		const result = validator.format('119511515', false)

		expect(result).toEqual('119511515');
	});

	it('validate:119511515', () => {
		const result = validator.validate('119511515');

		expect(result.isValid && result.compact).toEqual('119511515');
	});

	it('validate:LT 100001919017', () => {
		const result = validator.validate('LT 100001919017');

		expect(result.isValid && result.compact).toEqual('100001919017');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:100001919018', () => {
		const result = validator.validate('100001919018');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

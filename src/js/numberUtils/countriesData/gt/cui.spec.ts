import validator from './cui';
import * as exceptions from '../../../exceptions';

describe('gt/cui', () => {
	it('format:2415751810000', () => {
		const result = validator.format('2415751810000', false)

		expect(result).toEqual('2415-75181-0000');
	});

	it('validate:1587564440904', () => {
		const result = validator.validate('1587564440904');

		expect(result.isValid && result.compact).toEqual('1587564440904');
	});

	it('validate:1580352240101', () => {
		const result = validator.validate('1580352240101');

		expect(result.isValid && result.compact).toEqual('1580352240101');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:1680352240101', () => {
		const result = validator.validate('1680352240101');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

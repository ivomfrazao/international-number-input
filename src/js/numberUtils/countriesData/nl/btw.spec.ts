import validator from './btw';
import * as exceptions from '../../../exceptions';

describe('nl/btw', () => {
	it('format:004495445B01', () => {
		const result = validator.format('004495445B01', false)

		expect(result).toEqual('004495445B01');
	});

	it('validate:004495445B01', () => {
		const result = validator.validate('004495445B01');

		expect(result.isValid && result.compact).toEqual('004495445B01');
	});

	it('validate:NL4495445B01', () => {
		const result = validator.validate('NL4495445B01');

		expect(result.isValid && result.compact).toEqual('004495445B01');
	});

	it('validate:NL002455799B11', () => {
		const result = validator.validate('NL002455799B11');

		expect(result.isValid && result.compact).toEqual('002455799B11');
	});

	it('validate:123456789012345', () => {
		const result = validator.validate('123456789012345');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:123456789B90', () => {
		const result = validator.validate('123456789B90');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

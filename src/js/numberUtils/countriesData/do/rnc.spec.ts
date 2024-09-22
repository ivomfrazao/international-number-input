import validator from './rnc';
import * as exceptions from '../../../exceptions';

describe('do/rnc', () => {
	it('format:101850043', () => {
		const result = validator.format('101850043', false)

		expect(result).toEqual('1-01-85004-3');
	});

	it('validate:1-01-85004-3', () => {
		const result = validator.validate('1-01-85004-3');

		expect(result.isValid && result.compact).toEqual('101850043');
	});

	it('validate:401505967', () => {
		const result = validator.validate('401505967');

		expect(result.isValid && result.compact).toEqual('401505967');
	});

	it('validate:1018A0043', () => {
		const result = validator.validate('1018A0043');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});

	it('validate:10185004', () => {
		const result = validator.validate('10185004');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:101850042', () => {
		const result = validator.validate('101850042');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

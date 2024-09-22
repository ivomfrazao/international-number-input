import validator from './cui';
import * as exceptions from '../../../exceptions';

describe('pe/cui', () => {
	it('format:101174102', () => {
		const result = validator.format('101174102', false)

		expect(result).toEqual('10117410-2');
	});

	it('validate:10117410-2', () => {
		const result = validator.validate('10117410-2');

		expect(result.isValid && result.compact).toEqual('101174102');
	});

	it('validate:1011741', () => {
		const result = validator.validate('1011741');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:10117410-3', () => {
		const result = validator.validate('10117410-3');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

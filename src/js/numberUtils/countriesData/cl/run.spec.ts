import validator from './run';
import * as exceptions from '../../../exceptions';

describe('cl/run', () => {
	it('format:125319092', () => {
		const result = validator.format('125319092', false);

		expect(result).toEqual('12.531.909-2');
	});

	it('validate:76086428-5', () => {
		const result = validator.validate('76086428-5');

		expect(result.isValid && result.compact).toEqual('760864285');
	});

	it('validate:125319092', () => {
		const result = validator.validate('125319092');

		expect(result.isValid && result.compact).toEqual('125319092');
	});

	it('validate:12531909-3', () => {
		const result = validator.validate('12531909-3');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});

	it('validate:76628-5', () => {
		const result = validator.validate('76628-5');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});
});

import validator from './ci';
import * as exceptions from '../../../exceptions';

describe('ec/ci', () => {
	it('format:1714307103', () => {
		const result = validator.format('1714307103', false)

		expect(result).toEqual('171430710-3');
	});

	it('validate:171430710-3', () => {
		const result = validator.validate('171430710-3');

		expect(result.isValid && result.compact).toEqual('1714307103');
	});

	it('validate:171430710', () => {
		const result = validator.validate('171430710');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:1714307104', () => {
		const result = validator.validate('1714307104');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

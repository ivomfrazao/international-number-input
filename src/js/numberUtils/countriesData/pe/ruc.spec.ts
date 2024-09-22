import validator from './ruc';
import * as exceptions from '../../../exceptions';

describe('pe/cui', () => {
	it('format:20512333797', () => {
		const result = validator.format('20512333797', false)

		expect(result).toEqual('20512333797');
	});

	it('validate:20512333797', () => {
		const result = validator.validate('20512333797');

		expect(result.isValid && result.compact).toEqual('20512333797');
	});

	it('validate:205123337', () => {
		const result = validator.validate('205123337');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:20512333798', () => {
		const result = validator.validate('20512333798');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});

	it('validate:20480977239', () => {
		const result = validator.validate('20480977239');

		expect(result.isValid && result.compact).toEqual('20480977239');
	});

	it('validate:20503644968', () => {
		const result = validator.validate('20503644968');

		expect(result.isValid && result.compact).toEqual('20503644968');
	});

	it('validate:20515397290', () => {
		const result = validator.validate('20515397290');

		expect(result.isValid && result.compact).toEqual('20515397290');
	});
});

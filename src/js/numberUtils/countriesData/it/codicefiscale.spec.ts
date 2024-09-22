import validator from './codicefiscale';
import * as exceptions from '../../../exceptions';

describe('it/codicefiscale', () => {
	it('format:RCCMNL83S18D969H', () => {
		const result = validator.format('RCCMNL83S18D969H', false)

		expect(result).toEqual('RCCMNL83S18D969H');
	});

	it('validate:RCCMNL83S18D969H', () => {
		const result = validator.validate('RCCMNL83S18D969H');

		expect(result.isValid && result.compact).toEqual('RCCMNL83S18D969H');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:RCCMNL83S18D967H', () => {
		const result = validator.validate('RCCMNL83S18D967H');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

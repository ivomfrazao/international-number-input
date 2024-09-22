import validator from './mva';
import * as exceptions from '../../../exceptions';

describe('no/mva', () => {
	it('format:NO995525828MVA', () => {
		const result = validator.format('NO995525828MVA', false)

		expect(result).toEqual('NO 995 525 828 MVA');
	});

	it('validate:NO 995 525 828 MVA', () => {
		const result = validator.validate('NO 995 525 828 MVA');

		expect(result.isValid && result.compact).toEqual('995525828MVA');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:NO 995 525 829 MVA', () => {
		const result = validator.validate('NO 995 525 829 MVA');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

import validator from './rrn';
import * as exceptions from '../../../exceptions';

describe('kr/rrn', () => {
	it('format:9710139019902', () => {
		const result = validator.format('9710139019902', false)

		expect(result).toEqual('971013-9019902');
	});

	it('validate:971013-9019902', () => {
		const result = validator.validate('971013-9019902');

		expect(result.isValid && result.compact).toEqual('9710139019902');
	});

	it('validate:850126-6401473', () => {
		const result = validator.validate('8501266401473');

		expect(result.isValid && result.compact).toEqual('8501266401473');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:971013-9019903', () => {
		const result = validator.validate('971013-9019903');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

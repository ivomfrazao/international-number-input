import validator from './pan';
import { InvalidLength, InvalidFormat, InvalidComponent } from '../exceptions';

describe('in/pan', () => {
	it('format:AAPPV8261K', () => {
		const result = validator.format('AAPPV8261K', false)

		expect(result).toEqual('AAPPV8261K');
	});

	it('validate:ACUPA7085R', () => {
		const result = validator.validate('ACUPA7085R');

		expect(result.isValid && result.compact).toEqual('ACUPA7085R');
	});

	it('validate:ABMPA32111', () => {
		const result = validator.validate('ABMPA32111');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});

	it('validate:ABMXA3211G', () => {
		const result = validator.validate('ABMXA3211G');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate:234123412347', () => {
		const result = validator.validate('234123412347');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	// it('validate:2449/494/16/0', () => {
	//	 const result = validator.validate('2449/494/16/0');

	//	 expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	// });
});

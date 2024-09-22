import validator from './nric';
import * as exceptions from '../../../exceptions';

describe('my/nric', () => {
	it('format:770305021234', () => {
		const result = validator.format('770305021234', false)

		expect(result).toEqual('770305-02-1234');
	});

	it('validate:770305-02-1234', () => {
		const result = validator.validate('770305-02-1234');

		expect(result.isValid && result.compact).toEqual('770305021234');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:770305-17-1234', () => {
		const result = validator.validate('771305-17-1234');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('validate:771305-02-1234', () => {
		const result = validator.validate('771305-02-1234');

		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	// it('validate:2449/494/16/0', () => {
	//	 const result = validator.validate('2449/494/16/0');

	//	 expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	// });
});

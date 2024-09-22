import validator from './pin';
import * as exceptions from '../../../exceptions';

describe('ke/pin', () => {
	it('format:P051365947M', () => {
		const result = validator.format('P051365947M', false)

		expect(result).toEqual('P051365947M');
	});

	it('fvalidate:P051365947M', () => {
		const result = validator.validate('P051365947M');

		expect(result.isValid && result.compact).toEqual('P051365947M');
	});

	test.each(['P051365947M', 'P051365947M'])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	it('validate:P051365947', () => {
		const result = validator.validate('P051365947');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:P05136594M7', () => {
		const result = validator.validate('P05136594M7');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});
});

import validator from './epic';
import * as exceptions from '../../../exceptions';

describe('in/epic', () => {
	it('format:WKH1186253', () => {
		const result = validator.format('WKH1186253', false)

		expect(result).toEqual('WKH1186253');
	});

	it('fvalidate:WKH1186253', () => {
		const result = validator.validate('WKH1186253');

		expect(result.isValid && result.compact).toEqual('WKH1186253');
	});

	test.each(['WKH1186253'])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	it('validate:WKH118625', () => {
		const result = validator.validate('WKH118625');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:WKH1186254', () => {
		const result = validator.validate('WKH1186254');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

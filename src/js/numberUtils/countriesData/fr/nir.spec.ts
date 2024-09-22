import validator from './nir';
import * as exceptions from '../../../exceptions';

describe('fr/nir', () => {
	it('format:295109912611193', () => {
		const result = validator.format('295109912611193', false)

		expect(result).toEqual('2 95 10 99 126 111 93');
	});

	test.each(['186022A21532523', '2 95 10 99 126 111 93'])(
		'validate-list:%s',
		value => {
			const result = validator.validate(value);
			expect(result.isValid).toEqual(true);
		},
	);

	it('validate:2 95 10 99 126 111 93', () => {
		const result = validator.validate('2 95 10 99 126 111 93');

		expect(result.isValid && result.compact).toEqual('295109912611193');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:295109912611199', () => {
		const result = validator.validate('295109912611199');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

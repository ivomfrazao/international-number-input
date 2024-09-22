import validator from './nic';
import * as exceptions from '../../../exceptions';

describe('lk/nic', () => {
	it('format:199439848733', () => {
		const result = validator.format('199439848733', false)

		expect(result).toEqual('199439848733');
	});

	it('validate:199439848733', () => {
		const result = validator.validate('199439848733');

		expect(result.isValid && result.compact).toEqual('199439848733');
	});

	it('validate:942281632v', () => {
		const result = validator.validate('942281632v');

		expect(result.isValid && result.compact).toEqual('942281632V');
	});

	it('validate:942R81632b', () => {
		const result = validator.validate('942281632b');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});

	it('validate:942R81632b', () => {
		const result = validator.validate('942R81632b');

		expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
	});

	it('validate:23417', () => {
		const result = validator.validate('23417');
		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

});

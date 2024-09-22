import validator from './fodselsnummer';
import * as exceptions from '../../../exceptions';

describe('no/fodselsnummer', () => {
	it('format:15108695088', () => {
		const result = validator.format('15108695088', false)

		expect(result).toEqual('151086 95088');
	});

	test.each([
		'11111598403',
		'23114048690',
		'15108695088',
		// from norsk-validator
		'01010750160',
		'30042099941',
		'22052099424',
		'09062099345',
		'020161 26007',
	])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(true);
	});

	test.each([
		'45014054018',
		// from norsk-validator
		'11111234567',
		'1234123456',
		'',
	])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid).toEqual(false);
	});

	it('validate:151086 95088', () => {
		const result = validator.validate('151086 95088');

		expect(result.isValid && result.compact).toEqual('15108695088');
	});

	it('validate:12345678', () => {
		const result = validator.validate('12345678');

		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate:15108695077', () => {
		const result = validator.validate('15108695077');

		expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
	});
});

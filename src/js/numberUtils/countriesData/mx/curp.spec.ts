import validator, { getBirthDate, getGender } from './curp';

describe('mx/curp', () => {
	test.each([
		'BOXW310820HNERXN09',
		'HELO990501HVZRPN09',
		'MASI050805MVZRLRA8',
		'COME721110MVZNRR03',
		'TEAM470622HVZZPR07',
		'GARS700923HSPLXL06',
	])('validate:%s', value => {
		const result = validator.validate(value);

		expect(result.isValid && result.compact).toEqual(value);
	});

	it('getBirthDate:BOXW310820HNERXN09', () => {
		const result = getBirthDate('BOXW310820HNERXN09');

		expect(result?.getFullYear()).toEqual(1931);
		expect(result?.getMonth()).toEqual(7);
		expect(result?.getDate()).toEqual(20);
	});

	it('getGender:BOXW310820HNERXN09', () => {
		const result = getGender('BOXW310820HNERXN09');

		expect(result).toEqual('M');
	});
});

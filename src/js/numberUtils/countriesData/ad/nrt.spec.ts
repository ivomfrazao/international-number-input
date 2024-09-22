import validator from './nrt';
import * as exceptions from '../../../exceptions';

describe('ad/nrt', () => {
	it('validate("U-132950-X")', () => {
		const result = validator.validate('U-132950-X');

		expect(result.isValid && result.compact).toEqual('U132950X');
	});

	it('validate A123B', () => {
		const result = validator.validate('A123B');
		expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
	});

	it('validate("I 706193 G")', () => {
		const result = validator.validate('I 706193 G');
		expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
	});

	it('format("D059888N")', () => {
		expect(validator.format('D059888N', false)).toEqual('D-059888-N');
	});

	it('validate("U-132950-X")', () => {
		expect(() => validator.validate('U-132950-X')).not.toThrow();
	});

	it('isValid("U-132950-X")', () => {
		// expect(isValid("U-132950-X")).toBeTruthy();
	});

	it('compact("U-132950-X")', () => {
		expect(validator.compact('U-132950-X', false)).toEqual('U132950X');
	});
});

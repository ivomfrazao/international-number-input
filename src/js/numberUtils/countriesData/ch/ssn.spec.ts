import validator from './ssn';
import {
    InvalidLength,
    InvalidChecksum,
    InvalidComponent,
} from '../exceptions';

describe('ch/ssn', () => {
    it('format:7569217076985', () => {
        const result = validator.format('7569217076985', false);

        expect(result).toEqual('756.9217.0769.85');
    });

    it('validate:756.9217.0769.85', () => {
        const result = validator.validate('756.9217.0769.85');

        expect(result.isValid && result.compact).toEqual('7569217076985');
    });

    it('validate:7569217076985', () => {
        const result = validator.validate('7569217076985');

        expect(result.isValid && result.compact).toEqual('7569217076985');
    });

    test.each(['756.9203.3850.60', '75692170769 85'])('validate:%s', value => {
        const result = validator.validate(value);

        expect(result.isValid).toEqual(true);
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:123.4567.8910.19', () => {
        const result = validator.validate('123.4567.8910.19');

        expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
    });

    it('validate:756.9217.0769.84', () => {
        const result = validator.validate('756.9217.0769.84');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

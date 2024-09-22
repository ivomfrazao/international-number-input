import validator from './tin';
import * as exceptions from '../../../exceptions';

describe('az/tin', () => {
    it('format:123-123-123-1', () => {
        const result = validator.format('123-123-123-1', false);

        expect(result).toEqual('1231231231');
    });

    it('validate:1231231231', () => {
        const result = validator.validate('1231231231');

        expect(result.isValid && result.compact).toEqual('1231231231');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:1231231233', () => {
        const result = validator.validate('1231231233');

        expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
    });
});

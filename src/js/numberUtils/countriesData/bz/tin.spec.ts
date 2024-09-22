import validator from './tin';
import * as exceptions from '../../../exceptions';

describe('bz/tin', () => {
    it('format:00000510', () => {
        const result = validator.format('00000510', false);

        expect(result).toEqual('000005-10');
    });

    it('validate:00000510', () => {
        const result = validator.validate('00000510');

        expect(result.isValid && result.compact).toEqual('00000510');
    });

    it('validate:0000051', () => {
        const result = validator.validate('0000051');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:00000520', () => {
        const result = validator.validate('00000520');

        expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
    });
});

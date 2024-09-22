import validator from './tfn';
import * as exceptions from '../../../exceptions';

describe('au/tfn', () => {
    it('format:123456782', () => {
        const result = validator.format('123456782', false);

        expect(result).toEqual('123 456 782');
    });

    it('validate:123 456 782', () => {
        const result = validator.validate('123 456 782');

        expect(result.isValid && result.compact).toEqual('123456782');
    });

    it('validate:1234567', () => {
        const result = validator.validate('1234567');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:999 999 999', () => {
        const result = validator.validate('999 999 999');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

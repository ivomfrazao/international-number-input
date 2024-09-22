import validator from './abn';
import * as exceptions from '../../../exceptions';

describe('au/abn', () => {
    it('format:83 914 571 673', () => {
        const result = validator.format('83 914 571 673', false);

        expect(result).toEqual('83 914 571 673');
    });

    it('validate:83 914 571 673', () => {
        const result = validator.validate('83 914 571 673');

        expect(result.isValid && result.compact).toEqual('83914571673');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:99 999 999 999', () => {
        const result = validator.validate('99 999 999 999');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

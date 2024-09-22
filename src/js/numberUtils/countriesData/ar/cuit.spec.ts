import validator from './cuit';
import * as exceptions from '../../../exceptions';

describe('ar/cuit', () => {
    it('format:20-05536168-2', () => {
        const result = validator.format('20-05536168-2', false);

        expect(result).toEqual('20-05536168-2');
    });

    it('validate:20-05536168-2', () => {
        const result = validator.validate('20-05536168-2');

        expect(result.isValid && result.compact).toEqual('20055361682');
    });

    it('validate:2026756539', () => {
        const result = validator.validate('2026756539');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:20267565392', () => {
        const result = validator.validate('20267565392');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

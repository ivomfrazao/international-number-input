import validator from './vat';
import * as exceptions from '../../../exceptions';

describe('ch/vat', () => {
    it('format:CHE107787577IVA', () => {
        const result = validator.format('CHE107787577IVA', false);

        expect(result).toEqual('CHE-107.787.577 IVA');
    });

    it('validate:CHE-107.787.577 IVA', () => {
        const result = validator.validate('CHE-107.787.577 IVA');

        expect(result.isValid && result.compact).toEqual('CHE107787577IVA');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:CHE-107.787.578 IVA', () => {
        const result = validator.validate('CHE-107.787.578 IVA');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

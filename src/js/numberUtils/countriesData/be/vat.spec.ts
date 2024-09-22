import validator from './vat';
import * as exceptions from '../../../exceptions';

describe('be/vat', () => {
    it('format:403019261', () => {
        const result = validator.format('403019261', false);

        expect(result).toEqual('0403019261');
    });

    it('validate:BE403019261', () => {
        const result = validator.validate('BE403019261');

        expect(result.isValid && result.compact).toEqual('0403019261');
    });

    it('validate:(0)403019261', () => {
        const result = validator.validate('(0)403019261');

        expect(result.isValid && result.compact).toEqual('0403019261');
    });

    it('validate:BE 428759497', () => {
        const result = validator.validate('BE 428759497');

        expect(result.isValid && result.compact).toEqual('0428759497');
    });

    it('validate:BE 0417497106', () => {
        const result = validator.validate('BE 0417497106');

        expect(result.isValid && result.compact).toEqual('0417497106');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:BE431150351', () => {
        const result = validator.validate('BE431150351');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

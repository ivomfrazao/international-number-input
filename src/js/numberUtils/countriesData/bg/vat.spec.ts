import validator from './vat';
import * as exceptions from '../../../exceptions';

describe('bg/vat', () => {
    it('format:BG 175 074 752', () => {
        const result = validator.format('BG 175 074 752', false);

        expect(result).toEqual('175074752');
    });

    it('validate:BG 175 074 752', () => {
        const result = validator.validate('BG 175 074 752');

        expect(result.isValid && result.compact).toEqual('175074752');
    });

    it('validate:175 074 752', () => {
        const result = validator.validate('175 074 752');

        expect(result.isValid && result.compact).toEqual('175074752');
    });

    it('validate:BG 175 074 75', () => {
        const result = validator.validate('BG 175 074 75');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:BG 175 074 754', () => {
        const result = validator.validate('BG 175 074 754');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

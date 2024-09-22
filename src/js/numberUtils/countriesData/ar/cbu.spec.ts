import validator from './cbu';
import * as exceptions from '../../../exceptions';

describe('ar/cbu', () => {
    it('format:2850590940090418135201', () => {
        const result = validator.format('2850590940090418135201', false);

        expect(result).toEqual('28505909 40090418135201');
    });

    it('validate:2850590940090418135201', () => {
        const result = validator.validate('2850590940090418135201');

        expect(result.isValid && result.compact).toEqual(
            '2850590940090418135201',
        );
    });

    it('validate:281059094009041813520', () => {
        const result = validator.validate('281059094009041813520');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:2810590940090418135201', () => {
        const result = validator.validate('2810590940090418135201');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

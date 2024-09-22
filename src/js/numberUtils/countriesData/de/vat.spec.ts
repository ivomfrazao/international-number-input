import validator from './vat';
import * as exceptions from '../../../exceptions';

describe('de/vat', () => {
    it('format:DE 136,695 976', () => {
        const result = validator.format('DE 136,695 976', false);

        expect(result).toEqual('136695976');
    });

    it('validate:DE136695976', () => {
        const result = validator.validate('DE136695976');

        expect(result.isValid && result.compact).toEqual('136695976');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:136695978', () => {
        const result = validator.validate('136695978');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

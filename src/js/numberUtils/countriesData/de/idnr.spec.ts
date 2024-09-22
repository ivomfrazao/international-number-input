import validator from './idnr';
import * as exceptions from '../../../exceptions';

describe('de/idnr', () => {
    it('format:36574261809', () => {
        const result = validator.format('36574261809', false);

        expect(result).toEqual('36 574 261 809');
    });

    test.each(['36574261809'])('validate:%s', value => {
        const result = validator.validate(value);

        expect(result.isValid && result.compact).toEqual(value);
    });

    it('validate:36 574 261 809', () => {
        const result = validator.validate('36 574 261 809');

        expect(result.isValid && result.compact).toEqual('36574261809');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:36574261808', () => {
        const result = validator.validate('36574261808');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

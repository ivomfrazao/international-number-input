import validator from './dic';
import * as exceptions from '../../../exceptions';

describe('cz/dic', () => {
    it('format:CZ 25123891', () => {
        const result = validator.format('CZ 25123891', false);

        expect(result).toEqual('25123891');
    });

    it('validate:CZ 25123891', () => {
        const result = validator.validate('CZ 25123891');

        expect(result.isValid && result.compact).toEqual('25123891');
    });

    it('validate:1234567', () => {
        const result = validator.validate('1234567');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:25123890', () => {
        const result = validator.validate('25123890');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

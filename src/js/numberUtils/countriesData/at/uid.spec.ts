import validator from './uid';
import {
    InvalidLength,
    InvalidChecksum,
    InvalidComponent,
} from '../exceptions';

describe('at/uid', () => {
    it('format:AT U13585627', () => {
        const result = validator.format('AT U13585627', false);

        expect(result).toEqual('U13585627');
    });

    it('validate:AT U13585627', () => {
        const result = validator.validate('AT U13585627');

        expect(result.isValid && result.compact).toEqual('U13585627');
    });

    it('validate:U13585627', () => {
        const result = validator.validate('U13585627');

        expect(result.isValid && result.compact).toEqual('U13585627');
    });

    it('validate:X13585626', () => {
        const result = validator.validate('X13585626');

        expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
    });

    it('validate:U1358562', () => {
        const result = validator.validate('U1358562');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:U13585626', () => {
        const result = validator.validate('U13585626');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

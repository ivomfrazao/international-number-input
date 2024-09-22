import validator from './pnf';
import * as exceptions from '../../../exceptions';

describe('bg/pnf', () => {
    it('format:7111 042 925', () => {
        const result = validator.format('7111 042 925', false);

        expect(result).toEqual('7111042925');
    });

    it('validate:7111 042 925', () => {
        const result = validator.validate('7111 042 925');

        expect(result.isValid && result.compact).toEqual('7111042925');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:7111 042 926', () => {
        const result = validator.validate('7111 042 926');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

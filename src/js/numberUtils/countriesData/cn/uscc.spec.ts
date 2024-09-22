import validator from './uscc';
import * as exceptions from '../../../exceptions';

describe('cn/uscc', () => {
    it('format:91110000600037341L', () => {
        const result = validator.format('91110000600037341L', false);

        expect(result).toEqual('91110000600037341L');
    });

    it('validate:91110000600037341L', () => {
        const result = validator.validate('91110000600037341L');

        expect(result.isValid && result.compact).toEqual('91110000600037341L');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:A1110000600037341L', () => {
        const result = validator.validate('A1110000600037341L');

        expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
    });

    it('validate:91110000600037342L', () => {
        const result = validator.validate('91110000600037342L');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

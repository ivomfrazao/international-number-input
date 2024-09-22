import validator from './cnpj';
import * as exceptions from '../../../exceptions';

describe('br/cnpj', () => {
    it('format:16727230000197', () => {
        const result = validator.format('16727230000197', false);

        expect(result).toEqual('16.727.230/0001-97');
    });

    it('validate:16.727.230/0001-97', () => {
        const result = validator.validate('16.727.230/0001-97');

        expect(result.isValid && result.compact).toEqual('16727230000197');
    });

    it('validate:660-3', () => {
        const result = validator.validate('660-3');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:16.727.230.0001-98', () => {
        const result = validator.validate('16.727.230.0001-98');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });

    it('validate:16.727.230/0001=9', () => {
        const result = validator.validate('16.727.230/0001=9');

        expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
    });
});

import validator from './cpf';
import * as exceptions from '../../../exceptions';

describe('br/cpf', () => {
    it('format:23100299900', () => {
        const result = validator.format('23100299900', false);

        expect(result).toEqual('231.002.999-00');
    });

    it('validate:390.533.447-05', () => {
        const result = validator.validate('390.533.447-05');

        expect(result.isValid && result.compact).toEqual('39053344705');
    });

    it('validate:660-3', () => {
        const result = validator.validate('660-3');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:231.002.999-00', () => {
        const result = validator.validate('231.002.999-00');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });

    it('validate:390.533.447=0', () => {
        const result = validator.validate('390.533.447=0');

        expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
    });
});

import validator from './egn';
import * as exceptions from '../../../exceptions';

describe('bg/egn', () => {
    it('format:752316 926 3', () => {
        const result = validator.format('752316 926 3', false);

        expect(result).toEqual('7523169263');
    });

    it('validate:8032056031', () => {
        const result = validator.validate('8032056031');

        expect(result.isValid && result.compact).toEqual('8032056031');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:8032056032', () => {
        const result = validator.validate('8032056032');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

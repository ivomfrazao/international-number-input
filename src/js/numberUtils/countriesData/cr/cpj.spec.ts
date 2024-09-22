import validator from './cpj';
import * as exceptions from '../../../exceptions';

describe('cr/cpj', () => {
    it('format:4 000 042138', () => {
        const result = validator.format('4 000 042138', false);

        expect(result).toEqual('4-000-042138');
    });

    it('validate:3-101-999999', () => {
        const result = validator.validate('3-101-999999');

        expect(result.isValid && result.compact).toEqual('3101999999');
    });

    it('validate:310132541', () => {
        const result = validator.validate('310132541');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:3-534-123559', () => {
        const result = validator.validate('3-534-123559');

        expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
    });
});

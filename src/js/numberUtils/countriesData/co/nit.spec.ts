import validator from './nit';
import * as exceptions from '../../../exceptions';

describe('co/nit', () => {
    it('format:213.123.4321', () => {
        const result = validator.format('213.123.4321', false);

        expect(result).toEqual('213.123.432-1');
    });

    it('validate:213.123.432-1', () => {
        const result = validator.validate('213.123.432-1');

        expect(result.isValid && result.compact).toEqual('2131234321');
    });

    it('validate:10184648519', () => {
        const result = validator.validate('10184648519');

        expect(result.isValid && result.compact).toEqual('10184648519');
    });

    it('validate:900544472-2', () => {
        const result = validator.validate('900544472-2');

        expect(result.isValid && result.compact).toEqual('9005444722');
    });

    it('validate:21312', () => {
        const result = validator.validate('21312');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:2131234325', () => {
        const result = validator.validate('2131234325');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

import validator from './unp';
import * as exceptions from '../../../exceptions';

describe('by/unp', () => {
    it('format:200988541', () => {
        const result = validator.format('200988541', false);

        expect(result).toEqual('200988541');
    });

    it('validate:200988541', () => {
        const result = validator.validate('200988541');

        expect(result.isValid && result.compact).toEqual('200988541');
    });

    it('validate:УНП MA1953684', () => {
        const result = validator.validate('УНП MA1953684');

        expect(result.isValid && result.compact).toEqual('MA1953684');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:200988542', () => {
        const result = validator.validate('200988542');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

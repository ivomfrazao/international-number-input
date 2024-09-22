import validator from './ric';
import * as exceptions from '../../../exceptions';

describe('cn/ric', () => {
    it('format:360426199101010071', () => {
        const result = validator.format('360426199101010071', false);

        expect(result).toEqual('360426199101010071');
    });

    it('validate:360426199101010071', () => {
        const result = validator.validate('360426199101010071');

        expect(result.isValid && result.compact).toEqual('360426199101010071');
    });

    it('validate:120103198806018241', () => {
        const result = validator.validate('120103198806018241');

        expect(result.isValid && result.compact).toEqual('120103198806018241');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:360426199101010072', () => {
        const result = validator.validate('360426199101010072');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

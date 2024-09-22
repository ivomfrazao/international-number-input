import validator from './cr';
import * as exceptions from '../../../exceptions';

describe('cr/cr', () => {
    it('format:122200569906', () => {
        const result = validator.format('122200569906', false);

        expect(result).toEqual('122200569906');
    });

    it('validate:155812994816', () => {
        const result = validator.validate('155812994816');

        expect(result.isValid && result.compact).toEqual('155812994816');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:300123456789', () => {
        const result = validator.validate('300123456789');

        expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
    });
});

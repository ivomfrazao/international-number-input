import validator from './uid';
import * as exceptions from '../../../exceptions';

describe('ch/uid', () => {
    it('format:CHE100155212', () => {
        const result = validator.format('CHE100155212', false);

        expect(result).toEqual('CHE-100.155.212');
    });

    it('validate:CHE109910570', () => {
        const result = validator.validate('CHE109910570');

        expect(result.isValid && result.compact).toEqual('CHE109910570');
    });

    it('validate:CHE-100.155.212', () => {
        const result = validator.validate('CHE-100.155.212');

        expect(result.isValid && result.compact).toEqual('CHE100155212');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:CHE-100.155.212', () => {
        const result = validator.validate('CHE-100.155.211');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

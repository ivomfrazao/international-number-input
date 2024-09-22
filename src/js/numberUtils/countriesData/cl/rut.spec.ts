import validator from './rut';
import {
    InvalidLength,
    InvalidChecksum,
    InvalidComponent,
} from '../exceptions';

describe('cl/rut', () => {
    it('format:800280610', () => {
        const result = validator.format('125319092', false);

        expect(result).toEqual('12.531.909-2');
    });

    it('validate:76086428-5', () => {
        const result = validator.validate('76086428-5');

        expect(result.isValid && result.compact).toEqual('760864285');
    });

    it('validate:CL 12531909-2', () => {
        const result = validator.validate('CL 12531909-2');

        expect(result.isValid && result.compact).toEqual('125319092');
    });

    it('validate:12531909-3', () => {
        const result = validator.validate('12531909-3');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });

    it('validate:76086A28-5', () => {
        const result = validator.validate('76086A28-5');

        expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
    });

    it('validate:76628-5', () => {
        const result = validator.validate('76628-5');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:2660-4', () => {
        const result = validator.validate('2660-4');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });
});

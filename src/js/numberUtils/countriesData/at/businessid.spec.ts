import validator from './businessid';
import { InvalidFormat } from '../exceptions';

describe('at/businessid', () => {
    it('format:800280610', () => {
        const result = validator.format('122119m', false);

        expect(result).toEqual('122119M');
    });

    it('validate:FN 122119m', () => {
        const result = validator.validate('FN 122119m');

        expect(result.isValid && result.compact).toEqual('122119M');
    });

    it('validate:8765432-6', () => {
        const result = validator.validate('122119m');

        expect(result.isValid && result.compact).toEqual('122119M');
    });

    it('validate:m122119', () => {
        const result = validator.validate('m122119');

        expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
    });

    it('validate:abc', () => {
        const result = validator.validate('abc');

        expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
    });
});

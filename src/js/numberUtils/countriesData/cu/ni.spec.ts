import validator from './ni';
import { InvalidLength, InvalidComponent, InvalidFormat } from '../exceptions';

describe('cu/ni', () => {
    it('format:91021027775', () => {
        const result = validator.format('91021027775', false);

        expect(result).toEqual('91021027775');
    });

    it('validate:91021027775', () => {
        const result = validator.validate('91021027775');

        expect(result.isValid && result.compact).toEqual('91021027775');
    });

    it('validate:91221027775', () => {
        const result = validator.validate('91221027775');

        expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:9102102777A', () => {
        const result = validator.validate('9102102777A');

        expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
    });
});

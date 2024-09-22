import validator from './pin';
import { InvalidLength } from '../exceptions';

describe('az/pin', () => {
    it('format:123 123 3', () => {
        const result = validator.format('123 123 3', false);

        expect(result).toEqual('1231233');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });
});

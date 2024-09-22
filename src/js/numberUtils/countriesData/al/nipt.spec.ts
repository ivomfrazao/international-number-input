import validator from './nipt';
import * as exceptions from '../../../exceptions';

describe('al/nibt', () => {
    it('format:AL J 91402501 L', () => {
        const result = validator.format('AL J 91402501 L', false);

        expect(result).toEqual('J91402501L');
    });

    test.each(['I05101999Q', 'K52224002A', 'L42307014K'])(
        'validate:%s',
        value => {
            const result = validator.validate(value);

            expect(result.isValid).toEqual(true);
        },
    );

    it('validate:AL J 91402501 L', () => {
        const result = validator.validate('AL J 91402501 L');

        expect(result.isValid && result.compact).toEqual('J91402501L');
    });

    it('validate:(AL) J 91402501L', () => {
        const result = validator.validate('(AL) J 91402501L');

        expect(result.isValid && result.compact).toEqual('J91402501L');
    });

    it('validate:(AL) J 91402501', () => {
        const result = validator.validate('(AL) J 91402501');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:Z 22218003 V', () => {
        const result = validator.validate('Z 22218003 V');

        expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
    });
});

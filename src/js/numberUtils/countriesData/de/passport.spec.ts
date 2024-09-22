import validator from './passport';
import * as exceptions from '../../../exceptions';

describe('de/idnr', () => {
    it('format:C01X00T47', () => {
        const result = validator.format('C01X00T47', false);

        expect(result).toEqual('C01X00T47');
    });

    test.each(['C01X00T47', 'C01X00T478', 'CZ6311T472D'])(
        'validate:%s',
        value => {
            const result = validator.validate(value);

            expect(result.isValid).toBeTruthy();
        },
    );

    test.each(['C01X00T47999', 'C01X00T4'])('validate:%s', value => {
        const result = validator.validate(value);

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:C01X00T479', () => {
        const result = validator.validate('C01X00T479');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

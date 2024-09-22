import validator from './jmbg';
import * as exceptions from '../../../exceptions';

describe('ba/jmbg', () => {
    it('format:0101006500006', () => {
        const result = validator.format('0101006500006', false);

        expect(result).toEqual('0101006500006');
    });

    it('validate:0101006500006', () => {
        const result = validator.validate('0101006500006');

        expect(result.isValid && result.compact).toEqual('0101006500006');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:0101006500007', () => {
        const result = validator.validate('0101006500007');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
});

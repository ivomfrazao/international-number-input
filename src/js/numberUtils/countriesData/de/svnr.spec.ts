import validator from './svnr';
import {
    InvalidLength,
    InvalidComponent,
    InvalidChecksum,
} from '../exceptions';

describe('de/svnr', () => {
    it('format:15070649C103', () => {
        const result = validator.format('15070649C103', false);
        expect(result).toEqual('15 070649 C 103');
    });

    it('validate:15 070649 C 103', () => {
        const result = validator.validate('15 070649 C 103');
        expect(result.isValid && result.compact).toEqual('15070649C103');
    });

    it('validate:12345678', () => {
        const result = validator.validate('12345678');
        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });
    // // Invalid Area Code
    it('validate:01070649C103', () => {
        const result = validator.validate('01070649C103');
        expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
    });
    // Invalid Birth month (13)
    it('validate:15071349C103', () => {
        const result = validator.validate('15071349C103');
        expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
    });
    // Invalid Checksum
    it('validate:15070649C102', () => {
        const result = validator.validate('15070649C102');
        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });
    describe('invalid component cases', () => {
        it('validate:15JU0649C102', () => {
            const result = validator.validate('15JU0649C102');
            expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
        });
        it('validate:1507064CC102', () => {
            const result = validator.validate('1507064CC102');
            expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
        });
        it('validate:150706499102', () => {
            const result = validator.validate('150706499102');
            expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
        });
        it('validate:15070649CC03', () => {
            const result = validator.validate('15070649CC03');
            expect(result.error).toBeInstanceOf(exceptions.InvalidComponent);
        });
    });
});

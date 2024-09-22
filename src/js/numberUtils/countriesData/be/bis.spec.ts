import validator from './bis';
import * as exceptions from '../../../exceptions';

describe('be/bis', () => {
    it('format:88 22 29-999.70', () => {
        const result = validator.format('88 02 29-999.70', false);

        expect(result).toEqual('88022999970');
    });

    it('validate:1', () => {
        const result = validator.validate('1');

        expect(result.error).toBeInstanceOf(exceptions.InvalidLength);
    });

    it('validate:88022999990', () => {
        // A number that validates for NN, should be invalid
        const result = validator.validate('88022999990');

        expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
    });

    it('validate:88222999936', () => {
        // A number with an offset of 20, should be valid assuming 19xx
        const result = validator.validate('88222999936');

        expect(result.isValid && result.compact).toEqual('88222999936');
    });

    it('validate:08222999934', () => {
        // A number with an offset of 20, should be valid assuming 20xx
        const result = validator.validate('08222999934');

        expect(result.isValid && result.compact).toEqual('08222999934');
    });

    it('validate:88422999979', () => {
        // A number with an offset of 40, should be valid assuming 19xx
        const result = validator.validate('88422999979');

        expect(result.isValid && result.compact).toEqual('88422999979');
    });

    it('validate:08422999977', () => {
        // A number with an offset of 40, should be valid assuming 20xx
        const result = validator.validate('08422999977');

        expect(result.isValid && result.compact).toEqual('08422999977');
    });

    it('validate:96331699989', () => {
        // A number with an offset of 20, should be invalid due to invalid month
        const result = validator.validate('96331699989');

        expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
    });

    it('validate:08222999935', () => {
        // A number with an offset of 20, should be invalid due to invalid checksum
        const result = validator.validate('08222999935');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });

    it('validate:96531699935', () => {
        // A number with an offset of 40, should be invalid due to invalid month
        const result = validator.validate('96531699935');

        expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
    });

    it('validate:08451799971', () => {
        // A number with an offset of 40, should be invalid due to invalid checksum
        const result = validator.validate('08451799971');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });

    it('validate:92612099915', () => {
        // A number with an offset of 60, should be invalid due to invalid month
        const result = validator.validate('92612099915');

        expect(result.error).toBeInstanceOf(exceptions.InvalidFormat);
    });

    it('validate:99200199926', () => {
        // A number with an unknown dob offset by 20, should be valid assuming 19xx
        const result = validator.validate('99200199926');

        expect(result.isValid && result.compact).toEqual('99200199926');
    });

    it('validate:01200199934', () => {
        // A number with an unknown dob offset by 20, should be valid assuming 20xx
        const result = validator.validate('01200199934');

        expect(result.isValid && result.compact).toEqual('01200199934');
    });

    it('validate:01200199935', () => {
        // A number with an unknown dob offset by 20, should be invalid by checksum
        const result = validator.validate('01200199935');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });

    it('validate:99400199969', () => {
        // A number with an unknown dob offset by 40, should be valid assuming 19xx
        const result = validator.validate('99400199969');

        expect(result.isValid && result.compact).toEqual('99400199969');
    });

    it('validate:01451599980', () => {
        // A number with an unknown dob offset by 40, should be valid assuming 20xx
        const result = validator.validate('01451599980');

        expect(result.isValid && result.compact).toEqual('01451599980');
    });

    it('validate:01400199977', () => {
        // A number with an unknown dob offset by 40, should be valid assuming 20xx
        const result = validator.validate('01400199977');

        expect(result.isValid && result.compact).toEqual('01400199977');
    });

    it('validate:01400199981', () => {
        // A number with an unknown dob offset by 40, should be invalid by checksum
        const result = validator.validate('01400199981');

        expect(result.error).toBeInstanceOf(exceptions.InvalidChecksum);
    });

    it('validate:00290199976', () => {
        // A number that starts with 00 can be valid
        const result = validator.validate('00290199976');

        expect(result.isValid && result.compact).toEqual('00290199976');
    });

    it('validate:(unspecified date in current year, offset of 20)', () => {
        const yy = new Date().getFullYear() % 100;
        const baseNum = parseInt(`${yy}2000999`, 10);
        const twoPrefixedBaseNumber = parseInt(`${2}${baseNum}`, 10);
        const checksum = String(97 - (twoPrefixedBaseNumber % 97)).padStart(
            2,
            '0',
        );
        const id = `${baseNum}${checksum}`;

        const result = validator.validate(id);
        expect(result.isValid && result.compact).toEqual(id);
    });

    it('validate:(unspecified date in current year, offset of 40)', () => {
        const yy = new Date().getFullYear() % 100;
        const baseNum = parseInt(`${yy}4000999`, 10);
        const twoPrefixedBaseNumber = parseInt(`${2}${baseNum}`, 10);
        const checksum = String(97 - (twoPrefixedBaseNumber % 97)).padStart(
            2,
            '0',
        );
        const id = `${baseNum}${checksum}`;

        const result = validator.validate(id);
        expect(result.isValid && result.compact).toEqual(id);
    });

    it('validate:(unspecified date 100 years ago, offset of 20)', () => {
        const yy = new Date().getFullYear() % 100;
        const baseNum = parseInt(`${yy}2000999`, 10);
        const checksum = String(97 - (baseNum % 97)).padStart(2, '0');
        const id = `${baseNum}${checksum}`;

        const result = validator.validate(id);
        expect(result.isValid && result.compact).toEqual(id);
    });

    it('validate:(unspecified date 100 years ago, offset of 40)', () => {
        const yy = new Date().getFullYear() % 100;
        const baseNum = parseInt(`${yy}4000999`, 10);
        const checksum = String(97 - (baseNum % 97)).padStart(2, '0');
        const id = `${baseNum}${checksum}`;

        const result = validator.validate(id);
        expect(result.isValid && result.compact).toEqual(id);
    });
});

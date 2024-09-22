import validator from './dni';
import { InvalidLength, InvalidChecksum } from '../../../exceptions';

describe('es/dni', () => {
  it('format:54362315K', () => {
    const result = validator.format('54362315K');

    expect(result).toEqual('54362315-K');
  });

  it('validate:54362315-K', () => {
    const result = validator.validate('54362315-K');

    expect(result.isValid && result.compact).toEqual('54362315K');
  });

  it('validate:54362315', () => {
    const result = validator.validate('54362315');

    expect(result.error).toBeInstanceOf(InvalidLength);
  });

  it('validate:54362315Z', () => {
    const result = validator.validate('54362315Z');

    expect(result.error).toBeInstanceOf(InvalidChecksum);
  });
});

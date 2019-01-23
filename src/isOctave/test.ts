import isOctave from './index';

describe('isOctave', () => {
  it('should return true when interval is Octave', () => {
    expect(isOctave(12)).toBe(true);
  });

  it('should return false when interval is not Octave', () => {
    expect(isOctave(0)).toBe(false);
  });

  it('should return false on no input', () => {
    expect((isOctave as any)()).toBe(false);
  });
});

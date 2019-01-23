import isSemitone from './index';

describe('isSemitone', () => {
  it('should return true when interval is semitone', () => {
    expect(isSemitone(1)).toBe(true);
  });

  it('should return false when interval is not semitone', () => {
    expect(isSemitone(2)).toBe(false);
  });

  it('should return false when interval is not semitone', () => {
    expect(isSemitone(7)).toBe(false);
  });

  it('should return false on no input', () => {
    expect((isSemitone as any)()).toBe(false);
  });
});

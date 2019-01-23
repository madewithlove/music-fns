import isFifth from './index';

describe('isFifth', () => {
  it('should return true when interval is a perfect fifth', () => {
    expect(isFifth(7)).toBe(true);
  });

  it('should return true when interval is a diminished fifth', () => {
    expect(isFifth(6)).toBe(true);
  });

  it('should return true when interval is a augmented fifth', () => {
    expect(isFifth(8)).toBe(true);
  });

  it('should return false when interval is not a fifth', () => {
    expect(isFifth(1)).toBe(false);
  });

  it('should return false when interval is not a fifth', () => {
    expect(isFifth(4)).toBe(false);
  });

  it('should return false on no input', () => {
    expect((isFifth as any)()).toBe(false);
  });
});

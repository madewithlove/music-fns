import isThird from './index';

describe('isThird', () => {
  it('should return true when interval is a diminished third', () => {
    expect(isThird(2)).toBe(true);
  });

  it('should return true when interval is a minor third', () => {
    expect(isThird(3)).toBe(true);
  });

  it('should return true when interval is a major third', () => {
    expect(isThird(4)).toBe(true);
  });

  it('should return true when interval is a augmented third', () => {
    expect(isThird(5)).toBe(true);
  });

  it('should return false when interval is not a third', () => {
    expect(isThird(7)).toBe(false);
  });

  it('should return false when interval is not a third', () => {
    expect(isThird(1)).toBe(false);
  });

  it('should return false on no input', () => {
    expect((isThird as any)()).toBe(false);
  });
});

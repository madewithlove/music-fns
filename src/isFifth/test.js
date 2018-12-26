import isFifth from './';

describe('isFifth', () => {
  it('should return true when interval is a fifth', () => {
    expect(isFifth(7)).toBe(true);
  });

  it('should return false when interval is not a fifth', () => {
    expect(isFifth(1)).toBe(false);
  });

  it('should return false when interval is not a fifth', () => {
    expect(isFifth(4)).toBe(false);
  });

  it('should return false on no input', () => {
    expect(isFifth()).toBe(false);
  });
});

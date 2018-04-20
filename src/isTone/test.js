import isTone from './';

describe('isTone', () => {
  it('should return true when interval is tone', () => {
    expect(isTone(2)).toBe(true);
  });

  it('should return false when interval is not tone', () => {
    expect(isTone(1)).toBe(false);
  });

  it('should return false when interval is not tone', () => {
    expect(isTone(7)).toBe(false);
  });

  it('should return false on no input', () => {
    expect(isTone()).toBe(false);
  });
});

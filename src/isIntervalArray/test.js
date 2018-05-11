import isValidIntervalArray from './';

describe('isValidIntervalArray', () => {
  it('should return true on a valid intervals array', () => {
    const intervals = [0, 3, 4];
    expect(isValidIntervalArray(intervals)).toBe(true);
  });

  it('should return true on a invalid intervals array', () => {
    const intervals = [0, -2];
    expect(isValidIntervalArray(intervals)).toBe(true);
  });

  it('should return false on a invalid intervals array', () => {
    const intervals = [0, 'ok', 4];
    expect(isValidIntervalArray(intervals)).toBe(false);
  });

  it('should return false on a invalid intervals array', () => {
    const intervals = [0, 1, -2];
    expect(isValidIntervalArray(intervals)).toBe(false);
  });

  it('should return false on a invalid intervals array', () => {
    const intervals = [0];
    expect(isValidIntervalArray(intervals)).toBe(false);
  });
});

// https://en.wikipedia.org/wiki/Minor_scale

import isMinorScale from './';

describe('isMinorScale', () => {
  it('should return true on minor scale ', () => {
    const scale = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    expect(isMinorScale(scale)).toBe(true);
  });
  it('should return true on minor scale', () => {
    const scale = ['A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G2'];
    expect(isMinorScale(scale)).toBe(true);
  });
  it('should return false on major scale ', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isMinorScale(scale)).toBe(false);
  });
});

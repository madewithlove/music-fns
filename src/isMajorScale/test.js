// https://en.wikipedia.org/wiki/Major_scale

import isMajorScale from './';

describe('isMajorScale', () => {
  it('should return true on major scale ', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isMajorScale(scale)).toBe(true);
  });
  it('should return true on major scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(isMajorScale(scale)).toBe(true);
  });
  it('should return false on minor scale ', () => {
    const scale = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    expect(isMajorScale(scale)).toBe(false);
  });
});

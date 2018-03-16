// https://en.wikipedia.org/wiki/Diatonic_scale

import isDiatonicScale from './';

describe('isDiatonicScale', () => {
  it('should return true on diatonic scale', () => {
    const scale = [2, 2, 1, 2, 2, 2, 1];
    expect(isDiatonicScale(scale)).toBe(true);
  });

  it('should return false on other scale', () => {
    const scale = [2, 2, 2, 2, 2, 2, 1];
    expect(isDiatonicScale(scale)).toBe(false);
  });
});

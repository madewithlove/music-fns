// https://en.wikipedia.org/wiki/Anhemitonic_scale

import isHemitonicScale from './';

describe('isHemitonicScale', () => {
  it('should return true on Hemitonic Scale', () => {
    const scale = [2, 2, 2, 2, 1, 2, 2, 2];
    expect(isHemitonicScale(scale)).toBe(true);
  });

  it('should return false on non Anhemitonic Scale', () => {
    const scale = [2, 2, 2, 2, 2, 2, 2, 2];
    expect(isHemitonicScale(scale)).toBe(false);
  });
});

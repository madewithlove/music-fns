// https://en.wikipedia.org/wiki/Heptatonic_scale

import isHexatonicScale from './';

describe('isHexatonicScale', () => {
  it('should return true on Hexatonic Scale', () => {
    const scale = [2, 2, 1, 2, 2, 2];
    expect(isHexatonicScale(scale)).toBe(true);
  });

  it('should return false on non Hexatonic Scale', () => {
    const scale = [2, 2, 1, 2, 2, 2, 3];
    expect(isHexatonicScale(scale)).toBe(false);
  });
});

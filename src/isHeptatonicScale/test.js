// https://en.wikipedia.org/wiki/Heptatonic_scale

import isHeptatonicScale from './';

describe('isHeptatonicScale', () => {
  it('should return true on Heptatonic Scale', () => {
    const scale = [2, 2, 1, 2, 2, 2, 1];
    expect(isHeptatonicScale(scale)).toBe(true);
  });

  it('should return false on non Heptatonic Scale', () => {
    const scale = [2, 2, 2, 2, 2, 2, 1, 2, 2];
    expect(isHeptatonicScale(scale)).toBe(false);
  });
});

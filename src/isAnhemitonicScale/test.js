// https://en.wikipedia.org/wiki/Anhemitonic_scale

import isAnhemitonicScale from './';

describe('isAnhemitonicScale', () => {
  it('should return true on Anhemitonic Scale', () => {
    const scale = ['C', 'D', 'E', 'F#', 'G#', 'A#'];
    expect(isAnhemitonicScale(scale)).toBe(true);
  });

  it('should return true on Anhemitonic Scale', () => {
    const scale = ['C', 'D', 'E', 'F#', 'G#', 'A#', 'C'];
    expect(isAnhemitonicScale(scale)).toBe(true);
  });

  it('should return true on Anhemitonic Scale', () => {
    const scale = ['C', 'D', 'E', 'F#', 'G#', 'A#', 'C', 'D', 'E'];
    expect(isAnhemitonicScale(scale)).toBe(false);
  });

  it('should return false on non Anhemitonic Scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isAnhemitonicScale(scale)).toBe(false);
  });

  it('should return false on non Anhemitonic Scale', () => {
    const scale = ['B', 'A', 'G', 'F', 'E', 'D', 'C'];
    expect(isAnhemitonicScale(scale, { direction: -1 })).toBe(false);
  });
});

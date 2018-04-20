// https://en.wikipedia.org/wiki/Anhemitonic_scale

import isHemitonicScale from './';

describe('isHemitonicScale', () => {
  it('should return true on hemitonic Scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isHemitonicScale(scale)).toBe(true);
  });

  it('should return true on hemitonic Scale', () => {
    const scale = ['B', 'A', 'G', 'F', 'E', 'D', 'C'];
    expect(isHemitonicScale(scale, { direction: -1 })).toBe(true);
  });

  it('should return false on non hemitonic Scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D'];
    expect(isHemitonicScale(scale)).toBe(false);
  });

  it('should return false on non hemitonic Scale', () => {
    const scale = ['C', 'D', 'E', 'F#', 'G#', 'A#'];
    expect(isHemitonicScale(scale)).toBe(false);
  });
});

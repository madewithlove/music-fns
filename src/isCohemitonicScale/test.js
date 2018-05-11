// https://en.wikipedia.org/wiki/Anhemitonic_scale

import isCohemitonicScale from './';

describe('isCohemitonicScale', () => {
  it('should return true on cohemitonic scale', () => {
    const scale = ['C', 'D', 'D#', 'E', 'A', 'A#', 'B'];
    expect(isCohemitonicScale(scale)).toBe(true);
  });

  it('should return true on cohemitonic scale', () => {
    const scale = ['C', 'B', 'A#', 'A', 'E', 'D#', 'D'];
    expect(isCohemitonicScale(scale, { direction: -1 })).toBe(true);
  });

  it('should return false on non cohemitonic scale', () => {
    const scale = ['C', 'C#', 'D#', 'E', 'A', 'A#', 'B'];
    expect(isCohemitonicScale(scale)).toBe(false);
  });

  it('should return false on non cohemitonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D'];
    expect(isCohemitonicScale(scale)).toBe(false);
  });

  it('should return false on non cohemitonic scale', () => {
    const scale = ['C', 'D', 'E', 'F#', 'G#', 'A#'];
    expect(isCohemitonicScale(scale)).toBe(false);
  });
});

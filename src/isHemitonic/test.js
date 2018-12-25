// https://en.wikipedia.org/wiki/Anhemitonic_scale

import isHemitonic from './';

describe('isHemitonic', () => {
  it('should return true on hemitonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isHemitonic(scale)).toBe(true);
  });

  it('should return true on hemitonic scale', () => {
    const scale = ['B', 'A', 'G', 'F', 'E', 'D', 'C'];
    expect(isHemitonic(scale, { direction: -1 })).toBe(true);
  });

  it('should return false on non hemitonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D'];
    expect(isHemitonic(scale)).toBe(false);
  });

  it('should return false on non hemitonic scale', () => {
    const scale = ['C', 'D', 'E', 'F#', 'G#', 'A#'];
    expect(isHemitonic(scale)).toBe(false);
  });
});

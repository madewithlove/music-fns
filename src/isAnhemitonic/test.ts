// https://en.wikipedia.org/wiki/Anhemitonic_scale

import isAnhemitonic from './index';

describe('isAnhemitonic', () => {
  it('should return true on anhemitonic scale', () => {
    const scale = ['C', 'D', 'E', 'F#', 'G#', 'A#'];
    expect(isAnhemitonic(scale)).toBe(true);
  });

  it('should return true on anhemitonic scale', () => {
    const scale = ['C', 'D', 'E', 'F#', 'G#', 'A#', 'C'];
    expect(isAnhemitonic(scale)).toBe(true);
  });

  it('should return false on non anhemitonic scale', () => {
    const scale = ['C', 'D', 'E', 'F#', 'G#', 'A#', 'C', 'D', 'E'];
    expect(isAnhemitonic(scale)).toBe(false);
  });

  it('should return false on non anhemitonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isAnhemitonic(scale)).toBe(false);
  });

  it('should return false on non anhemitonic scale', () => {
    const scale = ['B', 'A', 'G', 'F', 'E', 'D', 'C'];
    expect(isAnhemitonic(scale, { direction: -1 })).toBe(false);
  });
});

// https://en.wikipedia.org/wiki/Anhemitonic_scale

import isCohemitonic from './index';

describe('isCohemitonic', () => {
  it('should return true on cohemitonic scale', () => {
    const scale = ['C', 'D', 'D#', 'E', 'A', 'A#', 'B'];
    expect(isCohemitonic(scale)).toBe(true);
  });

  it('should return true on cohemitonic scale', () => {
    const scale = ['C', 'B', 'A#', 'A', 'E', 'D#', 'D'];
    expect(isCohemitonic(scale, { direction: -1 })).toBe(true);
  });

  it('should return true on cohemitonic scale', () => {
    const scale = ['B2', 'C#3', 'D3', 'E3', 'F3', 'F#3', 'G3', 'A#3', 'B3'];
    expect(isCohemitonic(scale)).toBe(true);
  });

  it('should return false on non cohemitonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D'];
    expect(isCohemitonic(scale)).toBe(false);
  });

  it('should return false on non cohemitonic scale', () => {
    const scale = ['C', 'D', 'E', 'F#', 'G#', 'A#'];
    expect(isCohemitonic(scale)).toBe(false);
  });
});

// https://en.wikipedia.org/wiki/Heptatonic_scale

import isHexatonic from './';

describe('isHexatonic', () => {
  it('should return true on Hexatonic Scale', () => {
    const scale = ['C', 'D', 'E', 'F♯', 'G♯', 'A♯', 'C'];
    expect(isHexatonic(scale)).toBe(true);
  });

  it('should return true on Hexatonic Scale', () => {
    const scale = ['C', 'D', 'E', 'F♯', 'G♯', 'A♯'];
    expect(isHexatonic(scale)).toBe(true);
  });

  it('should return true on Hexatonic Scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F♯1', 'G♯1', 'A♯1'];
    expect(isHexatonic(scale)).toBe(true);
  });

  it('should return true on Hexatonic Scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F♯1', 'G♯1', 'A♯1', 'C2'];
    expect(isHexatonic(scale)).toBe(true);
  });

  it('should return true on Hexatonic Scale', () => {
    const scale = ['C', 'A♯', 'G♯', 'F♯', 'E', 'D'];
    expect(isHexatonic(scale, { direction: -1 })).toBe(true);
  });

  it('should return true on Hexatonic Scale', () => {
    const scale = ['C', 'A♯', 'G♯', 'F♯', 'E', 'D', 'C'];
    expect(isHexatonic(scale, { direction: -1 })).toBe(true);
  });

  it('should return true on Hexatonic Scale', () => {
    const scale = ['C2', 'A♯1', 'G♯1', 'F♯1', 'E1', 'D1', 'C1'];
    expect(isHexatonic(scale, { direction: -1 })).toBe(true);
  });

  it('should return false on non Hexatonic Scale', () => {
    const scale = ['C', 'D', 'E', 'F♯', 'G♯', 'C'];
    expect(isHexatonic(scale)).toBe(false);
  });
});

// https://en.wikipedia.org/wiki/Diatonic_scale

import isDiatonicScale from './';

describe('isDiatonicScale', () => {
  it('should return true on diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isDiatonicScale(scale)).toBe(true);
  });

  it('should return true on diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(isDiatonicScale(scale)).toBe(true);
  });

  it('should return true on diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2'];
    expect(isDiatonicScale(scale)).toBe(true);
  });

  it('should return true on diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(isDiatonicScale(scale, { direction: -1 })).toBe(true);
  });

  it('should return true on diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
    expect(isDiatonicScale(scale)).toBe(true);
  });

  it('should return false on none diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C1'];
    expect(isDiatonicScale(scale)).toBe(false);
  });

  it('should return false on none diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A#', 'B'];
    expect(isDiatonicScale(scale)).toBe(false);
  });

  it('should return false on none diatonic scale', () => {
    const scale = ['C', 'Fr', 'E'];
    expect(isDiatonicScale(scale)).toBe(false);
  });

  it('should return false on none diatonic scale', () => {
    const scale = ['C', 'D', 'E2', 'F', 'G', 'A#', 'B'];
    expect(isDiatonicScale(scale)).toBe(false);
  });

  it('should return false on none diatonic scale', () => {
    const scale = ['C1', 'D1', 'C1', 'F1', 'G1', 'A#1', 'B1'];
    expect(isDiatonicScale(scale)).toBe(false);
  });
});

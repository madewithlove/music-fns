// https://en.wikipedia.org/wiki/Diatonic_scale

import isDiatonic from './index';

describe('isDiatonic', () => {
  it('should return true on diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isDiatonic(scale)).toBe(true);
  });

  it('should return true on diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(isDiatonic(scale)).toBe(true);
  });

  it('should return true on diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2'];
    expect(isDiatonic(scale)).toBe(true);
  });

  it('should return true on diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(isDiatonic(scale, { direction: -1 })).toBe(true);
  });

  it('should return true on diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
    expect(isDiatonic(scale)).toBe(true);
  });

  it('should return false on non-diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F#', 'G#', 'A#', 'B'];
    expect(isDiatonic(scale)).toBe(false);
  });

  it('should return false on non-diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C1'];
    expect(isDiatonic(scale)).toBe(false);
  });

  it('should return false on non-diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A#', 'B'];
    expect(isDiatonic(scale)).toBe(false);
  });

  it('should return false on non-diatonic scale', () => {
    const scale = ['C', 'Fr', 'E'];
    expect(isDiatonic(scale)).toBe(false);
  });

  it('should return false on non-diatonic scale', () => {
    const scale = ['C', 'D', 'E2', 'F', 'G', 'A#', 'B'];
    expect(isDiatonic(scale)).toBe(false);
  });

  it('should return false on non-diatonic scale', () => {
    const scale = ['C1', 'D1', 'C1', 'F1', 'G1', 'A#1', 'B1'];
    expect(isDiatonic(scale)).toBe(false);
  });
});

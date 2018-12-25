// https://en.wikipedia.org/wiki/Pentatonic_scale

import isPentatonic from './';

describe('isPentatonic', () => {
  it('should return true on Pentatonic Scale', () => {
    const scale = ['C', 'D', 'E', 'G', 'A'];
    expect(isPentatonic(scale)).toBe(true);
  });

  it('should return true on Pentatonic Scale', () => {
    const scale = ['C', 'D', 'E', 'G', 'A', 'C'];
    expect(isPentatonic(scale)).toBe(true);
  });

  it('should return true on Pentatonic Scale', () => {
    const scale = ['C2', 'D2', 'E2', 'G2', 'A2', 'C3'];
    expect(isPentatonic(scale)).toBe(true);
  });

  it('should return true on Pentatonic Scale', () => {
    const scale = ['C2', 'D2', 'E2', 'G2', 'A2'];
    expect(isPentatonic(scale)).toBe(true);
  });

  it('should return true on Pentatonic Scale', () => {
    const scale = ['C3', 'A2', 'G2', 'E2', 'D2'];
    expect(isPentatonic(scale, { direction: -1 })).toBe(true);
  });

  it('should return true on Pentatonic Scale', () => {
    const scale = ['C3', 'A2', 'G2', 'E2', 'D2', 'C2'];
    expect(isPentatonic(scale, { direction: -1 })).toBe(true);
  });

  it('should return false on non Pentatonic Scale', () => {
    const scale = ['C4', 'A2', 'G2', 'E2', 'D2', 'C3'];
    expect(isPentatonic(scale, { direction: -1 })).toBe(false);
  });

  it('should return false on non Pentatonic Scale', () => {
    const scale = ['C4', 'A2', 'G2', 'E2', 'D2', 'C2'];
    expect(isPentatonic(scale, { direction: -1 })).toBe(false);
  });

  it('should return false on non Pentatonic Scale', () => {
    const scale = ['C4', 'A2', 'G2', 'E2', 'D2', 'C2'];
    expect(isPentatonic(scale, { direction: -1 })).toBe(false);
  });

  it('should return false on non Pentatonic Scale', () => {
    const scale = ['C', 'G', 'D', 'A', 'C'];
    expect(isPentatonic(scale)).toBe(false);
  });
});

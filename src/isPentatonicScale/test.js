// https://en.wikipedia.org/wiki/Pentatonic_scale

import isPentatonicScale from './';

describe('isPentatonicScale', () => {
  it('should return true on Pentatonic Scale', () => {
    const scale = ['C', 'D', 'E', 'G', 'A'];
    expect(isPentatonicScale(scale)).toBe(true);
  });

  it('should return true on Pentatonic Scale', () => {
    const scale = ['C', 'D', 'E', 'G', 'A', 'C'];
    expect(isPentatonicScale(scale)).toBe(true);
  });

  it('should return true on Pentatonic Scale', () => {
    const scale = ['C2', 'D2', 'E2', 'G2', 'A2', 'C3'];
    expect(isPentatonicScale(scale)).toBe(true);
  });

  it('should return true on Pentatonic Scale', () => {
    const scale = ['C2', 'D2', 'E2', 'G2', 'A2'];
    expect(isPentatonicScale(scale)).toBe(true);
  });

  it('should return true on Pentatonic Scale', () => {
    const scale = ['C3', 'A2', 'G2', 'E2', 'D2'];
    expect(isPentatonicScale(scale, { direction: -1 })).toBe(true);
  });

  it('should return true on Pentatonic Scale', () => {
    const scale = ['C3', 'A2', 'G2', 'E2', 'D2', 'C2'];
    expect(isPentatonicScale(scale, { direction: -1 })).toBe(true);
  });

  it('should return false on non Pentatonic Scale', () => {
    const scale = ['C4', 'A2', 'G2', 'E2', 'D2', 'C3'];
    expect(isPentatonicScale(scale, { direction: -1 })).toBe(false);
  });

  it('should return false on non Pentatonic Scale', () => {
    const scale = ['C4', 'A2', 'G2', 'E2', 'D2', 'C2'];
    expect(isPentatonicScale(scale, { direction: -1 })).toBe(false);
  });

  it('should return false on non Pentatonic Scale', () => {
    const scale = ['C4', 'A2', 'G2', 'E2', 'D2', 'C2'];
    expect(isPentatonicScale(scale, { direction: -1 })).toBe(false);
  });

  it('should return false on non Pentatonic Scale', () => {
    const scale = ['C', 'G', 'D', 'A', 'C'];
    expect(isPentatonicScale(scale)).toBe(false);
  });
});

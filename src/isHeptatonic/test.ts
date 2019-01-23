// https://en.wikipedia.org/wiki/Heptatonic_scale

import isHeptatonic from './index';

describe('isHeptatonic', () => {
  it('should return true on heptatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
    expect(isHeptatonic(scale)).toBe(true);
  });

  it('should return true on heptatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isHeptatonic(scale)).toBe(true);
  });

  it('should return true on heptatonic scale', () => {
    const scale = ['B', 'A', 'G', 'F', 'E', 'D', 'C'];
    expect(isHeptatonic(scale, { direction: -1 })).toBe(true);
  });

  it('should return true on heptatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(isHeptatonic(scale)).toBe(true);
  });

  it('should return true on diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(isHeptatonic(scale, { direction: -1 })).toBe(true);
  });

  it('should return false on non heptatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'F'];
    expect(isHeptatonic(scale)).toBe(false);
  });

  it('should return false on non heptatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'C'];
    expect(isHeptatonic(scale)).toBe(false);
  });

  it('should return false on non heptatonic scale', () => {
    const scale = ['C', 'D', 'C', 'F', 'G', 'A', 'B'];
    expect(isHeptatonic(scale)).toBe(false);
  });

  it('should return false on non heptatonic scale', () => {
    const scale = ['C', 'D', 'E'];
    expect(isHeptatonic(scale)).toBe(false);
  });

  it('should return false on non heptatonic scale', () => {
    const scale = ['C', 'Fr', 'E'];
    expect(isHeptatonic(scale)).toBe(false);
  });
});

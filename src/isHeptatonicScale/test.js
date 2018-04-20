// https://en.wikipedia.org/wiki/Heptatonic_scale

import isHeptatonicScale from './';

describe('isHeptatonicScale', () => {
  it('should return true on heptatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
    expect(isHeptatonicScale(scale)).toBe(true);
  });

  it('should return true on heptatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isHeptatonicScale(scale)).toBe(true);
  });

  it('should return true on heptatonic scale', () => {
    const scale = ['B', 'A', 'G', 'F', 'E', 'D', 'C'];
    expect(isHeptatonicScale(scale, { direction: -1 })).toBe(true);
  });

  it('should return false on non heptatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'F'];
    expect(isHeptatonicScale(scale)).toBe(false);
  });

  it('should return false on non heptatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'C'];
    expect(isHeptatonicScale(scale)).toBe(false);
  });

  it('should return false on non heptatonic scale', () => {
    const scale = ['C', 'D', 'C', 'F', 'G', 'A', 'B'];
    expect(isHeptatonicScale(scale)).toBe(false);
  });

  it('should return false on non heptatonic scale', () => {
    const scale = ['C', 'D', 'E'];
    expect(isHeptatonicScale(scale)).toBe(false);
  });

  it('should return false on non heptatonic scale', () => {
    const scale = ['C', 'Fr', 'E'];
    expect(isHeptatonicScale(scale)).toBe(false);
  });
});

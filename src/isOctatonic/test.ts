// https://en.wikipedia.org/wiki/Octatonic_scale

import isOctatonic from './index';

describe('isOctatonic', () => {
  it('should return true on Octatonic Scale', () => {
    const scale = ['D', 'E', 'F', 'G', 'A♭', 'B♭', 'B', 'C♯', 'D'];
    expect(isOctatonic(scale)).toBe(true);
  });

  it('should return true on Octatonic Scale', () => {
    const scale = ['D', 'E', 'F', 'G', 'A♭', 'B♭', 'B', 'C♯'];
    expect(isOctatonic(scale)).toBe(true);
  });

  it('should return true on Octatonic Scale', () => {
    const scale = ['D', 'C♯', 'B', 'B♭', 'A♭', 'G', 'F', 'E'];
    expect(isOctatonic(scale, { direction: -1 })).toBe(true);
  });

  it('should return true on Octatonic Scale', () => {
    const scale = ['D3', 'E3', 'F3', 'G3', 'A♭3', 'B♭3', 'B3', 'C♯4'];
    expect(isOctatonic(scale)).toBe(true);
  });

  it('should return true on Octatonic Scale', () => {
    const scale = ['D3', 'E3', 'F3', 'G3', 'A♭3', 'B♭3', 'B3', 'C♯4', 'D4'];
    expect(isOctatonic(scale)).toBe(true);
  });

  it('should return true on Octatonic Scale', () => {
    const scale = ['D3', 'E3', 'F3', 'G3', 'A♭3', 'B♭3', 'B3', 'C♯4'];
    expect(isOctatonic(scale, { direction: -1 })).toBe(true);
  });

  it('should return true on Octatonic Scale', () => {
    const scale = ['D3', 'E3', 'F3', 'G3', 'A♭3', 'B♭3', 'B3', 'C♯4', 'D4'];
    expect(isOctatonic(scale, { direction: -1 })).toBe(true);
  });

  it('should return true on Octatonic Scale', () => {
    const scale = ['D4', 'C♯4', 'B3', 'B♭3', 'A♭3', 'G3', 'F3', 'E3'];
    expect(isOctatonic(scale)).toBe(true);
  });

  it('should return true on Octatonic Scale', () => {
    const scale = ['D4', 'C♯4', 'B3', 'B♭3', 'A♭3', 'G3', 'F3', 'E3'];
    expect(isOctatonic(scale, { direction: 1 })).toBe(true);
  });

  it('should return false on non Octatonic Scale', () => {
    const scale = ['C4', 'A2', 'G2', 'E2', 'D2', 'C2'];
    expect(isOctatonic(scale, { direction: -1 })).toBe(false);
  });

  it('should return false on non Octatonic Scale', () => {
    const scale = ['C4', 'A2', 'G2', 'E2', 'D2', 'C2'];
    expect(isOctatonic(scale, { direction: -1 })).toBe(false);
  });

  it('should return false on non Octatonic Scale', () => {
    const scale = ['C', 'G', 'D', 'A', 'C'];
    expect(isOctatonic(scale)).toBe(false);
  });
});

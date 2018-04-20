// https://en.wikipedia.org/wiki/Heptatonic_scale

import isScaleWithIntervalAmount from './';

describe('isScaleWithIntervalAmount', () => {
  it('should return true on valid scale with 7 intervals', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
    expect(isScaleWithIntervalAmount(scale, 7)).toBe(true);
  });
  it('should return true on valid scale with 7 intervals', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isScaleWithIntervalAmount(scale, 7)).toBe(true);
  });
  it('should return true on valid scale with 7 intervals', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(isScaleWithIntervalAmount(scale, 7)).toBe(true);
  });
  it('should return true on valid scale with 7 intervals', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2'];
    expect(isScaleWithIntervalAmount(scale, 7)).toBe(true);
  });
  it('should return true on valid scale with 7 intervals', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'B1', 'B1'];
    expect(isScaleWithIntervalAmount(scale, 7)).toBe(false);
  });
  it('should return true on valid scale with 7 intervals', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B2'];
    expect(isScaleWithIntervalAmount(scale, 7)).toBe(false);
  });
  it('should return false on valid scale with 7 intervals', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'B'];
    expect(isScaleWithIntervalAmount(scale, 7)).toBe(false);
  });
});

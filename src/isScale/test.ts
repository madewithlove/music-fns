import isScale from './index';

describe('isScale', () => {
  it('should return true on a valid scale', () => {
    const scale = ['A', 'B', 'D'];
    expect(isScale(scale)).toBe(true);
  });

  it('should return true on a valid scale in -1 direction', () => {
    const scale = ['D', 'B', 'A'];
    expect(isScale(scale, { direction: -1 })).toBe(true);
  });

  it('should return true on a valid scale', () => {
    const scale = ['A', 'B'];
    expect(isScale(scale)).toBe(true);
  });

  it('should return false when scale is larger then octave', () => {
    const scale = ['A#3', 'B7'];
    expect(isScale(scale)).toBe(false);
  });

  it('should return false on a scale with mixed intervals', () => {
    const scale = ['A1', 'B1', 'A1'];
    expect(isScale(scale)).toBe(false);
  });

  it('should return false on a scale with mixed intervals', () => {
    const scale = ['A1', 'B1', 'A1'];
    expect(isScale(scale)).toBe(false);
  });

  it('should return false on a scale with zero intervals', () => {
    const scale = ['A1', 'B1', 'B1', 'A1'];
    expect(isScale(scale)).toBe(false);
  });

  it('should return false on an invalid scale', () => {
    const scale = ['A', 'B2'];
    expect(isScale(scale)).toBe(false);
  });

  it('should return false on invalid scale', () => {
    const scale = ['A', 'Fr'];
    expect(isScale(scale)).toBe(false);
  });
});

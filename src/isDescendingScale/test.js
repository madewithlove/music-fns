import isDescending from './';

describe('isDescending', () => {
  it('should return false on ascending scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isDescending(scale)).toBe(false);
  });

  it('should return true on descending scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(isDescending(scale, { direction: -1 })).toBe(true);
  });

  it('should return true on descending scale', () => {
    const scale = ['C2', 'B1', 'A1', 'G1', 'F1', 'E1', 'D1', 'C1'];
    expect(isDescending(scale)).toBe(true);
  });

  it('should return true on descending scale', () => {
    const scale = ['C2', 'B1', 'A1', 'G1', 'F1', 'E1', 'D1', 'C1'];
    expect(isDescending(scale, { direction: 1 })).toBe(true);
  });

  it('should return false on ascending scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2'];
    expect(isDescending(scale)).toBe(false);
  });

  it('should return false on ascending scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2'];
    expect(isDescending(scale, { direction: -1 })).toBe(false);
  });

  it('should return true on ascending scale', () => {
    const scale = ['C2', 'B1', 'A1', 'G1', 'F1', 'E1', 'D1', 'C1'];
    expect(isDescending(scale)).toBe(true);
  });
});

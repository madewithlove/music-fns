import getDegree from './';

describe('getDegree', () => {
  it('should return degree on correct diatonic scale and degree', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(getDegree(scale, 1)).toBe('C');
    expect(getDegree(scale, 2)).toBe('D');
    expect(getDegree(scale, 3)).toBe('E');
    expect(getDegree(scale, 4)).toBe('F');
    expect(getDegree(scale, 5)).toBe('G');
    expect(getDegree(scale, 6)).toBe('A');
    expect(getDegree(scale, 7)).toBe('B');
    expect(getDegree(scale, 8)).toBe('C');
  });

  it('should throw error on none diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C1'];
    expect(() => getDegree(scale, 1)).toThrow(
      '"["C1","D1","E1","F1","G1","A1","B1","C1"]" is not a valid diatonic scale.'
    );
  });

  it('should throw error on wrong degree', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(() => getDegree(scale, 9)).toThrow('Degree must be between 1 - 8.');
  });

  it('should throw error on none diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A#', 'B'];
    expect(() => getDegree(scale, 1)).toThrow(
      '["C","D","E","F","G","A#","B"]" is not a valid diatonic scale.'
    );
  });
});

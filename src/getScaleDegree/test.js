import getScaleDegree from './';

describe('getScaleDegree', () => {
  it('should return degree on correct diatonic scale and degree', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(getScaleDegree(scale, 1)).toBe('C');
    expect(getScaleDegree(scale, 2)).toBe('D');
    expect(getScaleDegree(scale, 3)).toBe('E');
    expect(getScaleDegree(scale, 4)).toBe('F');
    expect(getScaleDegree(scale, 5)).toBe('G');
    expect(getScaleDegree(scale, 6)).toBe('A');
    expect(getScaleDegree(scale, 7)).toBe('B');
    expect(getScaleDegree(scale, 8)).toBe('C');
  });

  it('should return degree on correct diatonic scale and degree', () => {
    const scale = ['C', 'B', 'A', 'G', 'F', 'E', 'D'];
    expect(getScaleDegree(scale, 1, { direction: -1 })).toBe('C');
    expect(getScaleDegree(scale, 2, { direction: -1 })).toBe('D');
    expect(getScaleDegree(scale, 3, { direction: -1 })).toBe('E');
    expect(getScaleDegree(scale, 4, { direction: -1 })).toBe('F');
    expect(getScaleDegree(scale, 5, { direction: -1 })).toBe('G');
    expect(getScaleDegree(scale, 6, { direction: -1 })).toBe('A');
    expect(getScaleDegree(scale, 7, { direction: -1 })).toBe('B');
    expect(getScaleDegree(scale, 8, { direction: -1 })).toBe('C');
  });

  it('should return degree on correct diatonic scale and degree', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(getScaleDegree(scale, 1)).toBe('C1');
    expect(getScaleDegree(scale, 2)).toBe('D1');
    expect(getScaleDegree(scale, 3)).toBe('E1');
    expect(getScaleDegree(scale, 4)).toBe('F1');
    expect(getScaleDegree(scale, 5)).toBe('G1');
    expect(getScaleDegree(scale, 6)).toBe('A1');
    expect(getScaleDegree(scale, 7)).toBe('B1');
    expect(getScaleDegree(scale, 8)).toBe('C2');
  });

  it('should return degree on correct diatonic scale and degree', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(getScaleDegree(scale, 1, { direction: -1 })).toBe('C1');
    expect(getScaleDegree(scale, 2, { direction: -1 })).toBe('D1');
    expect(getScaleDegree(scale, 3, { direction: -1 })).toBe('E1');
    expect(getScaleDegree(scale, 4, { direction: -1 })).toBe('F1');
    expect(getScaleDegree(scale, 5, { direction: -1 })).toBe('G1');
    expect(getScaleDegree(scale, 6, { direction: -1 })).toBe('A1');
    expect(getScaleDegree(scale, 7, { direction: -1 })).toBe('B1');
    expect(getScaleDegree(scale, 8, { direction: -1 })).toBe('C2');
  });

  it('should throw error on none diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C1'];
    expect(() => getScaleDegree(scale, 1)).toThrow(
      '"["C1","D1","E1","F1","G1","A1","B1","C1"]" is not a valid diatonic scale.'
    );
  });

  it('should throw error on wrong degree', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(() => getScaleDegree(scale, 9)).toThrow(
      'Degree must be between 1 - 8.'
    );
  });

  it('should throw error on none diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A#', 'B'];
    expect(() => getScaleDegree(scale, 1)).toThrow(
      '["C","D","E","F","G","A#","B"]" is not a valid diatonic scale.'
    );
  });
});

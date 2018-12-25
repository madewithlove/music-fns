import getNoteOnDegree from './';

describe('getNoteOnDegree', () => {
  it('should return degree on correct diatonic scale and degree', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(getNoteOnDegree(scale, 1)).toBe('C');
    expect(getNoteOnDegree(scale, 2)).toBe('D');
    expect(getNoteOnDegree(scale, 3)).toBe('E');
    expect(getNoteOnDegree(scale, 4)).toBe('F');
    expect(getNoteOnDegree(scale, 5)).toBe('G');
    expect(getNoteOnDegree(scale, 6)).toBe('A');
    expect(getNoteOnDegree(scale, 7)).toBe('B');
    expect(getNoteOnDegree(scale, 8)).toBe('C');
  });

  it('should return degree on correct diatonic scale and degree', () => {
    const scale = ['C', 'B', 'A', 'G', 'F', 'E', 'D'];
    expect(getNoteOnDegree(scale, 1, { direction: -1 })).toBe('C');
    expect(getNoteOnDegree(scale, 2, { direction: -1 })).toBe('D');
    expect(getNoteOnDegree(scale, 3, { direction: -1 })).toBe('E');
    expect(getNoteOnDegree(scale, 4, { direction: -1 })).toBe('F');
    expect(getNoteOnDegree(scale, 5, { direction: -1 })).toBe('G');
    expect(getNoteOnDegree(scale, 6, { direction: -1 })).toBe('A');
    expect(getNoteOnDegree(scale, 7, { direction: -1 })).toBe('B');
    expect(getNoteOnDegree(scale, 8, { direction: -1 })).toBe('C');
  });

  it('should return degree on correct diatonic scale and degree', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(getNoteOnDegree(scale, 1)).toBe('C1');
    expect(getNoteOnDegree(scale, 2)).toBe('D1');
    expect(getNoteOnDegree(scale, 3)).toBe('E1');
    expect(getNoteOnDegree(scale, 4)).toBe('F1');
    expect(getNoteOnDegree(scale, 5)).toBe('G1');
    expect(getNoteOnDegree(scale, 6)).toBe('A1');
    expect(getNoteOnDegree(scale, 7)).toBe('B1');
    expect(getNoteOnDegree(scale, 8)).toBe('C2');
  });

  it('should return degree on chromatic scale and degree', () => {
    const scale = [
      'C',
      'C#',
      'D',
      'D#',
      'E',
      'F',
      'F#',
      'G',
      'G#',
      'A',
      'A#',
      'B'
    ];

    expect(getNoteOnDegree(scale, 1)).toBe('C');
    expect(getNoteOnDegree(scale, 2)).toBe('C#');
    expect(getNoteOnDegree(scale, 3)).toBe('D');
    expect(getNoteOnDegree(scale, 4)).toBe('D#');
    expect(getNoteOnDegree(scale, 5)).toBe('E');
    expect(getNoteOnDegree(scale, 6)).toBe('F');
    expect(getNoteOnDegree(scale, 7)).toBe('F#');
    expect(getNoteOnDegree(scale, 8)).toBe('G');
    expect(getNoteOnDegree(scale, 9)).toBe('G#');
    expect(getNoteOnDegree(scale, 10)).toBe('A');
    expect(getNoteOnDegree(scale, 11)).toBe('A#');
    expect(getNoteOnDegree(scale, 12)).toBe('B');
  });

  it('should return degree on correct diatonic scale and degree', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(getNoteOnDegree(scale, 1)).toBe('C1');
    expect(getNoteOnDegree(scale, 2)).toBe('D1');
    expect(getNoteOnDegree(scale, 3)).toBe('E1');
    expect(getNoteOnDegree(scale, 4)).toBe('F1');
    expect(getNoteOnDegree(scale, 5)).toBe('G1');
    expect(getNoteOnDegree(scale, 6)).toBe('A1');
    expect(getNoteOnDegree(scale, 7)).toBe('B1');
    expect(getNoteOnDegree(scale, 8)).toBe('C2');
  });

  it('should throw error on wrong degree', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(() => getNoteOnDegree(scale, 9)).toThrow('Degree must be between 1 - 8.');
  });

  it('should throw error on non-diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'Fr', 'G', 'A#', 'B'];
    expect(() => getNoteOnDegree(scale, 1)).toThrow(
      '["C","D","E","Fr","G","A#","B"] is not a valid scale'
    );
  });
});

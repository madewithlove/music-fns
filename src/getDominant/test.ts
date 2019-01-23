import getDominant from './index';

describe('getDominant', () => {
  it('should return dominant in correct diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(getDominant(scale)).toBe('G');
  });

  it('should return dominant in correct diatonic scale', () => {
    const scale = ['C', 'B', 'A', 'G', 'F', 'E', 'D'];
    expect(getDominant(scale, { direction: -1 })).toBe('G');
  });

  it('should return dominant in correct diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(getDominant(scale)).toBe('G1');
  });

  it('should return dominant in correct diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(getDominant(scale, { direction: -1 })).toBe('G1');
  });

  it('should throw error on non-diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C1'];
    expect(() => getDominant(scale)).toThrow(
      '["C1","D1","E1","F1","G1","A1","B1","C1"] is not a diatonic scale.'
    );
  });

  it('should throw error on non-diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A#', 'B'];
    expect(() => getDominant(scale)).toThrow(
      '["C","D","E","F","G","A#","B"] is not a diatonic scale.'
    );
  });
});

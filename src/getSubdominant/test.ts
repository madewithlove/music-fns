import getSubdominant from './index';

describe('getSubdominant', () => {
  it('should return subdominant in correct diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(getSubdominant(scale)).toBe('F');
  });

  it('should return subdominant in correct diatonic scale', () => {
    const scale = ['C', 'B', 'A', 'G', 'F', 'E', 'D'];
    expect(getSubdominant(scale, { direction: -1 })).toBe('F');
  });

  it('should throw error on non-diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C1'];
    expect(() => getSubdominant(scale)).toThrow(
      '["C1","D1","E1","F1","G1","A1","B1","C1"] is not a diatonic scale.'
    );
  });

  it('should throw error on non-diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A#', 'B'];
    expect(() => getSubdominant(scale)).toThrow(
      '["C","D","E","F","G","A#","B"] is not a diatonic scale.'
    );
  });
});

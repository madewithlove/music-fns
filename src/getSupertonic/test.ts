import getSupertonic from './index';

describe('getSupertonic', () => {
  it('should return supertonic in correct diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(getSupertonic(scale)).toBe('D');
  });

  it('should return supertonic in correct diatonic scale', () => {
    const scale = ['C', 'B', 'A', 'G', 'F', 'E', 'D'];
    expect(getSupertonic(scale, { direction: -1 })).toBe('D');
  });

  it('should throw error on non-diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C1'];
    expect(() => getSupertonic(scale)).toThrow(
      '["C1","D1","E1","F1","G1","A1","B1","C1"] is not a diatonic scale.'
    );
  });

  it('should throw error on non-diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A#', 'B'];
    expect(() => getSupertonic(scale)).toThrow(
      '["C","D","E","F","G","A#","B"] is not a diatonic scale.'
    );
  });
});

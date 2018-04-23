import getSubdominant from './';

describe('getSubdominant', () => {
  it('should return submediant in correct diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(getSubdominant(scale)).toBe('A');
  });

  it('should throw error on none diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C1'];
    expect(() => getSubdominant(scale)).toThrow(
      '"["C1","D1","E1","F1","G1","A1","B1","C1"]" is not a valid diatonic scale.'
    );
  });

  it('should throw error on none diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A#', 'B'];
    expect(() => getSubdominant(scale)).toThrow(
      '["C","D","E","F","G","A#","B"]" is not a valid diatonic scale.'
    );
  });
});

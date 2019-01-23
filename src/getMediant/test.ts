import getMediant from './index';

describe('getMediant', () => {
  it('should return mediant in correct diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(getMediant(scale)).toBe('E');
  });

  it('should return mediant in correct diatonic scale', () => {
    const scale = ['C', 'B', 'A', 'G', 'F', 'E', 'D'];
    expect(getMediant(scale, { direction: -1 })).toBe('E');
  });

  it('should throw error on non-diatonic scale', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C1'];
    expect(() => getMediant(scale)).toThrow(
      '["C1","D1","E1","F1","G1","A1","B1","C1"] is not a diatonic scale.'
    );
  });

  it('should throw error on non-diatonic scale', () => {
    const scale = ['C', 'D', 'E', 'F', 'G', 'A#', 'B'];
    expect(() => getMediant(scale)).toThrow(
      '["C","D","E","F","G","A#","B"] is not a diatonic scale.'
    );
  });
});

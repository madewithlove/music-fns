import normalize from './';

describe('normalize', () => {
  it('should normalize scale with 5 intervals', () => {
    const scale = ['C', 'D', 'E', 'G', 'A'];
    expect(normalize(scale)).toEqual(['C', 'D', 'E', 'G', 'A', 'C']);
  });

  it('should normalize scale with 5 intervals', () => {
    const scale = ['C', 'D', 'E', 'G', 'A', 'C'];
    expect(normalize(scale)).toEqual(['C', 'D', 'E', 'G', 'A', 'C']);
  });

  it('should normalize scale with 5 intervals', () => {
    const scale = ['C', 'A', 'G', 'E', 'D'];
    expect(normalize(scale, { direction: -1 })).toEqual([
      'C',
      'D',
      'E',
      'G',
      'A',
      'C'
    ]);
  });

  it('should normalize scale with 5 intervals', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1'];
    expect(normalize(scale)).toEqual(['C1', 'D1', 'E1', 'F1', 'G1', 'C2']);
  });

  it('should normalize scale with 5 intervals', () => {
    const scale = ['C2', 'G1', 'F1', 'E1', 'D1'];
    expect(normalize(scale)).toEqual(['C1', 'D1', 'E1', 'F1', 'G1', 'C2']);
  });

  it('should normalize scale with 7 intervals', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(normalize(scale, { direction: -1 })).toEqual([
      'C1',
      'D1',
      'E1',
      'F1',
      'G1',
      'A1',
      'B1',
      'C2'
    ]);
  });

  it('should normalize scale with 7 intervals', () => {
    const scale = ['C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1'];
    expect(normalize(scale)).toEqual([
      'C1',
      'D1',
      'E1',
      'F1',
      'G1',
      'A1',
      'B1',
      'C2'
    ]);
  });

  it('should normalize scale with 5 intervals', () => {
    const scale = ['C', 'A', 'G', 'E', 'D', 'C'];
    expect(normalize(scale, { direction: -1 })).toEqual([
      'C',
      'D',
      'E',
      'G',
      'A',
      'C'
    ]);
  });

  it('should throw error on inValid scale', () => {
    const scale = ['C', 'D', 'E', 'G', 'C', 'C'];
    expect(() => normalize(scale)).toThrow();
  });

  it('should throw error on inValid scale', () => {
    const scale = ['C1', 'D1', 'E1', 'G1', 'C1', 'C1'];
    expect(() => normalize(scale)).toThrow();
  });
});

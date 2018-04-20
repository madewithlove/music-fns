import normalizeScale from './';

describe('normalizeScale', () => {
  it('should normalize scale with 5 intervals', () => {
    const scale = ['C', 'D', 'E', 'G', 'A'];
    expect(normalizeScale(scale, 5)).toEqual(['C', 'D', 'E', 'G', 'A', 'C']);
  });

  it('should normalize scale with 5 intervals', () => {
    const scale = ['C', 'D', 'E', 'G', 'A', 'C'];
    expect(normalizeScale(scale, 5)).toEqual(['C', 'D', 'E', 'G', 'A', 'C']);
  });

  it('should normalize scale with 5 intervals', () => {
    const scale = ['C', 'D', 'E', 'G', 'C', 'C'];
    expect(() => normalizeScale(scale, 5)).toThrow();
  });

  it('should normalize scale with 5 intervals', () => {
    const scale = ['C', 'A', 'G', 'E', 'D'];
    expect(normalizeScale(scale, 5, { direction: -1 })).toEqual([
      'C',
      'D',
      'E',
      'G',
      'A',
      'C'
    ]);
  });

  it('should normalize scale with 5 intervals', () => {
    const scale = ['C', 'A', 'G', 'E', 'D', 'C'];
    expect(normalizeScale(scale, 5, { direction: -1 })).toEqual([
      'C',
      'D',
      'E',
      'G',
      'A',
      'C'
    ]);
  });
});

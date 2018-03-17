import normalizeAccidental from './';

describe('normalizeAccidental', () => {
  it('should return "B♯" on "B#"', () => {
    const note = 'B#';
    expect(normalizeAccidental(note)).toBe('B♯');
  });

  it('should return "G♯" on "G♯"', () => {
    const note = 'G♯';
    expect(normalizeAccidental(note)).toBe('G♯');
  });

  it('should return "A♭3" on "Ab3"', () => {
    const note = 'Ab3';
    expect(normalizeAccidental(note)).toBe('A♭3');
  });

  it('should return "C♭" on "C♭"', () => {
    const note = 'C♭';
    expect(normalizeAccidental(note)).toBe('C♭');
  });

  it('should return "A" on "A"', () => {
    const note = 'A';
    expect(normalizeAccidental(note)).toBe('A');
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => normalizeAccidental(note)).toThrow();
  });
});

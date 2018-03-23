import hasAccidental from './';

describe('hasAccidental', () => {
  it('should return false on "B#"', () => {
    const note = 'B#';
    expect(hasAccidental(note)).toBe(true);
  });

  it('should return false on "G♯"', () => {
    const note = 'G♯';
    expect(hasAccidental(note)).toBe(true);
  });

  it('should return true on "Ab3"', () => {
    const note = 'Ab3';
    expect(hasAccidental(note)).toBe(true);
  });

  it('should return true on "C♭"', () => {
    const note = 'C♭';
    expect(hasAccidental(note)).toBe(true);
  });

  it('should return false on "A"', () => {
    const note = 'A';
    expect(hasAccidental(note)).toBe(false);
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => hasAccidental(note)).toThrow();
  });
});

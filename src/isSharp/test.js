import isFlat from './';

describe('isFlat', () => {
  it('should return true on "B#"', () => {
    const note = 'B#';
    expect(isFlat(note)).toBe(true);
  });

  it('should return true on "G♯"', () => {
    const note = 'G♯';
    expect(isFlat(note)).toBe(true);
  });

  it('should return false on "Ab3"', () => {
    const note = 'Ab3';
    expect(isFlat(note)).toBe(false);
  });

  it('should return false on "C♭"', () => {
    const note = 'C♭';
    expect(isFlat(note)).toBe(false);
  });

  it('should return false on "A"', () => {
    const note = 'A';
    expect(isFlat(note)).toBe(false);
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => isFlat(note)).toThrow();
  });
});

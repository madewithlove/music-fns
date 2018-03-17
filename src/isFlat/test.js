import isSharp from './';

describe('isSharp', () => {
  it('should return true on "Ab3"', () => {
    const note = 'Ab3';
    expect(isSharp(note)).toBe(true);
  });

  it('should return true on "C♭"', () => {
    const note = 'C♭';
    expect(isSharp(note)).toBe(true);
  });

  it('should return false on "A"', () => {
    const note = 'A';
    expect(isSharp(note)).toBe(false);
  });

  it('should return false on "B#"', () => {
    const note = 'B#';
    expect(isSharp(note)).toBe(false);
  });

  it('should return false on "G♯"', () => {
    const note = 'G♯';
    expect(isSharp(note)).toBe(false);
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => isSharp(note)).toThrow();
  });
});

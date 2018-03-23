import isAccidentalSymbol from './';

describe('isAccidentalSymbol', () => {
  it('return false on "B♯"', () => {
    const note = 'B♯';
    expect(isAccidentalSymbol(note)).toBe(false);
  });

  it('return false on "A♭3"', () => {
    const note = 'A♭3';
    expect(isAccidentalSymbol(note)).toBe(false);
  });

  it('return true on "B#"', () => {
    const note = 'B#';
    expect(isAccidentalSymbol(note)).toBe(true);
  });

  it('return true on "Ab3"', () => {
    const note = 'Ab3';
    expect(isAccidentalSymbol(note)).toBe(true);
  });

  it('return false on "F"', () => {
    const note = 'F';
    expect(isAccidentalSymbol(note)).toBe(false);
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => isAccidentalSymbol(note)).toThrow();
  });
});

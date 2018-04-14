import isAccidentalLetter from './';

describe('isAccidentalLetter', () => {
  it('return false on "B♯"', () => {
    const note = 'B♯';
    expect(isAccidentalLetter(note)).toBe(false);
  });

  it('return false on "A♭3"', () => {
    const note = 'A♭3';
    expect(isAccidentalLetter(note)).toBe(false);
  });

  it('return true on "B#"', () => {
    const note = 'B#';
    expect(isAccidentalLetter(note)).toBe(true);
  });

  it('return true on "Ab3"', () => {
    const note = 'Ab3';
    expect(isAccidentalLetter(note)).toBe(true);
  });

  it('return false on "F"', () => {
    const note = 'F';
    expect(isAccidentalLetter(note)).toBe(false);
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => isAccidentalLetter(note)).toThrow();
  });
});

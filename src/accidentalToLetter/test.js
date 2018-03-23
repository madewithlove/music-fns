import accidentalToLetter from './';

// ♯ ♭

describe('accidentalToLetter', () => {
  it('convert return "B♯" on "B#"', () => {
    const note = 'B♯';
    expect(accidentalToLetter(note)).toBe('B#');
  });

  it('convert return "A♭3" on "Ab3"', () => {
    const note = 'A♭3';
    expect(accidentalToLetter(note)).toBe('Ab3');
  });

  it('convert return "F9" on "F9"', () => {
    const note = 'F9';
    expect(accidentalToLetter(note)).toBe('F9');
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => accidentalToLetter(note)).toThrow();
  });
});

import accidentalToLetter from './index';

describe('accidentalToLetter', () => {
  it('convert "B♯" to "B#"', () => {
    const note = 'B♯';
    expect(accidentalToLetter(note)).toBe('B#');
  });

  it('convert "A♭3" to "Ab3"', () => {
    const note = 'A♭3';
    expect(accidentalToLetter(note)).toBe('Ab3');
  });

  it('convert "F9" to "F9"', () => {
    const note = 'F9';
    expect(accidentalToLetter(note)).toBe('F9');
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => accidentalToLetter(note)).toThrow();
  });
});

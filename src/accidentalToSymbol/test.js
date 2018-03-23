import accidentalToSymbol from './';

// ♯ ♭

describe('accidentalToSymbol', () => {
  it('convert "B#" to "B♯"', () => {
    const note = 'B#';
    expect(accidentalToSymbol(note)).toBe('B♯');
  });

  it('convert "Ab3" to "A♭3"', () => {
    const note = 'Ab3';
    expect(accidentalToSymbol(note)).toBe('A♭3');
  });

  it('convert "F9" to "F9"', () => {
    const note = 'F9';
    expect(accidentalToSymbol(note)).toBe('F9');
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => accidentalToSymbol(note)).toThrow();
  });
});

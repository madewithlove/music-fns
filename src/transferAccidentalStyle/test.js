import transferAccidentalStyle from './';

describe('transferAccidentalStyle', () => {
  it('convert "C#" to "C♯"', () => {
    const reference = 'C';
    const note = 'C#';
    expect(transferAccidentalStyle(reference, note)).toBe('C♯');
  });

  it('convert "A♭" to "Ab"', () => {
    const reference = 'Gb';
    const note = 'A♭';
    expect(transferAccidentalStyle(reference, note)).toBe('Ab');
  });

  it('convert "A3" to "A3"', () => {
    const reference = 'A3';
    const note = 'A3';
    expect(transferAccidentalStyle(reference, note)).toBe('A3');
  });

  it('convert "A3" to "A3"', () => {
    const reference = 'A3';
    const note = 'A3';
    expect(transferAccidentalStyle(reference, note)).toBe('A3');
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => transferAccidentalStyle(note)).toThrow();
  });
});

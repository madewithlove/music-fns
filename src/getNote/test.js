import getNote from './';

describe('getNote', () => {
  it('should return "B#" on "B#"', () => {
    const note = 'B#';
    expect(getNote(note)).toBe('B#');
  });

  it('should return "A" on "A3"', () => {
    const note = 'A3';
    expect(getNote(note)).toBe('A');
  });

  it('should return "F♯" on "F♯7"', () => {
    const note = 'F♯7';
    expect(getNote(note)).toBe('F♯');
  });

  it('should return "C♭" on "C♭3"', () => {
    const note = 'C♭3';
    expect(getNote(note)).toBe('C♭');
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => getNote(note)).toThrow();
  });
});

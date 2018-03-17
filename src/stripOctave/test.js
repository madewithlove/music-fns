import stripOctave from './';

describe('stripOctave', () => {
  it('should return "B#" on "B#"', () => {
    const note = 'B#';
    expect(stripOctave(note)).toBe('B#');
  });

  it('should return "A" on "A3"', () => {
    const note = 'A3';
    expect(stripOctave(note)).toBe('A');
  });

  it('should return "F♯" on "F♯7"', () => {
    const note = 'F♯7';
    expect(stripOctave(note)).toBe('F♯');
  });

  it('should return "C♭" on "C♭3"', () => {
    const note = 'C♭3';
    expect(stripOctave(note)).toBe('C♭');
  });

  it('should throw on invalid scientific note', () => {
    const note = 'Fr';
    expect(() => stripOctave(note)).toThrow();
  });
});

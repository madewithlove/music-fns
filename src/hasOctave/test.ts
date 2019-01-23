import hasOctave from './index';

describe('hasOctave', () => {
  it('should return true on "G3"', () => {
    const note = 'G3';
    expect(hasOctave(note)).toBe(true);
  });

  it('should return true on "Gb3"', () => {
    const note = 'Ab3';
    expect(hasOctave(note)).toBe(true);
  });

  it('should return false on "B#"', () => {
    const note = 'B#';
    expect(hasOctave(note)).toBe(false);
  });

  it('should return false on "A♭"', () => {
    const note = 'A♭';
    expect(hasOctave(note)).toBe(false);
  });

  it('should return false on invalid note', () => {
    const note = 'Fr';
    expect(hasOctave(note)).toBe(false);
  });
});

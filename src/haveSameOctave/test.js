import haveSameOctave from './';

describe('haveSameOctave', () => {
  it('should return true when all notes are within same octave', () => {
    const notes = ['C3', 'E3', 'F3'];
    expect(haveSameOctave(notes)).toBe(true);
  });

  it('should return true when all notes are within same octave', () => {
    const notes = ['C', 'E', 'F'];
    expect(haveSameOctave(notes)).toBe(true);
  });

  it('should return false when not all notes are within same octave', () => {
    const notes = ['C3', 'E3', 'F5'];
    expect(haveSameOctave(notes)).toBe(false);
  });

  it('should return false when not all notes are within same octave', () => {
    const notes = ['C3', 'E3', 'A'];
    expect(haveSameOctave(notes)).toBe(false);
  });

  it('should return false when not all notes are within same octave', () => {
    const notes = ['C3', 'Fr'];
    expect(haveSameOctave(notes)).toBe(false);
  });

  it('should return false when not all notes are within same octave', () => {
    const notes = [];
    expect(haveSameOctave(notes)).toBe(false);
  });

  it('should return false when not all notes are within same octave', () => {
    const notes = ['D5'];
    expect(haveSameOctave(notes)).toBe(false);
  });
});

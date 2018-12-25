import areNotes from './';

describe('areNotes', () => {
  it('should return true on a valid notes array', () => {
    const notes = ['A', 'B', 'D'];
    expect(areNotes(notes)).toBe(true);
  });

  it('should return true on a valid notes array', () => {
    const notes = ['A', 'B'];
    expect(areNotes(notes)).toBe(true);
  });

  it('should return false when notes is larger then octave', () => {
    const notes = ['A#3', 'B7'];
    expect(areNotes(notes)).toBe(true);
  });

  it('should return true on a notes with mixed intervals', () => {
    const notes = ['A1', 'B1', 'A1'];
    expect(areNotes(notes)).toBe(true);
  });

  it('should return true on a notes with mixed intervals', () => {
    const notes = ['A1', 'B1', 'A1'];
    expect(areNotes(notes)).toBe(true);
  });

  it('should return false on an invalid notes', () => {
    const notes = ['A', 'B2'];
    expect(areNotes(notes)).toBe(false);
  });

  it('should return false on invalid notes', () => {
    const notes = ['A', 'Fr'];
    expect(areNotes(notes)).toBe(false);
  });
});

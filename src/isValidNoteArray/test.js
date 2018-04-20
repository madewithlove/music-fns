import isValidNoteArray from './';

describe('isValidNoteArray', () => {
  it('should return true on a valid notes array', () => {
    const notes = ['A', 'B', 'D'];
    expect(isValidNoteArray(notes)).toBe(true);
  });

  it('should return true on a valid notes array', () => {
    const notes = ['A', 'B'];
    expect(isValidNoteArray(notes)).toBe(true);
  });

  it('should return false when notes is larger then octave', () => {
    const notes = ['A#3', 'B7'];
    expect(isValidNoteArray(notes)).toBe(true);
  });

  it('should return true on a notes with mixed intervals', () => {
    const notes = ['A1', 'B1', 'A1'];
    expect(isValidNoteArray(notes)).toBe(true);
  });

  it('should return true on a notes with mixed intervals', () => {
    const notes = ['A1', 'B1', 'A1'];
    expect(isValidNoteArray(notes)).toBe(true);
  });

  it('should return false on an invalid notes', () => {
    const notes = ['A', 'B2'];
    expect(isValidNoteArray(notes)).toBe(false);
  });

  it('should return false on invalid notes', () => {
    const notes = ['A', 'Fr'];
    expect(isValidNoteArray(notes)).toBe(false);
  });
});

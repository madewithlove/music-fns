import isScientificNoteArray from './';

describe('isScientificNoteArray', () => {
  it('should return true on a valid notes array', () => {
    const notes = ['A', 'B', 'D'];
    expect(isScientificNoteArray(notes)).toBe(true);
  });

  it('should return true on a valid notes array', () => {
    const notes = ['A', 'B'];
    expect(isScientificNoteArray(notes)).toBe(true);
  });

  it('should return false when notes is larger then octave', () => {
    const notes = ['A#3', 'B7'];
    expect(isScientificNoteArray(notes)).toBe(true);
  });

  it('should return true on a notes with mixed intervals', () => {
    const notes = ['A1', 'B1', 'A1'];
    expect(isScientificNoteArray(notes)).toBe(true);
  });

  it('should return true on a notes with mixed intervals', () => {
    const notes = ['A1', 'B1', 'A1'];
    expect(isScientificNoteArray(notes)).toBe(true);
  });

  it('should return false on an invalid notes', () => {
    const notes = ['A', 'B2'];
    expect(isScientificNoteArray(notes)).toBe(false);
  });

  it('should return false on invalid notes', () => {
    const notes = ['A', 'Fr'];
    expect(isScientificNoteArray(notes)).toBe(false);
  });
});

import isValidNote from './';

describe('isValidNote', () => {
  it('should return true on when it is a valid note', () => {
    const note = 'A';
    expect(isValidNote(note)).toBe(true);
  });

  it('should return true on when it is a valid note with a accidental of #', () => {
    const note = 'A#';
    expect(isValidNote(note)).toBe(true);
  });

  it('should return true on when it is a valid note with a accidental of b', () => {
    const note = 'Ab';
    expect(isValidNote(note)).toBe(true);
  });

  it('should return true on when it is a valid note with a accidental of ♯', () => {
    const note = 'A♯';
    expect(isValidNote(note)).toBe(true);
  });

  it('should return true on when it is a valid note with a accidental of ♮', () => {
    const note = 'A♮';
    expect(isValidNote(note)).toBe(true);
  });

  it('should return true on when it is a valid note with an octave', () => {
    const note = 'A2';
    expect(isValidNote(note)).toBe(true);
  });

  it('should return true on when it is a valid note with an accidental and an octave', () => {
    const note = 'A#2';
    expect(isValidNote(note)).toBe(true);
  });

  it('should return false on when it is an invalid note', () => {
    const note = 'H';
    expect(isValidNote(note)).toBe(false);
  });

  it('should return false on when it is a valid note with an invalid accidental', () => {
    const note = 'Hx';
    expect(isValidNote(note)).toBe(false);
  });
});

import isNote from './index';

describe('isNote', () => {
  it('should return true on when it is a valid note', () => {
    const note = 'A';
    expect(isNote(note)).toBe(true);
  });

  it('should return true on when it is a valid note with a accidental of #', () => {
    const note = 'A#';
    expect(isNote(note)).toBe(true);
  });

  it('should return true on when it is a valid note with a accidental of b', () => {
    const note = 'Ab';
    expect(isNote(note)).toBe(true);
  });

  it('should return true on when it is a valid note with a accidental of ♯', () => {
    const note = 'A♯';
    expect(isNote(note)).toBe(true);
  });

  it('should return true on when it is a valid note with a accidental of ♭', () => {
    const note = 'A♭';
    expect(isNote(note)).toBe(true);
  });

  it('should return true on when it is a valid note with an octave', () => {
    const note = 'A2';
    expect(isNote(note)).toBe(true);
  });

  it('should return true on when it is a valid note with an accidental and an octave', () => {
    const note = 'A#2';
    expect(isNote(note)).toBe(true);
  });

  it('should return false on when it is an invalid note', () => {
    const note = 'H';
    expect(isNote(note)).toBe(false);
  });

  it('should return false on when it is a valid note with an invalid accidental', () => {
    const note = 'Hx';
    expect(isNote(note)).toBe(false);
  });
});

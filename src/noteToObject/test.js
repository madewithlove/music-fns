import parseNote from './';

describe('parseNote', () => {
  it('should return an object with note information on when it is a valid note', () => {
    const note = 'A';
    const result = parseNote(note);

    expect(result.note).toBe('A');
  });

  it('should return an object with note and accidental information on when it is a valid note with accidental', () => {
    const note = 'A#';
    const result = parseNote(note);

    expect(result.note).toBe('A');
    expect(result.accidental).toBe('#');
  });

  it('should return an object with note,accidental and ocatave information on when it is a valid note with accidental and octave', () => {
    const note = 'A#2';
    const result = parseNote(note);

    expect(result.note).toBe('A');
    expect(result.accidental).toBe('#');
    expect(result.octave).toBe(2);
  });

  it('should return an object with note and ocatave information on when it is a valid note with octave', () => {
    const note = 'A2';
    const result = parseNote(note);

    expect(result.note).toBe('A');
    expect(result.accidental).toBe(undefined);
    expect(result.octave).toBe(2);
  });

  it('should return false if the note is not valid', () => {
    const note = 'H';
    const result = parseNote(note);

    expect(result).toBe(false);
  });
});

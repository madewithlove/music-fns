import parseNote from './';

describe('parseNote', () => {
  it('should return an object with note information on when it is a valid note', () => {
    const note = 'A';

    expect(parseNote(note)).toEqual({
      note: 'A',
      accidental: undefined,
      octave: undefined
    });
  });

  it('should return an object with note and accidental information on when it is a valid note with accidental', () => {
    const note = 'A#';

    expect(parseNote(note)).toEqual({
      note: 'A',
      accidental: '#',
      octave: undefined
    });
  });

  it('should return an object with note,accidental and octave information on when it is a valid note with accidental and octave', () => {
    const note = 'A#2';

    expect(parseNote(note)).toEqual({
      note: 'A',
      accidental: '#',
      octave: 2
    });
  });

  it('should return an object with note and octave information on when it is a valid note with octave', () => {
    const note = 'A2';

    expect(parseNote(note)).toEqual({
      note: 'A',
      accidental: undefined,
      octave: 2
    });
  });

  it('should throw an error if the note is not valid', () => {
    const note = 'H';

    expect(() => parseNote(note)).toThrow(`"H" is not a valid scientific note`);
  });
});

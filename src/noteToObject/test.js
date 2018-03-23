import noteToObject from './';

/*

♭ ♯

*/

describe('noteToObject', () => {
  it('should return the correct object on "A', () => {
    const note = 'A';

    expect(noteToObject(note)).toEqual({
      note: 'A',
      accidental: undefined,
      octave: undefined
    });
  });

  it('should return the correct object on "A#', () => {
    const note = 'A#';

    expect(noteToObject(note)).toEqual({
      note: 'A',
      accidental: 'SHARP',
      accidentalType: 'LETTER',
      octave: undefined
    });
  });

  it('should return the correct object on "A#4', () => {
    const note = 'A#4';

    expect(noteToObject(note)).toEqual({
      note: 'A',
      accidental: 'SHARP',
      accidentalType: 'LETTER',
      octave: 4
    });
  });

  it('should return the correct object on "A♯7', () => {
    const note = 'A♯7';

    expect(noteToObject(note)).toEqual({
      note: 'A',
      accidental: 'SHARP',
      accidentalType: 'SYMBOL',
      octave: 7
    });
  });

  it('should return the correct object on "Cb3', () => {
    const note = 'Cb3';

    expect(noteToObject(note)).toEqual({
      note: 'C',
      accidental: 'FLAT',
      accidentalType: 'LETTER',
      octave: 3
    });
  });

  it('should return the correct object on "c♭8', () => {
    const note = 'C♭8';

    expect(noteToObject(note)).toEqual({
      note: 'C',
      accidental: 'FLAT',
      accidentalType: 'SYMBOL',
      octave: 8
    });
  });

  it('should return the correct object on "A2', () => {
    const note = 'A2';

    expect(noteToObject(note)).toEqual({
      note: 'A',
      accidental: undefined,
      accidentalType: undefined,
      octave: 2
    });
  });

  it('should return the correct object on "B♭9', () => {
    const note = 'B♭9';

    expect(noteToObject(note)).toEqual({
      note: 'B',
      accidental: 'FLAT',
      accidentalType: 'SYMBOL',
      octave: 9
    });
  });

  it('should return the correct object on "H', () => {
    const note = 'H';

    expect(() => noteToObject(note)).toThrow(
      `"H" is not a valid scientific note.`
    );
  });
});

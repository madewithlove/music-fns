import getNoteStyle from './';

describe('getNoteStyle', () => {
  it('return correct info for "B#1"', () => {
    const note = 'B#3';
    expect(getNoteStyle(note)).toEqual({
      accidental: 'SHARP',
      accidentalStyle: 'LETTER'
    });
  });

  it('return correct info for "B♯3"', () => {
    const note = 'B♯3';
    expect(getNoteStyle(note)).toEqual({
      accidental: 'SHARP',
      accidentalStyle: 'SYMBOL'
    });
  });

  it('return correct info for "Gb4"', () => {
    const note = 'Gb4';
    expect(getNoteStyle(note)).toEqual({
      accidental: 'FLAT',
      accidentalStyle: 'LETTER'
    });
  });

  it('return correct info for "G♭5"', () => {
    const note = 'G♭5';
    expect(getNoteStyle(note)).toEqual({
      accidental: 'FLAT',
      accidentalStyle: 'SYMBOL'
    });
  });

  it('return correct info for "B"', () => {
    const note = 'B';
    expect(getNoteStyle(note)).toEqual({
      accidental: undefined,
      accidentalStyle: undefined
    });
  });

  it('should throw on invalid reference or note', () => {
    const note = 'Fr';
    expect(() => getNoteStyle(note)).toThrow();
  });
});

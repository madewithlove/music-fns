import objectToNote from './';

describe('objectToNote', () => {
  it('should return a scientific note "A" with note object {note: "A"}', () => {
    const noteObject = {
      root: 'A'
    };

    expect(objectToNote(noteObject)).toEqual('A');
  });

  it('should return a scientific note "A" with note object {note: "a"}', () => {
    const noteObject = {
      root: 'a'
    };

    expect(objectToNote(noteObject)).toEqual('A');
  });

  it('should return a scientific note "C8" with note object {note: "C", octave: 8}', () => {
    const noteObject = {
      root: 'C',
      octave: 8
    };

    expect(objectToNote(noteObject)).toEqual('C8');
  });

  it('should return a scientific note "A♯" with note object {note: "a", accidental: "sharp"}', () => {
    const noteObject = {
      root: 'a',
      accidental: 'sharp'
    };

    expect(objectToNote(noteObject)).toEqual('A♯');
  });

  it('should return a scientific note "Fb" with note object {note: "f", accidental: "b"}', () => {
    const noteObject = {
      root: 'f',
      accidental: 'flat',
      accidentalType: 'letter'
    };

    expect(objectToNote(noteObject)).toEqual('Fb');
  });

  it('should return a scientific note F♭ with note object {note: "g", accidental: "flat", accidentalType: "symbol", octave: 3}', () => {
    const noteObject = {
      root: 'g',
      accidental: 'flat',
      accidentalType: 'symbol',
      octave: 3
    };

    expect(objectToNote(noteObject)).toEqual('G♭3');
  });

  it('should return a scientific note D♯4 with note object {note: "D", accidental: "sharp", octave: 4}', () => {
    const noteObject = {
      root: 'D',
      accidental: 'sharp',
      octave: 4
    };

    expect(objectToNote(noteObject)).toEqual('D♯4');
  });

  it('should return a scientific note "G3" with note object {note: "G", octave: "3"}', () => {
    const noteObject = {
      root: 'G',
      octave: 3
    };

    expect(objectToNote(noteObject)).toEqual('G3');
  });

  it('should throw an error on a note object {note: "f", accidental: "eeee"}', () => {
    const noteObject = {
      root: 'q',
      accidental: 'eeee'
    };
    expect(() => objectToNote(noteObject)).toThrow(
      '"{"root":"q","accidental":"eeee"}" is not a valid note object.'
    );
  });
});

import Chord from './index';

describe('Augmented Chord', () => {
  const pitches = [0, 4, 8];

  it(`should, for AUGMENTED, return ${pitches}`, () => {
    expect(Chord.AUGMENTED).toEqual(pitches);
  });

  it(`should, for "aug", return ${pitches}`, () => {
    expect(Chord.aug).toEqual(pitches);
  });
});

describe('Diminished Chord', () => {
  const pitches = [0, 3, 6];

  it(`should return ${pitches}`, () => {
    expect(Chord.DIMINISHED).toEqual(pitches);
  });

  it(`should, for "dim", return ${pitches}`, () => {
    expect(Chord.dim).toEqual(pitches);
  });
});

describe('Major Seventh Chord', () => {
  const pitches = [0, 4, 7, 11];

  it(`should, for MAJOR_SEVENTH, return ${pitches}`, () => {
    expect(Chord.MAJOR_SEVENTH).toEqual(pitches);
  });

  it(`should, for "maj7", return ${pitches}`, () => {
    expect(Chord.maj7).toEqual(pitches);
  });
});

describe('Major Chord', () => {
  const pitches = [0, 4, 7];

  it(`should, for MAJOR, return ${pitches}`, () => {
    expect(Chord.MAJOR).toEqual(pitches);
  });

  it(`should, for "M", return ${pitches}`, () => {
    expect(Chord.M).toEqual(pitches);
  });

  it(`should, for "dur", return ${pitches}`, () => {
    expect(Chord.dur).toEqual(pitches);
  });
});

describe('Minor Major Seventh Chord', () => {
  const pitches = [0, 3, 7, 11];

  it(`should, for MINOR_MAJOR_SEVENTH, return ${pitches}`, () => {
    expect(Chord.MINOR_MAJOR_SEVENTH).toEqual(pitches);
  });

  it(`should, for "mM7", return ${pitches}`, () => {
    expect(Chord.mM7).toEqual(pitches);
  });
});

describe('Minor Seventh Chord', () => {
  const pitches = [0, 3, 7, 10];

  it(`should, for MINOR_SEVENTH, return ${pitches}`, () => {
    expect(Chord.MINOR_SEVENTH).toEqual(pitches);
  });

  it(`should, for m7, return ${pitches}`, () => {
    expect(Chord.m7).toEqual(pitches);
  });
});

describe('Minor Chord', () => {
  const pitches = [0, 3, 7];

  it(`should, for MINOR, return ${pitches}`, () => {
    expect(Chord.MINOR).toEqual(pitches);
  });

  it(`should, for "m", return ${pitches}`, () => {
    expect(Chord.m).toEqual(pitches);
  });

  it(`should, for "moll", return ${pitches}`, () => {
    expect(Chord.moll).toEqual(pitches);
  });
});

describe('Seventh Chord', () => {
  const pitches = [0, 4, 7, 10];

  it(`should, for SEVENTH, return ${pitches}`, () => {
    expect(Chord.SEVENTH).toEqual(pitches);
  });

  it(`should, for 7, return ${pitches}`, () => {
    expect(Chord.SEVENTH).toEqual(pitches);
  });
});

import MAJOR from './MAJOR';
import MINOR from './MINOR';
import DIMINISHED from './DIMINISHED';
import AUGMENTED from './AUGMENTED';

describe('Major Chord', () => {
  const pitches = [0, 4, 7];

  it(`should return ${pitches}`, () => {
    expect(MAJOR).toEqual(pitches);
  });
});

describe('Minor Chord', () => {
  const pitches = [0, 3, 7];

  it(`should return ${pitches}`, () => {
    expect(MINOR).toEqual(pitches);
  });
});

describe('Diminished Chord', () => {
  const pitches = [0, 3, 6];

  it(`should return ${pitches}`, () => {
    expect(DIMINISHED).toEqual(pitches);
  });
});

describe('Augmented Chord', () => {
  const pitches = [0, 4, 8];

  it(`should return ${pitches}`, () => {
    expect(AUGMENTED).toEqual(pitches);
  });
});

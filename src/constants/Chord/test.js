import MAJOR from './MAJOR';
import MINOR from './MINOR';
import DIMINISHED from './DIMINISHED';
import AUGMENTED from './AUGMENTED';

import SEVENTH from './SEVENTH';
import MAJOR_SEVENTH from './MAJOR_SEVENTH';
import MINOR_MAJOR_SEVENTH from './MINOR_MAJOR_SEVENTH';
import MINOR_SEVENTH from './MINOR_SEVENTH';

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

describe('Seventh Chord', () => {
  const pitches = [0, 4, 7, 10];

  it(`should return ${pitches}`, () => {
    expect(SEVENTH).toEqual(pitches);
  });
});

describe('Major Seventh Chord', () => {
  const pitches = [0, 4, 7, 11];

  it(`should return ${pitches}`, () => {
    expect(MAJOR_SEVENTH).toEqual(pitches);
  });
});

describe('Minor Major Seventh Chord', () => {
  const pitches = [0, 3, 7, 11];

  it(`should return ${pitches}`, () => {
    expect(MINOR_MAJOR_SEVENTH).toEqual(pitches);
  });
});

describe('Minor Seventh Chord', () => {
  const pitches = [0, 3, 7, 10];

  it(`should return ${pitches}`, () => {
    expect(MINOR_SEVENTH).toEqual(pitches);
  });
});

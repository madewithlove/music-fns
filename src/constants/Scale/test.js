import CHROMATIC from './CHROMATIC';
import HARMONIC_MINOR from './HARMONIC_MINOR';
import NATURAL_MINOR from './NATURAL_MINOR';
import MAJOR from './MAJOR';

import MAJOR_PENTATONIC from './MAJOR_PENTATONIC';
import MINOR_PENTATONIC from './MINOR_PENTATONIC';

import AEOLIAN from '../Mode/AEOLIAN';
import IONIAN from '../Mode/IONIAN';

describe('Chromatic Scale', () => {
  const scale = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  it(`should return ${scale}`, () => {
    expect(CHROMATIC).toEqual(scale);
  });
});

describe('Major Scale', () => {
  const scale = [2, 2, 1, 2, 2, 2, 1];

  it('should be the same as Ionian Mode', () => {
    expect(MAJOR).toEqual(IONIAN);
  });

  it(`should return ${scale}`, () => {
    expect(MAJOR).toEqual(scale);
  });
});

describe('Harmonic Minor Scale', () => {
  const scale = [2, 1, 2, 2, 1, 3, 1];

  it(`should return ${scale}`, () => {
    expect(HARMONIC_MINOR).toEqual(scale);
  });
});

describe('Natural Minor Scale', () => {
  const scale = [2, 1, 2, 2, 1, 2, 2];

  it('should be the same as Aeolian Mode', () => {
    expect(NATURAL_MINOR).toEqual(AEOLIAN);
  });

  it(`should return ${scale}`, () => {
    expect(NATURAL_MINOR).toEqual(scale);
  });
});

describe('Major Pentatonic Chord', () => {
  const scale = [2, 2, 3, 2, 3];

  it(`should return ${scale}`, () => {
    expect(MAJOR_PENTATONIC).toEqual(scale);
  });
});

describe('Minor Pentatonic Chord', () => {
  const pitches = [3, 2, 2, 3, 2];

  it(`should return ${pitches}`, () => {
    expect(MINOR_PENTATONIC).toEqual(pitches);
  });
});

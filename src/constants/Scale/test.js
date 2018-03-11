import CHROMATIC from './CHROMATIC';
import HARMONIC_MINOR from './HARMONIC_MINOR';
import NATURAL_MINOR from './NATURAL_MINOR';
import MAJOR from './MAJOR';

import AEOLIAN from '../Mode/AEOLIAN';
import IONIAN from '../Mode/IONIAN';

import isDiatonicScale from '../../isDiatonicScale';
import isHeptatonicScale from '../../isHeptatonicScale';

describe('Chromatic Scale', () => {
  it('should contain 12 pitches', () => {
    expect(CHROMATIC.length).toEqual(12);
  });

  it('should return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]', () => {
    expect(CHROMATIC).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  });
});

describe('Major Scale', () => {
  it('is a Diatonic Scale', () => {
    expect(isDiatonicScale(MAJOR)).toEqual(true);
  });

  it('should be the same as Ionian Mode', () => {
    expect(MAJOR).toEqual(IONIAN);
  });

  it('should return [2, 2, 1, 2, 2, 2, 1]', () => {
    expect(MAJOR).toEqual([2, 2, 1, 2, 2, 2, 1]);
  });
});

describe('Harmonic Minor Scale', () => {
  it('is a Heptatonic Scale', () => {
    expect(isHeptatonicScale(HARMONIC_MINOR)).toEqual(true);
  });

  it('should return [2, 1, 2, 2, 1, 3, 1]', () => {
    expect(HARMONIC_MINOR).toEqual([2, 1, 2, 2, 1, 3, 1]);
  });
});

describe('Natural Minor Scale', () => {
  it('is a Diatonic Scale', () => {
    expect(isDiatonicScale(NATURAL_MINOR)).toEqual(true);
  });

  it('should be the same as Aeolian Mode', () => {
    expect(NATURAL_MINOR).toEqual(AEOLIAN);
  });

  it('should return [2, 1, 2, 2, 1, 2, 2]', () => {
    expect(NATURAL_MINOR).toEqual([2, 1, 2, 2, 1, 2, 2]);
  });
});

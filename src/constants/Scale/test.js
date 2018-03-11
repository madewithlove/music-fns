import CHROMATIC from './CHROMATIC';
import HARMONIC_MINOR from './HARMONIC_MINOR';
import NATURAL_MINOR from './NATURAL_MINOR';
import MAJOR from './MAJOR';

import AEOLIAN from '../Mode/AEOLIAN';
import IONIAN from '../Mode/IONIAN';

describe('Chromatic Scale', () => {
  it('should contain 12 pitches', () => {
    expect(CHROMATIC.length).toEqual(12);
  });

  it('should return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]', () => {
    expect(CHROMATIC).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  });
});

describe('Major Scale', () => {
  it('should contain 7 pitches', () => {
    expect(MAJOR.length).toEqual(7);
  });

  it('should be the same as Ionian Mode', () => {
    expect(MAJOR).toEqual(IONIAN);
  });

  it('should return [2, 2, 1, 2, 2, 2, 1]', () => {
    expect(MAJOR).toEqual([2, 2, 1, 2, 2, 2, 1]);
  });
});

describe('Harmonic Minor Scale', () => {
  it('should contain 7 pitches', () => {
    expect(HARMONIC_MINOR.length).toEqual(7);
  });

  it('should return [2, 1, 2, 2, 1, 3, 1]', () => {
    expect(HARMONIC_MINOR).toEqual([2, 1, 2, 2, 1, 3, 1]);
  });
});

describe('Natural Minor Scale', () => {
  it('should contain 7 pitches', () => {
    expect(NATURAL_MINOR.length).toEqual(7);
  });

  it('should be the same as Aeolian Mode', () => {
    expect(NATURAL_MINOR).toEqual(AEOLIAN);
  });

  it('should return [2, 1, 2, 2, 1, 2, 2]', () => {
    expect(NATURAL_MINOR).toEqual([2, 1, 2, 2, 1, 2, 2]);
  });
});

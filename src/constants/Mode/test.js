import IONIAN from './IONIAN';
import DORIAN from './DORIAN';
import PHRYGIAN from './PHRYGIAN';
import LYDIAN from './LYDIAN';
import MIXOLYDIAN from './MIXOLYDIAN';
import AEOLIAN from './AEOLIAN';
import LOCRIAN from './LOCRIAN';

import MAJOR from '../Scale/MAJOR';
import NATURAL_MINOR from '../Scale/NATURAL_MINOR';

import isDiatonicScale from '../../isDiatonicScale';

// C -> C (white keys)
describe('Ionian Mode', () => {
  it('is a Diatonic Scale', () => {
    expect(isDiatonicScale(IONIAN)).toEqual(true);
  });

  it('should be the same as Major Scale', () => {
    expect(IONIAN).toEqual(MAJOR);
  });

  it('should return [2, 2, 1, 2, 2, 2, 1]', () => {
    expect(IONIAN).toEqual([2, 2, 1, 2, 2, 2, 1]);
  });
});

// D -> D (white keys)
describe('Dorian Mode', () => {
  it('is a Diatonic Scale', () => {
    expect(isDiatonicScale(DORIAN)).toEqual(true);
  });

  it('should return [2, 1, 2, 2, 2, 1, 2]', () => {
    expect(DORIAN).toEqual([2, 1, 2, 2, 2, 1, 2]);
  });
});

// E -> E (white keys)
describe('Phrygian Mode', () => {
  it('is a Diatonic Scale', () => {
    expect(isDiatonicScale(PHRYGIAN)).toEqual(true);
  });

  it('should return [1, 2, 2, 2, 1, 2, 2]', () => {
    expect(PHRYGIAN).toEqual([1, 2, 2, 2, 1, 2, 2]);
  });
});

// F -> F (white keys)
describe('Lydian Mode', () => {
  it('is a Diatonic Scale', () => {
    expect(isDiatonicScale(LYDIAN)).toEqual(true);
  });

  it('should return [2, 2, 2, 1, 2, 2, 1]', () => {
    expect(LYDIAN).toEqual([2, 2, 2, 1, 2, 2, 1]);
  });
});

// G -> G (white keys)
describe('Mixolydian Mode', () => {
  it('is a Diatonic Scale', () => {
    expect(isDiatonicScale(MIXOLYDIAN)).toEqual(true);
  });

  it('should return [2, 2, 1, 2, 2, 1, 2]', () => {
    expect(MIXOLYDIAN).toEqual([2, 2, 1, 2, 2, 1, 2]);
  });
});

// A -> A (white keys)
describe('Aeolian Mode', () => {
  it('is a Diatonic Scale', () => {
    expect(isDiatonicScale(AEOLIAN)).toEqual(true);
  });

  it('should be the same as Natural Minor Scale', () => {
    expect(AEOLIAN).toEqual(NATURAL_MINOR);
  });

  it('should return [2, 1, 2, 2, 1, 2, 2]', () => {
    expect(AEOLIAN).toEqual([2, 1, 2, 2, 1, 2, 2]);
  });
});

// B -> B (white keys)
describe('Locrian Mode', () => {
  it('is a Diatonic Scale', () => {
    expect(isDiatonicScale(LOCRIAN)).toEqual(true);
  });

  it('should return [1, 2, 2, 1, 2, 2, 2]', () => {
    expect(LOCRIAN).toEqual([1, 2, 2, 1, 2, 2, 2]);
  });
});

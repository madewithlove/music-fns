import IONIAN from './IONIAN';
import DORIAN from './DORIAN';
import PHRYGIAN from './PHRYGIAN';
import LYDIAN from './LYDIAN';
import MIXOLYDIAN from './MIXOLYDIAN';
import AEOLIAN from './AEOLIAN';
import LOCRIAN from './LOCRIAN';

import MAJOR from '../Scale/MAJOR';
import NATURAL_MINOR from '../Scale/NATURAL_MINOR';

// C -> C (white keys)
describe('Ionian Mode', () => {
  const mode = [2, 2, 1, 2, 2, 2, 1];

  it('should be the same as Major Scale', () => {
    expect(IONIAN).toEqual(MAJOR);
  });

  it(`should return ${mode}`, () => {
    expect(IONIAN).toEqual(mode);
  });
});

// D -> D (white keys)
describe('Dorian Mode', () => {
  const mode = [2, 1, 2, 2, 2, 1, 2];

  it(`should return ${mode}`, () => {
    expect(DORIAN).toEqual(mode);
  });
});

// E -> E (white keys)
describe('Phrygian Mode', () => {
  const mode = [1, 2, 2, 2, 1, 2, 2];

  it(`should return ${mode}`, () => {
    expect(PHRYGIAN).toEqual(mode);
  });
});

// F -> F (white keys)
describe('Lydian Mode', () => {
  const mode = [2, 2, 2, 1, 2, 2, 1];

  it(`should return ${mode}`, () => {
    expect(LYDIAN).toEqual(mode);
  });
});

// G -> G (white keys)
describe('Mixolydian Mode', () => {
  const mode = [2, 2, 1, 2, 2, 1, 2];

  it(`should return ${mode}`, () => {
    expect(MIXOLYDIAN).toEqual(mode);
  });
});

// A -> A (white keys)
describe('Aeolian Mode', () => {
  const mode = [2, 1, 2, 2, 1, 2, 2];

  it('should be the same as Natural Minor Scale', () => {
    expect(AEOLIAN).toEqual(NATURAL_MINOR);
  });

  it(`should return ${mode}`, () => {
    expect(AEOLIAN).toEqual(mode);
  });
});

// B -> B (white keys)
describe('Locrian Mode', () => {
  const mode = [1, 2, 2, 1, 2, 2, 2];

  it(`should return ${mode}`, () => {
    expect(LOCRIAN).toEqual(mode);
  });
});

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
  it('should contain 7 pitches', () => {
    expect(IONIAN.length).toEqual(7);
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
  it('should contain 7 pitches', () => {
    expect(DORIAN.length).toEqual(7);
  });

  it('should return [2, 1, 2, 2, 2, 1, 2]', () => {
    expect(DORIAN).toEqual([2, 1, 2, 2, 2, 1, 2]);
  });
});

// E -> E (white keys)
describe('Phrygian Mode', () => {
  it('should contain 7 pitches', () => {
    expect(PHRYGIAN.length).toEqual(7);
  });

  it('should return [1, 2, 2, 2, 1, 2, 2]', () => {
    expect(PHRYGIAN).toEqual([1, 2, 2, 2, 1, 2, 2]);
  });
});

// F -> F (white keys)
describe('Lydian Mode', () => {
  it('should contain 7 pitches', () => {
    expect(LYDIAN.length).toEqual(7);
  });

  it('should return [2, 2, 2, 1, 2, 2, 1]', () => {
    expect(LYDIAN).toEqual([2, 2, 2, 1, 2, 2, 1]);
  });
});

// G -> G (white keys)
describe('Mixolydian Mode', () => {
  it('should contain 7 pitches', () => {
    expect(MIXOLYDIAN.length).toEqual(7);
  });

  it('should return [2, 2, 1, 2, 2, 1, 2]', () => {
    expect(MIXOLYDIAN).toEqual([2, 2, 1, 2, 2, 1, 2]);
  });
});

// A -> A (white keys)
describe('Aeolian Mode', () => {
  it('should contain 7 pitches', () => {
    expect(AEOLIAN.length).toEqual(7);
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
  it('should contain 7 pitches', () => {
    expect(LOCRIAN.length).toEqual(7);
  });

  it('should return [1, 2, 2, 1, 2, 2, 2]', () => {
    expect(LOCRIAN).toEqual([1, 2, 2, 1, 2, 2, 2]);
  });
});

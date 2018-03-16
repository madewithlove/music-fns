import ALTERED from './ALTERED';
import BLUES from './BLUES';
import CHROMATIC from './CHROMATIC';
import ENIGMATIC from './ENIGMATIC';
import HARMONIC_MINOR from './HARMONIC_MINOR';
import MAJOR_PENTATONIC from './MAJOR_PENTATONIC';
import MAJOR from './MAJOR';
import MELODIC_MINOR from './MELODIC_MINOR';
import MINOR_PENTATONIC from './MINOR_PENTATONIC';
import NATURAL_MINOR from './NATURAL_MINOR';
import PROMETHEUS from './PROMETHEUS';
import WHOLE_TONE from './WHOLE_TONE';

import AEOLIAN from '../Mode/AEOLIAN';
import IONIAN from '../Mode/IONIAN';

describe('Altered Scale', () => {
  const pitches = [1, 2, 1, 2, 2, 2, 2];

  it(`should return ${pitches}`, () => {
    expect(ALTERED).toEqual(pitches);
  });
});

describe('Blues Scale', () => {
  const pitches = [3, 2, 1, 1, 3, 2];

  it(`should return ${pitches}`, () => {
    expect(BLUES).toEqual(pitches);
  });
});

describe('Chromatic Scale', () => {
  const scale = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  it(`should return ${scale}`, () => {
    expect(CHROMATIC).toEqual(scale);
  });
});

describe('Enigmatic Scale', () => {
  const pitches = [1, 3, 2, 2, 2, 1, 1];

  it(`should return ${pitches}`, () => {
    expect(ENIGMATIC).toEqual(pitches);
  });
});

describe('Harmonic Minor Scale', () => {
  const scale = [2, 1, 2, 2, 1, 3, 1];

  it(`should return ${scale}`, () => {
    expect(HARMONIC_MINOR).toEqual(scale);
  });
});

describe('Major Pentatonic Scale', () => {
  const scale = [2, 2, 3, 2, 3];

  it(`should return ${scale}`, () => {
    expect(MAJOR_PENTATONIC).toEqual(scale);
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

describe('Melodic Minor Scale', () => {
  const scale = [2, 1, 2, 2, 2, 2, 1];

  it(`should return ${scale}`, () => {
    expect(MELODIC_MINOR).toEqual(scale);
  });
});

describe('Minor Pentatonic Scale', () => {
  const pitches = [3, 2, 2, 3, 2];

  it(`should return ${pitches}`, () => {
    expect(MINOR_PENTATONIC).toEqual(pitches);
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

describe('Prometheus Scale', () => {
  const pitches = [2, 2, 2, 3, 1, 2];

  it(`should return ${pitches}`, () => {
    expect(PROMETHEUS).toEqual(pitches);
  });
});

describe('Whole Tone Scale', () => {
  const pitches = [2, 2, 2, 2, 2, 2];

  it(`should return ${pitches}`, () => {
    expect(WHOLE_TONE).toEqual(pitches);
  });
});

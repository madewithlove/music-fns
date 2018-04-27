import ALGERIAN from './ALGERIAN';
import ALTERED from './ALTERED';
import ARABIC from './ARABIC';
import AUGMENTED from './AUGMENTED';
import BALINESE from './BALINESE';
import BLUES from './BLUES';
import BYZANTINE from './BYZANTINE';
import CHINESE from './CHINESE';
import CHROMATIC from './CHROMATIC';
import DOUBLE_HARMONIC from './DOUBLE_HARMONIC';
import ENIGMATIC from './ENIGMATIC';
import GYPSY_MAJOR from './GYPSY_MAJOR';
import HARMONIC_MINOR from './HARMONIC_MINOR';
import IN_SEN from './IN_SEN';
import JAPANESE from './JAPANESE';
import HIRAJOSHI from './HIRAJOSHI';
import MAJOR_PENTATONIC from './MAJOR_PENTATONIC';
import MAJOR from './MAJOR';
import MELODIC_MINOR from './MELODIC_MINOR';
import MINOR_PENTATONIC from './MINOR_PENTATONIC';
import MONGOLIAN from './MONGOLIAN';
import NATURAL_MINOR from './NATURAL_MINOR';
import PELOG from './PELOG';
import PROMETHEUS from './PROMETHEUS';
import WHOLE_TONE from './WHOLE_TONE';
import YO from './YO';

import AEOLIAN from '../Mode/AEOLIAN';
import IONIAN from '../Mode/IONIAN';

describe('Algerian Scale', () => {
  const intervals = [2, 1, 2, 1, 1, 1, 3, 1];

  it(`should return ${intervals}`, () => {
    expect(ALGERIAN).toEqual(intervals);
  });
});

describe('Altered Scale', () => {
  const intervals = [1, 2, 1, 2, 2, 2, 2];

  it(`should return ${intervals}`, () => {
    expect(ALTERED).toEqual(intervals);
  });
});

describe('Augmented Scale', () => {
  const intervals = [3, 1, 3, 1, 3, 1];

  it(`should return ${intervals}`, () => {
    expect(AUGMENTED).toEqual(intervals);
  });
});

describe('Balinese / Pelog Scale', () => {
  const intervals = [1, 2, 4, 1, 4];

  it(`should return ${intervals}`, () => {
    expect(BALINESE).toEqual(intervals);
  });

  it(`should return ${intervals}`, () => {
    expect(PELOG).toEqual(intervals);
  });
});

describe('Blues Scale', () => {
  const intervals = [3, 2, 1, 1, 3, 2];

  it(`should return ${intervals}`, () => {
    expect(BLUES).toEqual(intervals);
  });
});

describe('Chinese Scale', () => {
  const intervals = [4, 2, 1, 4, 1];

  it(`should return ${intervals}`, () => {
    expect(CHINESE).toEqual(intervals);
  });
});

describe('Chromatic Scale', () => {
  const scale = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  it(`should return ${scale}`, () => {
    expect(CHROMATIC).toEqual(scale);
  });
});

describe('Double Harmonic Scale', () => {
  const scale = [1, 3, 1, 2, 1, 3, 1];

  it(`should return ${scale}`, () => {
    expect(DOUBLE_HARMONIC).toEqual(scale);
  });

  it(`should return ${scale}`, () => {
    expect(BYZANTINE).toEqual(scale);
  });

  it(`should return ${scale}`, () => {
    expect(ARABIC).toEqual(scale);
  });

  it(`should return ${scale}`, () => {
    expect(GYPSY_MAJOR).toEqual(scale);
  });
});

describe('Enigmatic Scale', () => {
  const intervals = [1, 3, 2, 2, 2, 1, 1];

  it(`should return ${intervals}`, () => {
    expect(ENIGMATIC).toEqual(intervals);
  });
});

describe('Harmonic Minor Scale', () => {
  const scale = [2, 1, 2, 2, 1, 3, 1];

  it(`should return ${scale}`, () => {
    expect(HARMONIC_MINOR).toEqual(scale);
  });
});

describe('Hirajoshi Scale', () => {
  const scale = [1, 4, 1, 4, 2];

  it(`should return ${scale}`, () => {
    expect(HIRAJOSHI).toEqual(scale);
  });
});

describe('In Sen / Japanese Scale', () => {
  const scale = [1, 4, 2, 3, 2];

  it(`should return ${scale}`, () => {
    expect(IN_SEN).toEqual(scale);
  });

  it(`should return ${scale}`, () => {
    expect(JAPANESE).toEqual(scale);
  });
});

describe('Major Pentatonic / Mongolian Scale', () => {
  const scale = [2, 2, 3, 2, 3];

  it(`should return ${scale}`, () => {
    expect(MAJOR_PENTATONIC).toEqual(scale);
  });

  it(`should return ${scale}`, () => {
    expect(MONGOLIAN).toEqual(scale);
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
  const intervals = [3, 2, 2, 3, 2];

  it(`should return ${intervals}`, () => {
    expect(MINOR_PENTATONIC).toEqual(intervals);
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
  const intervals = [2, 2, 2, 3, 1, 2];

  it(`should return ${intervals}`, () => {
    expect(PROMETHEUS).toEqual(intervals);
  });
});

describe('Whole Tone Scale', () => {
  const intervals = [2, 2, 2, 2, 2, 2];

  it(`should return ${intervals}`, () => {
    expect(WHOLE_TONE).toEqual(intervals);
  });
});

describe('Yo Scale', () => {
  const intervals = [2, 3, 2, 2, 3];

  it(`should return ${intervals}`, () => {
    expect(YO).toEqual(intervals);
  });
});

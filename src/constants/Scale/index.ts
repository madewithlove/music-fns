// https://www.scales-chords.com/scalenav.php

import Interval from '../Interval';
import { ALGERIAN } from './ALGERIAN';
import { ALTERED } from './ALTERED';
import { ARABIC } from './ARABIC';
import { AUGMENTED } from './AUGMENTED';
import { BALINESE } from './BALINESE';
import { BLUES } from './BLUES';
import { BYZANTINE } from './BYZANTINE';
import { CHINESE } from './CHINESE';
import { CHROMATIC } from './CHROMATIC';
import { DOUBLE_HARMONIC } from './DOUBLE_HARMONIC';
import { ENIGMATIC } from './ENIGMATIC';
import { GYPSY_MAJOR } from './GYPSY_MAJOR';
import { HARMONIC_MINOR } from './HARMONIC_MINOR';
import { HIRAJOSHI } from './HIRAJOSHI';
import { IN_SEN } from './IN_SEN';
import { JAPANESE } from './JAPANESE';
import { MAJOR_PENTATONIC } from './MAJOR_PENTATONIC';
import { MAJOR } from './MAJOR';
import { MELODIC_MINOR } from './MELODIC_MINOR';
import { MINOR_PENTATONIC } from './MINOR_PENTATONIC';
import { MONGOLIAN } from './MONGOLIAN';
import { NATURAL_MINOR } from './NATURAL_MINOR';
import { PELOG } from './PELOG';
import { PROMETHEUS } from './PROMETHEUS';
import { WHOLE_TONE } from './WHOLE_TONE';
import { YO } from './YO';

export interface IScale {
  ALGERIAN: Array<Interval>;
  ALTERED: Array<Interval>;
  ARABIC: Array<Interval>;
  AUGMENTED: Array<Interval>;
  BALINESE: Array<Interval>;
  BLUES: Array<Interval>;
  BYZANTINE: Array<Interval>;
  CHINESE: Array<Interval>;
  CHROMATIC: Array<Interval>;
  DOUBLE_HARMONIC: Array<Interval>;
  ENIGMATIC: Array<Interval>;
  GYPSY_MAJOR: Array<Interval>;
  HARMONIC_MINOR: Array<Interval>;
  HIRAJOSHI: Array<Interval>;
  IN_SEN: Array<Interval>;
  JAPANESE: Array<Interval>;
  MAJOR_PENTATONIC: Array<Interval>;
  MAJOR: Array<Interval>;
  MELODIC_MINOR: Array<Interval>;
  MINOR_PENTATONIC: Array<Interval>;
  MONGOLIAN: Array<Interval>;
  NATURAL_MINOR: Array<Interval>;
  PELOG: Array<Interval>;
  PROMETHEUS: Array<Interval>;
  WHOLE_TONE: Array<Interval>;
  YO: Array<Interval>;
}

const S = {
  ALGERIAN,
  ALTERED,
  ARABIC,
  AUGMENTED,
  BALINESE,
  BLUES,
  BYZANTINE,
  CHINESE,
  CHROMATIC,
  DOUBLE_HARMONIC,
  ENIGMATIC,
  GYPSY_MAJOR,
  HARMONIC_MINOR,
  HIRAJOSHI,
  IN_SEN,
  JAPANESE,
  MAJOR_PENTATONIC,
  MAJOR,
  MELODIC_MINOR,
  MINOR_PENTATONIC,
  MONGOLIAN,
  NATURAL_MINOR,
  PELOG,
  PROMETHEUS,
  WHOLE_TONE,
  YO
};

export default S;

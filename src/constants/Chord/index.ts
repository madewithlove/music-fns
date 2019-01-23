import Interval from '../Interval';

import { AUGMENTED } from './AUGMENTED';
import { DIMINISHED } from './DIMINISHED';
import { MAJOR_SEVENTH } from './MAJOR_SEVENTH';
import { MAJOR } from './MAJOR';
import { MINOR_MAJOR_SEVENTH } from './MINOR_MAJOR_SEVENTH';
import { MINOR_SEVENTH } from './MINOR_SEVENTH';
import { MINOR } from './MINOR';
import { SEVENTH } from './SEVENTH';

export interface IChord {
  AUGMENTED: Array<Interval>;
  DIMINISHED: Array<Interval>;
  MAJOR_SEVENTH: Array<Interval>;
  MAJOR: Array<Interval>;
  MINOR_MAJOR_SEVENTH: Array<Interval>;
  MINOR_SEVENTH: Array<Interval>;
  MINOR: Array<Interval>;
  SEVENTH: Array<Interval>;
}

const Chord: IChord = {
  AUGMENTED,
  DIMINISHED,
  MAJOR_SEVENTH,
  MAJOR,
  MINOR_MAJOR_SEVENTH,
  MINOR_SEVENTH,
  MINOR,
  SEVENTH
};

export default Chord;
// https://en.wikipedia.org/wiki/Dominant_seventh_chord

import { MAJOR } from './MAJOR';
import { MINOR_SEVENTH } from '../Interval/MinorMajor';

const SEVENTH = [...MAJOR, MINOR_SEVENTH];

export default {
  SEVENTH,
  '7': SEVENTH
};

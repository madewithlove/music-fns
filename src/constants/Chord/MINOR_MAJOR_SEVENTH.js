// https://en.wikipedia.org/wiki/Minor_major_seventh_chord

import { MINOR } from './MINOR';
import { MAJOR_SEVENTH } from '../Interval/MinorMajor';

const MINOR_MAJOR_SEVENTH = [...MINOR, MAJOR_SEVENTH];
const mM7 = MINOR_MAJOR_SEVENTH;
const mΔ7 = MINOR_MAJOR_SEVENTH;

export default {
  MINOR_MAJOR_SEVENTH,
  mM7,
  mΔ7
};

// https://en.wikipedia.org/wiki/Minor_seventh_chord

import MINOR from './MINOR';
import { MINOR_SEVENTH as MINOR_SEVENTH_NOTE } from '../Interval/MinorMajor';

const MINOR_SEVENTH = [...MINOR.intervals, MINOR_SEVENTH_NOTE];
const m7 = MINOR_SEVENTH;

export default {
  MINOR_SEVENTH,
  m7
};

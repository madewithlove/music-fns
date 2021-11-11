// https://en.wikipedia.org/wiki/Major_seventh_chord

import { MAJOR } from './MAJOR';
import { MAJOR_SEVENTH as MAJOR_SEVENTH_NOTE } from '../Interval/MinorMajor';

const MAJOR_SEVENTH = [...MAJOR, MAJOR_SEVENTH_NOTE];
const maj7 = MAJOR_SEVENTH;

export default {
  MAJOR_SEVENTH,
  maj7
};

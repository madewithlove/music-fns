// https://en.wikipedia.org/wiki/Major_chord

import { ROOT } from '../Interval/Names';
import { MAJOR_THIRD, PERFECT_FIFTH } from '../Interval/MinorMajor';

const MAJOR = [ROOT, MAJOR_THIRD, PERFECT_FIFTH];
const dur = MAJOR;
const M = MAJOR;

export default {
  MAJOR,
  M,
  dur
};

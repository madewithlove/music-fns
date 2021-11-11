// https://en.wikipedia.org/wiki/Minor_chord

import { ROOT } from '../Interval/Names';
import { MINOR_THIRD, PERFECT_FIFTH } from '../Interval/MinorMajor';

export const MINOR = [ROOT, MINOR_THIRD, PERFECT_FIFTH];
const m = MINOR;
const moll = MINOR;

export default {
  MINOR,
  m,
  moll
};

// https://en.wikipedia.org/wiki/Diminished_triad

import { ROOT } from '../Interval/Names';
import { MINOR_THIRD } from '../Interval/MinorMajor';
import { DIMINISHED_FIFTH } from '../Interval/AugmentedDiminished';

const DIMINISHED = [ROOT, MINOR_THIRD, DIMINISHED_FIFTH];
const dim = DIMINISHED;

export default {
  DIMINISHED,
  dim
};

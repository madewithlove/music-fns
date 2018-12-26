// @flow

import { PERFECT_FIFTH } from '../constants/Interval/MinorMajor';

import {
  AUGMENTED_FIFTH,
  DIMINISHED_FIFTH
} from '../constants/Interval/AugmentedDiminished';

const isFifth = (interval: Interval) =>
  interval === PERFECT_FIFTH ||
  interval === AUGMENTED_FIFTH ||
  interval === DIMINISHED_FIFTH;

export default isFifth;

// https://en.wikipedia.org/wiki/Interval_(music)#Interval_number_and_quality

import { R, S, T, TT, O } from './Short';

export const DIMINISHED_SECOND = R;
export const d2 = DIMINISHED_SECOND;

export const AUGMENTED_UNISON = S;
export const A1 = AUGMENTED_UNISON;

export const DIMISHED_THIRD = T;
export const d3 = DIMISHED_THIRD;

export const AUGMENTED_SECOND = 3 * S;
export const A2 = AUGMENTED_SECOND;

export const DIMINISHED_FOURTH = 4 * S;
export const d4 = DIMINISHED_FOURTH;

export const AUGMENTED_THIRD = 5 * S;
export const A3 = AUGMENTED_THIRD;

export const DIMINISHED_FIFTH = TT;
export const d5 = DIMINISHED_FIFTH;

export const AUGMENTED_FOURTH = TT;
export const A4 = TT;

export const DIMINISHED_SIXTH = 7 * S;
export const d6 = DIMINISHED_SIXTH;

export const AUGMENTED_FIFTH = 8 * S;
export const A5 = AUGMENTED_FIFTH;

export const DIMINISHED_SEVENTH = 9 * S;
export const d7 = DIMINISHED_SEVENTH;

export const AUGMENTED_SIXTH = 10 * S;
export const A6 = AUGMENTED_SIXTH;

export const DIMINISHED_EIGHTH = 11 * S;
export const DIMINISHED_OCTAVE = DIMINISHED_EIGHTH;
export const d8 = DIMINISHED_EIGHTH;

export const AUGMENTED_SEVENTH = O;
export const A7 = AUGMENTED_SEVENTH;

export default {
  DIMINISHED_SECOND,
  d2,
  AUGMENTED_UNISON,
  A1,
  DIMISHED_THIRD,
  d3,
  AUGMENTED_SECOND,
  A2,
  DIMINISHED_FOURTH,
  d4,
  AUGMENTED_THIRD,
  A3,
  DIMINISHED_FIFTH,
  d5,
  AUGMENTED_FOURTH,
  A4,
  DIMINISHED_SIXTH,
  d6,
  AUGMENTED_FIFTH,
  A5,
  DIMINISHED_SEVENTH,
  d7,
  AUGMENTED_SIXTH,
  A6,
  DIMINISHED_OCTAVE,
  DIMINISHED_EIGHTH,
  d8,
  AUGMENTED_SEVENTH,
  A7
};

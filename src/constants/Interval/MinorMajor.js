// https://en.wikipedia.org/wiki/Interval_(music)#Interval_number_and_quality

import { R, S, T, O } from './Short';

export const PERFECT_UNISON = R;
export const P1 = PERFECT_UNISON;

export const MINOR_SECOND = S;
export const m2 = MINOR_SECOND;

export const MAJOR_SECOND = T;
export const M2 = MAJOR_SECOND;

export const MINOR_THIRD = 3 * S;
export const m3 = MINOR_THIRD;

export const MAJOR_THIRD = 4 * S;
export const M3 = MAJOR_THIRD;

export const PERFECT_FOURTH = 5 * S;
export const P4 = PERFECT_FOURTH;

export const PERFECT_FIFTH = 7 * S;
export const P5 = PERFECT_FIFTH;

export const MINOR_SIXTH = 8 * S;
export const m6 = MINOR_SIXTH;

export const MAJOR_SIXTH = 9 * S;
export const M6 = MAJOR_SIXTH;

export const MINOR_SEVENTH = 10 * S;
export const m7 = MINOR_SEVENTH;

export const MAJOR_SEVENTH = 11 * S;
export const M7 = MAJOR_SEVENTH;

export const PERFECT_OCTAVE = O;
export const P8 = PERFECT_OCTAVE;

export const MINOR = [m2, m3, m6, m7];
export const MAJOR = [M2, M3, M6, M7];
export const PERFECT = [P4, P5, P8, P1];

export default {
  PERFECT_UNISON,
  P1,
  MINOR_SECOND,
  m2,
  MAJOR_SECOND,
  M2,
  MINOR_THIRD,
  m3,
  MAJOR_THIRD,
  M3,
  PERFECT_FOURTH,
  P4,
  PERFECT_FIFTH,
  P5,
  MINOR_SIXTH,
  m6,
  MAJOR_SIXTH,
  M6,
  MINOR_SEVENTH,
  m7,
  MAJOR_SEVENTH,
  M7,
  PERFECT_OCTAVE,
  P8
};

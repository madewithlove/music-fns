// https://en.wikipedia.org/wiki/Interval_(music)#Interval_number_and_quality
import Names from './Names';
import Short from './Short';

import MinorMajor from './MinorMajor';
import AugmentedDiminished from './AugmentedDiminished';

enum Interval {
  // Names
  ROOT = Names.ROOT,
  SEMITONE = Names.SEMITONE,
  TONE = Names.TONE,
  TRITONE = Names.TRITONE,
  OCTAVE = Names.OCTAVE,
  // Short
  R = Short.R,
  S = Short.S,
  T = Short.T,
  TT = Short.TT,
  O = Short.O,
  // MinorMajor
  PERFECT_UNISON = MinorMajor.PERFECT_UNISON,
  P1 = MinorMajor.P1,
  MINOR_SECOND = MinorMajor.MINOR_SECOND,
  m2 = MinorMajor.m2,
  MAJOR_SECOND = MinorMajor.MAJOR_SECOND,
  M2 = MinorMajor.M2,
  MINOR_THIRD = MinorMajor.MINOR_THIRD,
  m3 = MinorMajor.m3,
  MAJOR_THIRD = MinorMajor.MAJOR_THIRD,
  M3 = MinorMajor.M3,
  PERFECT_FOURTH = MinorMajor.PERFECT_FOURTH,
  P4 = MinorMajor.P4,
  PERFECT_FIFTH = MinorMajor.PERFECT_FIFTH,
  P5 = MinorMajor.P5,
  MINOR_SIXTH = MinorMajor.MINOR_SIXTH,
  m6 = MinorMajor.m6,
  MAJOR_SIXTH = MinorMajor.MAJOR_SIXTH,
  M6 = MinorMajor.M6,
  MINOR_SEVENTH = MinorMajor.MINOR_SEVENTH,
  m7 = MinorMajor.m7,
  MAJOR_SEVENTH = MinorMajor.MAJOR_SEVENTH,
  M7 = MinorMajor.M7,
  PERFECT_OCTAVE = MinorMajor.PERFECT_OCTAVE,
  P8 = MinorMajor.P8,
  // Augmented / Diminished
  DIMINISHED_SECOND = AugmentedDiminished.DIMINISHED_SECOND,
  d2 = AugmentedDiminished.d2,
  AUGMENTED_UNISON = AugmentedDiminished.AUGMENTED_UNISON,
  A1 = AugmentedDiminished.A1,
  DIMINISHED_THIRD = AugmentedDiminished.DIMINISHED_THIRD,
  d3 = AugmentedDiminished.d3,
  AUGMENTED_SECOND = AugmentedDiminished.AUGMENTED_SECOND,
  A2 = AugmentedDiminished.A2,
  DIMINISHED_FOURTH = AugmentedDiminished.DIMINISHED_FOURTH,
  d4 = AugmentedDiminished.d4,
  AUGMENTED_THIRD = AugmentedDiminished.AUGMENTED_THIRD,
  A3 = AugmentedDiminished.A3,
  DIMINISHED_FIFTH = AugmentedDiminished.DIMINISHED_FIFTH,
  d5 = AugmentedDiminished.d5,
  AUGMENTED_FOURTH = AugmentedDiminished.AUGMENTED_FOURTH,
  A4 = AugmentedDiminished.A4,
  DIMINISHED_SIXTH = AugmentedDiminished.DIMINISHED_SIXTH,
  d6 = AugmentedDiminished.d6,
  AUGMENTED_FIFTH = AugmentedDiminished.AUGMENTED_FIFTH,
  A5 = AugmentedDiminished.A5,
  DIMINISHED_SEVENTH = AugmentedDiminished.DIMINISHED_SEVENTH,
  d7 = AugmentedDiminished.d7,
  AUGMENTED_SIXTH = AugmentedDiminished.AUGMENTED_SIXTH,
  A6 = AugmentedDiminished.A6,
  DIMINISHED_EIGHTH = AugmentedDiminished.DIMINISHED_EIGHTH,
  DIMINISHED_OCTAVE = AugmentedDiminished.DIMINISHED_OCTAVE,
  d8 = AugmentedDiminished.d8,
  AUGMENTED_SEVENTH = AugmentedDiminished.AUGMENTED_SEVENTH,
  A7 = AugmentedDiminished.A7,
}

export default Interval;

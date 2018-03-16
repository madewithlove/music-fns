// @flow

// https://en.wikipedia.org/wiki/Triad_(music)

import { MAJOR, MINOR, DIMINISHED, AUGMENTED } from '../constants/Chord';

const isTriad = (pitches: Array<number>) => {
  if (pitches.length !== 3) return false;
  const triads = [MAJOR, MINOR, DIMINISHED, AUGMENTED];
  return triads.some(t => t.join(',') === pitches.join(','));
};

export default isTriad;

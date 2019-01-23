// https://en.wikipedia.org/wiki/Pentatonic_scale

import I from '../Interval';

export const MAJOR_PENTATONIC = [I.T, I.T, I.T + I.S, I.T, I.T + I.S] as Array<I>;

// https://en.wikipedia.org/wiki/Minor_scale#Harmonic_minor_scale

import I from '../Interval';

export const HARMONIC_MINOR = [I.T, I.S, I.T, I.T, I.S, I.T + I.S, I.S] as Array<I>;

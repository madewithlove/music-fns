// https://en.wikipedia.org/wiki/Chromatic_scale

import I from '../Interval';

export const CHROMATIC = Array.from({ length: I.O }, () => I.S) as Array<I>;

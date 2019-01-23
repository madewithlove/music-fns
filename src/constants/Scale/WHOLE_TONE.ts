// https://en.wikipedia.org/wiki/Whole_tone_scale

import I from '../Interval';

export const WHOLE_TONE = Array.from({ length: 6 }, () => I.T) as Array<I>;

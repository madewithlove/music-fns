// https://en.wikipedia.org/wiki/Chromatic_scale

import INTERVAL from '../interval/LONG';

export default Array.from({ length: INTERVAL.OCTAVE }, () => INTERVAL.SEMITONE);

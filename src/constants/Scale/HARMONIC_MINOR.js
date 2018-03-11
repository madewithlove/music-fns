// https://en.wikipedia.org/wiki/Minor_scale

import NATURAL_MINOR from './NATURAL_MINOR';

import { A2 } from '../Interval/AugmentedDiminished';
import { S } from '../Interval/Short';

const HARMONIC_MINOR = [...NATURAL_MINOR];
HARMONIC_MINOR[5] = A2;
HARMONIC_MINOR[6] = S;

export default HARMONIC_MINOR;

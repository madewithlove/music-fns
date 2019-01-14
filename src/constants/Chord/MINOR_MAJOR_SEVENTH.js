// https://en.wikipedia.org/wiki/Minor_major_seventh_chord

import MINOR from './MINOR';
import { MAJOR_SEVENTH } from '../Interval/MinorMajor';

const names = ['mM7', 'mΔ7', 'MINOR_MAJOR_SEVENTH'];
const intervals = [...MINOR.intervals, MAJOR_SEVENTH];

export default { names, intervals };

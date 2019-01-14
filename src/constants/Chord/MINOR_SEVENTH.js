// https://en.wikipedia.org/wiki/Minor_seventh_chord

import MINOR from './MINOR';
import { MINOR_SEVENTH } from '../Interval/MinorMajor';

const names = ['m7', 'MINOR_SEVENTH'];
const intervals = [...MINOR.intervals, MINOR_SEVENTH];

export default { names, intervals };

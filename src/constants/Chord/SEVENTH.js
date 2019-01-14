// https://en.wikipedia.org/wiki/Dominant_seventh_chord

import MAJOR from './MAJOR';
import { MINOR_SEVENTH } from '../Interval/MinorMajor';

const names = ['7', 'SEVENTH'];
const intervals = [...MAJOR.intervals, MINOR_SEVENTH];

export default { names, intervals };

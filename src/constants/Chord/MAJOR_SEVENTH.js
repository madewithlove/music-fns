// https://en.wikipedia.org/wiki/Major_seventh_chord

import MAJOR from './MAJOR';
import { MAJOR_SEVENTH } from '../Interval/MinorMajor';

const names = ['maj7', 'MAJOR_SEVENTH'];
const intervals = [...MAJOR.intervals, MAJOR_SEVENTH];

export default { names, intervals };

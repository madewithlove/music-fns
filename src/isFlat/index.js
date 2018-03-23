// @flow

import noteToObject from '../noteToObject';
import { FLAT } from '../constants/Accidental';

const isFlat = (scientificNote: ScientificNote) =>
  noteToObject(scientificNote).accidental === FLAT;

export default isFlat;

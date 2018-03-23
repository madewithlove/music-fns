// @flow

import noteToObject from '../noteToObject';
import { SHARP } from '../constants/Accidental';

const isSharp = (scientificNote: ScientificNote) =>
  noteToObject(scientificNote).accidental === SHARP;

export default isSharp;

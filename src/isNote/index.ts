import SCIENTIFIC_NOTE from '../constants/Regex/SCIENTIFIC_NOTE';
import { ScientificNote } from '../types/ScientificNote';

const isNote = (scientificNote: ScientificNote) =>
  SCIENTIFIC_NOTE.test(scientificNote);

export default isNote;

// @flow

import getOctave from '../getOctave';
import getChromaticCPosition from '../getChromaticCPosition';

const isSameNote = (
  scientificNote: ScientificNote,
  scientificNote2: ScientificNote
) => {
  if (getOctave(scientificNote) !== getOctave(scientificNote2)) return false;
  return (
    getChromaticCPosition(scientificNote) ===
    getChromaticCPosition(scientificNote2)
  );
};

export default isSameNote;

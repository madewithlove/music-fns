import getNoteOnDegree from '../getNoteOnDegree';
import isDiatonic from '../isDiatonic';
import { direction } from '../types/direction';
import { Scale } from '../types/Scale';
import { ScientificNote } from '../types/ScientificNote';

type options = {
  direction?: direction
};

const getLeadingTone = (
  diatonicScale: Scale,
  { direction = 1 }: options = {}
): ScientificNote => {
  if (!isDiatonic(diatonicScale, { direction })) {
    throw new Error(
      `${JSON.stringify(diatonicScale)} is not a diatonic scale.`
    );
  }
  return getNoteOnDegree(diatonicScale, 7, { direction });
};

export default getLeadingTone;
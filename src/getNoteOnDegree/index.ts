import normalize from '../normalize';
import { direction } from '../types/direction';
import { Scale } from '../types/Scale';
import { ScientificNote } from '../types/ScientificNote';

type options = {
  direction?: direction
};

const getNoteOnDegree = (
  scale: Scale,
  degree: number,
  { direction = 1 }: options = {}
): ScientificNote => {
  const normalizedScale = normalize(scale, { direction });

  if (degree < 1 || degree > normalizedScale.length) {
    throw new Error(`Degree must be between 1 - ${normalizedScale.length}.`);
  }

  return normalizedScale[degree - 1];
};

export default getNoteOnDegree;

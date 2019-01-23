import transpose from '../transpose';
import { OCTAVE } from '../constants/Interval/Names';

import isScale from '../isScale';
import isDescending from '../isDescending';
import isAscending from '../isAscending';
import getNote from '../getNote';
import hasOctave from '../hasOctave';
import { direction } from '../types/direction';
import { Scale } from '../types/Scale';

type options = {
  direction?: direction
};

const calculateInterval = (scale: Scale, direction = 1) => {
  if (isDescending(scale)) return -OCTAVE;
  if (isAscending(scale)) return OCTAVE;
  return direction === 1 ? OCTAVE : -OCTAVE;
};

const normalize = (scale: Scale, { direction = 1 }: options = {}): Scale => {
  if (!isScale(scale, { direction })) {
    throw new Error(`${JSON.stringify(scale)} is not a valid scale`);
  }

  const start = scale[0];
  const end = scale[scale.length - 1];

  const normalizedScale =
    getNote(start) !== getNote(end)
      ? [...scale, transpose(scale[0], calculateInterval(scale, direction))]
      : scale;

  if (
    isDescending(scale) ||
    (scale.every(n => !hasOctave(n)) && direction === -1)
  )
    normalizedScale.reverse();

  return normalizedScale;
};

export default normalize;

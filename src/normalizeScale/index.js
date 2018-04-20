// @flow

import transpose from '../transpose';
import { OCTAVE } from '../constants/Interval/Names';

import isValidScale from '../isValidScale';

type options = {
  direction: direction
};

const normalizeScale = (
  scale: Scale,
  intervalAmount: number,
  { direction = 1 }: options = {}
): Scale => {
  if (!isValidScale(scale, { direction }))
    throw new Error(`${JSON.stringify(scale)} is not a valid scale`);

  const normalizedScale =
    scale.length === intervalAmount
      ? [...scale, transpose(scale[0], direction === 1 ? OCTAVE : -OCTAVE)]
      : scale;

  if (direction === -1) normalizedScale.reverse();
  return normalizedScale;
};

export default normalizeScale;

// @flow

// https://en.wikipedia.org/wiki/Heptatonic_scale

import isValidScale from '../isValidScale';
import normalizeScale from '../normalizeScale';
import getNote from '../getNote';

type options = {
  direction?: direction
};

const isScaleWithIntervalAmount = (
  scale: Scale,
  intervalAmount: number,
  { direction = 1 }: options = {}
) => {
  if (![-1, 1].includes(direction)) {
    throw new Error('Direction should be 1 (up) or -1 (down)');
  }

  if (![intervalAmount, intervalAmount + 1].includes(scale.length)) {
    return false;
  }

  let normalizedScale = [];

  try {
    normalizedScale = normalizeScale(scale, intervalAmount, {
      direction
    });
  } catch (e) {
    return false;
  }

  const start = normalizedScale[0];
  const end = normalizedScale[normalizedScale.length - 1];

  if (getNote(start) !== getNote(end)) {
    return false;
  }

  return isValidScale(normalizedScale);
};

export default isScaleWithIntervalAmount;

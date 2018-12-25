// @flow

// https://en.wikipedia.org/wiki/Anhemitonic_scale

import { SEMITONE } from '../constants/Interval/Names';

import isHemitonic from '../isHemitonic';
import getIntervals from '../getIntervals';
import normalize from '../normalize';

type options = {
  direction?: direction
};

const isCohemitonic = (scale: Scale, { direction = 1 }: options = {}) => {
  if (!isHemitonic(scale, { direction })) return false;

  const normalizedScale = normalize(scale, { direction });
  const intervals = getIntervals(normalizedScale);

  const groups = intervals.reduce((acc, interval, i) => {
    if (interval === SEMITONE) {
      if (acc.length === 0) return [[interval]];
      if (intervals[i - 1] !== SEMITONE) return [...acc, [interval]];

      acc[acc.length - 1].push(interval);
      return acc;
    }
    return acc;
  }, []);

  return (
    groups.filter(group => group.length >= 2).length >= 2 ||
    groups.filter(group => group.length > 2).length >= 1
  );
};

export default isCohemitonic;

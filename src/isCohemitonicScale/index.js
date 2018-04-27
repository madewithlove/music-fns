// @flow

// https://en.wikipedia.org/wiki/Anhemitonic_scale

import { SEMITONE } from '../constants/Interval/Names';

import isHemitonicScale from '../isHemitonicScale';
import getIntervals from '../getIntervals';
import normalizeScale from '../normalizeScale';

type options = {
  direction?: direction
};

const isCohemitonicScale = (scale: Scale, { direction = 1 }: options = {}) => {
  if (!isHemitonicScale(scale, { direction })) return false;

  const normalizedScale = normalizeScale(scale, { direction });
  const intervals = getIntervals(normalizedScale);

  return (
    intervals
      .reduce((acc, interval, i) => {
        if (interval === SEMITONE) {
          if (acc.length === 0) return [[interval]];
          if (intervals[i - 1] !== SEMITONE) return [...acc, [interval]];

          acc[acc.length - 1].push(interval);
          return acc;
        }
        return acc;
      }, [])
      .filter(group => group.length >= 2).length >= 2
  );
};

export default isCohemitonicScale;

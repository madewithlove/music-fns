// @flow

// https://en.wikipedia.org/wiki/Anhemitonic_scale

import { S } from '../constants/Interval/Short';

const isHemitonicScale = (scale: Scale) =>
  scale.filter(i => i === S).length > 0;

export default isHemitonicScale;

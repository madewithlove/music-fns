// @flow

// https://en.wikipedia.org/wiki/Anhemitonic_scale

import { S } from '../constants/Interval/Short';

const isHeptatonicScale = (scale: Array<number>) =>
  scale.filter(i => i === S).length > 0;

export default isHeptatonicScale;

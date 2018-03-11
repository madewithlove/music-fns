// https://en.wikipedia.org/wiki/Interval_(music)#Interval_number_and_quality

import Names from './Names';
import Short from './Short';

import MinorMajor from './MinorMajor';
import AugmentedDiminished from './AugmentedDiminished';

export default {
  ...Short,
  ...Names,
  ...MinorMajor,
  ...AugmentedDiminished
};

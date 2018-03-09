// https://en.wikipedia.org/wiki/Interval_(music)#Interval_number_and_quality

import LONG from './LONG';

import SHORT from './SHORT';

import MINOR_MAJOR from './MINOR_MAJOR';
import MINOR_MAJOR_SHORT from './MINOR_MAJOR_SHORT';

import AUGMENTED_DIMINISHED from './AUGMENTED_DIMINISHED';
import AUGMENTED_DIMINISHED_SHORT from './AUGMENTED_DIMINISHED_SHORT';

export default {
  ...LONG,
  ...SHORT,

  ...MINOR_MAJOR,
  ...MINOR_MAJOR_SHORT,

  ...AUGMENTED_DIMINISHED,
  ...AUGMENTED_DIMINISHED_SHORT
};

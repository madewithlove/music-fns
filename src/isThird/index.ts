import Interval from '../constants/Interval';

const isThird = (interval: Interval) =>
  interval === Interval.DIMINISHED_THIRD ||
  interval === Interval.MINOR_THIRD ||
  interval === Interval.MAJOR_THIRD ||
  interval === Interval.AUGMENTED_THIRD;

export default isThird;

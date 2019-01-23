import Interval from '../constants/Interval';

const isFifth = (interval: Interval) =>
  interval === Interval.PERFECT_FIFTH ||
  interval === Interval.AUGMENTED_FIFTH ||
  interval === Interval.DIMINISHED_FIFTH;

export default isFifth;

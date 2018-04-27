// @flow

import transpose from '../transpose';
import isIntervalArray from '../isIntervalArray';

type options = {
  includeRootEnd: boolean
};

const createScale = (
  root: ScientificNote,
  scale: Intervals,
  { includeRootEnd = false }: options = {}
): ScientificNotes => {
  if (!isIntervalArray(scale)) {
    throw new Error(
      `Provide a valid collection of scale intervals ex: [1, 2, 1, 2, 1]`
    );
  }

  const notes = scale.reduce(
    (acc, interval) => [...acc, transpose(acc[acc.length - 1], interval, root)],
    [root]
  );

  return includeRootEnd ? notes : notes.slice(0, -1);
};

export default createScale;

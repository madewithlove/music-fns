// @flow

import transpose from '../transpose';

type options = {
  includeRootEnd: Boolean
};

const createScale = (
  root: ScientificNote,
  scale: Scale,
  { includeRootEnd = false }: options = {}
): ScientificNotes => {
  const arr = [root];
  scale.forEach(interval =>
    arr.push(transpose(arr[arr.length - 1], interval, root))
  );
  return includeRootEnd ? arr : arr.slice(0, -1);
};

export default createScale;

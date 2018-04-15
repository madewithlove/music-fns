// @flow

import transpose from '../transpose';

type options = {
  includeRootEnd: boolean
};

const createScale = (
  root: ScientificNote,
  scale: Scale,
  { includeRootEnd = false }: options = {}
): ScientificNotes => {
  if (
    !Array.isArray(scale) ||
    scale.length === 0 ||
    scale.some(i => typeof i !== 'number')
  ) {
    throw new Error(
      `Provide a valid collection of scale intervals ex: [1, 2, 1, 2, 1]`
    );
  }

  const arr = [root];
  scale.forEach(interval =>
    arr.push(transpose(arr[arr.length - 1], interval, root))
  );
  return includeRootEnd ? arr : arr.slice(0, -1);
};

export default createScale;

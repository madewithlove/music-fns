// @flow

import hasOctave from '../hasOctave';

const isValidScale = (notes: Scale) => {
  try {
    const isValid =
      notes.filter(hasOctave).length === notes.length ||
      notes.filter(n => !hasOctave(n)).length === notes.length;
    return isValid;
  } catch (e) {
    return false;
  }
};

export default isValidScale;

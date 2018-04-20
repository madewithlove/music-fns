// @flow

// should transfer flat or sharp style preference (sharp / flat - symbol / letter)
// if reference has no accidental it should mirror it's input style

import transferAccidentalStyle from '../transferAccidentalStyle';
import transferAccidental from '../transferAccidental';
import isValidNote from '../isValidNote';

const transferStyle = (
  reference: ScientificNote,
  note: ScientificNote
): ScientificNote => {
  if (!isValidNote(reference)) {
    throw new Error(`"${reference}" is not a valid note.`);
  }

  if (!isValidNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  return transferAccidental(
    reference,
    transferAccidentalStyle(reference, note)
  );
};

export default transferStyle;

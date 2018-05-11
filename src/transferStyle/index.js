// @flow

// should transfer flat or sharp style preference (sharp / flat - symbol / letter)
// if reference has no accidental it should mirror it's input style

import transferAccidentalStyle from '../transferAccidentalStyle';
import transferAccidental from '../transferAccidental';
import isScientificNote from '../isScientificNote';

const transferStyle = (
  reference: ScientificNote,
  note: ScientificNote
): ScientificNote => {
  if (!isScientificNote(reference)) {
    throw new Error(`"${reference}" is not a valid note.`);
  }

  if (!isScientificNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  return transferAccidental(
    reference,
    transferAccidentalStyle(reference, note)
  );
};

export default transferStyle;

// should transfer flat or sharp style preference (sharp / flat - symbol / letter)
// if reference has no accidental it should mirror it's input style

import transferAccidentalStyle from '../transferAccidentalStyle';
import transferAccidental from '../transferAccidental';
import isNote from '../isNote';
import { ScientificNote } from '../types/ScientificNote';

const transferStyle = (
  note: ScientificNote,
  referenceNote: ScientificNote
): ScientificNote => {
  if (!isNote(referenceNote)) {
    throw new Error(`"${referenceNote}" is not a valid reference note.`);
  }

  if (!isNote(note)) {
    throw new Error(`"${note}" is not a valid note.`);
  }

  return transferAccidental(
    transferAccidentalStyle(note, referenceNote),
    referenceNote
  );
};

export default transferStyle;

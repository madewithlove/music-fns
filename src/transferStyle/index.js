// @flow

// should transfer flat or sharp style preference (sharp / flat - symbol / letter)
// if reference has no accidental it should mirror it's input style

import transferAccidentalStyle from '../transferAccidentalStyle';
import transferAccidental from '../transferAccidental';

const transferStyle = (
  reference: ScientificNote,
  scientificNote: ScientificNote
): ScientificNote =>
  transferAccidental(
    reference,
    transferAccidentalStyle(reference, scientificNote)
  );

export default transferStyle;

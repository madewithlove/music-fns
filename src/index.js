import Chord from './constants/Chord';
import Interval from './constants/Interval';
import Mode from './constants/Mode';
import Scale from './constants/Scale';
import NOTES from './constants/NOTES';

import accidentalToLetter from './accidentalToLetter';
import accidentalToSymbol from './accidentalToSymbol';
import areSameNotes from './areSameNotes';
import createChord from './createChord';
import createPattern from './createPattern';
import createScale from './createScale';
import flatToSharp from './flatToSharp';
import getAccidental from './getAccidental';
import getChromaticCPosition from './getChromaticCPosition';
import getDominant from './getDominant';
import getIntervals from './getIntervals';
import getLeadingTone from './getLeadingTone';
import getMediant from './getMediant';
import getNote from './getNote';
import getOctave from './getOctave';
import getRoot from './getRoot';
import getScaleDegree from './getScaleDegree';
import getSubdominant from './getSubdominant';
import getSubmediant from './getSubmediant';
import getSupertonic from './getSupertonic';
import getTonic from './getTonic';
import hasAccidental from './hasAccidental';
import hasAccidentalLetter from './hasAccidentalLetter';
import hasAccidentalSymbol from './hasAccidentalSymbol';
import hasOctave from './hasOctave';
import haveSameOctave from './haveSameOctave';
import isAnhemitonicScale from './isAnhemitonicScale';
import isAscendingScale from './isAscendingScale';
import isCohemitonicScale from './isCohemitonicScale';
import isDescendingScale from './isDescendingScale';
import isDiatonicScale from './isDiatonicScale';
import isFlat from './isFlat';
import isHemitonicScale from './isHemitonicScale';
import isHeptatonicScale from './isHeptatonicScale';
import isHexatonicScale from './isHexatonicScale';
import isIntervalArray from './isIntervalArray';
import isMode from './isMode';
import isNatural from './isNatural';
import isOctatonicScale from './isOctatonicScale';
import isOctave from './isOctave';
import isPentatonicScale from './isPentatonicScale';
import isScale from './isScale';
import isScaleWithIntervalAmount from './isScaleWithIntervalAmount';
import isScientificNote from './isScientificNote';
import isScientificNoteArray from './isScientificNoteArray';
import isSemitone from './isSemitone';
import isSharp from './isSharp';
import isTone from './isTone';
import isTriad from './isTriad';
import normalizeScale from './normalizeScale';
import noteToFrequency from './noteToFrequency';
import noteToMidi from './noteToMidi';
import noteToObject from './noteToObject';
import objectToNote from './objectToNote';
import sharpToFlat from './sharpToFlat';
import transferAccidental from './transferAccidental';
import transferStyle from './transferStyle';
import transpose from './transpose';

export default {
  Chord,
  Interval,
  Mode,
  Scale,
  NOTES,

  accidentalToLetter,
  accidentalToSymbol,
  areSameNotes,
  createChord,
  createPattern,
  createScale,
  flatToSharp,
  getAccidental,
  getChromaticCPosition,
  getDominant,
  getIntervals,
  getLeadingTone,
  getMediant,
  getNote,
  getOctave,
  getRoot,
  getScaleDegree,
  getSubdominant,
  getSubmediant,
  getSupertonic,
  getTonic,
  hasAccidental,
  hasAccidentalLetter,
  hasAccidentalSymbol,
  hasOctave,
  haveSameOctave,
  isAnhemitonicScale,
  isAscendingScale,
  isCohemitonicScale,
  isDescendingScale,
  isDiatonicScale,
  isFlat,
  isHemitonicScale,
  isHeptatonicScale,
  isHexatonicScale,
  isIntervalArray,
  isMode,
  isNatural,
  isOctatonicScale,
  isOctave,
  isPentatonicScale,
  isScale,
  isScaleWithIntervalAmount,
  isScientificNote,
  isScientificNoteArray,
  isSemitone,
  isSharp,
  isTone,
  isTriad,
  normalizeScale,
  noteToFrequency,
  noteToMidi,
  noteToObject,
  objectToNote,
  sharpToFlat,
  transferAccidental,
  transferStyle,
  transpose
};

import Chord from './constants/Chord';
import Interval from './constants/Interval';
import Mode from './constants/Mode';
import Scale from './constants/Scale';
import NOTES from './constants/NOTES';

import accidentalToLetter from './accidentalToLetter';
import accidentalToSymbol from './accidentalToSymbol';
import areEqual from './areEqual';
import createChord from './createChord';
import createMelody from './createMelody';
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
import getNoteOnDegree from './getNoteOnDegree';
import getSubdominant from './getSubdominant';
import getSubmediant from './getSubmediant';
import getSupertonic from './getSupertonic';
import getTonic from './getTonic';
import hasAccidental from './hasAccidental';
import hasAccidentalLetter from './hasAccidentalLetter';
import hasAccidentalSymbol from './hasAccidentalSymbol';
import hasOctave from './hasOctave';
import haveSameOctave from './haveSameOctave';
import isAnhemitonic from './isAnhemitonic';
import isAscending from './isAscending';
import isCohemitonic from './isCohemitonic';
import isDescending from './isDescending';
import isDiatonic from './isDiatonic';
import isFlat from './isFlat';
import isHemitonic from './isHemitonic';
import isHeptatonic from './isHeptatonic';
import isHexatonic from './isHexatonic';
import areIntervals from './areIntervals';
import isMode from './isMode';
import isNatural from './isNatural';
import isOctatonic from './isOctatonic';
import isOctave from './isOctave';
import isPentatonic from './isPentatonic';
import isScale from './isScale';
import hasIntervalAmount from './hasIntervalAmount';
import isNote from './isNote';
import areNotes from './areNotes';
import isSemitone from './isSemitone';
import isSharp from './isSharp';
import isTone from './isTone';
import isTriad from './isTriad';
import normalize from './normalize';
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
  areEqual,
  createChord,
  createMelody,
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
  getNoteOnDegree,
  getSubdominant,
  getSubmediant,
  getSupertonic,
  getTonic,
  hasAccidental,
  hasAccidentalLetter,
  hasAccidentalSymbol,
  hasOctave,
  haveSameOctave,
  isAnhemitonic,
  isAscending,
  isCohemitonic,
  isDescending,
  isDiatonic,
  isFlat,
  isHemitonic,
  isHeptatonic,
  isHexatonic,
  areIntervals,
  isMode,
  isNatural,
  isOctatonic,
  isOctave,
  isPentatonic,
  isScale,
  hasIntervalAmount,
  isNote,
  areNotes,
  isSemitone,
  isSharp,
  isTone,
  isTriad,
  normalize,
  noteToFrequency,
  noteToMidi,
  noteToObject,
  objectToNote,
  sharpToFlat,
  transferAccidental,
  transferStyle,
  transpose
};

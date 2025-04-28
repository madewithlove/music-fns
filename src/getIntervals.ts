import { getOctave, Interval, Note, toObject } from ".";
import { getChromaticCPosition } from "./getChromaticCPosition";

// an octave is 12 semitones
const OCTAVE = 12;

function calculateIntervalBetween2Notes(
  startNote: Note,
  endNote: Note,
): Interval {
  const startNoteOctave = getOctave(startNote);
  const endNoteObject = getOctave(endNote);

  // Validate octave consistency
  if ((startNoteOctave === null) !== (endNoteObject.octave === null)) {
    throw new Error(
      "Both notes must either include or exclude octave information.",
    );
  }

  // Calculate the semitone difference
  let interval = chromatic2 - chromatic1;

  // If octave information is provided, account for it
  if (startNoteOctave.octave !== null && noteObj2.octave !== null) {
    interval += (noteObj2.octave - startNoteOctave.octave) * 12;
  }

  return Math.abs(interval);
}

/**
 * Get the intervals between a series of notes
 *
 * @param notes - The notes to get the intervals between
 * @returns An array of intervals (in semitones) between the notes
 * @throws {Error} If the notes are invalid or the array is not uniform (with or without octaves)
 *
 * @example
 * ```ts
 * getIntervals(["C", "D", "E"]); // [2, 2]
 * getIntervals(["C", "C#"]); // [1]
 * getIntervals(["C3", "C4", "B5", "C5"]); // [12, 11, 1]
 * ```
 */
export function getIntervals(notes: Note[]) {
  if (notes.length < 2) {
    throw new Error(
      "You can only calculate intervals for a uniform array (minimum size 2) of notes with or without octave",
    );
  }

  return notes.reduce<Interval[]>((acc, currentNote, i) => {
    const nextNote = notes[i + 1];
    if (!nextNote) return acc;
    return [...acc, calculateIntervalBetween2Notes(currentNote, nextNote)];
  }, []);
}

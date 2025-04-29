import { getOctave } from "../note/getOctave";
import { getChromaticCPosition } from "./getChromaticCPosition";
import type { Intervals, Note, Interval } from "../";

// an octave is 12 semitones
const OCTAVE = 12;

function calculateIntervalBetween2Notes(
  startNote: Note,
  endNote: Note,
): Interval {
  const startNoteOctave = getOctave(startNote);
  const endNoteOctave = getOctave(endNote);

  // Validate octave consistency
  if ((startNoteOctave === undefined) !== (endNoteOctave === undefined)) {
    throw new Error(
      "Both notes must either include or exclude octave information.",
    );
  }

  const chromaticInterval =
    getChromaticCPosition(endNote) - getChromaticCPosition(startNote);

  // Handle notes without octaves or in the same octave
  if (!startNoteOctave || !endNoteOctave || startNoteOctave === endNoteOctave) {
    return chromaticInterval + (chromaticInterval < 0 ? OCTAVE : 0);
  }

  const octaveDifference = endNoteOctave - startNoteOctave;
  const totalInterval = chromaticInterval + octaveDifference * OCTAVE;

  // For adjacent octaves, normalize to the smallest possible interval
  if (Math.abs(octaveDifference) === 1 && Math.abs(totalInterval) > OCTAVE) {
    return totalInterval + (totalInterval > 0 ? -OCTAVE : OCTAVE);
  }

  return totalInterval;
}

/**
 * Get the intervals between a series of notes
 *
 * @param notes - The notes to get the intervals between
 * @param options - The options for the intervals
 * @param options.fromRoot - Whether to calculate the intervals from the first note of the provided array (usefull for chord intervals)
 * @returns An array of intervals (in semitones) between the notes
 * @throws {Error} If the notes are invalid or the array is not uniform (with or without octaves)
 *
 * @example
 * ```ts
 * getIntervals(["C", "D", "E"]); // [2, 2]
 * getIntervals(["C", "C#"]); // [1]
 * getIntervals(["C3", "C4", "B5", "C5"]); // [12, 11, 1]
 * getIntervals(["C", "D", "E"], { fromRoot: true }); // [2, 4]
 * ```
 */
export function getIntervals(
  notes: Note[],
  { fromRoot = false }: { fromRoot?: boolean } = {},
): Intervals {
  if (notes.length < 2) {
    throw new Error("At least 2 notes are required to calculate intervals.");
  }

  return notes.reduce<Interval[]>((acc, note, i) => {
    const nextNote = notes[i + 1];
    if (!nextNote) return acc;
    const currentNote = fromRoot ? notes[0] : note;
    return [...acc, calculateIntervalBetween2Notes(currentNote, nextNote)];
  }, []);
}

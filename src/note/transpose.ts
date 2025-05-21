import type { Note, Interval } from "../";
import { getOctave } from "../note/getOctave";
import { toNote } from "../note/toNote";
import { toObject } from "./toObject";
import {
  ChromaticCScale,
  getChromaticCPosition,
} from "../interval/getChromaticCPosition";

const Octave = 12;

function calculateNewPosition(position: number, interval: number): number {
  const rawPosition = (position + interval) % Octave;
  if (rawPosition < 0) {
    return rawPosition + Octave;
  }
  return rawPosition;
}

function calculateOctaveChange(position: number, interval: number): number {
  const totalSteps = position + interval;
  return Math.floor(totalSteps / Octave);
}

/**
 * Transposes a note by a given interval.
 *
 * @param note - The note to transpose (e.g., "C4", "F#", "Bb3")
 * @param interval - The interval to transpose by (in semitones)
 * @returns The transposed note
 *
 * @example
 * transpose("C4", 2) // "D4"
 * transpose("C", 2) // "D"
 * transpose("F#3", 4) // "A3"
 * transpose("Bb4", -2) // "G4"
 */
export function transpose(note: Note, interval: Interval): Note {
  const currentOctave = getOctave(note);
  const currentPosition = getChromaticCPosition(note);

  const [sharpOrNatural, flat] =
    ChromaticCScale[calculateNewPosition(currentPosition, interval)];

  const transposedNoteWithoutOctave =
    interval >= 0 ? sharpOrNatural : flat || sharpOrNatural;

  if (currentOctave === undefined) {
    return transposedNoteWithoutOctave as Note;
  }

  const octave =
    currentOctave + calculateOctaveChange(currentPosition, interval);

  return toNote({
    ...toObject(transposedNoteWithoutOctave),
    octave,
  });
}

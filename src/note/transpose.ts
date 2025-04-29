import { type Note, type Interval, toNote } from "../";
import { toObject } from "./toObject";
import {
  ChromaticCScale,
  getChromaticCPosition,
} from "../interval/getChromaticCPosition";

const Octave = 12;

function calculateNewPosition(position: number, interval: number): number {
  const rawPosition = (position + interval) % Octave;
  return rawPosition < 0 ? rawPosition + Octave : rawPosition;
}

function calculateOctaveChange(position: number, interval: number): number {
  const rawChange = (position + interval) / Octave;
  return position + interval < 0 ? Math.ceil(rawChange) : Math.floor(rawChange);
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
  const noteObj = toObject(note);
  const currentPosition = getChromaticCPosition(note);

  const newPosition = calculateNewPosition(currentPosition, interval);
  const octaveChange = calculateOctaveChange(currentPosition, interval);
  const newNoteVariants = ChromaticCScale[newPosition];

  const newNoteWithoutOctave =
    interval >= 0
      ? newNoteVariants[0] // Use sharp notation when transposing up
      : newNoteVariants[1] || newNoteVariants[0]; // Use flat notation when transposing down, fallback to sharp if flat not available

  if (noteObj.octave === undefined) {
    return newNoteWithoutOctave as Note;
  }

  const newOctave = noteObj.octave + octaveChange;

  return toNote({
    ...toObject(newNoteWithoutOctave),
    octave: newOctave,
  });
}

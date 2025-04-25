import { Accidental, NoteObject, Octave, Root } from "./index";
import { isNote } from "./isNote";

/**
 * Converts a note string (e.g., "C4", "F#5", "Bb4") into a NoteObject.
 *
 * @param note - A string representing a musical note in the format [A-G][#b]?[0-9]+
 * @returns A NoteObject containing the root note, octave, and accidental (if any)
 * @throws {Error} If the note string is invalid or contains impossible combinations
 *
 * @example
 * toObject("C4") // { root: "C", octave: 4, accidental: undefined }
 * toObject("F#5") // { root: "F", octave: 5, accidental: "#" }
 * toObject("Bb4") // { root: "B", octave: 4, accidental: "b" }
 */

export function toObject(note: string): NoteObject {
  if (!isNote(note)) {
    throw new Error("Invalid note");
  }

  const match = note.match(/^(?!B[#]|E[#]|C[b]|F[b])[A-G][#b]?\d+$/);
  
  if (!match) {
    throw new Error("Invalid note");
  }

  const root = match[1] as Root;
  const octave = parseInt(match[2]) as Octave;
  const accidental = match[3] as Accidental;

  return { root, octave, accidental };
}

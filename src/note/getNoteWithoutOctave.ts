import type { Note, NoteWithoutOctave } from "../";
import { toObject } from "./toObject";

/**
 * Returns the note without the octave.
 *
 * @param note - The note to get the note without the octave.
 * @returns The note without the octave.
 * @throws {Error} If the note is invalid.
 *
 * @example
 * getNoteWithoutOctave("C4") // "C"
 * getNoteWithoutOctave("A#5") // "A#"
 * getNoteWithoutOctave("Fb3") // "Fb"
 */
export function getNoteWithoutOctave(note: Note): NoteWithoutOctave {
  const noteObject = toObject(note);
  const { root, accidental = "" } = noteObject;
  return `${root}${accidental}` as NoteWithoutOctave;
}

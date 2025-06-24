import type { Note, NoteObject } from "../";
import { throwIfInvalidNoteObject } from "./throwIfInvalidNoteObject";

/**
 * Converts a NoteObject into a note.
 *
 * @param noteObject - The NoteObject to convert.
 * @returns The note.
 * @throws {Error} If the note object is invalid.
 *
 * @example
 * toNote({ root: "C", octave: 4 }) // "C4"
 * toNote({ root: "A", accidental: "#", octave: 5 }) // "A#5"
 * toNote({ root: "F", accidental: "b", octave: 3 }) // "Fb3"
 */
export function toNote(noteObject: NoteObject): Note {
  const validNoteObject = throwIfInvalidNoteObject(noteObject);
  const { root, accidental = "", octave = "" } = validNoteObject;
  return `${root}${accidental}${octave}` as Note;
}

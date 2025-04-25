import { NoteObject } from "src";
import { isNoteObject } from "./isNoteObject";

/**
 * Throws an error if the note object is invalid.
 * @param noteObject - The note object to check.
 * @throws {Error} If the note object is invalid.
 * @returns The note object.
 *
 * @example
 * throwIfInvalidNoteObject({ root: "C", octave: 4 }) // returns { root: "C", octave: 4 }
 * throwIfInvalidNoteObject({ root: "I", accidental: "b" }) // throws an error
 */
export function throwIfInvalidNoteObject(noteObject: NoteObject) {
  if (!isNoteObject(noteObject)) {
    throw new Error("Invalid note object");
  }
  return noteObject;
}

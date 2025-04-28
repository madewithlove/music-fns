import { NoteObject } from "../";
import { isAccidental } from "./isAccidental";
import { isOctave } from "./isOctave";
import { isRoot } from "./isRoot";

/**
 * Checks if a given value is a valid note object.
 *
 * @param noteObject - The value to check.
 * @returns true if the value is a valid note object, false otherwise.
 *
 * @example
 * isNoteObject({ root: "C", octave: 4 }) // returns true
 * isNoteObject({ root: "D" }) // returns true
 * isNoteObject({ root: "C", octave: 4, accidental: "b" }) // returns true
 * isNoteObject({ root: "I", octave: 4, accidental: "b" }) // returns false
 */
export function isNoteObject(noteObject: unknown): noteObject is NoteObject {
  if (typeof noteObject !== "object" || noteObject === null) {
    return false;
  }

  if (!("root" in noteObject)) {
    return false;
  }

  const { root, octave, accidental } = noteObject as NoteObject;

  if (!isRoot(root)) {
    return false;
  }

  if (octave && !isOctave(octave)) {
    return false;
  }

  if (accidental && !isAccidental(accidental)) {
    return false;
  }

  return true;
}

import type { Accidental, NoteObject, Octave, Root } from "../";

function isRoot(root: unknown): root is Root {
  return typeof root === "string" && root.length === 1 && !!root.match(/[A-G]/);
}

function isOctave(octave: unknown): octave is Octave {
  return typeof octave === "number";
}

function isAccidental(accidental: unknown): accidental is Accidental {
  return (
    typeof accidental === "string" &&
    accidental.length === 1 &&
    ["b", "#"].includes(accidental)
  );
}

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

  if (accidental !== undefined) {
    if (!isAccidental(accidental)) {
      return false;
    }

    // B and E can't have a sharp accidental
    if (["B", "E"].includes(root) && accidental === "#") {
      return false;
    }

    // C and F can't have a flat accidental
    if (["C", "F"].includes(root) && accidental === "b") {
      return false;
    }
  }

  if (octave !== undefined && !isOctave(octave)) {
    return false;
  }

  return true;
}

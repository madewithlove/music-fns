import { describe, it, expect } from "vitest";
import { isNoteObject } from "./isNoteObject";
import {
  notesWithOctaveWithoutAccidental,
  notesWithOctaveAndWithAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
  invalidNoteObjects,
} from "./testData";
import { throwIfInvalidNoteObject } from "./throwIfInvalidNoteObject";

const validNotes = [
  ...notesWithOctaveWithoutAccidental,
  ...notesWithOctaveAndWithAccidental,
  ...notesWithoutOctaveAndWithoutAccidental,
  ...notesWithoutOctaveWithAccidental,
];

describe("throwIfInvalidNoteObject", () => {
  it.each(validNotes)(
    "should validate valid note",
    ({ accidental, octave, root }) => {
      expect(() =>
        throwIfInvalidNoteObject({ accidental, octave, root }),
      ).not.toThrow();
    },
  );

  // invalid notes
  it.each(invalidNoteObjects)(
    "should validate invalid note: %s",
    ({ accidental, octave, root }) => {
      expect(() =>
        throwIfInvalidNoteObject({ accidental, octave, root }),
      ).toThrow();
    },
  );
});

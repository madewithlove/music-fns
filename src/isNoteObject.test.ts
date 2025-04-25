import { describe, it, expect } from "vitest";
import { isNoteObject } from "./isNoteObject";
import {
  notesWithOctaveWithoutAccidental,
  notesWithOctaveAndWithAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
  invalidNoteObjects,
} from "./testData";

const validNotes = [
  ...notesWithOctaveWithoutAccidental,
  ...notesWithOctaveAndWithAccidental,
  ...notesWithoutOctaveAndWithoutAccidental,
  ...notesWithoutOctaveWithAccidental,
];

describe("isNoteObject", () => {
  it.each(validNotes)(
    "should validate valid note",
    ({ accidental, octave, root }) => {
      expect(isNoteObject({ accidental, octave, root })).toBe(true);
    },
  );

  // invalid notes
  it.each(invalidNoteObjects)(
    "should validate invalid note: %s",
    ({ accidental, octave, root }) => {
      expect(isNoteObject({ accidental, octave, root })).toBe(false);
    },
  );
});

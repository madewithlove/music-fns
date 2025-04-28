import { describe, it, expect } from "vitest";
import { toNote } from "./toNote";
import {
  notesWithOctaveWithoutAccidental,
  notesWithOctaveAndWithAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
  invalidNoteObjects,
} from "../testData";

const validNotes = [
  ...notesWithOctaveWithoutAccidental,
  ...notesWithOctaveAndWithAccidental,
  ...notesWithoutOctaveAndWithoutAccidental,
  ...notesWithoutOctaveWithAccidental,
];

describe("toNote", () => {
  it.each(validNotes)(
    "should convert note object to note string",
    ({ accidental, octave, root, note }) => {
      expect(toNote({ accidental, octave, root })).toBe(note);
    },
  );

  // invalid notes
  it.each(invalidNoteObjects)(
    "should throw an error for invalid note object: %s",
    ({ accidental, octave, root }) => {
      expect(() => toNote({ accidental, octave, root })).toThrow();
    },
  );
});

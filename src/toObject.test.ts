import { describe, it, expect } from "vitest";
import { toObject } from "./toObject";

import {
  invalidNotes,
  notesWithOctaveAndWithAccidental,
  notesWithOctaveWithoutAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
} from "./testData";

describe("toObject", () => {
  it.each(invalidNotes)(
    "should throw an error for invalid note: %s",
    (note) => {
      // @ts-expect-error checking if note is valid
      expect(() => toObject(note)).toThrow();
    },
  );

  it.each(notesWithOctaveWithoutAccidental)(
    "should correctly parse valid note WITH octave and WITHOUT accidental",
    (note) => {
      expect(toObject(note.note)).toEqual({
        root: note.root,
        octave: note.octave,
        accidental: undefined,
      });
    },
  );

  it.each(notesWithOctaveAndWithAccidental)(
    "should correctly parse valid note WITH octave and WITH accidental",
    (note) => {
      expect(toObject(note.note)).toEqual({
        root: note.root,
        octave: note.octave,
        accidental: note.accidental,
      });
    },
  );

  it.each(notesWithoutOctaveAndWithoutAccidental)(
    "should correctly parse valid note WITHOUT octave and WITHOUT accidental",
    (note) => {
      expect(toObject(note.note)).toEqual({
        root: note.root,
        octave: undefined,
        accidental: undefined,
      });
    },
  );

  it.each(notesWithoutOctaveWithAccidental)(
    "should correctly parse valid note WITHOUT octave and WITH accidental",
    (note) => {
      expect(toObject(note.note)).toEqual({
        root: note.root,
        octave: undefined,
        accidental: note.accidental,
      });
    },
  );
});

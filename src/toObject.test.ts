import { describe, it, expect } from "vitest";
import { toObject } from "./toObject";

import {
  notesWithOctaveAndWithAccidental,
  notesWithOctaveWithoutAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
} from "./testData";

describe("toObject", () => {
  it.each(notesWithOctaveWithoutAccidental)(
    "should correctly parse valid note WITH octave and WITHOUT accidental",
    ({ note, root, octave }) => {
      expect(toObject(note)).toEqual({
        root,
        octave,
        accidental: undefined,
      });
    },
  );

  it.each(notesWithOctaveAndWithAccidental)(
    "should correctly parse valid note WITH octave and WITH accidental",
    ({ note, root, octave, accidental }) => {
      expect(toObject(note)).toEqual({
        root,
        octave,
        accidental,
      });
    },
  );

  it.each(notesWithoutOctaveAndWithoutAccidental)(
    "should correctly parse valid note WITHOUT octave and WITHOUT accidental",
    ({ note, root }) => {
      expect(toObject(note)).toEqual({
        root,
        octave: undefined,
        accidental: undefined,
      });
    },
  );

  it.each(notesWithoutOctaveWithAccidental)(
    "should correctly parse valid note WITHOUT octave and WITH accidental",
    ({ note, root, accidental }) => {
      expect(toObject(note)).toEqual({
        root,
        octave: undefined,
        accidental,
      });
    },
  );
});

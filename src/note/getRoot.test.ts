import { describe, it, expect } from "vitest";
import { getRoot } from "./getRoot";

import {
  notesWithOctaveAndWithAccidental,
  notesWithOctaveWithoutAccidental,
  notesWithoutOctaveAndWithoutAccidental,
  notesWithoutOctaveWithAccidental,
} from "../testData";

const notesWithRoot = [
  ...notesWithOctaveAndWithAccidental,
  ...notesWithOctaveWithoutAccidental,
  ...notesWithoutOctaveAndWithoutAccidental,
  ...notesWithoutOctaveWithAccidental,
];

describe("getRoot", () => {
  it.each(notesWithRoot)(
    "should return the root for a note",
    ({ note, root }) => {
      expect(getRoot(note)).toBe(root);
    },
  );
});

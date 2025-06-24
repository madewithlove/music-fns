import { createChord } from "./createChord";
import { describe, it, expect } from "vitest";

describe("createChords", () => {
  it("should return the correct notes of a chord, defined by a set of intervals", () => {
    expect(createChord("C", [3, 5])).toEqual(["C", "D#", "F"]);
  });
});

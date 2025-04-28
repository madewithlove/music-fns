import { describe, it, expect } from "vitest";
import { isOctave } from "./isOctave";
import { junkData, octaves } from "../testData";

describe("isOctave", () => {
  it.each(octaves)("should validate valid octave: %s", (octave) => {
    expect(isOctave(octave)).toBe(true);
  });

  it.each(junkData)("should validate invalid octave: %s", (octave) => {
    expect(isOctave(octave)).toBe(false);
  });
});

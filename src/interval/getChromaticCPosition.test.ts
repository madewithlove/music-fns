import { getChromaticCPosition } from "./getChromaticCPosition";
import { describe, it, expect } from "vitest";

describe("getChromaticCPosition", () => {
  it("should return the chromatic C position of a note", () => {
    expect(getChromaticCPosition("C")).toBe(0);
  });

  it("should return the chromatic C position of a note with octave", () => {
    expect(getChromaticCPosition("C4")).toBe(0);
  });

  it("should return the chromatic C position of of a note with a flat", () => {
    expect(getChromaticCPosition("Ab")).toBe(8);
  });

  it("should return the chromatic C position of of a note with a sharp", () => {
    expect(getChromaticCPosition("A#")).toBe(10);
  });

  it("should return the same chromatic C position for a sharp and flat that are equivalent", () => {
    expect(getChromaticCPosition("A#")).toBe(getChromaticCPosition("Bb"));
  });

  it("should throw an error if the note is invalid", () => {
    // @ts-expect-error - Invalid note
    expect(() => getChromaticCPosition("C#4#")).toThrow();
  });
});

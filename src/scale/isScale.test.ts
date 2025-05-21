import { isScale } from "./isScale";
import { describe, it, expect } from "vitest";

describe("isScale", () => {
  it("should return true if the passed notes are a scale", () => {
    expect(isScale(["C", "C#", "D"])).toEqual(true);
  });

  it("should return false if the passed notes are a scale", () => {
    expect(isScale(["C1", "C1"])).toEqual(false);
  });

  it("should return false if the passed notes are a scale", () => {
    expect(isScale(["E1", "D1"])).toEqual(false);
  });
});

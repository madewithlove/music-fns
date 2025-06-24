import { createScale } from "./createScale";
import { describe, it, expect } from "vitest";

describe("createScale", () => {
  it("should return the correct notes of a scale, defined by a set of intervals", () => {
    expect(createScale("C", [1, 1])).toEqual(["C", "C#", "D"]);
  });
});

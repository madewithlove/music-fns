import { isScaleOfType } from "./isScaleOfType";
import { describe, it, expect } from "vitest";
import { ChromaticCScale } from "../interval/getChromaticCPosition";

describe("isScaleOfType", () => {
  it("should return true if the passed scale is a chromatic scale", () => {
    expect(
      isScaleOfType(
        ChromaticCScale.map((value) => value[0]),
        "chromatic",
      ),
    ).toEqual(true);
  });
  it("should return false if the passed scale isn't a chromatic scale", () => {
    expect(isScaleOfType(["C", "D", "E"], "chromatic")).toEqual(false);
  });
});

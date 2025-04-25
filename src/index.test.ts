import { expect, test } from "vitest";
import { hello } from "./index.js";

test("test hello", () => {
  expect(hello("world")).toBe("hello world");
});

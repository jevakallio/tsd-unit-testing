import { expectType, expectError } from "tsd";
import { sum } from "../ts";
import { multiply } from "../js";

const u = "s";

describe("Types", () => {
  // these are running against a ts implementation file
  describe("ts", () => {
    it("should add two numbers together at runtime", () => {
      expect(sum(1, 2)).toEqual(3);
    });

    it("should validate types ts files", () => {
      expectType<number>(sum(1, 2));
    });

    it("should fail the test when using expectError", () => {
      // @ts-expect-error
      expectError<string>(sum(1, 2));
    });
  });

  // these are running against a js implementation file with a matching .d.ts
  describe("js", () => {
    it("should multiply numbers together at runtime", () => {
      expect(multiply(3, 4)).toEqual(12);
    });

    it("should validate types from d.ts files", () => {
      expectType<number>(multiply(3, 4));
    });

    it("should fail the test when using expectError", () => {
      // @ts-expect-error
      expectError<string>(multiply(3, 4));
    });
  });
});

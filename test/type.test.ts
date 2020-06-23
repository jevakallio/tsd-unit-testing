import { expectType, expectError } from "tsd";
import { sum } from "../ts";
import { multiply } from "../js";

describe("Types", () => {
  // these are running against a ts implementation file
  describe("ts", () => {
    // This is just a regular unit test, nothing weird here
    it("should add two numbers together at runtime", () => {
      expect(sum(1, 2)).toEqual(3);
    });

    // This is a tsd type test
    it("should validate types from ts files", () => {
      expectType<number>(sum(1, 2));
    });

    // This is a type test that intentionally fails
    it("should fail the test when using expectError", () => {
      // I can't get the tests running without adding ts-expect-error
      // as the expectError catches the error compile time already.
      //
      // Not sure what it would mean to report type errors in a jest
      // reporter, since the tests should never run
      //
      // @ts-expect-error
      expectError<string>(sum(1, 2));
    });

    it("should be able to pass a type test and fail a runtime test", () => {
      expectType<number>(sum(1, 2));
      expect(sum(1, 2)).toEqual(4); //fails on purpose
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

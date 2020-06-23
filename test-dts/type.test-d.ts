// import { expectError, expectType } from "tsd";
import { expectType } from "tsd";

const u = "s";

describe("check type defined", () => {
  it("type check u", () => {
    expectType<string>(u);
  });
});

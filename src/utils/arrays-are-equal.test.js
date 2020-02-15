import arraysAreEqual from "./arrays-are-equal";

describe("arraysAreEqual", () => {
  describe("when array inputs have identical entries", () => {
    it("should return `true`", () => {
      expect(
        arraysAreEqual(
          ["21", "31", "54", "6", "3"],
          ["54", "6", "3", "21", "31"]
        )
      ).toEqual(true);

      expect(
        arraysAreEqual(
          ["21", "31", "54", "6", "3", "2", "test", "2", "6"],
          ["6", "54", "6", "3", "test", "21", "2", "2", "31"]
        )
      ).toEqual(true);
    });
  });

  describe("when array inputs have non-identical entries", () => {
    it("should return `true`", () => {
      expect(
        arraysAreEqual(
          ["21", "30", "54", "6", "3"],
          ["54", "6", "3", "21", "31"]
        )
      ).toEqual(false);

      expect(
        arraysAreEqual(
          ["21", "31", "54", "6", "3", "2", "test", "2", "6"],
          ["6", "54", "6", "3", "test-1", "21", "2", "2", "31"]
        )
      ).toEqual(false);
    });
  });
});

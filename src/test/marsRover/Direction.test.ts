import Direction from "../../main/marsRover/Direction";

describe("direction should ", () => {
  describe("turn right ", () => {
    it("from north to east", () => {
      const direction: Direction = new Direction("N");
      direction.right();

      const directionValue = direction.getValue();

      expect(directionValue).toBe("E");
    });

    it("from east to south", () => {
      const direction: Direction = new Direction("E");
      direction.right();

      const directionValue = direction.getValue();

      expect(directionValue).toBe("S");
    });

    it("from south to west", () => {
      const direction: Direction = new Direction("S");
      direction.right();

      const directionValue = direction.getValue();

      expect(directionValue).toBe("W");
    });

    it("from west to north", () => {
      const direction: Direction = new Direction("W");
      direction.right();

      const directionValue = direction.getValue();

      expect(directionValue).toBe("N");
    });
  });

  describe("turn left ", () => {
    it("from north to west", () => {
      const direction: Direction = new Direction("N");
      direction.left();

      const directionValue = direction.getValue();

      expect(directionValue).toBe("W");
    });

    it("from west to south", () => {
      const direction: Direction = new Direction("W");
      direction.left();

      const directionValue = direction.getValue();

      expect(directionValue).toBe("S");
    });

    it("from south to east", () => {
      const direction: Direction = new Direction("S");
      direction.left();

      const directionValue = direction.getValue();

      expect(directionValue).toBe("E");
    });

    it("from east to north", () => {
      const direction: Direction = new Direction("E");
      direction.left();

      const directionValue = direction.getValue();

      expect(directionValue).toBe("N");
    });
  });

  it("throw error when direction is not valid", () => {
    expect(() => new Direction("O")).toThrowError("Invalid direction");
  });
});

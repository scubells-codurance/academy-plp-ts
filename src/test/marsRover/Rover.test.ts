import Direction from "../../main/marsRover/Direction";
import Position from "../../main/marsRover/Position";
import Rover from "../../main/marsRover/Rover";

describe("rover should ", () => {
  describe("move", () => {
    it(" fordward when N", () => {
      const spyMoveForward: jest.SpyInstance = jest.spyOn(
        Position.prototype,
        "moveForward"
      );

      const position: Position = new Position(0, 0);
      const direction: Direction = new Direction("N");

      const rover: Rover = new Rover(position, direction);
      rover.move();

      expect(spyMoveForward).toBeCalledTimes(1);
    });

    it("Right when E", () => {
      const spyMoveRight: jest.SpyInstance = jest.spyOn(
        Position.prototype,
        "moveRight"
      );

      const position: Position = new Position(0, 0);
      const direction: Direction = new Direction("E");

      const rover: Rover = new Rover(position, direction);
      rover.move();

      expect(spyMoveRight).toBeCalledTimes(1);
    });

    it("Backward when S", () => {
      const spyMoveBackward: jest.SpyInstance = jest.spyOn(
        Position.prototype,
        "moveBackward"
      );

      const position: Position = new Position(0, 0);
      const direction: Direction = new Direction("S");

      const rover: Rover = new Rover(position, direction);
      rover.move();

      expect(spyMoveBackward).toBeCalledTimes(1);
    });

    it("Left when W", () => {
      const spyMoveLeft: jest.SpyInstance = jest.spyOn(
        Position.prototype,
        "moveLeft"
      );
      const position: Position = new Position(9, 9);
      const direction: Direction = new Direction("W");

      const rover: Rover = new Rover(position, direction);
      rover.move();

      expect(spyMoveLeft).toBeCalledTimes(1);
    });
  });

  it("turn right", () => {
    const spyRight: jest.SpyInstance = jest.spyOn(Direction.prototype, "right");

    const position: Position = new Position(0, 0);
    const direction: Direction = new Direction("N");

    const rover: Rover = new Rover(position, direction);
    rover.turnRight();

    expect(spyRight).toBeCalledTimes(1);
  });

  it("turn left", () => {
    const spyLeft: jest.SpyInstance = jest.spyOn(Direction.prototype, "left");

    const position: Position = new Position(0, 0);
    const direction: Direction = new Direction("N");

    const rover: Rover = new Rover(position, direction);
    rover.turnLeft();

    expect(spyLeft).toBeCalledTimes(1);
  });

  describe("getStatus", () => {
    it("should return 0:0:N for x = 0 y = 0 and North direction", () => {
      const position: Position = new Position(0, 0);
      const direction: Direction = new Direction("N");

      const rover: Rover = new Rover(position, direction);
      const result: string = rover.getStatus();

      expect(result).toBe("0:0:N");
    });

    it("should return 2:3:E for x = 2 y = 3 and East direction", () => {
      const position: Position = new Position(2, 3);
      const direction: Direction = new Direction("E");

      const rover: Rover = new Rover(position, direction);
      const result: string = rover.getStatus();

      expect(result).toBe("2:3:E");
    });
  });
});

import marsRover from "../../main/marsRover/MarsRover";
import Rover from "../../main/marsRover/Rover";

describe("Mars Rover should", () => {
  const spyMove = jest.spyOn(Rover.prototype, "move");
  const spyTurnRight = jest.spyOn(Rover.prototype, "turnRight");
  const spyTurnLeft = jest.spyOn(Rover.prototype, "turnLeft");

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("return 0:0:E for instructions R", () => {
    const expectedResult: string = "0:0:E";
    const instructions: string = "R";

    const result: string = marsRover(instructions);

    expect(spyMove).toBeCalledTimes(0);
    expect(spyTurnRight).toBeCalledTimes(1);
    expect(spyTurnLeft).toBeCalledTimes(0);
    expect(result).toBe(expectedResult);
  });

  it("return 2:3:N for instructions MMRMMLM", () => {
    const expectedResult: string = "2:3:N";
    const instructions: string = "MMRMMLM";

    const result: string = marsRover(instructions);

    expect(spyMove).toBeCalledTimes(5);
    expect(spyTurnRight).toBeCalledTimes(1);
    expect(spyTurnLeft).toBeCalledTimes(1);
    expect(result).toBe(expectedResult);
  });

  it("return 0:2:W for instructions MML", () => {
    const expectedResult: string = "0:2:W";
    const instructions: string = "MML";

    const result: string = marsRover(instructions);

    expect(spyMove).toBeCalledTimes(2);
    expect(spyTurnRight).toBeCalledTimes(0);
    expect(spyTurnLeft).toBeCalledTimes(1);
    expect(result).toBe(expectedResult);
  });

  it("return 0:0:N for instructions MMMMMMMMMM", () => {
    const expectedResult: string = "0:0:N";
    const instructions: string = "MMMMMMMMMM";

    const result: string = marsRover(instructions);

    expect(spyMove).toBeCalledTimes(10);
    expect(spyTurnRight).toBeCalledTimes(0);
    expect(spyTurnLeft).toBeCalledTimes(0);
    expect(result).toBe(expectedResult);
  });

  it("return 0:0:N for instructions RMMMMMMMMMM", () => {
    const expectedResult: string = "0:0:E";
    const instructions: string = "RMMMMMMMMMM";

    const result: string = marsRover(instructions);

    expect(spyMove).toBeCalledTimes(10);
    expect(spyTurnRight).toBeCalledTimes(1);
    expect(spyTurnLeft).toBeCalledTimes(0);
    expect(result).toBe(expectedResult);
  });
});

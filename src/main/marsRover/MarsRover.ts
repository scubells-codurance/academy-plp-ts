import Direction from "./Direction";
import Position from "./Position";
import Rover from "./Rover";

const marsRover = (instructions: string): string => {
  const position: Position = new Position(0, 0);
  const direcrtion: Direction = new Direction("N");

  const rover: Rover = new Rover(position, direcrtion);

  executeInstructions(instructions, rover);

  return rover.getStatus();
};

const executeInstructions = (instructions: string, rover: Rover) => {
  const posibleInstructions: { [key: string]: () => void } = {
    M: () => rover.move(),
    R: () => rover.turnRight(),
    L: () => rover.turnLeft(),
  };

  const instructionList: string[] = instructions.split("");

  instructionList.forEach((instruction) => {
    posibleInstructions[instruction]();
  });
};

export default marsRover;

import Direction from "./Direction";
import Position from "./Position";

class Rover {
  position: Position;
  direction: Direction;

  directionMovements: { [key: string]: () => void } = {
    N: () => this.position.moveForward(),
    S: () => this.position.moveBackward(),
    E: () => this.position.moveRight(),
    W: () => this.position.moveLeft(),
  };

  constructor(position: Position, direction: Direction) {
    this.position = position;
    this.direction = direction;
  }

  public move(): void {
    const directionValue = this.direction.getValue();
    this.directionMovements[directionValue]();
  }

  public turnRight(): void {
    this.direction.right();
  }

  public turnLeft(): void {
    this.direction.left();
  }

  public getStatus(): string {
    return `${this.position.x}:${this.position.y}:${this.direction.getValue()}`;
  }
}

export default Rover;

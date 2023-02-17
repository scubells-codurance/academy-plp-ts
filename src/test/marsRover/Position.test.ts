import Position from "../../main/marsRover/Position";

describe("Position should ", () => {
  it("move forward ", () => {
    const position: Position = new Position(0, 0);
    position.moveForward();

    const xPosition = position.x;
    const yPosition = position.y;

    expect(xPosition).toBe(0);
    expect(yPosition).toBe(1);
  });

  it("move forward when y is 9 ", () => {
    const position: Position = new Position(0, 9);
    position.moveForward();

    const xPosition = position.x;
    const yPosition = position.y;

    expect(xPosition).toBe(0);
    expect(yPosition).toBe(0);
  });

  it("move backward ", () => {
    const position: Position = new Position(0, 5);
    position.moveBackward();

    const xPosition = position.x;
    const yPosition = position.y;

    expect(xPosition).toBe(0);
    expect(yPosition).toBe(4);
  });

  it("move backward when y is 0 ", () => {
    const position: Position = new Position(0, 0);
    position.moveBackward();

    const xPosition = position.x;
    const yPosition = position.y;

    expect(xPosition).toBe(0);
    expect(yPosition).toBe(9);
  });

  it("move left ", () => {
    const position: Position = new Position(3, 0);
    position.moveLeft();

    const xPosition = position.x;
    const yPosition = position.y;

    expect(xPosition).toBe(2);
    expect(yPosition).toBe(0);
  });

  it("move left when x is 0 ", () => {
    const position: Position = new Position(0, 0);
    position.moveLeft();

    const xPosition = position.x;
    const yPosition = position.y;

    expect(xPosition).toBe(9);
    expect(yPosition).toBe(0);
  });

  it("move right ", () => {
    const position: Position = new Position(0, 0);
    position.moveRight();

    const xPosition = position.x;
    const yPosition = position.y;

    expect(xPosition).toBe(1);
    expect(yPosition).toBe(0);
  });

  it("move right when x is 9 ", () => {
    const position: Position = new Position(9, 0);
    position.moveRight();

    const xPosition = position.x;
    const yPosition = position.y;

    expect(xPosition).toBe(0);
    expect(yPosition).toBe(0);
  });
});

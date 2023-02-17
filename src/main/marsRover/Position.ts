class Position {
  x: number;
  y: number;

  maxPosition: number = 9;
  minPosition: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  moveForward() {
    const isYMaxPosition: boolean = this.y === this.maxPosition;
    if (isYMaxPosition) {
      this.y = this.minPosition;
      return;
    }

    this.y++;
  }

  moveBackward() {
    const isYMinPosition: boolean = this.y === this.minPosition;
    if (isYMinPosition) {
      this.y = this.maxPosition;
      return;
    }

    this.y--;
  }

  moveRight() {
    const isXMaxPosition: boolean = this.x === this.maxPosition;
    if (isXMaxPosition) {
      this.x = this.minPosition;
      return;
    }

    this.x++;
  }

  moveLeft() {
    const isXMinPosition: boolean = this.x === this.minPosition;
    if (isXMinPosition) {
      this.x = this.maxPosition;
      return;
    }

    this.x--;
  }
}

export default Position;

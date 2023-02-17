class Direction {
  posibleDirections: string[] = ["N", "E", "S", "W"];
  private index: number;

  maxIndex: number = this.posibleDirections.length - 1;
  minIndex: number = 0;

  constructor(value: string) {
    this.checkValidDirection(value);
    this.index = this.posibleDirections.indexOf(value);
  }

  public right(): void {
    const isMaxIndex: boolean = this.index === this.maxIndex;
    if (isMaxIndex) {
      this.index = this.minIndex;
      return;
    }

    this.index++;
  }

  public left(): void {
    const isMinIndex: boolean = this.index === this.minIndex;
    if (isMinIndex) {
      this.index = this.maxIndex;
      return;
    }

    this.index--;
  }

  public getValue(): string {
    return this.posibleDirections[this.index];
  }

  private checkValidDirection(value: string): void {
    const isValid: boolean = this.posibleDirections.includes(value);
    if (!isValid) {
      throw new Error("Invalid direction");
    }
  }
}

export default Direction;

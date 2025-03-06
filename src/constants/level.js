class Level {
  repetitive = void 0;
  points = [];
  moves = [];

  constructor(points, moves) {
    this.points = points;
    this.moves = moves;
  }

  addPoint(point) {
    this.points.push(point);
  }

  addMove(move) {
    this.moves.push(move);
  }

  isRepetitious() {
    if (this.repetitive !== void 0) {
      return this.repetitive;
    }

    const data = {};

    this.repetitive = this.moves.reduce((acc, move) => {
      const searchString = `${move.x}|${move.y}`;

      if (!acc && data[searchString]) {
        acc = true;
      }

      data[searchString] = true;

      return acc;
    }, false);

    return this.repetitive;
  }
}

export default Level;
class Level {
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
}

export default Level;
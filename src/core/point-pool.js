import Point from "../utilities/point";

class PointPool {
  static pool = [];

  static pointFor(x, y) {
    this.pool[x] = this.pool[x] || [];
    this.pool[x][y] = this.pool[x][y] || new Point(x, y);

    return this.pool[x][y];
  }
}

export default PointPool;
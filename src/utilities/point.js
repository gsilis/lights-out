// Points should be immutable
class Point {
  static createFor(x, y) {
    return new Point(x, y);
  }

  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  get x() { return this._x; }
  get y() { return this._y; }

  compare(point) {
    return point.x == this.x && point.y == this.y;
  }
}

export default Point;
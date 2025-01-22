import Settings from "../config";
import PointPool from "./point-pool";

class GeneratorGrid {
  _data = [];

  constructor() {
    for (let y = 0; y < Settings.HEIGHT; y++) {
      const row = [];

      for (let x = 0; x < Settings.WIDTH; x++) {
        row.push(false);
      }

      this._data.push(row);
    }
  }

  toggle = (point) => {
    [
      point,
      PointPool.pointFor(point.x, point.y - 1),
      PointPool.pointFor(point.x, point.y + 1),
      PointPool.pointFor(point.x - 1, point.y),
      PointPool.pointFor(point.x + 1, point.y),
    ].forEach(p => {
      const row = this._data[p.y];
      if (row === void 0) return;
      const column = row[p.x];
      if (column === void 0) return;
      this._data[p.y][p.x] = !this._data[p.y][p.x];
    });
  }

  points = () => {
    const points = [];

    this._data.forEach((row, y) => {
      row.forEach((column, x) => {
        if (column) {
          points.push(PointPool.pointFor(x, y));
        }
      });
    });

    return points;
  }
}

export default GeneratorGrid;
import BaseState from "./base-state";
import PointPool from "../point-pool";

class Play extends BaseState {
  onSelect(event) {
    const point = event.detail.point;

    [
      point,
      PointPool.pointFor(point.x, point.y - 1),
      PointPool.pointFor(point.x, point.y + 1),
      PointPool.pointFor(point.x - 1, point.y),
      PointPool.pointFor(point.x + 1, point.y)
    ].forEach(this.grid.toggle);
  }
}

export default Play;
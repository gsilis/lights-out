import PointPool from "../core/point-pool";
import Level from "./level";

const level2 = new Level([
  PointPool.pointFor(0, 2),
  PointPool.pointFor(2, 2),
  PointPool.pointFor(4, 2)
], [
  PointPool.pointFor(0, 3),
  PointPool.pointFor(2, 3),
  PointPool.pointFor(4, 3),
  PointPool.pointFor(0, 4),
  PointPool.pointFor(2, 4),
  PointPool.pointFor(4, 4)
]);

export default level2;
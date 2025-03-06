import PointPool from "../core/point-pool";
import Level from "./level";

const level  = new Level([
  PointPool.pointFor(0, 2),
  PointPool.pointFor(1, 2),
  PointPool.pointFor(2, 2),
  PointPool.pointFor(1, 3),
  PointPool.pointFor(0, 4),
  PointPool.pointFor(1, 4),
  PointPool.pointFor(3, 4),
  PointPool.pointFor(4, 4),
], [
  PointPool.pointFor(3, 4),
  PointPool.pointFor(2, 3),
  PointPool.pointFor(1, 3),
  PointPool.pointFor(0, 3),
]);

export default level;
import PointPool from "../core/point-pool";
import Level from "./level";

const level  = new Level([
  PointPool.pointFor(2, 0),
  PointPool.pointFor(3, 0),
  PointPool.pointFor(4, 0),
  PointPool.pointFor(0, 1),
  PointPool.pointFor(0, 2),
  PointPool.pointFor(1, 2),
  PointPool.pointFor(2, 2),
  PointPool.pointFor(3, 2),
  PointPool.pointFor(4, 2),
  PointPool.pointFor(0, 3),
  PointPool.pointFor(2, 4),
  PointPool.pointFor(3, 4),
  PointPool.pointFor(4, 4),
], [
  PointPool.pointFor(0, 2),
  PointPool.pointFor(3, 4),
  PointPool.pointFor(3, 0),
  PointPool.pointFor(3, 2),
]);

export default level;
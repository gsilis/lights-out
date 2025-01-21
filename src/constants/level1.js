import PointPool from "../core/point-pool";
import Level from "./level";

const level1 = new Level([
  PointPool.pointFor(2, 2),
  PointPool.pointFor(1, 2),
  PointPool.pointFor(3, 2),
  PointPool.pointFor(2, 1),
  PointPool.pointFor(2, 3)
], [
  PointPool.pointFor(2, 2)
]);

export default level1;
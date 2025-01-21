import PointPool from "../core/point-pool";

const x = [
  PointPool.pointFor(0, 0),
  PointPool.pointFor(1, 1),
  PointPool.pointFor(2, 2),
  PointPool.pointFor(3, 3),
  PointPool.pointFor(4, 4),
  PointPool.pointFor(4, 0),
  PointPool.pointFor(3, 1),
  PointPool.pointFor(1, 3),
  PointPool.pointFor(0, 4),
];

const sequence = [
  x, x,
  x, x,
  x, x
];

export default sequence;
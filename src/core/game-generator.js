import random from '../utilities/random';
import Settings from '../config';
import Level from '../constants/level';
import wrappedElementAt from '../utilities/array/wrap-index';
import PointPool from './point-pool';
import GeneratorGrid from './generator-grid';

class GameGenerator {
  generate(moves) {
    const level = new Level([], []);
    const grid = new GeneratorGrid();

    while (level.moves.length < moves) {
      const lastPoint = wrappedElementAt(level.moves, -1);
      const x = random(0, Settings.WIDTH - 1);
      const y = random(0, Settings.HEIGHT - 1);
      const point = PointPool.pointFor(x, y);

      if (lastPoint !== point) {
        level.addMove(point);
        grid.toggle(point);
      }
    }

    grid.points().forEach(p => level.addPoint(p));

    return level;
  }
}

export default GameGenerator;
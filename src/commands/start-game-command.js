import PointPool from "../core/point-pool";
import State from "../core/state";
import range from "../utilities/array/range";
import SequenceEmitter from "../utilities/sequence-emitter";

class StartGameCommand {
  constructor(setState, grid, stateFactory) {
    this.setState = setState;
    this.grid = grid;
    this.stateFactory = stateFactory;
  }

  execute() {
    this.setState(this.stateFactory.create(State.SPIRAL_ANIMATION));

    const spiral = new SequenceEmitter(100);
    spiral.addSteps(
      PointPool.pointFor(0, 0),
      PointPool.pointFor(1, 0),
      PointPool.pointFor(2, 0),
      PointPool.pointFor(3, 0),
      PointPool.pointFor(4, 0),
      PointPool.pointFor(4, 1),
      PointPool.pointFor(4, 2),
      PointPool.pointFor(4, 3),
      PointPool.pointFor(4, 4),
      PointPool.pointFor(3, 4),
      PointPool.pointFor(2, 4),
      PointPool.pointFor(1, 4),
      PointPool.pointFor(0, 4),
      PointPool.pointFor(0, 3),
      PointPool.pointFor(0, 2),
      PointPool.pointFor(0, 1),
      PointPool.pointFor(1, 1),
      PointPool.pointFor(2, 1),
      PointPool.pointFor(3, 1),
      PointPool.pointFor(3, 2),
      PointPool.pointFor(3, 3),
      PointPool.pointFor(2, 3),
      PointPool.pointFor(1, 3),
      PointPool.pointFor(1, 2),
      PointPool.pointFor(2, 2)
    )
      .tick((point, oldPoint) => {
        if (oldPoint) this.grid.toggle(oldPoint);
        this.grid.toggle(point);
      })
      .done(() => {
        this.grid.toggle(PointPool.pointFor(2, 2));
        this.setState(this.stateFactory.create(State.LEVEL_SELECT_ANIMATION));
      })
      .run();
  }
}

export default StartGameCommand;
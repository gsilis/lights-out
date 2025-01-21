import BaseAnimation from "./base-animation";
import SequenceEmitter from "../../utilities/sequence-emitter";
import Settings from "../../config";
import PointPool from "../point-pool";
import State from "../state";

class LevelSelectAnimation extends BaseAnimation {
  setup() {
    const level = this.session.level.getCurrentValue();
    const x = level % Settings.WIDTH;
    const y = Math.floor(level / Settings.HEIGHT);
    const point = PointPool.pointFor(x, y);

    this.sequence = SequenceEmitter.create(200)
      .addSteps(
        point, point,
        point, point,
        point, point,
        point, point
      )
      .tick((point) => {
        this.grid.toggle(point);
      })
      .done(this.complete)
      .run();
  }

  complete = () => {
    this.setState(this.stateFactory.create(State.PLAY));
  }

  onSelect = () => {
    this.complete();
  }

  teardown = () => {
    this.sequence.pause();
    this.grid.clear();
  }
}

export default LevelSelectAnimation;
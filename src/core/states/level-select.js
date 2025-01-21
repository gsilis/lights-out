import BaseState from "./base-state";
import State from "../state";
import Settings from "../../config";
import PointPool from "../point-pool";

class LevelSelect extends BaseState {
  onSelect(event) {
    const point = event.detail.point;
    const indexOfPoint = this.points.indexOf(point);

    if (indexOfPoint < 0) {
      this.setState(this.stateFactory.create(State.ERROR_ANIMATION));
      return;
    }

    this.session.maxLevel.update(indexOfPoint);
    this.setState(this.stateFactory.create(State.PLAY));
  }

  setup() {
    let level = this.session.level.getCurrentValue();
    this.points = [];

    while (level >= 0) {
      const x = level % Settings.WIDTH;
      const y = Math.floor(level / Settings.WIDTH);
      this.points.push(PointPool.pointFor(x, y));
      level--;
    }

    this.grid.clear();
    this.points.forEach(p => {
      this.grid.toggle(p);
    });
  }

  teardown() {
    this.grid.clear();
  }
}

export default LevelSelect;
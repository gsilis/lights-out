import BaseState from "./base-state";
import State from "../state";
import Settings from "../../config";
import PointPool from "../point-pool";

class LevelSelect extends BaseState {
  onSelect(event) {
    const point = event.detail.point;
    const indexOfPoint = this.points.indexOf(point);

    if (indexOfPoint < 0) {
      this.pushState(this.stateFactory.create(State.ERROR_ANIMATION));
      return;
    }

    this.session.level.update(indexOfPoint);
    this.setState(this.stateFactory.create(State.PLAY));
  }

  setup() {
    const level = this.session.maxLevel.getCurrentValue();
    let currentLevel = 0;
    this.points = [];

    while (currentLevel <= level) {
      const x = currentLevel % Settings.WIDTH;
      const y = Math.floor(currentLevel / Settings.WIDTH);
      this.points.push(PointPool.pointFor(x, y));
      currentLevel++;
    }

    this.grid.clear();
    this.points.forEach(p => {
      this.grid.toggle(p);
    });
  }

  teardown() {
    this.grid.clear();
  }

  resume() {
    this.grid.clear();
    this.grid.applyData(this.points);
  }

  onHint() {
    this.pushState(this.stateFactory.create(State.ERROR_ANIMATION));
  }

  onReset() {
    this.pushState(this.stateFactory.create(State.ERROR_ANIMATION));
  }
}

export default LevelSelect;
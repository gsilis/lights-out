import BaseState from "./base-state";
import PointPool from "../point-pool";
import LevelData from "../../constants/level-data";
import State from "../state";

class Play extends BaseState {
  setup() {
    const level = this.session.level.getCurrentValue();
    const levelData = LevelData[level];

    this.grid.applyData(levelData);
  }

  onSelect(event) {
    const point = event.detail.point;

    [
      point,
      PointPool.pointFor(point.x, point.y - 1),
      PointPool.pointFor(point.x, point.y + 1),
      PointPool.pointFor(point.x - 1, point.y),
      PointPool.pointFor(point.x + 1, point.y)
    ].forEach(this.grid.toggle);

    const remaining = this.grid.checked();

    if (remaining === 0) {
      this.grid.clear();
      this.session.level.update(this.session.level.getCurrentValue() + 1);
      this.setState(this.stateFactory.create(State.LEVEL_SELECT_ANIMATION));
    }
  }
}

export default Play;
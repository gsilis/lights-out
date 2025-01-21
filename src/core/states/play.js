import BaseState from "./base-state";
import PointPool from "../point-pool";
import LevelData from "../../constants/level-data";
import State from "../state";
import wrappedElementAt from "../../utilities/array/wrap-index";

class Play extends BaseState {
  rightMoves = [];
  wrongMoves = [];
  snapshot = [];

  setup() {
    const level = this.session.level.getCurrentValue();

    this.levelData = LevelData[level];
    this.grid.applyData(this.levelData.points);
  }

  onSelect(event) {
    const point = event.detail.point;
    const undidLastWrongMove = wrappedElementAt(this.wrongMoves, -1) === point;
    const isNextRightMove = this.levelData.moves[this.rightMoves.length] === point;

    if (undidLastWrongMove) {
      this.wrongMoves.pop();
    } else if (isNextRightMove) {
      this.rightMoves.push(point);
    } else {
      this.wrongMoves.push(point);
    }

    [
      point,
      PointPool.pointFor(point.x, point.y - 1),
      PointPool.pointFor(point.x, point.y + 1),
      PointPool.pointFor(point.x - 1, point.y),
      PointPool.pointFor(point.x + 1, point.y)
    ].forEach(this.grid.toggle);

    const remaining = this.grid.checkedCount();

    if (remaining === 0) {
      this.grid.clear();
      this.session.level.update(this.session.level.getCurrentValue() + 1);
      this.setState(this.stateFactory.create(State.LEVEL_SELECT_ANIMATION));
    }
  }

  onReset() {
    this.setState(this.stateFactory.create(State.PLAY));
  }

  onHint() {
    this.setState(this.stateFactory.create(
      State.HINT,
      this.grid.checkedPoints(),
      this.moves,
      this.rightMoves,
      this.wrongMoves
    ));
  }

  pause() {
    this.snapshot = this.grid.checkedPoints();
  }

  resume() {
    this.grid.applyData(this.snapshot);
  }
}

export default Play;
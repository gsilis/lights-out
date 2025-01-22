import BuilderButton from "../components/builder-button";
import PointPool from "./point-pool";

class CreatorFactory {
  constructor(stage) {
    this.stage = stage;
  }

  createNull() {
    return new BuilderButton(this.stage, PointPool.pointFor(-1, -1));
  }

  create(point) {
    return new BuilderButton(this.stage, point);
  }
}

export default CreatorFactory;
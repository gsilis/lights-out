import Button from "../components/button";
import PointPool from "./point-pool";

class ButtonFactory {
  constructor(stage) {
    this.stage = stage;
  }

  createNull() {
    return new Button(document.createElement('div'), PointPool.pointFor(-1, -1));
  }

  create(point) {
    return new Button(this.stage, point);
  }
}

export default ButtonFactory;
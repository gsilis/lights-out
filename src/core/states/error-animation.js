import BaseAnimation from "./base-animation";
import SequenceEmitter from "../../utilities/sequence-emitter";
import ErrorData from "../../constants/error-data";
import State from "../state";

class ErrorAnimation extends BaseAnimation {
  setup() {
    this.sequence = SequenceEmitter.create(200)
      .addSteps(...ErrorData)
      .tick((points) => {
        points.forEach(p => this.grid.toggle(p));
      })
      .done(() => {
        this.setState(this.stateFactory.create(State.LEVEL_SELECT));
      })
      .run();
  }

  teardown = () => {
    this.sequence.pause();
    this.grid.clear();
  }
}

export default ErrorAnimation;
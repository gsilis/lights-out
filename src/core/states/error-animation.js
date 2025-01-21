import BaseAnimation from "./base-animation";
import SequenceEmitter from "../../utilities/sequence-emitter";
import ErrorData from "../../constants/error-data";
import State from "../state";

class ErrorAnimation extends BaseAnimation {
  setup() {
    this.grid.clear();
    this.sequence = SequenceEmitter.create(200)
      .addSteps(...ErrorData)
      .tick((points) => {
        points.forEach(p => this.grid.toggle(p));
      })
      .done(() => {
        this.popState();
      })
      .run();
  }

  teardown = () => {
    this.sequence.pause();
    this.grid.clear();
  }
}

export default ErrorAnimation;
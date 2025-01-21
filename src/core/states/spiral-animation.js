import BaseAnimation from "./base-animation";
import SpiralData from "../../constants/spiral-data";
import SequenceEmitter from "../../utilities/sequence-emitter";
import wrappedElementAt from "../../utilities/array/wrap-index";
import State from "../state";

class SpiralAnimation extends BaseAnimation {
  setup() {
    const lastNode = wrappedElementAt(SpiralData, -1);

    this.sequence = SequenceEmitter.create(100)
      .addSteps(...SpiralData)
      .tick((point, oldPoint) => {
        if (oldPoint) this.grid.toggle(oldPoint);
        this.grid.toggle(point);
      })
      .done(() => {
        this.grid.toggle(lastNode);
        this.complete();
      })
      .run();
  }

  complete = () => {
    this.setState(this.stateFactory.create(State.LEVEL_SELECT_ANIMATION));
  }

  teardown = () => {
    this.grid.clear();
    this.sequence.pause();
  }

  onSelect = (_) => {
    this.complete();
  }
}

export default SpiralAnimation;
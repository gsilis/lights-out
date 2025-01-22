import wrappedElementAt from "../../utilities/array/wrap-index";
import SequenceEmitter from "../../utilities/sequence-emitter";
import State from "../state";
import BaseState from "./base-state";

class HintState extends BaseState {
  withOptions(snapshot, moves, rightMoves, wrongMoves) {
    this.snapshot = snapshot;
    this.rightMoves = rightMoves;
    this.wrongMoves = wrongMoves;
    this.moves = moves;
  }

  setup() {
    const wrongMove = wrappedElementAt(this.wrongMoves, -1);
    const rightMove = this.moves[this.rightMoves.length];
    const move = wrongMove || rightMove;

    if (!move) {
      this.setState(this.stateFactory.create(State.ERROR_ANIMATION));
      return;
    }

    this.grid.clear();
    this.grid.applyData(this.snapshot);
    this.sequence = SequenceEmitter.create(200)
      .addSteps(move, move, move, move, move, move)
      .tick((point) => {
        this.grid.toggle(point);
      })
      .done(() => {
        this.popState();
      })
      .run();
  }

  onSelect() {
    this.sequence.pause();
    this.popState();
  }

  teardown() {
    this.sequence.pause();
  }
}

export default HintState;
import BaseState from "./base-state";

class BaseAnimation extends BaseState {
  getSequence() {
    return this.sequence;
  }
  onSelect() {
    
  }
  teardown() {}
}

export default BaseAnimation;
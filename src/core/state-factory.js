import BaseState from "./states/base-state";
import State from "./state";

class StateFactory {
  constructor(setState, grid) {
    this.setState = setState;
    this.grid = grid;
  }

  create(stateFn) {
    const fn = (typeof stateFn === 'function' && stateFn) || BaseState;

    return new fn(this.setState, this.grid);
  }
}

export default StateFactory;
import BaseState from "./states/base-state";
import State from "./state";

class StateFactory {
  constructor(setState, grid, session) {
    this.setState = setState;
    this.grid = grid;
    this.session = session;
  }

  create(stateFn) {
    const fn = (typeof stateFn === 'function' && stateFn) || BaseState;

    return new fn(this.setState, this.grid, this.session, this);
  }
}

export default StateFactory;
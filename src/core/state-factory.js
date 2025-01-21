import BaseState from "./states/base-state";
import State from "./state";

class StateFactory {
  constructor(setState, pushState, popState, grid, session) {
    this.setState = setState;
    this.pushState = pushState;
    this.popState = popState;
    this.grid = grid;
    this.session = session;
  }

  create(stateFn, ...options) {
    const fn = (typeof stateFn === 'function' && stateFn) || BaseState;
    const instance = new fn(this.setState, this.pushState, this.popState, this.grid, this.session, this);

    instance.withOptions(...options);
    
    return instance;
  }
}

export default StateFactory;
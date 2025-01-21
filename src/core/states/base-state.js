class BaseState {
  constructor(setState, pushState, popState, grid, session, stateFactory) {
    this.setState = setState;
    this.pushState = pushState;
    this.popState = popState;
    this.grid = grid;
    this.session = session;
    this.stateFactory = stateFactory;
  }

  setup() {}
  onSelect(_) {}
  onHint() {}
  onReset() {}
  teardown() {}
  pause() {}
  resume() {}
  withOptions() {}
}

export default BaseState;
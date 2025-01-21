class BaseState {
  constructor(setState, grid, session, stateFactory) {
    this.setState = setState;
    this.grid = grid;
    this.session = session;
    this.stateFactory = stateFactory;
  }

  setup() {}
  onSelect(_) {}
  teardown() {}
}

export default BaseState;
class BaseState {
  constructor(setState, grid) {
    this.setState = setState;
    this.grid = grid;
  }

  setup() {}
  onSelect(_) {}
  teardown() {}
}

export default BaseState;
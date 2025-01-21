import Grid from "../components/grid";
import Settings from '../config';
import StateFactory from "./state-factory";
import State from "./state";
import Session from "./session";

class Game {
  constructor(domGrid, domSelect, domReset) {
    this.session = new Session();
    this.domGrid = domGrid;
    this.domSelect = domSelect;
    this.domReset = domReset;
    this.grid = new Grid(this.domGrid, Settings.WIDTH, Settings.HEIGHT);
    
    this.stateFactory = new StateFactory(this.setState, this.grid, this.session);
    this.grid.setup();
    this.grid.addEventListener('SELECT', this.onSelect);
    this.domSelect.addEventListener('click', this.onLevelSelect);
    this.domReset.addEventListener('click', this.onReset);

    this.setState(this.stateFactory.create(State.SPIRAL_ANIMATION));
  }

  onReset = () => {
    this.setState(this.stateFactory.create(State.PLAY));
  }

  onLevelSelect = () => {
    this.setState(this.stateFactory.create(State.LEVEL_SELECT));
  }

  setState = (newState) => {
    this.state && this.state.teardown();
    this.state = newState;
    this.state.setup();
  }

  onSelect = (...args) => this.state.onSelect.call(this.state, ...args)
}

export default Game;
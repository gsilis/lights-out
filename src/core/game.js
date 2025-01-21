import Grid from "../components/grid";
import Settings from '../config';
import StateFactory from "./state-factory";
import State from "./state";
import StartGameCommand from "../commands/start-game-command";

class Game {
  constructor(domGrid, domSelect, domReset) {
    this.domGrid = domGrid;
    this.domSelect = domSelect;
    this.domReset = domReset;
    this.grid = new Grid(this.domGrid, Settings.WIDTH, Settings.HEIGHT);
    
    this.stateFactory = new StateFactory(this.setState, this.grid);
    this.grid.setup();
    this.grid.addEventListener('SELECT', this.onSelect);

    (new StartGameCommand(this.setState, this.grid, this.stateFactory)).execute();
  }

  onReset = () => {}

  onLevelSelect = () => {}

  setState = (newState) => {
    this.state && this.state.teardown();
    this.state = newState;
    this.state.setup();
  }

  onSelect = (...args) => this.state.onSelect.call(this.state, ...args)
}

export default Game;
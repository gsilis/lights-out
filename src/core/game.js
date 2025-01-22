import Grid from "../components/grid";
import Settings from '../config';
import StateFactory from "./state-factory";
import State from "./state";
import Session from "./session";
import wrappedElementAt from "../utilities/array/wrap-index";
import ButtonFactory from "./button-factory";

class Game {
  constructor(domGrid, domSelect, domReset, domHint) {
    this.state = [];
    this.session = new Session();
    this.session.setup();
    this.domGrid = domGrid;
    this.domSelect = domSelect;
    this.domReset = domReset;
    this.domHint = domHint;
    this.buttonFactory = new ButtonFactory(this.domGrid);
    this.grid = new Grid(Settings.WIDTH, Settings.HEIGHT, this.buttonFactory);
    
    this.stateFactory = new StateFactory(this.setState, this.pushState, this.popState, this.grid, this.session);
    this.grid.setup();
    this.grid.addEventListener('SELECT', this.onSelect);
    this.domSelect.addEventListener('click', this.onLevelSelect);
    this.domReset.addEventListener('click', this.onReset);
    this.domHint.addEventListener('click', this.onHint);

    this.setState(this.stateFactory.create(State.SPIRAL_ANIMATION));
  }

  onLevelSelect = () => {
    this.setState(this.stateFactory.create(State.LEVEL_SELECT));
  }

  setState = (newState) => {
    const oldState = this.state.pop();

    if (oldState) {
      oldState.teardown();
    }

    newState.setup();
    this.state.push(newState);
  }

  pushState = (newState) => {
    const oldState = wrappedElementAt(this.state, -1);

    if (oldState) {
      oldState.pause.call(oldState);
    }

    newState.setup();
    this.state.push(newState);
  }

  popState = () => {
    const oldState = this.state.pop();
    const resumeState = wrappedElementAt(this.state, -1);

    if (oldState) {
      oldState.teardown.call(oldState);
    }

    if (resumeState) {
      resumeState.resume.call(resumeState);
    }
  }

  getLatestState = () => {
    return wrappedElementAt(this.state, -1);
  }

  onSelect = (...args) => {
    const state = this.getLatestState();

    return state.onSelect.call(state, ...args);
  }

  onHint = (...args) => {
    const state = this.getLatestState();

    return state.onHint.call(state, ...args);
  }

  onReset = (...args) => {
    const state = this.getLatestState();

    return state.onReset.call(state, ...args);
  }
}

export default Game;
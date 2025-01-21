import Grid from "../components/grid";
import Settings from '../config';

class Game {
  constructor(domGrid, domSelect, domReset) {
    this.domGrid = domGrid;
    this.domSelect = domSelect;
    this.domReset = domReset;
    this.grid = new Grid(this.domGrid, Settings.WIDTH, Settings.HEIGHT);

    this.grid.setup();
  }

  onReset = () => {}
  onSelect = () => {}
}

export default Game;
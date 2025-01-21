import Game from "./core/game";
import "./style.css";

function setup() {
  const reset = document.getElementById('#game-reset');
  const select = document.getElementById('#game-select');
  const grid = document.querySelector('#app .grid');

  const game = new Game(grid, select, reset);
}

document.addEventListener('DOMContentLoaded', function onLoad() {
  document.removeEventListener('DOMContentLoaded', onLoad);

  setup();
});

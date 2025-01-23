import Game from "./core/game";
import KonamiCodeListener from "./core/konami-code-listener";
import "./style.css";

function setup() {
  const reset = document.getElementById('game-reset');
  const select = document.getElementById('game-select');
  const hint = document.getElementById('game-hint');
  const grid = document.querySelector('#app .grid');

  const game = new Game(grid, select, reset, hint);
  const konamiCode = new KonamiCodeListener();
  const onObserve = () => {
    game.session.maxLevel.update(25);
    alert(`All levels unlocked!`);
    konamiCode.unobserve(onObserve);
  };

  konamiCode.observe(onObserve);
}

document.addEventListener('DOMContentLoaded', function onLoad() {
  document.removeEventListener('DOMContentLoaded', onLoad);

  setup();
});

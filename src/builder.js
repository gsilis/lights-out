import "./builder.css";
import BuilderGame from "./core/builder-game";

function setup() {
  const domMoves = document.getElementById('moves');
  const domGenerate = document.getElementById('generate');
  const puzzles = document.querySelector('div.puzzles');
  const output = document.getElementById('puzzle-output');
  const copyCode = document.getElementById('copy-code');
  const builder = new BuilderGame(puzzles, output);

  domGenerate.addEventListener('click', () => {
    const moves = parseInt(domMoves.value);
    builder.generate(moves);
  });

  copyCode.addEventListener('click', () => {
    builder.copy();
  });
}

document.addEventListener('DOMContentLoaded', function onLoad() {
  document.removeEventListener('DOMContentLoaded', onLoad);

  setup();
});
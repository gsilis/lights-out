import "./builder.css";

function setup() {
  const domMoves = document.getElementById('moves');
  const domGenerate = document.getElementById('generate');
  const puzzles = document.querySelector('div.puzzles');
  const output = document.getElementById('puzzle-output');
}

document.addEventListener('DOMContentLoaded', function onLoad() {
  document.removeEventListener('DOMContentLoaded', onLoad);

  setup();
});
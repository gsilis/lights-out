import GameGenerator from "./game-generator";
import "./builder-game-tile";

class BuilderGame {
  dom = null;
  games = [];
  _selected = -1;

  constructor(dom, output) {
    this.dom = dom;
    this.output = output;
    this.gameGenerator = new GameGenerator();
  }

  add = (tile) => {
    const firstNode = this.childAt(0);
    this.games.unshift(tile);
    this.dom.insertBefore(tile, firstNode);
    this.selected = 0;
  }

  remove = (index) => {
    const tile = this.childAt(index);

    if (!tile) return;

    this.games.splice(index, 1);
    this.dom.removeChild(tile);
  }

  generate = (moves) => {
    const level = this.gameGenerator.generate(moves);
    const tile = document.createElement('builder-game-tile');

    tile.setData(level);
    tile.addEventListener('click', this.onSelect);
    tile.addEventListener('remove', this.onRemove);

    this.add(tile);
  }

  childAt = (index) => {
    const tiles = Array.from(this.dom.querySelectorAll('builder-game-tile'));

    return tiles[index];
  }

  setDetail = (detail) => {
    const before = `import PointPool from "../core/point-pool";\nimport Level from "./level";\n\nconst level  = new Level([\n`;
    const between = `], [\n`;
    const after = `]);\n\nexport default level;`;
    const points = detail.points.reduce((b, p) => {
      b += `  PointPool.pointFor(${p.x}, ${p.y}),\n`;
      return b;
    }, '');
    const moves = detail.moves.reduce((b, p) => {
      b += `  PointPool.pointFor(${p.x}, ${p.y}),\n`;
      return b;
    }, '');

    this.output.innerText = `${before}${points}${between}${moves}${after}`;
  }

  copy = () => {
    const data = this.output.innerText;
    const type = 'text/plain';
    const blob = new Blob([data], { type });
    const clipboardItem = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(clipboardItem).then((d) => {
      console.log('Clipboard', d);
    }).catch((e) => {
      console.error(e);
    });
  }

  onSelect = (event) => {
    const element = event.target;

    const newIndex = Array.from(this.games).indexOf(element);
    this.selected = newIndex;
  }

  onRemove = (event) => {
    const element = event.target;
    const index = Array.from(this.games).indexOf(element);

    this.remove(index);
  }

  get selected() {
    return this._selected;
  }

  set selected(newValue) {
    const newTile = this.childAt(newValue);

    Array.from(this.dom.querySelectorAll('builder-game-tile')).forEach(t => t.classList.remove('active'));

    if (newTile) {
      newTile.classList.add('active');
      this.setDetail(newTile.getData());
    }

    this._selected = newValue;
  }
}

export default BuilderGame;
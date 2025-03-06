import Settings from "../config";

let setup = false;

class BuilderGameTile extends HTMLElement {
  constructor() {
    super();

    this.dom = this.attachShadow({ mode: 'open' });
    this.dom.innerHTML = `
      <style>
        :host {
          padding: 10px;
          font-size: 14px;
        }

        .grid {
          display: grid;
          width: 100px;
          height: 100px;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
          row-gap: 1px;
          column-gap: 1px;
        }

        .grid .tile {
          background-color: white;
        }

        .grid .tile.active {
          background-color: darksalmon;
        }

        .status {
          background-color: green;
          border-radius: 10px;
          display: inline-block;
          width: 10px;
          height: 10px;
        }

        .status.repetitious {
          background-color: red;
        }
      </style>
      <div class="grid"></div>
      <p>
        <span class="status"></span>
        <span>Moves </span>
        <span data-id="moves"></span>
        <button id="delete">Delete</button>
      </p>
    `;
    this.moves = this.dom.querySelector('span[data-id="moves"]');
    this.grid = this.dom.querySelector('.grid');
    this.delete = this.dom.querySelector('button#delete');
    this.status = this.dom.querySelector('.status');

    for (let y = 0; y < Settings.HEIGHT; y++) {
      for (let x = 0; x < Settings.WIDTH; x++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.setAttribute('data-x', x);
        tile.setAttribute('data-y', y);

        this.grid.appendChild(tile);
      }
    }

    this.delete.addEventListener('click', () => {
      const customEvent = new CustomEvent('remove');
      this.dispatchEvent(customEvent);
    });
  }

  nodeAt = (point) => {
    const x = point.x;
    const y = point.y;

    return this.grid.querySelector(`[data-x="${x}"][data-y="${y}"]`);
  }

  render = () => {
    const data = this.getData();

    this.moves.innerHTML = this.getData().moves.length;
    data.points.forEach(m => {
      const node = this.nodeAt(m);
      if (node) node.classList.add('active');
    });
    console.log(data, data.isRepetitious());
    if (data.isRepetitious()) {
      this.status.classList.add('repetitious');
    }
  }

  getData = () => {
    return this._data;
  }

  setData = (data) => {
    this._data = data;
    this.render();
  }
}

if (!setup) {
  setup = true;
  customElements.define('builder-game-tile', BuilderGameTile);
}

export default BuilderGameTile;
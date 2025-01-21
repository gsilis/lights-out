import Button from "../components/button";
import PointPool from "../core/point-pool";

class Grid {
  buttons = [];
  elements = [];

  constructor(stage, width, height) {
    this.stage = stage;
    this.width = width;
    this.height = height;
    this.nullButton = new Button(document.createElement('div'), PointPool.pointFor(-1, -1));
  }

  setup() {
    this.buttons = [];

    for (let h = 0; h < this.height; h++) {
      const y = [];

      for (let w = 0; w < this.width; w++) {
        const point = PointPool.pointFor(w, h);
        const button = new Button(this.stage, point);
        button.addEventListener('CLICK', this.onClick);

        y[w] = button;
        this.elements.push(button);
        this.elements.push(button);
      }

      this.buttons[h] = y;
    }
  }

  onClick = (event) => {
    const point = event.detail.point;

    [
      point,
      PointPool.pointFor(point.x, point.y - 1),
      PointPool.pointFor(point.x, point.y + 1),
      PointPool.pointFor(point.x - 1, point.y),
      PointPool.pointFor(point.x + 1, point.y)
    ].forEach(this.toggle);
  }

  toggle = (point) => {
    this.buttonAt(point).toggle();
  }

  buttonAt = (point) => {
    const { x, y } = point;
    return (this.buttons[y] && this.buttons[y][x]) || this.nullButton;
  }

  setState = (data) => {
    for (let h = 0; h < data.length; h++) {
      for(let w = 0; w < data[h].length; w++) {
        this.buttons.on = data[h][w];
      }
    }
  }

  clear() {
    this.elements.forEach(e => e.on = false);
  }

  checked() {
    this.elements.reduce((c, e) => {
      if (e.on) {
        c + 1;
      }

      return c;
    }, 0);
  }
}

export default Grid;
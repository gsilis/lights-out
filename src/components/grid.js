import PointPool from "../core/point-pool";

class Grid {
  buttons = [];
  elements = [];

  constructor(width, height, buttonFactory) {
    this.dispatcher = new EventTarget();
    this.buttonFactory = buttonFactory;
    this.width = width;
    this.height = height;
    this.nullButton = this.buttonFactory.createNull();
    window.grid = this;
  }

  setup() {
    this.buttons = [];

    for (let h = 0; h < this.height; h++) {
      const y = [];

      for (let w = 0; w < this.width; w++) {
        const point = PointPool.pointFor(w, h);
        const button = this.buttonFactory.create(point);
        button.addEventListener('CLICK', this.onSelect);

        y[w] = button;
        this.elements.push(button);
      }

      this.buttons[h] = y;
    }
  }

  onSelect = (event) => {
    const point = event.detail.point;
    const recastEvent = new CustomEvent('SELECT', { detail: { point } });
    this.dispatcher.dispatchEvent(recastEvent);
  }

  toggle = (point) => {
    this.buttonAt(point).toggle();
  }

  buttonAt = (point) => {
    const { x, y } = point;
    return (this.buttons[y] && this.buttons[y][x]) || this.nullButton;
  }

  applyData = (points) => {
    this.clear();
    points.forEach(p => this.toggle(p));
  }

  clear = () => {
    this.elements.forEach(e => e.on = false);
  }

  checkedPoints = () => {
    return this.checked().map(b => b.point);
  }

  checked = () => {
    return this.elements.filter(b => b.on);
  }

  checkedCount = () => {
    return this.checked().length;
  }

  addEventListener = (...args) => this.dispatcher.addEventListener(...args)
  removeEventListener = (...args) => this.dispatcher.removeEventListener(...args)
}

export default Grid;
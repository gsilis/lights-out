class BuilderButton {
  constructor(stage, point) {
    this.stage = stage;
    this.point = point;
    this._on = false;
    this.dom = document.createElement('div');
    this.dom.classList.add('node');
  }

  get on() {
    return this._on;
  }

  set on(newValue) {
    this._on = newValue;

    if (this._on) {
      this.dom.innerHTML = `X`;
    } else {
      this.dom.innerHTML = ' ';
    }
  }
}

export default BuilderButton;
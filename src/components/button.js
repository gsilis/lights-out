class Button {
  _active = false;

  constructor(stage, point) {
    this.dispatcher = new EventTarget();
    this._on = false;
    this._stage = stage;
    this._point = point;
    this._html = document.createElement('button');
    this._html.setAttribute('data-x', this._point.x);
    this._html.setAttribute('data-y', this._point.y);

    this._stage.appendChild(this._html);
    this._html.addEventListener('click', this.click);
  }

  get active() {
    return this._active;
  }

  set active(value) {
    this._active = value;
    this._html.disabled = !this._active;
  }

  get on() {
    return this._on;
  }

  set on(newValue) {
    this._on = newValue;

    if (this._on) {
      this._html.classList.add('on');
    } else {
      this._html.classList.remove('on');
    }
  }

  toggle = () => {
    this.on = !this.on;
  }

  click = () => {
    const event = new CustomEvent('CLICK', { detail: { point: this._point }});
    this.dispatcher.dispatchEvent(event);
  }

  addEventListener = (...args) => this.dispatcher.addEventListener(...args)
  removeEventListener = (...args) => this.dispatcher.removeEventListener(...args)
}

export default Button;
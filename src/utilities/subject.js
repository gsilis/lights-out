class Subject {
  _value = null;
  _observers = [];

  constructor(value) {
    this._value = value;
  }

  getCurrentValue() {
    return this._value;
  }

  observe(fn) {
    this._observers.push(fn);
    fn.call(undefined, this._value);
    return this;
  }

  update(newValue) {
    this._value = newValue;
    this._observers.forEach(o => o.call(undefined, newValue));
    return this;
  }
}

export default Subject;
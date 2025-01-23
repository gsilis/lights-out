class Chain {
  listeners = [];

  constructor(...steps) {
    this.index = 0;
    this.steps = steps;
  }

  onComplete(fn) {
    this.listeners.push(fn);
  }

  next(...args) {
    const nextStep = this.steps[this.index];
    const result = nextStep.call(void 0, ...args);

    if (result) {
      this.index += 1;

      if (this.index >= this.steps.length) {
        this.complete();
      }
    } else {
      this.index = 0;
    }
  }

  complete() {
    this.index = 0;
    this.listeners.forEach(l => l.call(void 0));
  }
}

export default Chain;
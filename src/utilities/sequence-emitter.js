class SequenceEmitter {
  static create(stepDurationMS) {
    return new SequenceEmitter(stepDurationMS);
  }

  steps = [];
  tickNotifiers = [];
  completionNotifiers = [];
  index = -1;
  interval = null;

  constructor(stepDurationMS) {
    this.stepDurationMS = stepDurationMS;
  }

  addSteps(...values) {
    this.steps.push(...values);

    return this;
  }

  tick(fn) {
    this.tickNotifiers.push(fn);

    return this;
  }

  done(fn) {
    this.completionNotifiers.push(fn);

    return this;
  }

  run() {
    this.interval = setInterval(this.onInterval, this.stepDurationMS);
    
    return this;
  }

  pause() {
    clearInterval(this.interval);
    this.interval = null;

    return this;
  }

  reset() {
    this.currentIndex = -1;

    return this;
  }

  onInterval = () => {
    const oldValue = this.steps[this.index];
    const nextValue = this.steps[++this.index];
    const indexOutOfBounds = this.steps.length <= this.index;

    if (indexOutOfBounds) {
      this.pause();
      
      this.completionNotifiers.forEach(fn => fn.call(void 0, this));
      return;
    }

    this.tickNotifiers.forEach(fn => fn.call(void 0, nextValue, oldValue, this));
  }

  removeNotifier(fn) {
    const tickIndex = this.tickNotifiers.indexOf(fn);
    const completionIndex = this.completionNotifiers.indexOf(fn);

    tickIndex > -1 && this.tickNotifiers.splice(tickIndex, 1);
    completionIndex > -1 && this.completionNotifiers.splice(completionIndex, 1);
  }
}

export default SequenceEmitter;
import Chain from "../utilities/chain";

const keyListenerFor = (key) => (event) => event.key === key;

class KonamiCodeListener {
  listeners = [];

  constructor() {
    window.addEventListener('keyup', this.onKey);
    this.chain = new Chain(
      keyListenerFor('ArrowUp'),
      keyListenerFor('ArrowUp'),
      keyListenerFor('ArrowDown'),
      keyListenerFor('ArrowDown'),
      keyListenerFor('ArrowLeft'),
      keyListenerFor('ArrowRight'),
      keyListenerFor('ArrowLeft'),
      keyListenerFor('ArrowRight'),
      keyListenerFor('a'),
      keyListenerFor('b'),
    );

    this.chain.onComplete(this.notify);
  }

  onKey = (event) => {
    this.chain.next(event);
  }

  observe = (fn) => {
    this.listeners.push(fn);
  }

  unobserve = (fn) => {
    this.listeners = this.listeners.filter(l => l !== fn);
  }

  notify = () => {
    this.listeners.forEach(l => l.call(void 0));
  }
}

export default KonamiCodeListener;
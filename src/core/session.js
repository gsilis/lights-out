import Settings from '../config';
import range from '../utilities/array/range';
import Subject from '../utilities/subject';

class Session {
  maxLevel = new Subject(0);
  level = new Subject(0);
  solved = range(Settings.WIDTH * Settings.HEIGHT, false);
  interactive = new Subject(false);

  setup() {
    this.level.observe((newLevel) => {
      const maxLevel = this.maxLevel.getCurrentValue();

      if (newLevel > maxLevel) this.maxLevel.update(newLevel);
    });
  }
}

export default Session;
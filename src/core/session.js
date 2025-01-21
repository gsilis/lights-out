import Settings from '../config';
import range from '../utilities/array/range';
import Subject from '../utilities/subject';

class Session {
  level = new Subject(0);
  solved = range(Settings.WIDTH * Settings.HEIGHT, false);
  interactive = new Subject(false);
}

export default Session;
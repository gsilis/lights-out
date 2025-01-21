import SpiralAnimation from "./states/spiral-animation";
import Play from "./states/play";
import LevelSelect from "./states/level-select";
import ErrorAnimation from "./states/error-animation";
import LevelSelectAnimation from "./states/level-select-animation";

const State = {
  SPIRAL_ANIMATION: SpiralAnimation,
  LEVEL_SELECT_ANIMATION: LevelSelectAnimation,
  ERROR_ANIMATION: ErrorAnimation,
  PLAY: Play,
  LEVEL_SELECT: LevelSelect
}

export default State;
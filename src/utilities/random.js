const random = function random(min, max) {
  const range = max - min;
  const rand = Math.random();

  return min + Math.round(rand * range);
}

export default random;
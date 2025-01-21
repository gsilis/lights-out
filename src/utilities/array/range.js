const range = function range(length, value) {
  const arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(value);
  }

  return arr;
}

export default range;
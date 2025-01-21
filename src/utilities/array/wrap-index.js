const wrappedElementAt = function wrappedElementAt(arr, requestedIndex) {
  const length = arr.length;
  let index = requestedIndex % length;

  if (index < 0) {
    index = length + index;
  }

  return arr[index];
}

export default wrappedElementAt;
const arr = [3, 1, 1, 2, 5, 9, 3, 0];

const deduplication = arr => {
  let map = new Map();
  arr.forEach(x => map.set(x, 1));
  return [...map.keys()];
};

console.log(deduplication(arr));

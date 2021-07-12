const arr = [3, 1, 1, 2, 5, 9, 3, 0];
const deduplication = arr => {
  return arr.filter((val, index) => arr.indexOf(val) === index);
};
console.log(deduplication(arr));

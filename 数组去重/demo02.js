const arr = [3, 1, 1, 2, 5, 9, 3, 0];

const deduplication = arr => [...new Set(arr)];

console.log(deduplication(arr));

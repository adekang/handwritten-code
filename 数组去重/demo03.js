const arr = [3, 1, 1, 2, 5, 9, 3, 0];

const deduplication = arr => {
  return arr.reduce((temp, i) => temp.includes(i) ? temp : [...temp, i], []);
};

console.log(deduplication(arr));

// x = f([],3) ===> [3]
// x = f([3],1) ===> [3,1]
// x = f([3,1],1) ===> [3,1]
// x = f([3,1],2) ===> [3,1,2]
// x = f([3,1,2],5) ===> [3,1,2,5]
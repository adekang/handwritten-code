let arr = [3, 0, 0, 1, 1, 2, 3, 3, 3, 5, 5];

function deduplication(arr) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1; 
    } else {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

let arr2 = deduplication(arr);
console.log(arr2);
console.log(arr);
console.log(arr === arr2);

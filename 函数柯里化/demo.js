function curry(fn) {
  let arr = [];
  return function curried(...args) {
    arr = [...arr, ...args];
    if (arr.length >= fn.length) {
      return fn(...arr);
    }
    return curried;
  };
}

function sum(a, b, c, d) {
  return a + b + c + d;
}

let sum2 = curry(sum);
let sum3 = curry(sum);

console.log(sum2(1)(2)(2, 3));
console.log(sum3(4)(5)(6, 5));

// ----wx.addCard({
// 简单柯里化
sum4 = a => b => a + b;
console.log(sum4(1)(2));

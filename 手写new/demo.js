function People(name) {
  this.name = name;
}

People.prototype.sayName = function () {
  console.log("My name is " + this.name);
};

function new2(fn, ...args) {
  let o = Object.create(fn.prototype);
  fn.bind(o)(...args);
  return o;
}

let p = new2(People, "hunger");

console.log(p.name);

p.sayName();

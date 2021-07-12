class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(observers) {
    this.observers.push(observers);
  }
  removeObserver(observers) {
    this.observers = this.observers.filter(o => o !== observers);
  }
  notify() {
    this.observers.forEach(o => o.update);
  }
}

class Observer {
  constructor(name, observer) {
    this.name = name;
  }
  update() {
    console.log(this.name + "updated");
  }
  subscribe(subject) {
    subject.addObserver(this);
  }
  unsubscribe(subject) {
    subject.removeObserver(this);
  }
}
let subject = new Subject();
let o1 = new Observer("a");
let o2 = new Observer("b");

o1.subscribe(subject);
o2.subscribe(subject);

subject.notify();

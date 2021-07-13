// 简单版 Promise

class myPromise {
  queue1 = [];
  queue2 = [];
  constructor(fn) {
    const resolve = () => {
      setTimeout(() => {
        for (let i = 0; i < this.queue1.length; i++) {
          this.queue1[i]();
        }
      });
    };
    const reject = () => {
      setTimeout(() => {
        for (let i = 0; i < this.queue2.length; i++) {
          this.queue2[i]();
        }
      });
    };

    fn(resolve, reject);
  }
  then(s, e) {
    this.queue1.push(s);
    this.queue2.push(e);
    return this;
  }
}

p1 = new myPromise((resolve, reject) => {
  resolve();
  reject();
});
p1.then(
  () => {
    console.log("成功");
  },
  () => {
    console.log("失败");
  }
)
  .then(
    () => {
      console.log("成功2");
    },
    () => {
      console.log("失败2");
    }
  )
  .then(
    () => {
      console.log("成功3");
    },
    () => {
      console.log("失败3");
    }
  );

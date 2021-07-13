// 简单版 Promise
duilie 
class myPromise {
  queue1 = [];  // queue1 为了容纳成功之后的函数们
  queue2 = [];  // queue2 为了容纳失败之后的函数们
  constructor(fn) {  // 实现 new myPromise和传一个函数
    const resolve = () => {  // fn 接受 resolve 并在成功的时候调用
      setTimeout(() => {    // 等一会儿调用，否则queue为空
        for (let i = 0; i < this.queue1.length; i++) {  // 为了将queue里面的每一项函数拿出来
          this.queue1[i]();  //为了resolve后返回每一个成功回调
        }
      });
    };
    const reject = () => { // fn 接受 reject 并在成功的时候调用
      setTimeout(() => {
        for (let i = 0; i < this.queue2.length; i++) {
          this.queue2[i](); // 为了reject后返回每一个成功回调
        }
      });
    };

    fn(resolve, reject); 
  }
  then(s, e) {  // 实现.then方法 接受成功回调，和失败回调 
    this.queue1.push(s);  // 为了resolve后添加多个成功回调，
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

function fn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let n = parseInt(Math.random() * 6 + 1, 10);
      resolve(n);
      reject(e => {
        console.log(e);
      });
    }, 3000);
  });
}

fn().then(
  x => {
    console.log("点数是" + x);
  },
  () => {
    console.log("摇色子失败");
  }
);

